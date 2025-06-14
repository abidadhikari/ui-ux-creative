import React from "react";
import sparkleStrokes from "../../../public/sparklestrokes.svg";
import Image from "next/image";

export default function LabelSparkle(props: { className?: string }) {
  const { className } = props;
  return (
    <div
      className={`font-space-grotesk bg-[#FFCF24] border-black border-[8px] py-[10px] px-[45px] text-[29px] rounded-[92px] relative ${className}`}
    >
      Industry-leading Design
      <Image
        src={sparkleStrokes}
        alt="Sparkle Strokes"
        className="inline-block absolute top-[-60px] right-[-50px]"
      />
    </div>
  );
}
