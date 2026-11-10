

export default function ContactUs () {
    return (
        <main className="flex justify-center items-center py-20 w-full">
            <div  className="flex justify-between items-center text-[var(--background)] w-9/12 h-150 gap-12">
                <div
                    className="bg-[var(--accent)] p-10 flex flex-col justify-between w-full h-full rounded-3xl border-white/10 border-1"
                    // style={{"boxShadow": "inset 0px 0px 10px var(--foreground)"}}
                >
                    <h1 className="relative flex flex-col text-6xl  gap-6 pt-14 w-fit border-black tracking-wide">
                        <span className="absolute -translate-y-8 text-[var(--foreground)]/80 text-lg">contacto</span>
                        HABLEMOS.
                        <p className="tracking-normal text-xl text-gray-100 w-4/6 pl-2">¿Dudas con tu talla, tu pedido o quieres colaborar con cnosotros? Escribenos y te respondemos en menos de 24 horas :D</p>
                    </h1>
                    <ul>
                        <li>KoraShop@email.com</li>
                        <li>+58 000 0000000</li>
                        <li>Lun . Vie</li>
                    </ul>
                </div>
                <div
                    className="bg-[var(--card)]/80 text-[var(--foreground)] text-sm shadow-gray shadow-sm w-full h-full rounded-3xl border-white/10 border-1"
                    // style={{"boxShadow": "inset 0px 0px 10px var(--foreground)"}}
                >
                    <form action="" className="h-full p-8">
                        <ul className="flex flex-col gap-4 text-[var(--foreground) w-full h-full px-4">
                            <li className="flex flex-col gap-2"><span>Nombre</span><input type="text" placeholder="Tu Nombre" className="outline-2 outline-[var(--accent)] p-4 bg-white rounded-md focus:border-none focus:outline-[var(--foregound)]"/></li>
                            <li className="flex flex-col gap-2"><span>Correo</span><input type="email" placeholder="tu@correo.com" className="outline-2 outline-[var(--accent)] p-4 bg-white rounded-md focus:border-none focus:outline-[var(--foregound)]"/></li>
                            <li className="flex flex-col gap-2"><span>Asunto</span><input type="text" placeholder="Pregunta sobre un pedido" className="outline-2 outline-[var(--accent)] p-4 bg-white rounded-md focus:border-none focus:outline-[var(--foregound)]"/></li>
                            <li className="flex flex-col gap-2"><span>Mensaje</span><textarea placeholder="Pregunta sobre un pedido" rows={5} className="resize-none outline-2 outline-[var(--accent)] p-4 bg-white rounded-md focus:border-none focus:outline-[var(--foregound)]"/></li>
                            <input type="submit" value={"Enviar Mensaje"} className="w-fit p-4 px-6 rounded-2xl bg-[var(--foreground)] text-white "/>
                        </ul>
                    </form>
                </div>
            </div>
        </main>
    )
}