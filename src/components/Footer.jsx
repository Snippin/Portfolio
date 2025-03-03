"use client";

import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () =>
{
  return (
    <footer className="border-t mx-auto my-5 pt-5 sm:flex sm:flex-wrap">
      <div className=" px-4 justify-items-center sm:w-5/6">
        <p>Contact Information</p>
        <p>seantongch@gmail.com</p>
      </div>

      <div className="px-4 mt-4 justify-items-center
        sm:w-1/6 sm:px-0 sm:pr-4 sm:justify-items-end sm:mt-0">
        <div>
          <Link href="http://linkedin.com/in/sean-tong-ch/" target="_blank"
            className="cursor-pointer border-b">
            LINKEDIN
          </Link>
        </div>

        <div>
          <Link href="https://github.com/Snippin" target="_blank"
            className="cursor-pointer border-b">
            GITHUB
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse w-full mt-4 px-4 text-center sm:text-left sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} by Sean Tong
        </p>

        <div className="flex items-center justify-center mb-4 cursor-pointer sm:mb-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <AiOutlineArrowUp size={24} />
          <span className="border-b">
            Back To Top
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;