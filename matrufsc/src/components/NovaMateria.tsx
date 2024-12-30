// import { useState } from "react";

// const DIAS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
// const HORAS = ["07:30", "08:20", "09:10", "10:10", "11:00",
//     "13:30", "14:20", "15:10", "16:20", "17:10",
//     "18:30", "19:20", "20:20", "21:10"];

// function NovaMateria() {
//     const [isPopoverOpen, setPopoverOpen] = useState(false);
//     const [titulo, setTitulo] = useState("");
//     const [dia, setDia] = useState("Segunda");
//     const [horaInicio, setHoraInicio] = useState("07:30");
//     const [horaFim, setHoraFim] = useState("08:20");

//     const handleAddEvento = () => {
//         // Lógica para adicionar o evento
//         console.log(`Evento: ${titulo}, Dia: ${dia}, Início: ${horaInicio}, Fim: ${horaFim}`);
//         setPopoverOpen(false);
//     };

//     return (
//         <div className="relative">
//             <button onClick={() => setPopoverOpen(true)} className="border border-black px-2">+</button>
//             {isPopoverOpen && (
//                 <div className="absolute top-12 left-0 bg-white border border-gray-300 p-4 shadow-lg z-10 w-96">
//                     <div className="mb-2">
//                         <label className="block text-sm font-medium text-gray-700">Título</label>
//                         <input
//                             type="text"
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                             value={titulo}
//                             onChange={(e) => setTitulo(e.target.value)}
//                         />
//                     </div>
//                     <div className="flex space-x-2 mb-2 items-end">
//                         <div className="flex-1">
//                             <label className="block text-sm font-medium text-gray-700">Dia</label>
//                             <select
//                                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                                 value={dia}
//                                 onChange={(e) => setDia(e.target.value)}
//                             >
//                                 {DIAS.map((dia) => (
//                                     <option key={dia} value={dia}>{dia}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="flex-1">
//                             <label className="block text-sm font-medium text-gray-700">Início</label>
//                             <select
//                                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                                 value={horaInicio}
//                                 onChange={(e) => setHoraInicio(e.target.value)}
//                             >
//                                 {HORAS.map((hora) => (
//                                     <option key={hora} value={hora}>{hora}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="flex-1">
//                             <label className="block text-sm font-medium text-gray-700">Fim</label>
//                             <select
//                                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                                 value={horaFim}
//                                 onChange={(e) => setHoraFim(e.target.value)}
//                             >
//                                 {HORAS.map((hora) => (
//                                     <option key={hora} value={hora}>{hora}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>
//                     <div className="flex justify-center space-x-4">
//                         <button
//                             className="bg-gray-300 text-black py-2 rounded w-24 justify-center"
//                             onClick={() => setPopoverOpen(false)}
//                         >
//                             Cancelar
//                         </button>
//                         <button
//                             className="bg-blue-500 text-white py-2 rounded w-24 justify-center"
//                             onClick={handleAddEvento}
//                         >
//                             Adicionar
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default NovaMateria;

interface NovaMateriaProps {
    isPopoverOpen: boolean;
    setPopoverOpen: (open: boolean) => void;
}

function NovaMateria({ isPopoverOpen, setPopoverOpen }: NovaMateriaProps) {
    // const [titulo, setTitulo] = useState("");

    // const handleAddEvento = () => {
    //     console.log("Adicionar nova matéria");
    //     setPopoverOpen(false);
    // };

    return (
        <div className="relative">
            <button onClick={() => setPopoverOpen(true)} className="border border-black px-2">+</button>
            {isPopoverOpen && (
                <>
                    <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
                    {/* <div className="absolute top-12 left-0 bg-white border border-gray-300 p-4 shadow-lg z-30 w-96">
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Título</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            />
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
                    </div> */}
                </>
            )}
        </div>
    );
}

export default NovaMateria;