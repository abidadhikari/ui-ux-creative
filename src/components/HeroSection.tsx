import React from "react";
import LabelSparkle from "./Shared/LabelSparkle";

export default function HeroSection() {
  return (
    <div className="pt-[400px] pb-[132px] h-screen bg-[url('/herogradient.svg')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center">
      <div className="my-width m-auto text-black ">
        <div className="w-full  flex items-center justify-between">
          <div className="w-[805px] text-[30px] leading-[110%] text-left">
            Hi! Meet your trusted design partner for
            <br />
            websites, apps, and digital products.
          </div>
          <div>
            <LabelSparkle
              className="bg-[#FFCF24] rotate-10 translate-y-[-100px] transition-all hover:rotate-0 "
              text="Industry-leading Design"
              isLeft={false}
            />
          </div>
        </div>
        <h1 className="text-[183px] font-[900] leading-[120%]">UIUXCREATIVE</h1>
      </div>
    </div>
  );
}
