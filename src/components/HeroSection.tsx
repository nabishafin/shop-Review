import { Star, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import herobanner from "../banner.webp";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative py-20 overflow-hidden bg-black text-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/40">
                <Star className="w-4 h-4 text-purple-600 fill-current" />
                <span className="text-sm font-medium text-purple-300">
                  Trusted by over 10,000 verified shoppers worldwide
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Share Your
                <span className="block py-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Honest Shopping Experience
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Join a thriving community of shoppers who share their authentic
                reviews to help others find the best products and trusted online
                stores. Your feedback creates a smarter, safer shopping
                experience for everyone.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                Whether it’s praising great service, highlighting product
                quality, or warning about less reliable sellers, your reviews
                make a difference. Start sharing today and empower shoppers
                around the globe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black text-purple-600 px-8 py-3">
                Write a Review
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-600 hover:border-purple-500 text-black px-8 py-3"
              >
                Browse Reviews
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6 flex justify-center items-center">
            <img className="w-5/6 rounded-lg" src={herobanner} />
          </div>
        </div>
      </div>
    </section>
  );
}
