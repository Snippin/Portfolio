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

      <div className="grid grid-cols-1 my-8 px-5 gap-16
        sm:grid-cols-2 sm:px-20">
        <div>
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

        <div>
          <p className="font-bold mb-4
            sm:text-xl">
            SOFT SKILLS
          </p>

          <ul className="list-disc ml-5">
            {
              info.softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))
            }
          </ul>
        </div>

        <div>
          <p className="font-bold mb-4
            sm:text-xl">
            HARD SKILLS
          </p>

          <ul className="list-disc ml-5">
            {
              info.hardSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))
            }
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
