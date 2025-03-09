import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import info from "./about_info"

export default function AboutPage()
{
  return (
    <>
      <Navbar currentPage="About" />

      <div className="pt-28 border-b px-5 pb-3
        sm:px-16 sm:pb-10">
        <p className="font-bold italic text-3xl mb-4
          sm:text-7xl">
          Sean Tong
        </p>

        <p className="sm:text-xl">
          {info.role}
        </p>
      </div>

      <div className="flex flex-col mt-8 px-5
        sm:flex-row sm:px-20">
        <div className="mb-8
          sm:mb-0 sm:mr-16">
          <p className="font-bold mb-4
            sm:text-xl">
            HOBBIES
          </p>

          <ul className="list-disc ml-5">
            {
              info.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))
            }
          </ul>
        </div>

        <div>
          <p className="font-bold mb-4
            sm:text-xl">
            EDUCATION
          </p>

          <ul className="list-disc ml-5">
            {
              info.education.map((level, index) => (
                <li key={index}>{level}</li>
              ))
            }
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
