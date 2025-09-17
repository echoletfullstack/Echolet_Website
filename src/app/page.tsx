"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "./navbar";
import Section2 from "./section_2";
import Section4 from "./section_4";
import Section5 from "./section_5";
import Section6 from "./section_6";
import SectionSlider from "./section_slider";
import Link from "next/link";
import { News_Cycle, Ms_Madi } from "next/font/google";
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdMouse } from "react-icons/md";

const newsCycle = News_Cycle({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const msMadi = Ms_Madi({
  subsets: ["latin"],
  weight: ["400"],
});

const Home: React.FC = () => {
  // refs
  const heroRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastY = useRef<number>(0);

  const GLOBAL_PARALLAX_MULTIPLIER = 0.45;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    function onScroll(): void {
      lastY.current = window.scrollY;
      if (rafRef.current !== null) return;

      rafRef.current = window.requestAnimationFrame(() => {
        const container = heroRef.current;
        if (!container) {
          rafRef.current = null;
          return;
        }
        const rect = container.getBoundingClientRect();
        const containerTop = rect.top + window.scrollY;
        const offset = lastY.current - containerTop;

        const layers = container.querySelectorAll<HTMLElement>("[data-speed]");
        layers.forEach((el) => {
          const speed = parseFloat(el.dataset.speed ?? "0") || 0;
          const y = Math.round(offset * speed * GLOBAL_PARALLAX_MULTIPLIER);
          el.style.transform = `translate3d(0, ${y}px, 0)`;
        });

        rafRef.current = null;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [GLOBAL_PARALLAX_MULTIPLIER]);

  // slides data (Section3Props)
  const slides = [
    {
      title: (
        <>
          <span className="text-[#7888D0]">Templates</span> Templates Everywhere
        </>
      ),
      body:
        "Most website builders rely on cookie-cutter templates. They all look the same, making it hard to stand out or build a unique identity.",
      imgSrc: "/sec_1.png",
      imgAlt: "Templates Templates Everywhere",
      direction: "row" as const,
    },
    {
      direction: "row-reverse" as const,
      title: (
        <>
          <span className="text-[#D07878]">Error</span> - Prone AI Code
        </>
      ),
      body: "AI tools spit out messy or broken code. Debugging it often takes longer than coding from scratch.",
      imgSrc: "/sec_2.png",
      imgAlt: "Error-Prone AI Code",
    },
    {
      title: (
        <>
          <span className="text-[#78D269]">Heavy</span> Learning Curve
        </>
      ),
      body:
        "To build something truly custom, you still need to know HTML, CSS, React, ThreeJs, etc, etc. That’s months (or years) of learning.",
      imgSrc: "/sec_3.png",
      imgAlt: "Heavy Learning Curve",
      direction: "row" as const,
    },
    {
      direction: "row-reverse" as const,
      title: (
        <>
          <span className="text-[#D07878]">Inefficient</span> & Slow
        </>
      ),
      body:
        "Manual coding or dragging components around is time-consuming. A “simple” portfolio can take days or weeks to complete.",
      imgSrc: "/sec_4.png",
      imgAlt: "Inefficient & Slow",
    },
    {
      title: (
        <>
          <span className="text-[#78D269]">Limited</span> Creativity
        </>
      ),
      body:
        "Tools restrict you to predefined layouts. Want to try something experimental? You either break the design or the code.",
      imgSrc: "/sec_5.png",
      imgAlt: "Limited Creativity",
      direction: "row" as const,
    },
  ];

  return (
    <>
      <section
        ref={heroRef}
        className="min-h-[100vh] w-full relative flex flex-col items-center text-center overflow-hidden"
      >
        <div
          data-speed="0.85"
          className="absolute inset-0 bg-center bg-no-repeat bg-cover will-change-transform"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
          aria-hidden
        />

        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 w-full flex flex-col items-center">
          <Navbar />

          <div
            data-speed="0.35"
            className={`${newsCycle.className} font-bold text-white flex flex-col w-[90vw] sm:w-[80vw] md:w-[65vw] lg:w-[55vw]`}
          >
            <h1 className="text-center m-0 text-3xl sm:text-4xl md:text-[56px] lg:text-[64px] leading-tight">WE&apos;RE SHAPING A NEW ERA</h1>

            <div className="flex justify-between w-full items-start">
              <h1 className="text-left m-0 text-3xl sm:text-4xl md:text-[56px] lg:text-[64px] leading-tight">FOR HOW</h1>
              <h1 className="text-right m-0 text-3xl sm:text-4xl md:text-[56px] lg:text-[64px] leading-tight">WEBSITES ARE</h1>
            </div>

            <h1 className="self-end m-0 pr-[5vw] text-4xl sm:text-5xl md:text-[72px] lg:text-[80px] leading-tight">MADE.</h1>
          </div>

          <div className="flex flex-row gap-6 sm:gap-10 md:gap-16 mt-10 sm:mt-16 md:mt-24 items-center">
            <Link href="/docs" className="flex items-center gap-2 text-white font-bold">
              <span>Know More</span>
              <IoArrowForwardOutline size={24} className="transform rotate-[315deg]" />
            </Link>

            <div>
              <Link
                href="/explore"
                className="h-[44px] w-[120px] sm:h-[48px] sm:w-[140px] bg-white text-black flex justify-center items-center rounded-md text-sm sm:text-base"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-4 sm:px-8 text-white z-20 pointer-events-none">
          {/* Subtext visible on md and larger */}
          <div
            data-speed="0.18"
            className="hidden md:flex absolute left-4 sm:left-8 bottom-6 sm:bottom-8 font-bold text-[28px] lg:text-[40px] flex-col gap-2"
          >
            <div className="flex flex-wrap gap-2">
              <span className={`${newsCycle.className} text-white`}>World&apos;s</span>
              <span className={`${msMadi.className} text-white/50`}>first</span>
              <span className={`${newsCycle.className} text-white/50`}>AI</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className={`${newsCycle.className} text-white/50`}>native</span>
              <span className={`${msMadi.className} text-white/50`}>website</span>
              <span className={`${msMadi.className} text-white`}>builder</span>
            </div>
          </div>

          {/* Mouse icon visible only on mobile */}
          <div className="md:hidden flex justify-center items-center mb-6 sm:mb-8">
            <MdMouse size={28} className="text-white/80" />
          </div>
        </div>
      </section>

      <Section2 />

      <div className="bg-[#EEEEEE]">
        <SectionSlider items={slides} />
      </div>

      <Section4 />
      <Section5 />
      <Section6 />
    </>
  );
};

export default Home;
