

export default function Footer () {
    return (
        <footer className="flex flex-col justify-center items-center text-2xl py-4 w-full min-h-50 bg-[var(--secondary-foreground)] text-[var(--card)]">
            <div className="flex justify-around max-w-600 w-full px-12">
                <span className="flex flex-col gap-2">
                    <h3 className="-ml-2 underline">Redes Sociales</h3>
                    <a className="">- Instagram</a>
                    <a>- Tiktok</a>
                    <a>- X {"(Twitter)"}</a>
                </span>
                <span className="flex flex-col gap-2">
                    <h3 className="-ml-2 underline">Marcas Aliadas</h3>
                    <a>-</a>
                    <a>-</a>
                    <a>-</a>
                </span>
                <span className="flex flex-col gap-2">
                    <h3 className="-ml-2 underline">Legal</h3>
                    <a className="">. Terminos y condiciones</a>
                    <a className="">. Politicas de Privacidad</a>
                    <a className="">. Manual de Uso</a>
                </span>
            </div>
            <p className="text-lg mt-15 text-[var(--secondary)]">@ 2026 KAOS</p>
        </footer>
    )
}