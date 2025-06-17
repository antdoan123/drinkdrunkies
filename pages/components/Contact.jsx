import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-r from-lime-600 via-cyan-600 to-pink-600 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Replaced container with w-full + max-w and centered */}
      <div className="w-full px-4 max-w-screen-xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
          READY TO GET ABSOLUTELY MENTAL?! 🎊💥
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-6 md:mb-8 mx-auto max-w-2xl">
          Book DRUNKIES now and let&apos;s create a party so epic, your neighbors will be jealous they weren&apos;t invited!
        </p>

        <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-black text-lime-400 hover:bg-gray-900 px-6 sm:px-8 py-3 text-base sm:text-lg font-bold shadow-lg w-full sm:w-auto"
          >
            BOOK THE MADNESS! 🔥
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 text-base sm:text-lg font-bold w-full sm:w-auto"
          >
            Call (555) DRUNKIES
          </Button>
        </div>

        <div className="mt-8 md:mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-3 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">24/7</div>
            <div className="text-sm sm:text-base text-white/80">Ready to Party!</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">NEW</div>
            <div className="text-sm sm:text-base text-white/80">Fresh & Hungry!</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">100%</div>
            <div className="text-sm sm:text-base text-white/80">INSANE Guarantee!</div>
          </div>
        </div>
      </div>
    </section>
  )
}
