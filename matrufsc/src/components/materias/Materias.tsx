function Materias() {

    return (
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
                    <th id="combinacoes" className="ui_combinacoes">
                        Combinações 
                        <span title="combinação anterior">
                            <strong>
                                &nbsp;&lt;&nbsp;
                            </strong>
                        </span> 
                        <input />/0 
                        <span title="próxima combinação">
                            <strong>
                                &nbsp;&gt;&nbsp;
                            </strong>
                        </span> 
                        Créditos por semana: 0
                    </th>
                </tr>
            </thead>
        </table>
    )
}

export default Materias