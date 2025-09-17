"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Section3, { Section3Props } from "./section_3";

export interface SectionSliderProps {
  items: Section3Props[];
  startIndex?: number;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
}

const SWIPE_THRESHOLD = 40; // px

const SectionSlider: React.FC<SectionSliderProps> = ({
  items,
  startIndex = 0,
  className = "",
  showDots = true,
  showArrows = true,
}) => {
  const [index, setIndex] = useState<number>(Math.min(Math.max(0, startIndex), items.length - 1));
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDelta = useRef<number>(0);

  const go = useCallback(
    (to: number) => {
      const clamped = Math.max(0, Math.min(items.length - 1, to));
      setIndex(clamped);
    },
    [items.length]
  );
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);


  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);


  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Use type assertion to avoid TypeScript errors with CSS properties
    const trackStyle = track.style as CSSStyleDeclaration & {
      willChange: string;
      backfaceVisibility: string;
      transition: string;
      transform: string;
    };

    trackStyle.willChange = "transform";
    trackStyle.backfaceVisibility = "hidden";
    trackStyle.transition = "none";
    trackStyle.transform = `translate3d(-${index * 100}%, 0, 0)`;

    // Force reflow
    track.offsetHeight;

    trackStyle.transition = "transform 500ms ease-out";
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackStyle = track.style as CSSStyleDeclaration;
    if (!trackStyle.transition) trackStyle.transition = "transform 500ms ease-out";
    trackStyle.transform = `translate3d(-${index * 100}%, 0, 0)`;
  }, [index]);


  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function onTouchStart(e: TouchEvent) {
      touchStartX.current = e.touches[0].clientX;
      touchDelta.current = 0;
      const track = trackRef.current;
      if (track) (track.style as CSSStyleDeclaration).transition = "none";
    }
    
    function onTouchMove(e: TouchEvent) {
      if (touchStartX.current === null) return;
      const x = e.touches[0].clientX;
      touchDelta.current = x - touchStartX.current;
      const track = trackRef.current;
      if (track) {
        // move by pixels relative to current index
        (track.style as CSSStyleDeclaration).transform = `translate3d(calc(-${index * 100}% + ${touchDelta.current}px), 0, 0)`;
      }
    }
    
    function onTouchEnd() {
      const delta = touchDelta.current;
      const track = trackRef.current;
      if (track) (track.style as CSSStyleDeclaration).transition = "transform 500ms ease-out"; // re-enable
      if (delta > SWIPE_THRESHOLD) prev();
      else if (delta < -SWIPE_THRESHOLD) next();
      else {
        // snap back
        if (track) track.style.transform = `translate3d(-${index * 100}%, 0, 0)`;
      }
      touchStartX.current = null;
      touchDelta.current = 0;
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [index, next, prev]);

  if (!items || items.length === 0) return null;

  return (
    <div className={`relative w-full overflow-hidden ${className}`} ref={containerRef}>

      <div
        ref={trackRef}
        className="flex"
        aria-live="polite"

        style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ flex: "0 0 100%", minWidth: "100%" }}
          >
            <Section3 {...item} />
          </div>
        ))}
      </div>


      {showArrows && (
        <>
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            style={{ backdropFilter: "blur(4px)" }}
          >
            <IoChevronBackOutline size={22} />
          </button>

          <button
            aria-label="Next slide"
            onClick={next}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            style={{ backdropFilter: "blur(4px)" }}
          >
            <IoChevronForwardOutline size={22} />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4 z-30 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`transition-all rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
              style={{ height: 10, width: i === index ? 22 : 16 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionSlider;
