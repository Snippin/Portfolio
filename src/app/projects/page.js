import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProjectPreview from "../../components/ProjectPreview";

import ProjectsPreviewInfo from "./projects_preview_info";

export default function ProjectsPage()
{
  return (
    <>
      <Navbar currentPage="Projects" />

      <div className="pt-28">
      </div>

      <div className="grid grid-cols-1 gap-8 px-4
        sm:grid-cols-2 sm:px-16">
        {
          ProjectsPreviewInfo.map((project, index) =>
          (
            <ProjectPreview key={index} info={project} />
          ))
        }
      </div>

      <Footer />
    </>
  );
}
