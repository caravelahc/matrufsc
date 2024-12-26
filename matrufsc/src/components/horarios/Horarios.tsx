import { Fragment, useState } from "react";
import styles from "./Horarios.module.css";

export default function Horarios() {
    const [isMostrarSalas, setMostrarSalas] = useState(false)

    const DIAS = ["Segunda", "Ter\u00e7a", "Quarta", "Quinta", "Sexta", "S\u00e1bado"];
    const HORAS = ["07:30", "08:20", "09:10", "10:10", "11:00",
        "13:30", "14:20", "15:10", "16:20", "17:10",
        "18:30", "19:20", "20:20", "21:10"];
    const HORAS_FIM = ["08:20", "09:10", "10:00", "11:00", "11:50",
                "14:20", "15:10", "16:00", "17:10", "18:00",
                "19:20", "20:10", "21:10", "22:00"];

    const handleMostrarSalas = () => {
        setMostrarSalas(!isMostrarSalas)
    }

    return (
        <div className={styles.ui_horario}>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input title="Mostrar Salas" type="checkbox" onClick={handleMostrarSalas}/>
                        </th>
                        {
                            DIAS.map((dia, index) => {
                                return (
                                    <th key={index}>
                                        {dia}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {                        
                        HORAS.map((hora, index) => {
                            return (
                                <Fragment key={index}>
                                    {
                                        hora == "13:30" || hora == "18:30" ? <tr style={{height: "4px"}}></tr> : null
                                    }
                                    <tr>
                                        <td style={{fontSize: "11px"}}>
                                            <div>{hora}</div>
                                            {
                                                isMostrarSalas ?
                                                    <div style={{display: "block"}}>
                                                        {HORAS_FIM[index]}
                                                    </div>
                                                :  
                                                    null
                                            }
                                        </td>
                                        <td className={styles.ui_horario_celula} style={{backgroundColor: "white", border: "1px solid black", color: "black"}}></td>
                                        <td className={styles.ui_horario_celula} style={{backgroundColor: "white", border: "1px solid black", color: "black"}}></td>
                                        <td className={styles.ui_horario_celula} style={{backgroundColor: "white", border: "1px solid black", color: "black"}}></td>
                                        <td className={styles.ui_horario_celula} style={{backgroundColor: "white", border: "1px solid black", color: "black"}}></td>
                                        <td className={styles.ui_horario_celula} style={{backgroundColor: "white", border: "1px solid black", color: "black"}}></td>
                                        <td className={styles.ui_horario_celula} style={{backgroundColor: "white", border: "1px solid black", color: "black"}}></td>
                                    </tr>
                                </Fragment>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
