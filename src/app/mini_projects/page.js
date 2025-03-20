"use client";

import Link from "next/link";
import { useState } from "react";
import { FaThLarge, FaList } from "react-icons/fa"

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProjectPreview from "../../components/ProjectPreview";

import ProjectsPreviewInfo from "./mini_projects_preview_info";

export default function MiniProjectsPage()
{
  const [isGalleryView, SetIsGalleryView] = useState(true);

  return (
    <>
      <Navbar currentPage="Mini-Projects" />

      <div className="flex justify-end px-4 pt-28
        sm:px-16 mb-4">
        <button
          className={`flex items-center gap-2 px-4 py-2 border-2 border-surfaceA30 rounded-lg
            transition-colors ${isGalleryView ? "bg-primaryA10" : "hover:bg-primaryA0"}`}
          onClick={() => SetIsGalleryView(true)}
        >
          <FaThLarge /> Gallery
        </button>
        <button
          className={`ml-2 flex items-center gap-2 px-4 py-2 border-2 border-surfaceA30 rounded-lg
            transition-colors ${!isGalleryView ? "bg-primaryA10" : "hover:bg-primaryA0"}`}
          onClick={() => SetIsGalleryView(false)}
        >
          <FaList /> List
        </button>
      </div>

      <div className="px-4 sm:px-16">
        {
          isGalleryView ? (
            <div className="grid grid-cols-1 gap-8
              sm:grid-cols-2">
              {
                ProjectsPreviewInfo.map((project, index) => (
                  <ProjectPreview key={index} info={project} isMiniProject />
                ))
              }
            </div>
          ) : (
            <ul>
              {
                ProjectsPreviewInfo.map((project, index) => (
                  <li
                    key={index}
                    className="my-4">
                    <Link
                      href={project.link}
                      className="group">
                      <p className="text-xl font-medium transition-colors duration-200
                        group-hover:text-primaryA30 group-hover:underline">
                        {project.name}
                      </p>

                      <p>
                        {project.shortDescription}
                      </p>
                    </Link>
                  </li>
                ))
              }
            </ul>
          )
        }
      </div >

      <Footer />
    </>
  );
}
