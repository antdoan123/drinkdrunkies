import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-300 py-8 md:py-12 w-full">
      <div className="w-full px-4 max-w-screen-xl mx-auto">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text mb-3 md:mb-4">
              DRUNKIES 🍻💀
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3 md:mb-4 max-w-md">
              The wildest mobile bartending experience that'll turn your event into an ABSOLUTE LEGEND!
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-lime-500 text-lime-400 hover:bg-lime-500/10 text-xs sm:text-sm"
              >
                Follow The Chaos! 🔥
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block hover:text-lime-400 transition-colors text-sm">
                About The Madness
              </Link>
              <Link href="#services" className="block hover:text-lime-400 transition-colors text-sm">
                What We Do
              </Link>
              <Link href="#gallery" className="block hover:text-lime-400 transition-colors text-sm">
                Epic Moments
              </Link>
              <Link href="#pricing" className="block hover:text-lime-400 transition-colors text-sm">
                Party Packages
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm sm:text-base">Let's Get Wild!</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>(555) DRUNKIES</p>
              <p>party@drunkies.com</p>
              <p>We party EVERYWHERE! 🌍</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-500">
          <p className="text-xs sm:text-sm">&copy; 2024 DRUNKIES. Let's get absolutely MENTAL! 🎉💀</p>
        </div>
      </div>
    </footer>
  )
}
