import Image from "next/image"

export default function Products () {

    const productos : any = [
        {name: "Camisa", id: 1, price: 100},
        {name: "Camisa", id: 2, price: 100},
        {name: "Camisa", id: 3, price: 100},
        {name: "Camisa", id: 4, price: 100},
        {name: "Camisa", id: 5, price: 100},
        {name: "Camisa", id: 6, price: 100},
        {name: "Camisa", id: 7, price: 100}
    ]


    return (
        <section className="w-full -mt-12">
            <ul className="flex gap-4 w-full p-2  mb-4 justify-start items-center text-[var(--accent)]">
                <li className="cursor-pointer border-2 p-2 px-4 rounded-2xl font-bold hover:text-[var(--background)] hover:bg-[var(--accent)] hover:border-[var(--accent)]">Todos</li>
                <li className="cursor-pointer border-2 p-2 px-4 rounded-2xl font-bold hover:text-[var(--background)] hover:bg-[var(--accent)] hover:border-[var(--accent)]">Hoodies</li>
                <li className="cursor-pointer border-2 p-2 px-4 rounded-2xl font-bold hover:text-[var(--background)] hover:bg-[var(--accent)] hover:border-[var(--accent)]">Pantalones</li>
                <li className="cursor-pointer border-2 p-2 px-4 rounded-2xl font-bold hover:text-[var(--background)] hover:bg-[var(--accent)] hover:border-[var(--accent)]">Camisetas</li>
                <li className="cursor-pointer border-2 p-2 px-4 rounded-2xl font-bold hover:text-[var(--background)] hover:bg-[var(--accent)] hover:border-[var(--accent)]">Camisetas</li>
                <li className="cursor-pointer border-2 p-2 px-4 rounded-2xl font-bold hover:text-[var(--background)] hover:bg-[var(--accent)] hover:border-[var(--accent)]">Gorras</li>
            </ul>
            <ul className=" flex justify-center w-full">
                <div className="flex flex-wrap  justify-start w-full gap-4">
                {productos.map((p : any) =>(
                    <li className="flex flex-col relative w-50 min-h-60 gap-2">
                        <span className="absolute top-0 left-0 p-2">{p.id}</span>
                        <div className="w-full h-70 bg-[var(--secondary)] rounded-xl flex justify-center items-center">{"[FOTO]"}</div>
                        {/* <Image
                            width={10}
                            height={10}
                            src={"file.svg"}
                            alt={p.name}
                            className="w-full py-4"
                        /> */}
                        <div className="flex justify-between px-4 pb-4">
                            <div className="flex flex-col">
                                <span className="font-bold text-xl">{p.name}</span>
                                <span className="">${p.price}</span>
                            </div>
                            <button>
                              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 12 24"><title>arrow-filled</title><path fill="currentColor" fill-rule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"/></svg>  
                            </button>
                        </div>
                    </li>

                ))}
                </div>

            </ul>
        </section>
    )
}