

export default function Hero () {
    return (
        <main className="w-full h-[70dvh] flex flex-col">
            <section className="flex justify-around items-center px-18 pb-10 pt-2 min-w-full h-full">
                <div className="flex flex-col justify-center pl-14 text-[var(--background)] bg-[var(--foreground)] m-4 rounded-3xl w-1/2 h-full">
                    <span className="w-fit text-sm text-[var(--secondary)] font-black">COLECCIÓN OTOÑO 26</span>
                    <div className="w-fit text-6xl font-black">
                        CAPAS. <br/>
                        CAOS. <br/>
                        ESTILO.
                    </div>
                    <div className="mt-4 ml-2 w-fit">
                        <button className="font-bold p-4 rounded-3xl bg-[var(--secondary)] w-fit text-[var(--foreground)]">Explorar colección</button>
                    </div>
                </div>
                <div className="bg-[var(--card)] m-4 rounded-3xl w-1/2 h-full"></div>
            </section>
            <div className="flex justify-center items-center h-1/3 -mt-10 overflow-hidden">
                <div className="w-full scale-110 bg-[var(--secondary)] h-6/12 -rotate-2"></div>
            </div>
        </main>

    )
}