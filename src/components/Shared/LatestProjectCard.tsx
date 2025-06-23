import Image from "next/image";
import Link from "next/link";
import React from "react";

import arrowImage from "../../../public/arrow.svg";

interface LatestProjectCardProps {
  title?: string;
  description?: string;
  img1: string;
  img2: string;
  link: string;
  secondImageClass?: string;
}
export default function LatestProjectCard(props: LatestProjectCardProps) {
  const { title, description, img1, img2, link } = props;
  return (
    <Link
      href={link}
      className="bg-[#4776E626] block w-full rounded-[50px] md:rounded-[100px] p-[30px]  md:p-[80px] overflow-hidden group"
    >
      <div className="flex items-start justify-between flex-row mb-2.5 ">
        <div className="flex  gap-[20px] flex-col  text-left w-full">
          <h3 className="font-extrabold text-2xl md:text-4xl">{title}</h3>
          <p className="text-[20px] leading-[140%] w-full md:w-[500px] ">
            {description}
          </p>
        </div>
        <Link href={"/"}>
          <Image src={arrowImage} alt="arrow" />
        </Link>
      </div>
      <div className="md:h-[250px] flex flex-col md:flex-row items-center justify-center gap-5 relative  w-full">
        <div className="h-[200px] md:h-[502px] w-[550px] max-w-full   md:translate-y-[140px] md:rotate-[-10deg] md:group-hover:translate-y-[120px] transition-all ease-in-out">
          <Image
            width={550}
            height={600}
            src={img1}
            alt="Project Image"
            className=" w-full  rounded-2xl "
          />
        </div>
        <div
          className={`h-[200px] md:h-[502px] w-[550px] max-w-full     transition-all delay-75 ease-in-out ${
            props.secondImageClass
              ? "md:group-hover:translate-y-[90px] md:group-hover:rotate-8 md:translate-y-[150px]  md:rotate-[0deg]"
              : "md:group-hover:translate-y-[90px] md:translate-y-[110px]  md:rotate-[10deg]"
          }`}
        >
          <Image
            width={550}
            height={502}
            src={img2}
            alt="Project Image"
            className=" w-full  rounded-2xl"
          />
        </div>
      </div>
    </Link>
  );
}
