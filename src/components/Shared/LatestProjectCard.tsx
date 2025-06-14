import Image from "next/image";
import Link from "next/link";
import React from "react";

import arrowImage from "../../../public/arrow.svg";

export default function LatestProjectCard() {
  return (
    <Link
      href="/beyondhimalayas"
      className="bg-[#4776E626] block w-full rounded-[100px] p-[80px] overflow-hidden"
    >
      <div className="flex items-start justify-between flex-row mb-2.5">
        <div className="flex  gap-[20px] flex-col  text-left w-full">
          <h3 className="font-extrabold text-4xl">BEYONDHIMALAYAS</h3>
          <p className="text-[20px] leading-[140%] w-[450px] ">
            Hi! Meet your trusted design partner, crafting strong brands for
            SaaS and Web3.
          </p>
        </div>
        <Link href={"/"}>
          <Image src={arrowImage} alt="arrow" />
        </Link>
      </div>
      <div className="h-[250px] flex items-center justify-center gap-5 relative  w-full">
        <div className="h-[502px] w-[550px]  bg-white translate-y-[180px] rotate-[-10deg] hover:translate-y-[160px] transition-all">
          <Image
            width={550}
            height={502}
            src="https://picsum.photos/536/354"
            alt="Project Image"
            className="h-full w-full object-cover "
          />
        </div>
        <div className="h-[502px] w-[550px]  bg-white translate-y-[210px] rotate-[10deg] hover:translate-y-[190px] transition-all">
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
