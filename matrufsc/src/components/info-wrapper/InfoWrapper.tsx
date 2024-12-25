import styles from "./InfoWrapper.module.css";

export default function InfoWrapper({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.container}>
            <head className={styles.head}>
                <h1>MatrUFSC</h1>
                <a target="_blank" href="https://github.com/caravelahc/capim#readme" rel="noreferrer">
                    Sobre
                </a>
            </head>

            {children}

            <footer className={styles.footer}>
                <p>
                    Não se esqueça de fazer sua matrícula no{" "}
                    <a target="_blank" href="http://cagr.ufsc.br/" rel="noreferrer">
                        CAGR
                    </a>
                    ! Este aplicativo não tem nenhum vínculo com a UFSC.
                    <br />
                    <a href="https://github.com/caravelahc/capim">https://github.com/caravelahc/capim</a>
                </p>

                <a
                    className={styles.link}
                    target="_blank"
                    href="https://github.com/caravelahc/capim/wiki"
                    rel="noreferrer"
                >
                    Como usar
                </a>
            </footer>
        </main>
    );
}
