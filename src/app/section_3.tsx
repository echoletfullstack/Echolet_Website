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
  const paragraphClass = direction.startsWith("row") ? "md:w-[40%] w-full" : "w-full";

  return (
    <section className="w-full overflow-hidden">
      <div
        className={`w-[90vw] md:w-[80vw] flex flex-col gap-6 md:gap-8 my-8 mx-auto ${newsCycle.className} text-[#474747] ${className}`}
      >
        <div className={`flex flex-col md:${dirClass} justify-between items-start md:items-baseline gap-4 md:gap-16`}>
          <h1 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[56px] font-bold leading-tight">{title}</h1>
          <p className={`${paragraphClass} text-base sm:text-lg`}>{body}</p>
        </div>
        {/* Image hidden on mobile as requested */}
        <div className="relative w-full h-[40vh] md:h-[50vh] max-h-[60vh] hidden sm:block">
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
