function Saver() {
    return (
        <>
            {"Identificador: "}
            <input
                className="mr-2 border border-black"
                title="Escolha um identificador qualquer para salvar/abrir seus horários. O identificador pode ser qualquer coisa (por exemplo seu número de matrícula). Cuidado: qualquer um pode usar qualquer identificador."
            />
            <button
                className="bg-gray-300 border border-black opacity-60 mr-2"
                disabled={true}
                title="escolha um identificador primeiro"
            >
                Abrir
            </button>
            <button
                className="bg-gray-300 border border-black opacity-60 mr-2"
                disabled={true}
                title="escolha um identificador primeiro"
            >
                Salvar
            </button>
            {/* 
            <span className="widget_dropdown_menu_button">
                V
                <div className="widget_dropdown_menu" style={{width: "230px", top: "18px", left: "-211px", display: "none"}}>
                    <div className="widget_dropdown_menu_op" style={{padding: "2px"}}>
                        Limpar tudo
                    </div>
                    <div className="widget_dropdown_menu_op" style={{padding: "2px"}}>
                        Exportar arquivo ODS (Excel)
                    </div>
                    <div className="widget_dropdown_menu_op" style={{padding: "2px"}}>
                        Exportar arquivo iCalendar
                    </div>
                    <div className="widget_dropdown_menu_op" style={{padding: "2px"}}>
                        Exportar arquivo JSON
                    </div>
                    <div className="widget_dropdown_menu_op" style={{padding: "2px"}}>
                        Importar arquivo JSON
                    </div>
                </div>
            </span>
            */}
        </>
    )
}

export default Saver