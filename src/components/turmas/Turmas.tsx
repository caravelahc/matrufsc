import { IMateria } from "../../utils/materiasOperations"
import styles from "./Turmas.module.css"

function Turmas(
    { 
        selectedMateriaTurmas,
        changeTurmaEscolhidaMateria
    } : {
        selectedMateriaTurmas: IMateria | null,
        changeTurmaEscolhidaMateria: (materia: IMateria, codigo: string) => void
    }) {

    return (
        <div className={styles.ui_turmas} style={{overflow: "auto", position: "relative", width: "438px", height: "374px", maxHeight: "374px"}}>
            {
                selectedMateriaTurmas ?
                    (
                        <table style={{width: "438px"}} cellPadding={1} cellSpacing={1}>
                            <thead>
                                <tr style={{backgroundColor: "rgb(238, 238, 238)"}}>
                                    <td style={{width: "22px"}}>
                                        {/*}
                                        <span class="widget_dropdown_menu_button">
                                            V
                                            <div class="widget_dropdown_menu" style="width: 130px;">
                                                <div class="widget_dropdown_menu_op" style="padding: 5px;">
                                                    selecionar tudo
                                                </div>
                                                <div class="widget_dropdown_menu_op" style="padding: 5px;">
                                                    selecionar nada
                                                </div>
                                                <div class="widget_dropdown_menu_op" style="padding: 5px;">
                                                    adicionar turma
                                                </div>
                                            </div>
                                        </span>
                                        {*/}
                                    </td>
                                    <td style={{textAlign: "center", width: "44px"}}>
                                        Turma
                                    </td>
                                    <td style={{textAlign: "center", width: "72px"}} title="Ocupadas / Oferdatas (+ Pedidos sem vaga)">
                                        Vagas Ocupadas
                                    </td>
                                    <td style={{textAlign: "center"}}>
                                        Professores
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    selectedMateriaTurmas.turmas.map((turma, index) => {
                                        return (
                                            <tr style={{backgroundColor: selectedMateriaTurmas.cor, color: "black"}} key={index}>
                                                <td>
                                                    <input title="selecionar/deselecionar turma" type="checkbox" checked={selectedMateriaTurmas.turmaEscolhida == turma.codigo} onClick={() => changeTurmaEscolhidaMateria(selectedMateriaTurmas, turma.codigo)}/>
                                                </td>
                                                <td>
                                                    <div>
                                                        {turma.codigo}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div style={{color: "green"}}>
                                                        ({turma.vagasOcupadas})/{turma.vagasOfertadas}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div style={{position: "relative", zIndex: "0"}}>
                                                        {
                                                            turma.professores.map((professor, index) => {
                                                                return (
                                                                    <div key={index}>
                                                                        {professor}
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        {/*}<div class="ui_turmas_menu" style="display: none; top: 0px;">
                                                            <div class="ui_turmas_menu_v" style="background-color: lightblue; border-bottom: 1px solid black; color: black;" title="clique aqui para editar ou remover turma">
                                                                V
                                                            </div>
                                                            <div class="ui_turmas_menu_div" style="background-color: lightblue; display: none;">
                                                                <div title="seleciona só essa turma" style="background-color: lightblue; color: black;">
                                                                    selecionar só<br />essa turma
                                                                </div>
                                                                <div title="remover turma" style="background-color: lightblue; color: black;">
                                                                    remover turma
                                                                </div>
                                                                <div title="editar horário desta turma" style="background-color: lightblue; color: black;">
                                                                    editar turma
                                                                </div>
                                                            </div>
                                                        </div>{*/}
                                                    </div>
                                                </td>
                                            </tr>           
                                        )
                                    })
                                }
                                {/*<tr style={{backgroundColor: "rgb(238, 238, 238)"}}>
                                    <td style={{width: "22px"}}>
                                        <input type="checkbox" />
                                    </td>
                                    <td colSpan={3} style={{fontSize: "13px"}}>
                                        Agrupar turmas com horários iguais
                                    </td>
                                </tr>*/}
                            </tbody>
                        </table>
                    )
                :
                    null
            }
        </div>
    )
}

export default Turmas