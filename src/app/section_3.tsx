import React from "react";
import { News_Cycle } from "next/font/google";
import Image, { StaticImageData } from "next/image";

const newsCycle = News_Cycle({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export interface Section3Props {
  title: React.ReactNode;
  body: React.ReactNode;
  imgSrc: StaticImageData | string;
  imgAlt?: string;
  className?: string;

  direction?: "row" | "row-reverse" | "column" | "column-reverse";
}

const directionToClass: Record<
  NonNullable<Section3Props["direction"]>,
  string
> = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  column: "flex-col",
  "column-reverse": "flex-col-reverse",
};

const Section3: React.FC<Section3Props> = ({
  title,
  body,
  imgSrc,
  imgAlt = "section image",
  className = "",
  direction = "row",
}) => {
  const dirClass = directionToClass[direction];
  const paragraphClass =
    direction.startsWith("row") ? "w-[40%]" : "w-full";

  return (
    <section className="w-full overflow-hidden max-h-screen">
      <div
        className={`w-[80vw] flex flex-col gap-8 my-8 mx-auto ${newsCycle.className} text-[#474747] ${className}`}
      >
        <div
          className={`flex ${dirClass} justify-between items-baseline gap-16`}
        >
          <h1 className="text-[56px] font-bold">{title}</h1>
          <p className={`${paragraphClass}`}>{body}</p>
        </div>
        <div className="relative w-full h-[50vh] max-h-[60vh]">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
