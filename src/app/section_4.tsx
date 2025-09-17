"use client";

import React, { useCallback, useEffect, useMemo, useState, JSX } from "react";
import { News_Cycle, New_Rocker } from "next/font/google";
import Image from "next/image";

const newsCycle = News_Cycle({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const newRocker = New_Rocker({ subsets: ["latin"], weight: ["400"] });

type PillarCard = {
  id: number;
  img: string;
  title: string;
  description: string;
  accent?: string;
};

const CARDS: PillarCard[] = [
  { id: 0, img: "/cards/0.png", title: "AI-Native Generation", description: "Echolet builds websites block by block with AI — no messy code, no rigid templates. Just predictable, creative, error-free designs that come alive instantly.", accent: "#EFD9B4" },
  { id: 1, img: "/cards/1.png", title: "Complete Control", description: "Edit, animate, and customize every block to match your vision. From parallax effects to keyframed animations — you’re in charge, not the AI.", accent: "#D8C6F0" },
  { id: 2, img: "/cards/2.png", title: "Instant Essentials", description: "Forms, login pages, error screens, loading states — already baked in. No plugins, no extra setup. Your website is functional from the start.", accent: "#BDE1C5" },
  { id: 3, img: "/cards/3.png", title: "Flexible Output", description: "Publish instantly or export the clean code in your favorite stack — React, Vue, Next.js, and more. Freedom for no-coders and developers alike.", accent: "#C7E0D9" },
  { id: 4, img: "/cards/4.png", title: "There's much more", description: "We're not just limited to these 4 pillars but we offer a lot lot more. Stay with us to find out more !", accent: "#C7E0D9" },
];

export default function Section4(): JSX.Element {

  const STACK_W = 320;
  const STACK_H = 480;

  const [removedMap, setRemovedMap] = useState<Record<number, boolean>>({});
  const [selected, setSelected] = useState<PillarCard | null>(null);

  const topIndex = useMemo(() => {
    for (let i = 0; i < CARDS.length; i++) {
      if (!removedMap[CARDS[i].id]) return i;
    }
    return -1; 
  }, [removedMap]);

  const handleTopCardClick = useCallback(
    (card: PillarCard) => {
 
      const cardGlobalIndex = CARDS.findIndex((c) => c.id === card.id);
      if (cardGlobalIndex !== topIndex) return;

      setRemovedMap((m) => ({ ...m, [card.id]: true }));
      setSelected(card);
    },
    [topIndex]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        setRemovedMap((m) => {
          const copy = { ...m };
          const lastRemovedId = Object.keys(copy).find(id => copy[+id]);
          if (lastRemovedId) {
            delete copy[+lastRemovedId];
          }
          return copy;
        });
        setSelected(CARDS.find(c => !removedMap[c.id]) || null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [removedMap]);

  return (
    <section className={`${newsCycle.className} w-full min-h-screen overflow-x-hidden flex items-center justify-center box-border`}>
      <div className="max-w-7xl w-full h-[90vh] flex items-center gap-8 mx-auto box-border px-4">
        <div className="w-[40%] flex flex-col gap-6">
          <div className="flex flex-col items-baseline gap-4">
            <div className="flex items-baseline gap-4">
              <h2 className="text-[56px] font-extrabold" style={{ color: "#D26969", lineHeight: 1 }}>4</h2>
              <div className="text-[56px] font-extrabold" style={{ color: "#474747", lineHeight: 1 }}>PILLARS OF</div>
            </div>
            <div className="text-[56px] font-extrabold" style={{ color: "#474747", lineHeight: 1 }}>ECHOLET</div>
          </div>
          <p className="text-[20px] text-[#474747] leading-relaxed">
            Echolet is not unique because we say-so; it’s different in its core understanding of how things should work and must work.
          </p>
          <div className="mt-4 text-[#474747]">
            {selected ? (
              <>
                <h3 className="text-[28px] font-bold mb-3">{selected.title}</h3>
                <p className={`text-[20px] leading-relaxed ${newsCycle.className}`}>{selected.description}</p>
              </>
            ) : (
              <>
                <h3 className="text-[28px] font-semibold mb-3">Click a pillar to know more</h3>
                <p className={`text-[20px] leading-relaxed text-[#6b6b6b] ${newsCycle.className}`}>
                  Click the top card to slide it away and reveal the one beneath. Press the ← key to undo.
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: STACK_W,
              height: STACK_H,
            }}
          >
            {CARDS.map((card, i) => {
              const isRemoved = !!removedMap[card.id];
              const isTop = topIndex === i;

              const offsetY = -i * 8;
              const offsetX = i * 6;
              const zIndex = 2000 - i;

              const exitTranslate = isRemoved ? "140%" : "0%";
              const exitRotate = isRemoved ? "6deg" : "0deg";
              const baseTransform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
              const transform = `${baseTransform} translateX(${exitTranslate}) rotate(${exitRotate})`;

              return (
                <button
                  key={card.id}
                  onClick={() => handleTopCardClick(card)}
                  aria-label={`Card for ${card.title}`}
                  className="absolute left-0 top-0 p-0 border-0 bg-transparent rounded-xl"
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex,
                    transform,
                    transition: "transform 1000ms cubic-bezier(.2,.9,.25,1), opacity 800ms ease, box-shadow 400ms ease",
                    willChange: "transform, opacity, box-shadow",
                    boxShadow: isTop ? "0 18px 36px rgba(0,0,0,0.3)" : "0 8px 18px rgba(0,0,0,0.15)",
                    cursor: isTop ? "pointer" : "default",
                    opacity: isRemoved ? 0 : 1,
                    pointerEvents: isRemoved ? "none" : "auto",
                    backgroundColor: card.accent ?? "#f0f0f0",
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        pointerEvents: "none",
                        borderRadius: 'inherit',
                      }}
                      priority={card.id === 0}
                    />
                  </div>
                  {card.id === 0 && !isRemoved && (
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-16 text-left select-none pointer-events-none"
                    >
                      <div
                        className={`${newRocker.className} text-[56px] leading-tight text-[#BD984A]`}
                        
                      >
                        Click here to know more
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}