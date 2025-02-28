"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import Logo from "../../public/images/globe.svg"

const Navbar = ({ currentPage = "Home" }) =>
{
  const [isMenuOpen, SetMenuState] = useState(false)

  const HandleNav = () =>
  {
    SetMenuState(!isMenuOpen);
  }

  return (
    <nav className="fixed w-full h-24 shadow-xl">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <div className="flex items-center">
          <Link href="/" >
            <Image
              src={Logo}
              alt="Logo"
              width="40"
              height="40"
              className="cursor-pointer"
              priority
            />
          </Link>
          <p className="ml-5 text-xl cursor-default">{currentPage}</p>
        </div>


        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/about">
              <p className="ml-10 hover:border-b text-xl">About</p>
            </Link>
            <Link href="/contact">
              <p className="ml-10 hover:border-b text-xl">Contact</p>
            </Link>
            <Link href="/projects">
              <p className="ml-10 hover:border-b text-xl">Projects</p>
            </Link>
            <Link href="/mini-projects">
              <p className="ml-10 hover:border-b text-xl">Mini-Projects</p>
            </Link>
          </ul>
        </div>

        <div onClick={HandleNav}
          className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div className={
        isMenuOpen
          ? "fixed left-0 top-0 sm:hidden w-[65%] h-screen bg-slate-400 p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
        <div className="flex w-full items-center justify-end">
          <div onClick={HandleNav}
            className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>

        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li onClick={() => SetMenuState(false)}
                className="py-4 cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li onClick={() => SetMenuState(false)}
                className="py-4 cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li onClick={() => SetMenuState(false)}
                className="py-4 cursor-pointer">
                Contact
              </li>
            </Link>
            <Link href="/projects">
              <li onClick={() => SetMenuState(false)}
                className="py-4 cursor-pointer">
                Projects
              </li>
            </Link>
            <Link href="/mini-projects">
              <li onClick={() => SetMenuState(false)}
                className="py-4 cursor-pointer">
                Mini-Projects
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
