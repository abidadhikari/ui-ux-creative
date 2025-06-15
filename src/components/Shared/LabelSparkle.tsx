import React from "react";
import sparkleStrokes from "../../../public/sparklestrokes.svg";
import Image from "next/image";

export default function LabelSparkle(props: {
  className?: string;
  text: string;
  isLeft?: boolean;
}) {
  const { className, text, isLeft } = props;
  return (
    <div
      className={`font-space-grotesk  border-black border-[8px] py-[10px] px-[25px] lg:px-[45px] text-[14px] sm:text-[29px] rounded-[92px] relative ${className}`}
    >
      {text}
      <Image
        src={sparkleStrokes}
        alt="Sparkle Strokes"
        className={
          isLeft
            ? "inline-block absolute top-[-60px] left-[-50px] rotate-[-90deg]"
            : "inline-block absolute top-[-60px] right-[-50px]"
        }
      />
    </div>
  );
}
