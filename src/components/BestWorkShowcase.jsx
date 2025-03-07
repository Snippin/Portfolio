"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const BestWorkShowcase = ({ showcaseNum = "00", interval = 3000, info }) =>
{
  const [currentIndex, SetCurrentIndex] = useState(0);

  useEffect(() =>
  {
    const timer = setInterval(() =>
    {
      setTimeout(() =>
      {
        SetCurrentIndex((prevIndex) => (prevIndex + 1) % info.images.length);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, currentIndex]);

  return (
    <>
      {/* Header */}
      <div className="flex flex-col justify-between mb-16
          sm:flex-row sm:justify-items-center">
        <div className="pl-4 w-1/12 justify-items-center mr-4
          sm:pl-16">
          <p className="mb-4 text-center font-bold italic text-3xl
            sm:text-5xl sm:mb-12">
            {showcaseNum}
          </p>

          <p className="writing-rl rotate-180 hidden
            sm:inline">
            {info.genre}
          </p>
        </div>

        <Image
          src={info.images[currentIndex]}
          width={500}
          height={700}
          alt={info.name + " image " + currentIndex}
          className={`w-full rounded-3xl object-scale-down
            transition-opacity duration-500 ease-in-out
            sm:w-1/2 px-4`}
        />

        <div className="px-4 mt-8 sm:px-16 sm:mt-0">
          <h1 className="text-3xl font-bold italic mb-4
            sm:text-5xl">
            {info.name}
          </h1>

          <p className="mb-4 text-xl">{info.roles}</p>

          <p className="mb-8">{info.shortDescription}</p>

          <Link className="px-4 py-3 border-2 rounded-3xl
            transition-colors duration-300 bg-transparent hover:bg-primaryA0"
            href={info.link}>
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}

export default BestWorkShowcase;
3