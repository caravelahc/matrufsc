import styles from "./Logger.module.css"

function Logger() {

    return (
        <td className={styles.ui_logger} style={{ border: "1px solid lightblue", width: "100%" }}>
            <p>&lt;&lt;&lt;&lt; procure as disciplinas por nome ou código</p>
        </td>
    )
}

export default Logger