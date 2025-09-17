"use client";

import Link from "next/link";
import React, { JSX } from "react";
import { News_Cycle } from "next/font/google";

const newsCycle = News_Cycle({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Section5(): JSX.Element {
  return (
    <section className={`${newsCycle.className} w-full min-h-[60vh] flex items-center justify-center bg-[#181818]`}>
      <div className="w-full max-w-[980px] px-6 py-16 flex flex-col items-center text-center box-border">
        <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-extrabold leading-tight text-white">
          Wanna join us ?
        </h1>

        <p className="mt-6 text-[18px] sm:text-[19px] md:text-[20px] text-white max-w-[760px] leading-relaxed">
          We are constantly in need for help and we’d love for you to join us !
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link href="/learn" className="inline-flex items-center gap-2 text-white text-[18px] no-underline" aria-label="Learn more">
            <span>Learn More</span>

            <svg
              className="-rotate-45 w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/join"
            className="inline-flex items-center justify-center bg-white text-black text-[18px] no-underline px-6 py-2 rounded"
            aria-label="Join us"
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
}
