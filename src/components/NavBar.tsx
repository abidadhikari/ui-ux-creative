import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-10  w-full flex   justify-center items-center">
      <nav className=" flex flex-wrap items-center justify-center gap-6 lg:gap-[38px] text-sm md:text-lg text-white bg-[#00000029] backdrop-blur-2xl w-fit max-w-[90%] px-[20px] md:px-[45px] py-4 rounded-[100px]">
        <Link href="#work" className="">
          Work
        </Link>

        <Link href="#process" className="">
          Process
        </Link>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScS1Yym02Io3a9Y5GnPn4-fssA-U0FtyPMkNt-gIBVluV7vpQ/viewform"
          className=""
          target="_blank"
        >
          Learn UI/UX Design
        </Link>
        <Link
          href="https://wa.me/9779813270713?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Start Project{" "}
        </Link>
      </nav>
    </header>
  );
}
