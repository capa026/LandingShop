import { useState } from "react";
import AnimationPresence from "./UI/AnimationPresence";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="bg-linear-to-r from-iris/70 to-iris-dark/70 to-30% px-1 py-2 sticky top-0 z-50 backdrop-blur-md">
      <div className="container flex items-center justify-between relative">
        <h1 className="font-bold">
          <a href="#inicio">LandingShop</a>
        </h1>

        <div
          className="md:hidden p-1 border border-white/20 rounded-md aspect-square cursor-pointer hover:bg-white/20"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>
        <div
          className="hidden md:flex gap-5 [&_>a]:cursor-pointer [&_>a]:py-1 [&_>a]:px-2 [&_>a]:rounded-md
            [&_>a:hover]:bg-white/20 "
        >
          <a href="#informacion">Informacion</a>

          <a href="#contacto">Contacto</a>

          <a href="/comprar">COMPRAR</a>
        </div>
        <AnimationPresence
          condition={openMenu}
          parentStyles={`md:hidden select-none absolute right-0 top-[50px] bg-iris overflow-hidden w-max h-max px-2
            rounded-bl-md rounded-br-md [&_>a]:block
            [&_>a]:cursor-pointer [&_>a]:py-1 [&_>a]:px-2 [&_>a]:rounded-md [&_>a]:first:mt-2 [&_>a]:last:mb-2
            [&_>a:hover]:bg-white/20 
            
            `}
          options={{
            initial: { height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0.4, height: 0 },
          }}
        >
          <a href="#informacion">Informacion</a>
          <div className="w-full bg-white/30 h-[1px] my-0.5" />
          <a href="#contacto">Contacto</a>
          <div className="w-full bg-white/30 h-[1px] my-0.5" />
          <a href="/comprar">COMPRAR</a>
        </AnimationPresence>
      </div>
    </nav>
  );
};

export default Navbar;
