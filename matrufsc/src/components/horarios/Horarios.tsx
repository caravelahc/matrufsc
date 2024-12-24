import styles from "./Horarios.module.css";

export default function Horarios() {
    return (
        <table className={styles.table}>
            <thead className={styles.head}>
                <tr>
                    <th></th>
                    <th>Segunda</th>
                    <th>Terça</th>
                    <th>Quarta</th>
                    <th>Quinta</th>
                    <th>Sexta</th>
                </tr>
            </thead>
            <tbody className={styles.body}>
                <tr>
                    <td>
                        <div>07:30</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td>INE5453</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
}
