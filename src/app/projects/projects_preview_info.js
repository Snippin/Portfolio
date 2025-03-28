import BHInfo from "./bullet.hell/bh_info";
import LumenousInfo from "./lumenous/lumenous_info";
import SJInfo from "./slayers_journey/sj_info";

const ProjectsPreviewInfo = [
  {
    name: SJInfo.name,
    role: SJInfo.roles,
    link: SJInfo.link,
    image: SJInfo.slideshow[0],
  },
  {
    name: LumenousInfo.name,
    role: LumenousInfo.roles,
    link: LumenousInfo.link,
    image: LumenousInfo.slideshow[0],
  },
  {
    name: BHInfo.name,
    role: BHInfo.roles,
    link: BHInfo.link,
    image: BHInfo.slideshow[0],
  },
];

export default ProjectsPreviewInfo;
