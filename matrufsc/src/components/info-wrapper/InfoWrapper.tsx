export default function InfoWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="App">
            <div id="ui_main" style={{ overflow: "auto", width: "890px", margin: "0 auto" }}>
                <table width="100%">
                    <tr>
                        <td>
                            <div style={{ fontSize: "24px", textAlign: "left" }}>MatrUFSC</div>
                        </td>
                        <td align="left" style={{ fontSize: "11px", width: "40px" }}>
                            <div id="sobre"></div>
                        </td>
                    </tr>
                </table>

                <table>
                    {children}
                    <tr>
                        <td colSpan={2}>
                            <table cellPadding={0} cellSpacing={0} width="100%">
                                <tr>
                                    <td align="left" style={{ fontSize: "11px" }}>
                                        Não se esqueça de fazer sua matrícula no{" "}
                                        <a target="_blank" href="http://cagr.ufsc.br/" rel="noreferrer">
                                            CAGR
                                        </a>
                                        ! Este aplicativo não tem nenhum vínculo com a UFSC.
                                    </td>
                                    <td align="left" style={{ fontSize: "13px" }}>
                                        <div id="sobre">
                                            <a
                                                target="_blank"
                                                href="https://github.com/caravelahc/capim#readme"
                                                rel="noreferrer"
                                            >
                                                Sobre
                                            </a>
                                        </div>
                                    </td>
                                    <td align="right" style={{ fontSize: "13px" }}>
                                        <div id="comousar">
                                            <a
                                                target="_blank"
                                                href="https://github.com/caravelahc/capim/wiki"
                                                rel="noreferrer"
                                            >
                                                Como usar
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} align="left" style={{ fontSize: "11px" }}>
                                        <a href="https://github.com/caravelahc/capim">
                                            https://github.com/caravelahc/capim
                                        </a>
                                        . <span id="versao"></span>. <span id="data_db"></span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="dconsole" style={{ fontSize: "11px" }}></div>
            <div id="grayout" style={{ display: "none" }}></div>
            {/*<div id="sobre_popup" style={{display: "none"}}>
                <a>Sobre</a>
            </div>*/}
        </div>
    );
}
