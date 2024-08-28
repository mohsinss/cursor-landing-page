import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-primary text-primary-foreground py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Join thousands of businesses already using our AI chatbot solution.
      </p>
      <Button size="lg" variant="secondary">Sign Up Now</Button>
    </section>
  )
}