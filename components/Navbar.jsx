"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { useState } from "react";

const navMenus = {
  home: "/",
  about: "/about",
  projects: "/projects",
  certificates: "/certificates",
  contacts: "/contacts",
};

export default function Navbar() {
  const router = usePathname();

  const fade = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full backdrop-blur-3xl fixed top-0 z-50 font-noto">
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-6 px-6 md:px-0">
        <div className="flex items-center">
          <Logo className="h-12" />
          <div className="text-white ml-4 flex flex-col gap-y-0">
            <p className="text-lg tracking-[.3em] font-bold">ALIF.</p>
            <p className="text-sm text-white/70">System Information Student</p>
          </div>
        </div>

        <button
          className="text-white hover:text-gray-300 md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <HamburgerMenu /> : <CloseMenu />}
        </button>

        <ul
          className={`nav-menu md:flex gap-x-6 items-center justify-center gap-y-6 md:gap-y-0 md:divide-y-0 
            ${isOpen ? "show" : "hidden"}`}
        >
          {Object.keys(navMenus).map((key) => (
            <motion.li
              variants={fade}
              initial="init"
              animate="animate"
              className="nav-item"
              key={key}
            >
              <Link
                className={`${
                  router === navMenus[key]
                    ? "text-white relative md:after:absolute md:after:size-1 md:after:left-1/2 md:after:-translate-y-1/2 md:after:bg-white/70 md:after:rounded-full md:after:-bottom-3"
                    : "text-white/50"
                } nav-link capitalize hover:text-white`}
                href={navMenus[key]}
              >
                {key}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function HamburgerMenu() {
  return (
    <svg
      className="h-6 w-6 fixed top-[42px] right-[24px] z-50"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function CloseMenu() {
  return (
    <svg
      className="h-6 w-6"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
