import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-10  w-screen flex  justify-center items-center">
      <nav className="flex gap-[38px] text-lg text-white bg-[#00000029] backdrop-blur-2xl w-fit px-[45px] py-4 rounded-[100px]">
        <Link href="/" className="">
          Work
        </Link>
        <Link href="/" className="">
          Process
        </Link>
        <Link href="/" className="">
          Learn UI/UX Design
        </Link>
        <Link href="/" className="">
          Start Project{" "}
        </Link>
      </nav>
    </header>
  );
}
