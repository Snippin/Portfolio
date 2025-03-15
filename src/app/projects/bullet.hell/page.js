import Image from "next/image";

import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import ProjectIntroduction from "../../../components/ProjectIntroduction";
import WorkImageGallery from "../../../components/WorkImageGallery";

import BHInfo from "./bh_information";

export default function BulletHellPage()
{
  return (
    <>
      <Navbar currentPage="Bullet.Hell" />

      <div className="pt-28" />

      <ProjectIntroduction
        roles={BHInfo.roles}
        description={BHInfo.fullDescription}
        duration={BHInfo.duration}
        genre={BHInfo.genre}
        platform={BHInfo.platform} />

      <h1 className="border-b-2 border-surfaceA30" />

      {/* Project gameplay showcase */}
      <div className="grid grid-cols-1 my-8 px-4
        sm:px-16">
        {/* Trailer */}
        <div className="relative w-full pb-[56.25%] h-auto mb-4">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/wTlJVc6b7Qo?si=tgwYb0DOcSXLQdxH"
            title="Bullet.Hell Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Gameplay images */}
        <div className="flex flex-col gap-8
          sm:flex-row">
          {
            BHInfo.slideshow.slice(1).map((image, index) => (
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

      <WorkImageGallery items={BHInfo.workGallery} />

      <ul className="px-4 ml-4 mt-4
        sm:px-16">
        {
          BHInfo.workList.map((work, index) => (
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
