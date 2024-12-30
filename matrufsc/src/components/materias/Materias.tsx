import { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";

const SortableItem = SortableElement(({ materia, handleSelect, handleEdit, handleRemove }) => (
    <tr className="hover:bg-gray-100 cursor-pointer" style={{ backgroundColor: materia.cor }}>
        <td className="px-2 py-1 border border-black">
            <i className="fas fa-grip-vertical"></i>
        </td>
        <td className="px-2 py-1 border border-black">
            <input
                type="checkbox"
                checked={true}
                onChange={(e) => handleSelect(materia, e.target.checked)}
                title="selecionar/deselecionar matéria"
            />
        </td>
        <td className="border border-black text-center px-2 py-1" onDoubleClick={() => handleEdit(materia, "codigo", materia.codigo)}>
            {materia.codigo}
        </td>
        <td className="border border-black text-center px-2 py-1">{materia.turma}</td>
        <td className="border border-black text-center px-2 py-1">{materia.periodo}</td>
        <td className="border border-black px-2 py-1">{materia.nome}</td>
        <td className="border border-black text-center px-2 py-1 text-lg" onClick={() => handleRemove(materia)} title="remover matéria">
            X
        </td>
    </tr>
));

const SortableList = SortableContainer(({ items, handleSelect, handleEdit, handleRemove }) => {
    return (
        <tbody>
            {items.map((materia, index) => (
                <SortableItem
                    key={`item-${index}`}
                    index={index}
                    materia={materia}
                    handleSelect={handleSelect}
                    handleEdit={handleEdit}
                    handleRemove={handleRemove}
                />
            ))}
        </tbody>
    );
});

function Materias() {
    const [materias, setMaterias] = useState([
        { codigo: "MAT101", turma: "A", periodo: "2023/1", nome: "Matemática 1", cor: "#eeeeee" },
        { codigo: "MAT102", turma: "B", periodo: "2023/1", nome: "Matemática 2", cor: "#eeeeee" },
    ]);

    const handleSelect = (materia, checked) => {
        // Lógica para selecionar/deselecionar matéria
    };

    const handleEdit = (materia, attr, value) => {
        // Lógica para editar matéria
    };

    const handleRemove = (materia) => {
        // Lógica para remover matéria
    };

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setMaterias(arrayMoveImmutable(materias, oldIndex, newIndex));
    };

    return (
        <div className="overflow-auto max-h-[231px]">
            <table className="table-auto border border-black border-collapse w-full">
                <thead className="border border-black">
                    <tr className="bg-gray-200 border border-black">
                        <th className="px-2 py-1 w-10"></th>
                        <th className="px-2 py-1 w-10"></th>
                        <th className="border border-black text-center w-16">Código</th>
                        <th className="border border-black text-center w-12">Turma</th>
                        <th className="border border-black text-center w-16">Período</th>
                        <th className=" text-center">Combinações</th>
                        <th></th>
                    </tr>
                </thead>
                <SortableList
                    items={materias}
                    onSortEnd={onSortEnd}
                    handleSelect={handleSelect}
                    handleEdit={handleEdit}
                    handleRemove={handleRemove}
                />
            </table>
        </div>
    );
}

export default Materias;