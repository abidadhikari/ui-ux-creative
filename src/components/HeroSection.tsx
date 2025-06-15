import React from "react";
import LabelSparkle from "./Shared/LabelSparkle";
import NavBar from "./NavBar";

export default function HeroSection() {
  return (
    <div className="pt-[400px] pb-[132px] h-screen bg-[url('/herogradient.svg')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center">
      <NavBar />
      <div className="my-width m-auto text-black ">
        <div className="w-full flex-col lg:flex-row  flex items-center justify-between gap-12 lg:gap-0">
          <div className="lg:w-[805px] text-[25px] md:text-[30px] leading-[110%] text-center lg:text-left">
            Hi! Meet your trusted design partner for
            <br />
            websites, apps, and digital products.
          </div>
          <div>
            <LabelSparkle
              className="bg-[#FFCF24]  lg:rotate-10 lg:translate-y-[-100px] transition-all hover:rotate-0 "
              text="Industry-leading Design"
              isLeft={false}
            />
          </div>
        </div>
        <h1 className=" mt-5 md:mt-0 text-[45px] sm:text-[50px] md:text-[100px] lg:text-[183px] font-[900] leading-[120%]">
          UIUXCREATIVE
        </h1>
      </div>
    </div>
  );
}
