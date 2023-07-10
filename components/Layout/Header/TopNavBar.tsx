"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import "./styles.css";
import LinkNav from "./LinkNav";
import { menu } from "@/dummy/menu";
import { ButtonContact } from "@/components/Button";
import Link from "next/link";

const TopNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow w-full fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-primary font-bold text-3xl">
              <img src="/logo.png" alt="logo" className="w-36"/>
              </a>
            </div>
          </div>
          <menu className="lg:flex hidden">
            {menu.map((e, i) => (
              <LinkNav key={i} path={e.path}>
                {e.name}
              </LinkNav>
            ))}
          <ButtonContact>Buat Janji</ButtonContact>
          </menu>
          <div className="lg:hidden">
            <button
              onClick={toggleOpen}
              className="text-primary hover:text-primary focus:outline-none focus:text-primary"
            >
              <svg
                className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="lg:hidden z-50">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            {menu.map((e, i) => (
              <div key={i} className="flex items-center py-1 border-y">
                <LinkNav path={e.path}>{e.name}</LinkNav>
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default TopNavBar;
