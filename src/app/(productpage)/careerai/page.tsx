import ProductPageSection from "@/components/ProductPageSection";
import React from "react";

export default function Page() {
  return (
    <>
      <ProductPageSection
        logo="/images/project/p2logo.svg"
        logoBgColor="#2A1F88"
        title="CAREERAI"
        description="CareerAI is built for individuals and institutions alike. We aim to ease the process of job hunting and applying to ensure maximum chances of getting hired. We understand the need to pay attention to details and follow through with each approach."
        tags={["Web Design", "UI/UX Design"]}
        topImage="/images/project/p22top.svg"
        bottomLeftImage="/images/project/p22bottomleft.svg"
        bottomRightImage="/images/project/p22bottomright.svg"
      />
      <section className="my-16 mt-0 w-full flex items-center justify-center flex-col ">
        <p className="w-[720px] max-w-[90%] text-center text-2xl mb-[40px]">
          &quot;Working with Rikesh was a seamless and inspiring experience. As
          the UI/UX designer he brought clarity to our vision and transformed
          complex LMS requirements into intuitive, user-friendly designs. His
          communication was clear, timelines were respected, and the final
          outcome helped us deliver a product that truly resonates with users.
          I’d highly recommend Rikesh to any team looking for a thoughtful and
          creative designer.&quot;
        </p>
        <p className="text-center text-2xl font-semibold">Maven Solutions</p>
        <p className="text-center text-xl ">Co Founder</p>
      </section>
    </>
  );
}
