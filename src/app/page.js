import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BestShowcase from "../components/BestWorkShowcase"

import SJInfo from "./constants/sj_information";
import BHInfo from "./constants/bh_information";
import LumenousInfo from "./constants/lumenous_information";

export default function Home()
{
  return (
    <>
      <Navbar currentPage="Home" />

      {/* Small introduction */}
      <div className="pt-28 px-3 md:px-16">
        <h1>
          Programmer / Game Developer
        </h1>

        <p className="text-5xl font-bold italic my-4 md:text-9xl">
          Sean Tong
        </p>

        <p>
          Aspiring programmer, that loves learning about programming,{" "}
          <span className="inline md:block">
            as well as having a passion for creating games.
          </span>
        </p>
      </div>

      {/* Best 3 works */}
      <div className="mt-8">
        <h1 className="px-3 my-8 text-3xl font-bold italic md:text-5xl md:px-16">
          BEST WORKS
        </h1>

        <h1 className="border-t mb-8" />

        <BestShowcase
          showcaseNum="1"
          info={SJInfo} />

        <BestShowcase
          showcaseNum="2"
          info={LumenousInfo}
          reverse />

        <BestShowcase
          showcaseNum="3"
          info={BHInfo} />
      </div>

      <Footer />
    </>
  );
}
