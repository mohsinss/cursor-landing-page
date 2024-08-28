import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "This chatbot solution has transformed our customer service.",
    author: "Jane Doe",
    role: "CEO, TechCorp"
  },
  {
    quote: "Easy to set up and incredibly effective. Highly recommended!",
    author: "John Smith",
    role: "Marketing Director, StartupX"
  }
]

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <p className="text-lg italic">"{testimonial.quote}"</p>
            </CardContent>
            <CardFooter className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}