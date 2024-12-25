import InfoWrapper from "./components/info-wrapper/InfoWrapper";
import Horarios from "./components/horarios/Horarios";
import Campus from "./components/campus/Campus";
import Logger from "./components/logger/Logger";
import Turmas from "./components/turmas/Turmas";
import Planos from "./components/planos/Planos";
import Saver from "./components/saver/Saver";
import Materias from "./components/materias/Materias";

function App() {
    return (
        <InfoWrapper>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <table cellPadding={0} cellSpacing={0} width="100%">
                                <tbody>
                                    <tr>
                                        <td className="ui_campus" align="left">
                                            <div id="campus">
                                                <Campus />
                                            </div>
                                        </td>
                                        <td className="ui_planos" align="left" style={{ width: "280px" }}>
                                            <div id="planos">
                                                <Planos />
                                            </div>
                                        </td>
                                        <td className="ui_saver" align="right">
                                            <div id="saver">
                                                <Saver />   
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellPadding={0} cellSpacing={0} width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" id="materias_input" />
                                            <br />
                                            <div id="materias_suggestions" style={{display: "none"}}>{/*MATERIAS_SUGGESTIONS COMPONENT HERE*/}</div>
                                        </td>
                                        <td style={{ border: "1px solid lightblue", width: "100%" }}>
                                            <div id="logger">
                                                <Logger />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div id="avisos" style={{display: "none"}}>
                                {/*AVISOS COMPONENT HERE*/}
                            </div>
                            <div id="updates_list" style={{display: "none"}}>
                                {/*UPDATE_LIST COMPONENT HERE*/}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div className="ui_materias">
                                <Materias />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: "440px", verticalAlign:"top" }}>
                            <div className="ui_horario">
                                <Horarios />
                            </div>
                        </td>
                        <td style={{ width: "440px" }} valign="top">
                            <div className="ui_turmas">
                                <Turmas />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </InfoWrapper>
    );
}
export default App;
