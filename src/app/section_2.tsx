import { News_Cycle } from "next/font/google";
const newsCycle = News_Cycle({
    subsets: ["latin"],
    weight: ["400", "700"],
});
export default function Section2() {
    return (
        <div className={`bg-[#EEEEEE] flex flex-col items-center text-center py-8 ${newsCycle.className}`}>
            <h1 className="text-[#474747] text-[40px] font-bold mb-8">What are we ?</h1>
            <div className="w-full text-left px-32 flex flex-col gap-4 text-[#474747] text-[20px] bg-white py-16 px-16">
                <p className="font-bold">Echolet is the world’s first AI-native website builder.</p>
                <p>Unlike template-driven or error-prone AI tools, Echolet builds block by block — predictable, creative, unique, and error-free.</p>
                <p>Anyone can design a professional portfolio or website in minutes, with built-in essentials like login, forms, error screens, and more — auto-implemented from the start.</p>
                <p>Powered by AI, fully under your control. With Echolet, you’re not just building a website, you’re building an experience.</p>
                <p>And if you prefer code, export your project into your favorite tech stack with one click.</p>
            </div>
        </div>
    );
}