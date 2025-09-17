import { News_Cycle } from "next/font/google";
const newsCycle = News_Cycle({
    subsets: ["latin"],
    weight: ["400", "700"],
});
export default function Section2() {
    return (
        <div className={`bg-[#EEEEEE] flex flex-col items-center text-center py-8 ${newsCycle.className}`}>
            <h1 className="text-[#474747] text-3xl sm:text-[36px] md:text-[40px] font-bold mb-6 sm:mb-8">What are we ?</h1>
            <div className="w-full text-left px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col gap-4 text-[#474747] bg-white py-8 sm:py-12 md:py-16">
                <p className="font-bold text-base sm:text-lg md:text-[20px]">Echolet is the world’s first AI-native website builder.</p>
                <p className="text-base sm:text-lg md:text-[20px]">Unlike template-driven or error-prone AI tools, Echolet builds block by block — predictable, creative, unique, and error-free.</p>
                <p className="text-base sm:text-lg md:text-[20px]">Anyone can design a professional portfolio or website in minutes, with built-in essentials like login, forms, error screens, and more — auto-implemented from the start.</p>
                <p className="text-base sm:text-lg md:text-[20px]">Powered by AI, fully under your control. With Echolet, you’re not just building a website, you’re building an experience.</p>
                <p className="text-base sm:text-lg md:text-[20px]">And if you prefer code, export your project into your favorite tech stack with one click.</p>
            </div>
        </div>
    );
}