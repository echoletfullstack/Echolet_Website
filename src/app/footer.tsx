// components/Footer.tsx
"use client";

import Link from "next/link";
import React, {JSX} from "react";
import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function Footer(): JSX.Element {
  return (
    <footer
      className={`${manrope.className} w-full bg-white border-t border-gray-200 text-[#181818]`}
    >
      <div className="max-w-[1200px] mx-auto px-8 py-12">

        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">

          <div className="flex-1 flex flex-col justify-between h-full gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">

                <div className="relative w-28 h-auto">
                  <Image 
                    src="/logo.png" 
                    alt="Echolet logo" 
                    width={112}
                    height={56}
                    className="invert"
                    priority
                  />
                </div>

                <span className="sr-only">Echolet</span>
              </div>

              <div className="font-semibold text-[20px] leading-snug mb-3">Websites, for everyone !</div>

              <div className="text-[16px] text-[#181818]/90">All rights reserved. Copyright &copy; Echolet Inc.</div>
            </div>

            <div className="pt-6">
              <nav aria-label="Footer secondary links" className="text-[18px] text-[#181818]/60">
                <Link href="/privacy" className="underline decoration-gray-200 decoration-1 hover:decoration-gray-300">
                  Privacy Policy
                </Link>
                <span className="mx-4 text-gray-300">|</span>
                <Link href="/join" className="underline decoration-gray-200 decoration-1 hover:decoration-gray-300">
                  Join Us
                </Link>
                <span className="mx-4 text-gray-300">|</span>
                <Link href="/subscribe" className="underline decoration-gray-200 decoration-1 hover:decoration-gray-300">
                  Subscribe
                </Link>
              </nav>
            </div>
          </div>

          <div className="flex-1 flex flex-row gap-16 md:justify-end">
            <div className="min-w-[160px]">
              <h4 className="text-[20px] font-semibold mb-4">Things to do</h4>
              <nav className="flex flex-col gap-3 text-[16px] text-[#181818]/85" aria-label="Things to do">
                <Link href="/join" className="no-underline">Join Us</Link>
                <Link href="/contact" className="no-underline">Contact Us</Link>
                <Link href="/tools" className="no-underline">Try our Tools</Link>
                <Link href="/games" className="no-underline">Games</Link>
              </nav>
            </div>

            <div className="min-w-[120px]">
              <h4 className="text-[20px] font-semibold mb-4">Read</h4>
              <nav className="flex flex-col gap-3 text-[16px] text-[#181818]/85" aria-label="Read">
                <Link href="/updates" className="no-underline">Latest Updates</Link>
                <Link href="/blog" className="no-underline">Blogs</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
