import Link from 'next/link';
import { News_Cycle } from 'next/font/google';
import Image from 'next/image';

const newsCycle = News_Cycle({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
    return (
          <nav className={`w-full flex flex-row items-center justify-between px-6 py-4 ${newsCycle.className} mb-12`}>
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Echolet Logo"
            width={150}
            height={75}
            priority
          />
        </Link>
      </div>

      <div className="flex flex-row items-center gap-8 text-white text-lg font-bold">
        <Link href="/about">About</Link>
        <Link href="/docs">Docs</Link>
        <Link
          href="/explore"
          className="h-[48px] w-[140px] bg-white text-black flex justify-center items-center rounded-md"
        >
          Explore
        </Link>
      </div>
    </nav>
    );
}