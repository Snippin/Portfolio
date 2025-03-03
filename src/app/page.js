import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home()
{
  return (
    <>
      <Navbar currentPage="Home" />

      <div className="pt-28 px-3 md:px-16">
        <h1>
          Programmer / Game Developer
        </h1>

        <p className="text-2xl font-bold italic my-4 md:text-8xl">
          Sean Tong
        </p>

        <p>
          Aspiring programmer, that loves learning about programming,{" "}
          <span className="inline md:block">
            as well as having a passion for creating games.
          </span>
        </p>
      </div>

      <Footer />
    </>
  );
}
