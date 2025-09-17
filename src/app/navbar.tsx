import Link from 'next/link';
import { News_Cycle } from 'next/font/google';
import Image from 'next/image';

const newsCycle = News_Cycle({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
    return (
          <nav className={`w-full flex flex-row items-center justify-between px-4 sm:px-6 py-3 sm:py-4 ${newsCycle.className} mb-8 sm:mb-12`}>
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Echolet Logo"
            width={130}
            height={65}
            priority
          />
        </Link>
      </div>

      {/* Desktop links */}
      <div className="hidden sm:flex flex-row items-center gap-6 lg:gap-8 text-white text-base lg:text-lg font-bold">
        <Link href="/about">About</Link>
        <Link href="/docs">Docs</Link>
        <Link
          href="/explore"
          className="h-[44px] w-[120px] lg:h-[48px] lg:w-[140px] bg-white text-black flex justify-center items-center rounded-md"
        >
          Explore
        </Link>
      </div>

      {/* Mobile primary action */}
      <div className="sm:hidden">
        <Link
          href="/explore"
          className="h-[36px] px-4 bg-white text-black flex justify-center items-center rounded-md text-sm font-semibold"
        >
          Explore
        </Link>
      </div>
    </nav>
    );
}