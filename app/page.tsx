import Image from "next/image";
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Products from "./components/products";
import TagAdd from "./components/TagAdd";
import Footer from "./components/Footer";
import IlustratorDiv from "./components/IlustrationDiv";
import ContactUs from "./components/ContactUs";

export default function Home() {


  return (
    <div className="flex flex-col justify-center items-center bg-[var(--beige-deep)]">
      <div className="max-w-800 w-full flex-1 flex flex-col">
        <Nav />   
        <Hero />    
      </div>
      <main className="rounded-4xl bg-[var(--background)] .dark flex flex-1 w-full max-w-450 flex-col items-center justify-between py-32 px-16 sm:items-start">
        <Products />
        <TagAdd />
        <IlustratorDiv />
      </main>
      <ContactUs />
      <Footer/>
    </div>
  );
}
