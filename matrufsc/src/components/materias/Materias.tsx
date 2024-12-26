import styles from "./Materias.module.css"

function Materias() {

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
                            Combinações 
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
                            </span> 
                            Créditos por semana: 0
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Materias