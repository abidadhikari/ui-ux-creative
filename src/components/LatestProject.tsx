import React from "react";
import LatestProjectCard from "./Shared/LatestProjectCard";

export default function LatestProject() {
  return (
    <div className="my-width m-auto py-[121px]  flex items-center justify-center flex-col">
      <h2 className="text-[60px] font-extrabold mb-[110px] relative">
        OUR LATEST WORKS
        <span className="text-4xl font-cursive bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-transparent bg-clip-text absolute top-[-30px] right-[-30px] pr-1 rotate-[10deg]">
          Since 2021
        </span>
      </h2>
      <div className="w-full flex flex-col gap-[65px]">
        <LatestProjectCard />
        <LatestProjectCard />
      </div>
    </div>
  );
}
