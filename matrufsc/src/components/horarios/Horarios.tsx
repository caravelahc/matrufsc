import { Fragment, useState } from "react";

export default function Horarios() {
    const [isMostrarSalas, setMostrarSalas] = useState(false);

    const DIAS = ["Segunda", "Ter\u00e7a", "Quarta", "Quinta", "Sexta", "S\u00e1bado"];
    const HORAS = ["07:30", "08:20", "09:10", "10:10", "11:00",
        "13:30", "14:20", "15:10", "16:20", "17:10",
        "18:30", "19:20", "20:20", "21:10"];
    const HORAS_FIM = ["08:20", "09:10", "10:00", "11:00", "11:50",
                "14:20", "15:10", "16:00", "17:10", "18:00",
                "19:20", "20:10", "21:10", "22:00"];

    const handleMostrarSalas = () => {
        setMostrarSalas(!isMostrarSalas);
    };

    return (
        <table
            className="border border-black table-fixed w-full max-w-screen-lg border-separate border-spacing-1"
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
                                {isMostrarSalas && (
                                    <div className="text-xs text-gray-600">
                                        {HORAS_FIM[index]}
                                    </div>
                                )}
                            </td>
                            {DIAS.map((_, dayIndex) => (
                                <td
                                    key={dayIndex}
                                    className="bg-white border border-black text-black text-sm h-8 text-center"
                                ></td>
                            ))}
                        </tr>
                    </Fragment>
                ))}
            </tbody>
        </table>
    );
}
