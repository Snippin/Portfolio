import Link from "next/link";

const Footer = () =>
{
  return (
    <footer className="border-t mx-auto my-5 pt-5 sm:flex">
      <div className=" px-4 justify-items-center sm:w-5/6">
        <p>Contact Information</p>
        <p>seantongch@gmail.com</p>
      </div>

      <div className="px-4 mt-4 justify-items-center
        sm:w-1/6 sm:px-0 sm:pr-4 sm:justify-items-end sm:mt-0">
        <div>
          <Link href="http://linkedin.com/in/sean-tong-ch/" target="_blank"
            className="cursor-pointer border-b">
            LINKEDIN
          </Link>
        </div>

        <div>
          <Link href="https://github.com/Snippin" target="_blank"
            className="cursor-pointer border-b">
            GITHUB
          </Link>
        </div>

      </div>
    </footer >
  );
}

export default Footer;