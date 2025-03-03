import Link from "next/link";

const Footer = () =>
{
  return (
    <footer className="flex border-t mx-auto my-5 pt-5">
      <div className="w-1/6 pl-4">
        <Link href="https://github.com/Snippin" target="_blank"
          className="cursor-pointer border-b">
          GITHUB
        </Link>
      </div>

      <div className="w-2/3 px-4 justify-items-center">
        <p>Contact Information</p>
        <p>seantongch@gmail.com</p>
      </div>

      <div className="w-1/6 pr-4">
        <Link href="http://linkedin.com/in/sean-tong-ch/" target="_blank"
          className="cursor-pointer border-b">
          LINKEDIN
        </Link>
      </div>
    </footer >
  );
}

export default Footer;