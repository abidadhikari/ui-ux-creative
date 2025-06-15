import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowImage from "../../../public/arrow.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="my-width m-auto">
        <div className="py-10">
          <Link href="/">
            <Image src={arrowImage} alt="arrow" className="rotate-180" />
          </Link>
          <button className="fixed top-[40px] right-0 button-gradient text-white py-4 px-11 rounded-[100px_0_0_100px] font-bold backdrop-blur-2xl">
            Start New Project
          </button>
        </div>
        {children}
      </div>

      <Footer />
    </div>
  );
}
