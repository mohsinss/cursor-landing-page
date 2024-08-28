import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920&h=1080"
        alt="Elegant office space"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover filter grayscale"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Your AI Chatbot Solution
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Create custom AI chatbots for your website in minutes. No coding required.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}