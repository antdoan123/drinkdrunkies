import { CheckCircle, Clock, MapPin, Star, Users, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Feature() {
  const features = [
    {
      icon: MapPin,
      title: "WE COME ANYWHERE! 🚗",
      description: "Rooftop, basement, beach, parking lot - if you can party there, we'll bring the CHAOS!",
      gradient: "from-lime-500 to-cyan-500",
    },
    {
      icon: Star,
      title: "PREMIUM EVERYTHING! 💎",
      description: "Top-shelf liquor, fresh mixers, and cocktails so good they'll make you question reality!",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: Users,
      title: "WILD BARTENDERS! 🎭",
      description: "Our crew doesn't just mix drinks - we're entertainers, hype-men, and party legends!",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: CheckCircle,
      title: "ZERO STRESS! 😎",
      description: "We handle EVERYTHING! You just show up and prepare to have your mind BLOWN!",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "PARTY ALL NIGHT! 🌙",
      description: "2 hours or until sunrise - we'll keep the energy PUMPING as long as you want!",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "CUSTOM MADNESS! ⚡",
      description: "Themed drinks, signature cocktails, crazy presentations - we'll make it UNFORGETTABLE!",
      gradient: "from-lime-500 to-green-500",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Why DRUNKIES Will Blow Your Mind 🤯
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            We don't just serve drinks - we create LEGENDARY experiences that'll have everyone talking for YEARS!
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:border-lime-500/50 transition-all hover:shadow-lg hover:shadow-lime-500/10 group"
            >
              <CardContent className="p-4 sm:p-6">
                <div
                  className={`bg-gradient-to-r ${feature.gradient} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
