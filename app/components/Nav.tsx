"use client"
import { useState, useEffect } from "react";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Nav () {
    
  const [cart, setCart] = useState<boolean>(false)
    

      const handleEffect = ()=>{
        gsap.from(".cartDiv", {
            opacity: 0,
            duration: .2  
        })
    }

  useEffect(()=>{
    handleEffect()
  },[handleEffect])
    return (
        <nav className="flex justify-between items-center px-12 w-full h-20">
            <div
                className={`${cart ? "cartDiv fixed" : "hidden"}  z-100 fixed top-0 left-0 bg-[var(--foreground)]/30 w-full h-screen backdrop-blur-[7px]`}
            >
                <main className="relative flex justify-center items-center w-full h-full">
                    <button
                        onClick={()=>{setCart(!cart)}}
                        className="cursor-pointer absolute top-0 right-0 mr-20 px-8 p-4 text-4xl rounded-b-xl text-[var(--background)] bg-[var(--foreground)]"
                    >
                        Cerrar
                    </button>
                    <div className="bg-[var(--primary)] shadow-xl border-[var(--foreground)] border-2 rounded-3xl text-[var(--background)] w-1/2 h-1/2">
                    </div>
                </main>
            </div>
            
            <span className="text-3xl font-black">KAOS</span>
            <ul className="text-lg flex jutify-center items-center gap-6 font-bold">
                <li>Novedades</li>
                <li>Hombre</li>
                <li>Mujer</li>
                <li>Accesorios</li>
                <li>Safe</li>
            </ul>
            <div className="flex gap-2">
                <button className="flex items-center border-2 p-2 rounded-full px-4">
                    <input className="px-2 focus:outline-0" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><title>magnifier-outline</title><path fill="currentColor" fill-rule="evenodd" d="M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5Z" clip-rule="evenodd"/></svg>
                </button>
                <button
                    onClick={()=>{setCart(!cart)}} 
                    className="border-2 p-2 cursor-pointer rounded-full bg-[var(--foreground)] border-[var(--foreground)] text-[var(--secondary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><title>bag-light</title><path fill="currentColor" d="M216 66h-42v-2a46 46 0 0 0-92 0v2H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14M94 64a34 34 0 0 1 68 0v2H94Zm124 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h42v18a6 6 0 0 0 12 0V78h68v18a6 6 0 0 0 12 0V78h42a2 2 0 0 1 2 2Z"/></svg>
                </button>
            </div>
        </nav>
    )
}