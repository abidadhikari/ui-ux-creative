import React from "react";
import LatestProjectCard from "./Shared/LatestProjectCard";

export default function LatestProject() {
  return (
    <div className="my-width m-auto py-[121px]  flex items-center justify-center flex-col">
      <h2 className="text-[60px] font-extrabold mb-[110px]">
        OUR LATEST WORKS
      </h2>
      <div className="w-full flex flex-col gap-[65px]">
        <LatestProjectCard />
        <LatestProjectCard />
      </div>
    </div>
  );
}
