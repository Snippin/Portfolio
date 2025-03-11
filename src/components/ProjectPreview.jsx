"use client";

import Image from "next/image";
import Link from "next/link";

const ProjectPreview = ({ info }) =>
{
  return (
    <Link href={info.link} className="flex flex-col">
      <Image
        src={info.image}
        alt={info.name}
        width={500}
        height={500}
        className="w-full h-auto object-cover rounded-3xl"
      />

      <p className="font-bold my-4 text-xl
        sm:text-3xl">
        {info.name}
      </p>

      <p>{info.role}</p>
    </Link>
  );
}

export default ProjectPreview;
