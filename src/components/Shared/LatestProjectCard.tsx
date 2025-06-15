import Image from "next/image";
import Link from "next/link";
import React from "react";

import arrowImage from "../../../public/arrow.svg";

export default function LatestProjectCard() {
  return (
    <Link
      href="/beyondhimalayas"
      className="bg-[#4776E626] block w-full rounded-[50px] md:rounded-[100px] p-[30px]  md:p-[80px] overflow-hidden"
    >
      <div className="flex items-start justify-between flex-row mb-2.5 ">
        <div className="flex  gap-[20px] flex-col  text-left w-full">
          <h3 className="font-extrabold text-2xl md:text-4xl">
            BEYONDHIMALAYAS
          </h3>
          <p className="text-[20px] leading-[140%] w-full md:w-[450px] ">
            Hi! Meet your trusted design partner, crafting strong brands for
            SaaS and Web3.
          </p>
        </div>
        <Link href={"/"}>
          <Image src={arrowImage} alt="arrow" />
        </Link>
      </div>
      <div className="md:h-[250px] flex flex-col md:flex-row items-center justify-center gap-5 relative  w-full">
        <div className="h-[200px] md:h-[502px] w-[550px] max-w-full  bg-white md:translate-y-[180px] md:rotate-[-10deg] md:hover:translate-y-[160px] transition-all">
          <Image
            width={550}
            height={502}
            src="https://picsum.photos/536/354"
            alt="Project Image"
            className="h-full w-full object-cover "
          />
        </div>
        <div className="h-[200px] md:h-[502px] w-[550px] max-w-full  bg-white md:translate-y-[210px] md:rotate-[10deg] md:hover:translate-y-[190px] transition-all">
          <Image
            width={550}
            height={502}
            src="https://picsum.photos/536/354"
            alt="Project Image"
            className="h-full w-full object-cover "
          />
        </div>
      </div>
    </Link>
  );
}
