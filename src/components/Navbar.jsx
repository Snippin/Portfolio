"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import Logo from "../../public/images/globe.svg"
import NavbarButtons from "../app/constants/navbar_buttons";

const Navbar = ({ currentPage = "Home" }) =>
{
  const [isMenuOpen, SetMenuState] = useState(false)

  const HandleNav = () =>
  {
    SetMenuState(!isMenuOpen);
  }

  const CheckCurrentPage = (page) =>
    currentPage === page ?
      "ml-10 border-b-2 border-primaryA20 text-primaryA20 text-xl" :
      "ml-10 hover:border-b text-xl";

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-surfaceA10 z-50">
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
          <p className="ml-5 text-xl cursor-default text-primaryA50">{currentPage}</p>
        </div>


        <div className="hidden sm:flex">
          {
            NavbarButtons.map((button, index) => (
              <Link
                key={index}
                href={button.link}>
                <p className={CheckCurrentPage(button.page)}>{button.page}</p>
              </Link>
            ))
          }
        </div>

        <div onClick={HandleNav}
          className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div className={`fixed w-[65%] h-screen top-0 bg-surfaceA10 p-10 ease-in duration-500
        ${isMenuOpen ? "left-0 sm:hidden" : "left-[-100%]"}`}>
        <div className="flex w-full items-center justify-end">
          <div onClick={HandleNav}
            className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>

        <div className="flex-col py-4">
          <ul>
            {
              NavbarButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.link}>
                  <li onClick={() => SetMenuState(false)}
                    className="py-4 cursor-pointer">
                    {button.page}
                  </li>
                </Link>
              ))
            }
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Navbar;
