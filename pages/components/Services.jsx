import React from "react";
import { animated, useSpring } from "react-spring";
import { AiOutlineTool, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 200,
  -(x - window.innerWidth / 2) / 200,
  1.05,
];
const trans = (x, y, s) =>
  `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Services() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 350, friction: 40 },
  }));

  return (
<section className="bg-black py-16 px-4 text-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
      CHOOSE YOUR LEVEL OF MAYHEM 🍾💣
    </h2>
    <p className="text-gray-400 mb-12">
      From a slight buzz to full-blown blackout, we’ve got your party covered.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* The Buzz */}
      <div className="bg-gradient-to-tr from-lime-600 to-cyan-500 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-3">THE BUZZ 🐝</h3>
          <p className="text-white/90 mb-4">Perfect for small gatherings or chill get-togethers.</p>
          <ul className="text-sm text-white/80 space-y-2 mb-6 text-left">
            <li>✔️ 1 Licensed Bartender (3 hrs)</li>
            <li>✔️ Basic Bar Setup</li>
            <li>✔️ Bar Tools & Ice Bucket</li>
            <li>✔️ Disposable Cups & Napkins</li>
            <li>❗ Client provides alcohol</li>
          </ul>
        </div>
        <p className="text-lg font-bold mb-3">$450+</p>
        <Button className="bg-black text-lime-400 hover:bg-white/10 w-full">BOOK THIS LEVEL</Button>
      </div>

      {/* The Mayhem */}
      <div className="bg-gradient-to-tr from-pink-600 to-red-500 rounded-2xl p-6 shadow-lg flex flex-col justify-between border-4 border-white">
        <div>
          <h3 className="text-2xl font-bold mb-3">THE MAYHEM 🎉</h3>
          <p className="text-white/90 mb-4">Level up the chaos for birthdays, weddings, and wild nights.</p>
          <ul className="text-sm text-white/80 space-y-2 mb-6 text-left">
            <li>✔️ 1–2 Bartenders (4–5 hrs)</li>
            <li>✔️ Premium Bar Setup</li>
            <li>✔️ Signature Drink Menu (up to 4)</li>
            <li>✔️ Mixers, Ice, Garnishes</li>
            <li>✔️ Setup & Cleanup</li>
            <li>❗ Client provides alcohol</li>
          </ul>
        </div>
        <p className="text-lg font-bold mb-3">$850+</p>
        <Button className="bg-black text-pink-400 hover:bg-white/10 w-full">BOOK THIS LEVEL</Button>
      </div>

      {/* The Blackout */}
      <div className="bg-gradient-to-tr from-yellow-500 via-orange-500 to-red-600 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-3">THE BLACKOUT 💀</h3>
          <p className="text-white/90 mb-4">Our full-throttle party takeover. Go big or go home.</p>
          <ul className="text-sm text-white/80 space-y-2 mb-6 text-left">
            <li>✔️ 2+ Bartenders (5+ hrs)</li>
            <li>✔️ Themed or LED Bar Setup</li>
            <li>✔️ Full Signature Drink Menu</li>
            <li>✔️ Premium Mixers + Garnishes</li>
            <li>✔️ Servers or Cocktail Assistants</li>
            <li>✔️ Optional Alcohol Add-On*</li>
          </ul>
        </div>
        <p className="text-lg font-bold mb-3">$1500+</p>
        <Button className="bg-black text-yellow-300 hover:bg-white/10 w-full">BOOK THIS LEVEL</Button>
      </div>
    </div>

    <p className="text-xs text-gray-500 mt-8">
      *Alcohol add-on availability depends on local laws. Ask us what’s possible in your area!
    </p>
  </div>
</section>

  );
}

export default Services;
