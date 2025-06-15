import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center pb-32">
      <div className="size-[100px] rounded-[20px] bg-[#E4EBFB] mb-[40px] flex items-center justify-center">
        LOGO
      </div>
      <h1 className="font-bold text-4xl mb-5">BEYONDHIMALAYAS</h1>
      <p className="w-[700px] max-w-[90%] text-center text-2xl mb-[60px]">
        Polpis Systems is transforming geothermal energy with deep Earth
        exploration. I got a chance to collaborate with their founders while
        still part of the 0O design team. In short, they needed a complete
        digital presence reflecting innovation and transparency.
      </p>
      <div className="flex gap-[20px] mb-[60px]">
        {["Web Design", "UI/UX Research"].map((item: string, index: number) => {
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

      <div className="flex items center gap-[62px] flex-col w-full">
        <div className="w-full h-[650px] flex items-center justify-center bg-[#E4EBFB] rounded-[100px]">
          Image
        </div>
        <div className="flex items center gap-[40px] flex-wrap w-full">
          <div className="w-full h-[600px] flex items-center justify-center bg-[#E4EBFB] rounded-[100px]">
            Image
          </div>
          <div className="w-full h-[600px] flex items-center justify-center bg-[#E4EBFB] rounded-[100px]">
            Image
          </div>
        </div>
      </div>

      <section className="mt-28 w-full">
        <p className="w-[700px] max-w-[90%] text-center text-2xl mb-[40px]">
          &quot;Polpis Systems is transforming geothermal energy with deep Earth
          exploration. I got a chance to collaborate with their founders while
          still part of the 0O design team. In short, they needed a complete
          digital presence reflecting innovation and transparency.&quot;
        </p>
        <p className="text-center text-2xl font-semibold">“Bishal Shrestha.”</p>
      </section>
    </div>
  );
}
