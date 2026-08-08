"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [showButton, SetShowButton] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    SetShowButton(false);
    window.scrollTo(0, 0);
  }, [pathName]);

  useEffect(() => {
    const handleScroll = () => {
      SetShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-2 right-2 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        border border-primaryA30
        bg-surfaceA0
        hover:text-primaryA30 hover:border-primaryA30
        transition-all duration-300
        ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      aria-label="Back to top"
    >
      <AiOutlineArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;
