import { IMateria } from "../../utils/materiasOperations"
import styles from "./Materias.module.css"

function Materias(
    { 
        selectedMaterias,
        semester,
        removeMateria,
        handleCheckboxMateria,
        handleMoveUpMateria,
        handleMoveDownMateria
    } : {
        selectedMaterias: Array<IMateria>,
        semester: string,
        removeMateria: (materia: IMateria) => void,
        handleCheckboxMateria: (materia: IMateria) => void,
        handleMoveUpMateria: (materia: IMateria) => void,
        handleMoveDownMateria: (materia: IMateria) => void
    }) {

    const reduceCargaHoraria = () : number => {
        let cargaHoraria = 0

        for (const selectedMateria of selectedMaterias) {
            if (selectedMateria.isChecked) {
                const selectedTurma = selectedMateria.turmas.find(turma => turma.codigo == selectedMateria.turmaEscolhida)
                if (selectedTurma) {
                    cargaHoraria += (selectedTurma.horasAula / 18)
                }
            }
        }

        return cargaHoraria
    }

    return (
        <div className={styles.ui_materias}>
            <table cellPadding={1} cellSpacing={1}>
                <thead>
                    <tr style={{backgroundColor: "rgb(238, 238, 238)"}}>
                        <th style={{width: "22px"}}>
                        </th>
                        <th style={{textAlign: "center", width: "60px"}}>
                            Código
                        </th>
                        <th style={{textAlign: "center", width: "50px"}}>
                            Turma
                        </th>
                        <th style={{textAlign: "center", width: "60px"}}>
                            Período
                        </th>
                        <th id="combinacoes" className={styles.ui_combinacoes}>
                            {/*Combinações 
                            <span title="Combinação Anterior">
                                <strong>
                                    &nbsp;&lt;&nbsp;
                                </strong>
                            </span> 
                            <input type="text" value={0}/>/0 
                            <span title="Próxima Combinação">
                                <strong>
                                    &nbsp;&gt;&nbsp;
                                </strong>
                            </span>*/} 
                            Créditos por semana: {reduceCargaHoraria()}
                        </th>
                    </tr>
                </thead>
            </table>
            <div style={{overflow: "auto", maxHeight: "231px"}}>
                <table cellPadding={1} cellSpacing={1} style={{width: "882px"}}>
                    <tbody>
                        {
                            selectedMaterias.map((selectedMateria, index) => {
                                
                                return (
                                    <tr style={{backgroundColor: selectedMateria.cor, cursor: "pointer"}} key={index}>
                                        <td style={{textAlign: "center", width: "22px"}}>
                                            <input title="Selecionar/Deselecionar matéria" type="checkbox" checked={selectedMateria.isChecked} onClick={() => handleCheckboxMateria(selectedMateria)} />
                                        </td>
                                        <td style={{textAlign: "center", width: "60px"}}>
                                            {selectedMateria.codigo}
                                        </td>
                                        <td style={{textAlign: "center", width: "50px"}}>
                                            {
                                                selectedMateria.isChecked ?
                                                    selectedMateria.turmaEscolhida
                                                :
                                                    <del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</del>
                                            }
                                        </td>
                                        <td style={{textAlign: "center", width: "60px"}}>
                                            {`${semester.slice(0,4)}-${semester.slice(-1)}`}
                                        </td>
                                        <td>
                                            {selectedMateria.nome}
                                        </td>
                                        <td style={{fontSize: "15px", userSelect: "none", width: "15px", textAlign: "center", color: "black"}} title="Diminuir prioridade da matéria" onClick={() => handleMoveDownMateria(selectedMateria)}>
                                            ↓
                                        </td>
                                        <td style={{fontSize: "15px", userSelect: "none", width: "15px", textAlign: "center", color: "black"}} title="Aumentar prioridade da matéria" onClick={() => handleMoveUpMateria(selectedMateria)}>
                                            ↑
                                        </td>
                                        <td style={{userSelect: "none", width: "15px", textAlign: "center", color: "black"}} title="Remover matéria" onClick={() => removeMateria(selectedMateria)}>
                                            X
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Materias