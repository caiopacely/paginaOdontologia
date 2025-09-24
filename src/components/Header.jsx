import Logo from "../assets/LogoCompleta.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex w-full items-center justify-between h-18 px-5 md:px-12 py-4 bg-white shadow-md relative">
            <img className="h-9 md:h-10" src={Logo} alt="Logo" />

           
            <nav className="hidden lg:flex space-x-6">
                <a className="text-[16px] text-[#4B2E6D] font-bold hover:underline" href="#Inicio">Início</a>
                <a className="text-[16px] text-[#4B2E6D] font-bold hover:underline" href="#sobre">Sobre mim</a>
                <a className="text-[16px] text-[#4B2E6D] font-bold hover:underline" href="#agendamentos">Agendamentos</a>
                <a className="text-[16px] text-[#4B2E6D] font-bold hover:underline" href="#localizacao">Localização</a>
            </nav>

            <div className="lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menu"
                    className="text-[#4B2E6D]"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

  
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 22}}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col gap-1.5 text-center absolute top-17 right-0 h-56 w-full bg-[#57357e] rounded-b-4xl shadow-lg lg:hidden z-50"
                    >
                        <a href="#Inicio" className="block py-2 text-xl text-white hover:bg-gray-800">Início</a>
                        <a href="#sobre" className="block py-2 text-xl text-white hover:bg-gray-800">Sobre mim</a>
                        <a href="#agendamentos" className="block py-2 text-xl text-white hover:bg-gray-800">Agendamentos</a>
                        <a href="#localizacao" className="block py-2 text-xl text-white hover:bg-gray-800">Localização</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;
