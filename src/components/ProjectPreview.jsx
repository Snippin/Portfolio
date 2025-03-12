"use client";

import Image from "next/image";
import Link from "next/link";

const ProjectPreview = ({ info }) =>
{
  return (
    <Link href={info.link} className="flex flex-col group relative">
      <div className="w-full overflow-hidden rounded-3xl relative">
        <Image
          src={info.image}
          alt={info.name}
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />

        <div className="absolute inset-0
          bg-gradient-to-b from-transparent to-primaryA10 opacity-0
          group-hover:opacity-50 transition-opacity duration-300" />
      </div>

      <p className="font-bold my-4 text-xl
        sm:text-3xl">
        {info.name}
      </p>

      <p>{info.role}</p>
    </Link>
  );
}

export default ProjectPreview;
