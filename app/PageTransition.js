"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const loadingIcons = [
    "🍕",
    "🌯",
    "🍷",
    "🍲",
    "🍛",
    "🧫",
    "🧉",
    "🍣",
    "🍨",
    "🥘",
    "🥮",
    "🍬",
    "🥗",
    "🍚",
    "🍳",
    "🍪",
    "🌮",
    "🍹",
    "🌭",
    "🍛",
    "🍙",
    "🍔",
    "🍘",
    "🍟",
    "🍥",
    "🍢",
    "🍖",
    "🍩",
    "🍱",
    "🥐",
    "🥞",
    "🍜",
    "🥪",
    "🍿",
    "🍮",
    "🍫",
    "🍝",

  ];
  
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [emojiIndex, setEmojiIndex] = useState(0);
  useEffect(() => {
    setLoading(true);
    const emojiInterval = setInterval(() => {
      setEmojiIndex((prev)=> prev + 1 % loadingIcons.length)
    }, 150);
   const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [pathname]);

  return (
    <>
      {loading ? (
        <div className="flex flex-col  items-center text-center justify-center h-screen">
          <div className="text-7xl animate-bounce">
            {loadingIcons[emojiIndex]}
          </div>
          <div className="text-xl text-blue-950 font-medium animate-pulse duration-200">
            Cooking....
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
