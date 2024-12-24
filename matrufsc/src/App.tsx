import InfoWrapper from "./components/info-wrapper/InfoWrapper";

function App() {
    return (
        <InfoWrapper>
            <tr>
                <td colSpan={2}>
                    <table cellPadding={0} cellSpacing={0} width="100%">
                        <tr>
                            <td align="left">
                                <div id="campus">{/*CAMPUS COMPONENT HERE*/}</div>
                            </td>
                            <td align="left" style={{ width: "280px" }}>
                                <div id="planos">{/*PLANOS COMPONENT HERE*/}</div>
                            </td>
                            <td align="right">
                                <div id="saver">{/*SAVER COMPONENT HERE*/}</div>
                            </td>
                        </tr>
                    </table>
                    <table cellPadding={0} cellSpacing={0} width="100%">
                        <tr>
                            <td>
                                <input type="text" id="materias_input" />
                                <br />
                                <div id="materias_suggestions">{/*MATERIAS_SUGGESTIONS COMPONENT HERE*/}</div>
                            </td>
                            <td style={{ border: "1px solid lightblue", width: "100%" }}>
                                <div id="logger">{/*LOGGER COMPONENT HERE*/}</div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <div id="avisos">{/*AVISOS COMPONENT HERE*/}</div>
                    <div id="updates_list">{/*UPDATE_LIST COMPONENT HERE*/}</div>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <div id="materias_list">{/*MATERIAS_LIST COMPONENT HERE*/}</div>
                </td>
            </tr>
            <tr>
                <td style={{ width: "440px" }}>
                    <div id="horario">{/*HORARIO COMPONENT HERE*/}</div>
                </td>
                <td style={{ width: "440px" }} valign="top">
                    <div id="turmas_list" style={{ overflow: "auto", position: "relative" }}>
                        {/*TURMAS_LIST COMPONENT HERE*/}
                    </div>
                </td>
            </tr>
        </InfoWrapper>
    );
}
export default App;
