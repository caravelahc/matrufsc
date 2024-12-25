function Planos() {

    return (
        <>
            <span className="widget_dropdown_menu_button">
                V
                <div className="widget_dropdown_menu" style={{width: "180px", display: "none"}}>
                    <div className="widget_dropdown_menu_op" style={{padding: "2px"}}>
                        Limpar "Plano 1"
                    </div>
                    <div className="widget_dropdown_menu_op" style={{padding: "2px"}}>
                        Copiar para "Plano 2"
                    </div>
                    <div className="widget_dropdown_menu_op" style={{padding: "2px"}}>
                        Copiar para "Plano 3"
                    </div>
                    <div className="widget_dropdown_menu_op" style={{padding: "2px"}}>
                        Copiar para "Plano 4"
                    </div>
                </div>
            </span>
            <span style={{padding: "1px", border: "1px solid black", backgroundColor: "black", color: "rgb(238, 238, 238)"}}>
                Plano 1
            </span>
            <span style={{padding: "1px", border: "1px solid black", backgroundColor: "rgb(238, 238, 238)", color: "black"}}>
                Plano 2
            </span>
            <span style={{padding: "1px", border: "1px solid black", backgroundColor: "rgb(238, 238, 238)", color: "black"}}>
                Plano 3
            </span>
            <span style={{padding: "1px", border: "1px solid black", backgroundColor: "rgb(238, 238, 238)", color: "black"}}>
                Plano 4
            </span>
        </>
    )
}

export default Planos