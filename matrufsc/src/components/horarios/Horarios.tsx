import { Fragment, useState } from "react";

interface HorariosProps {
    isPopoverOpen: boolean;
    setPopoverOpen: (open: boolean) => void;
}

interface Evento {
    titulo: string;
    cells: string[];
}

export default function Horarios({ isPopoverOpen, setPopoverOpen }: HorariosProps) {
    const [isMostrarFim, setMostrarFim] = useState(false);
    const [selectedCells, setSelectedCells] = useState<string[]>([]);
    const [titulo, setTitulo] = useState("");
    const [eventos, setEventos] = useState<Evento[]>([]);

    const DIAS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const HORAS = ["07:30", "08:20", "09:10", "10:10", "11:00",
        "13:30", "14:20", "15:10", "16:20", "17:10",
        "18:30", "19:20", "20:20", "21:10"];
    const HORAS_FIM = ["08:20", "09:10", "10:00", "11:00", "11:50",
                "14:20", "15:10", "16:00", "17:10", "18:00",
                "19:20", "20:10", "21:10", "22:00"];

    const handleMostrarSalas = () => {
        setMostrarFim(!isMostrarFim);
    };

    const handleAddEvento = () => {
        setEventos([...eventos, {titulo, cells: selectedCells}]);
        setSelectedCells([]);
        setTitulo("");
        setPopoverOpen(false);
    };

    const handleCellClick = (dia: string, hora: string) => {
        if (isPopoverOpen) {
            const cell = `${dia}-${hora}`;
            setSelectedCells((prev) =>
                prev.includes(cell)
                    ? prev.filter((c) => c !== cell)
                    : [...prev, cell]
            );
        }
    };

    const getCellContent = (dia: string, hora: string) => {
        const cell = `${dia}-${hora}`;
        for (const evento of eventos) {
            if (evento.cells.includes(cell)) {
                return evento.titulo;
            }
        }
        return isPopoverOpen && selectedCells.includes(cell) ? titulo : "";
    };

    return (
        <>
        <div className="relative flex">
        <div className={`relative ${isPopoverOpen ? "z-20" : ""}`}>
            <table
                className={`border border-black bg-[#eeeeee] bg-opacity-100 table-fixed w-full max-w-screen-lg border-separate border-spacing-1`}
                style={{ tableLayout: "fixed" }}
            >
                <thead>
                    <tr>
                        <th className="table-cell text-center w-12">
                            <input title="Mostrar Salas" type="checkbox" onClick={handleMostrarSalas} />
                        </th>
                        {DIAS.map((dia, index) => (
                            <th key={index} className="table-cell text-center w-24">
                                {dia}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {HORAS.map((hora, index) => (
                        <Fragment key={index}>
                            {hora === "13:30" || hora === "18:30" ? (
                                <tr style={{ height: "4px" }}></tr>
                            ) : null}
                            <tr>
                                <td className="table-cell text-center text-sm p-1">
                                    <div>{hora}</div>
                                    {isMostrarFim && (
                                        <div className="text-xs text-gray-600">
                                            {HORAS_FIM[index]}
                                        </div>
                                    )}
                                </td>
                                {DIAS.map((dia, dayIndex) => (
                                    <td
                                        key={dayIndex}
                                        className={`bg-white border border-black text-black text-sm h-8 text-center ${
                                            isPopoverOpen && selectedCells.includes(`${dia}-${hora}`) ? "bg-blue-200" : ""
                                        }`}
                                        onClick={() => isPopoverOpen && handleCellClick(dia, hora)}
                                    >
                                        {getCellContent(dia, hora)}
                                        {/* {isPopoverOpen && selectedCells.includes(`${dia}-${hora}`) ? titulo : ""} */}
                                    </td>
                                ))}
                            </tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
        {isPopoverOpen && (
            <div className="absolute top-0 left-full ml-72 bg-white border border-gray-300 p-4 shadow-lg z-30 w-96">
                <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Título</label>
                    <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        value={titulo}
                        maxLength={10}
                        onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div className="flex justify-center space-x-4">
                    <button
                        className="bg-gray-300 text-black py-2 rounded w-24"
                        onClick={() => setPopoverOpen(false)}
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-blue-500 text-white py-2 rounded w-24"
                        onClick={handleAddEvento}
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        )}
        </div>
        </>
    );
}