import BHInfo from "../constants/bh_information";
import LumenousInfo from "../constants/lumenous_information";
import SJInfo from "../constants/sj_information";

const ProjectsPreviewInfo = [
  {
    name: SJInfo.name,
    role: SJInfo.roles,
    link: SJInfo.link,
    image: SJInfo.images[0],
  },
  {
    name: LumenousInfo.name,
    role: LumenousInfo.roles,
    link: LumenousInfo.link,
    image: LumenousInfo.images[0],
  },
  {
    name: BHInfo.name,
    role: BHInfo.roles,
    link: BHInfo.link,
    image: BHInfo.images[0],
  },
];

export default ProjectsPreviewInfo;
