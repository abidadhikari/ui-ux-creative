import React from "react";
import MarqueeSection from "./MarqueeSection";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <MarqueeSection />
      <div className="py-[230px] pb-[130px] flex flex-col items-center justify-center gap-[100px]">
        <div className=" relative w-fit">
          <button className="button-gradient text-white py-[28px] px-[90px] font-bold text-4xl rounded-[100px] cursor-pointer hover:scale-[1.05] transition-all duration-300">
            CONNECT
          </button>
          <div className="w-[290px] font-cursive text-4xl absolute font-bold right-[-140px] top-[-120px] rotate-8">
            Tap this &lsquo;tiny&rsquo; button to start your product =)
          </div>
        </div>
      </div>
      <section className="my-width m-auto flex  items-center justify-center gap-[100px] text-center mb-[125px] text-2xl leading-1.5">
        <div className="">
          <Image
            src="/Message.svg"
            alt="message"
            width={32}
            height={32}
            className="inline-block mr-2"
          />
          uiuxcreative2821@gmail.com
        </div>
        <div>
          <Image
            src="/Call.svg"
            alt="call"
            width={32}
            height={32}
            className="inline-block mr-2"
          />
          +977 9813270713
        </div>
        <div className="flex items-center justify-center gap-6">
          <Link href="/">
            <Image
              src="/Instagram.svg"
              alt="Instagram"
              width={40}
              height={40}
              className="inline-block hover:translate-y-[-5px] transition-all duration-300"
            />
          </Link>
          <Link href="/">
            <Image
              src="/Dribble.svg"
              alt="Dribble"
              width={40}
              height={40}
              className="inline-block hover:translate-y-[-5px] transition-all duration-300"
            />
          </Link>
          <Link href="/">
            <Image
              src="/Tiktok.svg"
              alt="Tiktok"
              width={40}
              height={40}
              className="inline-block hover:translate-y-[-5px] transition-all duration-300"
            />
          </Link>

          <Link href="/">
            <Image
              src="/Youtube.svg"
              alt="Youtube"
              width={40}
              height={40}
              className="inline-block hover:translate-y-[-5px] transition-all duration-300"
            />
          </Link>
        </div>
      </section>
    </footer>
  );
}
