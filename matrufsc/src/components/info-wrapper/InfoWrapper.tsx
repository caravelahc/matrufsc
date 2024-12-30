export default function InfoWrapper({ children }: { children: React.ReactNode }) {
    return (
        <main className="py-6 overflow-auto w-[890px] mx-auto">
            <header className="mb-6 flex justify-between items-center">
                <h1 className="text-4xl">MatrUFSC</h1>
                <a className="underline" target="_blank" href="https://github.com/caravelahc/capim#readme" rel="noreferrer">
                    Sobre
                </a>
            </header>

            {children}

            <footer className="flex justify-between">
                <p>
                    Não se esqueça de fazer sua matrícula no{" "}
                    <a className="underline" target="_blank" href="http://cagr.ufsc.br/" rel="noreferrer">
                        CAGR
                    </a>
                    ! Este aplicativo não tem nenhum vínculo com a UFSC.
                    <br />
                    <a className="underline" href="https://github.com/caravelahc/capim">https://github.com/caravelahc/capim</a>
                </p>

                <a
                    className="flex gap-4 whitespace-nowrap underline"
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