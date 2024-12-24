import React from 'react';

function App() {
    return (
        <div className="App">
            <div id="ui_main" style={{overflow: "auto", width: "890px", margin: "0 auto"}}>
                <table width="100%">
                    <tr>
                        <td>
                            <div style={{fontSize: "24px", textAlign: "left"}}>
                                MatrUFSC
                            </div>
                        </td>
                        <td align="left" style={{fontSize: "11px", width: "40px"}}>
                            <div id="sobre"></div>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colspan="2">
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="left">
                                        <div id="campus">
                                            {/*CAMPUS COMPONENT HERE*/}
                                        </div>
                                    </td>
                                    <td align="left" style={{width: "280px"}}>
                                        <div id="planos">
                                            {/*PLANOS COMPONENT HERE*/}
                                        </div>
                                    </td>
                                    <td align="right">
                                        <div id="saver">
                                            {/*SAVER COMPONENT HERE*/}
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td>
                                        <input type="text" id="materias_input" />
                                        <br />
                                        <div id="materias_suggestions">
                                            {/*MATERIAS_SUGGESTIONS COMPONENT HERE*/}
                                        </div>
                                    </td>
                                    <td style={{border: "1px solid lightblue", width: "100%"}}>
                                        <div id="logger">
                                            {/*LOGGER COMPONENT HERE*/}
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div id="avisos">
                                {/*AVISOS COMPONENT HERE*/}
                            </div>
                            <div id="updates_list">
                                {/*UPDATE_LIST COMPONENT HERE*/}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div id="materias_list">
                                {/*MATERIAS_LIST COMPONENT HERE*/}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: "440px"}}>
                            <div id="horario">
                                {/*HORARIO COMPONENT HERE*/}
                            </div>
                        </td>
                        <td style={{width: "440px"}} valign="top">
                            <div id="turmas_list" style={{overflow: "auto", position: "relative"}}>
                                {/*TURMAS_LIST COMPONENT HERE*/}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="left" style={{fontSize: "11px"}}>
                                        Não se esqueça de fazer sua matrícula no <a
                                            target="_blank"
                                            href="http://cagr.ufsc.br/" rel="noreferrer">CAGR</a>!
                                        Este aplicativo não tem nenhum vínculo com
                                        a UFSC.
                                    </td>
                                    <td align="left" style={{fontSize: "13px"}}>
                                        <div id="sobre">
                                            <a target="_blank" href="https://github.com/caravelahc/capim#readme" rel="noreferrer">
                                                Sobre
                                            </a>
                                        </div>
                                    </td>
                                    <td align="right" style={{fontSize: "13px"}}>
                                        <div id="comousar">
                                            <a target="_blank" href="https://github.com/caravelahc/capim/wiki" rel="noreferrer">
                                                Como usar
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" align="left" style={{fontSize: "11px"}}>
                                        <a href="https://github.com/caravelahc/capim">https://github.com/caravelahc/capim</a>. <span id="versao"></span>. <span id="data_db"></span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="dconsole" style={{fontSize: "11px"}}></div>
            <div id="grayout" style={{display: "none"}}></div>
            {/*<div id="sobre_popup" style={{display: "none"}}>
                <a>Sobre</a>
            </div>*/}
        </div>
    );
}

export default App;
