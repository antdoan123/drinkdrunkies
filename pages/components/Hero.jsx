import { ArrowRight, Star, Music, Zap } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative px-4 pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated background elements - smaller on mobile */}
      <div className="absolute inset-0 opacity-10 md:opacity-20">
        <div className="absolute top-20 left-4 md:left-10 w-20 h-20 md:w-32 md:h-32 bg-lime-500 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-24 h-24 md:w-40 md:h-40 bg-pink-500 rounded-full blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 md:w-24 md:h-24 bg-cyan-500 rounded-full blur-xl md:blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                GET ABSOLUTELY
                <span className="block text-transparent bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text">
                  WASTED! 🍻💀
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                We&apos;re DRUNKIES - the wildest mobile bartending crew that&apos;ll turn your boring gathering into an INSANE
                party! Premium drinks, sick vibes, and memories you probably won&apos;t remember! 🔥🎉
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center lg:justify-start">
<Button
  asChild
  size="lg"
  className="bg-gradient-to-r from-lime-500 to-cyan-500 hover:from-lime-400 hover:to-cyan-400 text-black font-bold px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg shadow-lime-500/25 w-full sm:w-auto"
>
  <Link href="/contact">
    LET&apos;S GET WASTED! 🚀
    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
  </Link>
</Button>
              <Button
                variant="outline"
                size="lg"
                className="border-lime-500 text-lime-400 hover:bg-lime-500/10 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
              >
                See The Madness 👀
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-lime-400 text-lime-400" />
                  ))}
                </div>
                <span className="text-gray-300 font-medium text-sm sm:text-base">People go CRAZY for us!</span>
              </div>
              <div className="text-gray-300 text-center sm:text-left">
                <span className="font-bold text-xl sm:text-2xl text-lime-400">NEW</span>
                <span className="ml-1 text-sm sm:text-base">But Already Legendary!</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-lime-500/30 mx-auto max-w-md lg:max-w-none">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Epic party with amazing cocktails"
                width={500}
                height={600}
                className="object-cover w-full h-[400px] sm:h-[500px] lg:h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Floating Cards - adjusted for mobile */}
            <Card className="absolute -left-2 sm:-left-4 top-8 sm:top-16 bg-gray-900/95 backdrop-blur-sm border-lime-500/30 shadow-lg shadow-lime-500/20 w-40 sm:w-auto">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-gradient-to-r from-lime-500 to-cyan-500 p-1.5 sm:p-2 rounded-full">
                    <Music className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs sm:text-sm">PARTY SETUP</p>
                    <p className="text-xs text-gray-300">Ready in 15 mins!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -right-2 sm:-right-4 bottom-8 sm:bottom-16 bg-gray-900/95 backdrop-blur-sm border-pink-500/30 shadow-lg shadow-pink-500/20 w-40 sm:w-auto">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-1.5 sm:p-2 rounded-full">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs sm:text-sm">INSANE VIBES</p>
                    <p className="text-xs text-gray-300">Energy: MAX!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
