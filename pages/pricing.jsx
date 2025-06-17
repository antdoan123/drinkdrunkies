import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

export default function Pricing() {
  return (
    <>
      <Navbar />

      <section className="bg-black py-20 px-4 text-white min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            CHOOSE YOUR LEVEL OF MAYHEM 🍾💣
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            From a slight buzz to full-blown blackout — we’ve got your party covered.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Tier 1 */}
            <div className="bg-gradient-to-tr from-lime-600 to-cyan-500 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">THE BUZZ 🐝</h3>
                <p className="text-white/90 mb-4">For 20–40 guests. Perfect for house parties or backyard vibes.</p>
                <ul className="text-sm text-white/80 space-y-2 mb-6 text-left">
                  <li>✔️ 1 Licensed Bartender (3 hrs)</li>
                  <li>✔️ Basic Bar Setup</li>
                  <li>✔️ Bar Tools & Ice Bucket</li>
                  <li>✔️ Disposable Cups & Napkins</li>
                  <li>❗ Client provides alcohol</li>
                </ul>
              </div>
              <p className="text-lg font-bold mb-3">$450+</p>
              <Button className="bg-black text-lime-400 hover:bg-white/10 w-full">
                BOOK THIS LEVEL
              </Button>
            </div>

            {/* Tier 2 */}
            <div className="bg-gradient-to-tr from-pink-600 to-red-500 rounded-2xl p-6 shadow-lg flex flex-col justify-between border-4 border-white">
              <div>
                <h3 className="text-2xl font-bold mb-2">THE MAYHEM 🎉</h3>
                <p className="text-white/90 mb-4">For 40–80 guests. Great for birthdays, weddings, or wild nights.</p>
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
              <Button className="bg-black text-pink-400 hover:bg-white/10 w-full">
                BOOK THIS LEVEL
              </Button>
            </div>

            {/* Tier 3 */}
            <div className="bg-gradient-to-tr from-yellow-500 via-orange-500 to-red-600 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">THE BLACKOUT 💀</h3>
                <p className="text-white/90 mb-4">For 80–150+ guests. Our full-throttle party takeover experience.</p>
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
              <Button className="bg-black text-yellow-300 hover:bg-white/10 w-full">
                BOOK THIS LEVEL
              </Button>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-10">
            *Alcohol add-on availability depends on local laws. Ask us what’s possible in your area!
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
