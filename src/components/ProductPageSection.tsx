import Image from "next/image";
import React from "react";

interface ProductPageSectionProps {
  logoBgColor?: string;
  logo: string;
  title: string;
  description: string;
  tags: string[];
  topImage: string;
  bottomLeftImage: string;
  bottomRightImage: string;
}

export default function ProductPageSection(props: ProductPageSectionProps) {
  const {
    logoBgColor,
    logo,
    title,
    description,
    tags,
    topImage,
    bottomLeftImage,
    bottomRightImage,
  } = props;
  return (
    <div className="flex flex-col items-center justify-center pb-32">
      <div
        className={`size-[100px] rounded-[20px] mb-[40px] flex items-center justify-center`}
        style={{ backgroundColor: logoBgColor || "#014066" }}
      >
        <Image
          src={logo}
          alt="Logo"
          width={60}
          height={60}
          className="!w-[60px] !h-[60px]"
        />
      </div>
      <h1 className="font-bold text-4xl mb-5">{title}</h1>
      <p className="w-[780px] max-w-[90%] text-center text-2xl mb-[60px]">
        {description}
      </p>
      <div className="flex gap-[20px] mb-[60px]">
        {tags.map((item: string, index: number) => {
          return (
            <div
              key={index}
              className="bg-[#FFCF24] rounded-[100px] py-[10px] px-[30px]"
            >
              {item}
            </div>
          );
        })}
      </div>

      <div className="flex items center gap-[40px] flex-col w-full ">
        <Image
          src={topImage}
          alt="Top Image"
          width={1200}
          height={600}
          className="!w-full h-fit  "
        />
        <div className="grid grid-cols-2 gap-[40px]  w-full">
          <Image
            src={bottomLeftImage}
            alt="Top Image"
            width={1200}
            height={600}
            className="w-full h-fit   "
          />
          <Image
            src={bottomRightImage}
            alt="Top Image"
            width={1200}
            height={600}
            className="w-full h-fit   "
          />
        </div>
      </div>
    </div>
  );
}
