import Image from "next/image";

import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import ProjectIntroduction from "../../../components/ProjectIntroduction";
import WorkImageGallery from "../../../components/WorkImageGallery";

import BSInfo from "./bs_info";

export default function BasicSudokuPage()
{
  return (
    <>
      <Navbar currentPage="Basic Sudoku" />

      <div className="pt-28" />

      <ProjectIntroduction
        description={BSInfo.fullDescription}
        duration={BSInfo.duration}
        genre={BSInfo.genre}
        platform={BSInfo.platform}
        isMiniProject />

      <h1 className="border-b-2 border-surfaceA30" />

      {/* Project gameplay showcase */}
      <div className="grid grid-cols-1 my-8 px-4
        sm:px-16">
        {/* Gameplay images */}
        <div className="flex flex-col gap-8
          sm:flex-row">
          {
            BSInfo.slideshow.slice(1).map((image, index) => (
              <div key={index} className="w-full overflow-hidden rounded-3xl sm:w-1/2">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          }
        </div>
      </div>

      <h1 className="border-y-2 border-surfaceA30 my-8">
        <p className="font-bold my-8 text-2xl px-5
          sm:text-5xl sm:px-16">
          WORK DONE
        </p>
      </h1>

      <WorkImageGallery items={BSInfo.workGallery} />

      <ul className="px-4 ml-4 mt-4
        sm:px-16">
        {
          BSInfo.workList.map((work, index) => (
            <li
              key={index}
              className="list-disc">
              {work}
            </li>
          ))
        }
      </ul>

      <Footer />
    </>
  );
}
