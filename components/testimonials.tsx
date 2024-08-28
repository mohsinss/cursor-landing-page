'use client'

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [visibleTestimonials, setVisibleTestimonials] = useState(5);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=30')
      .then(response => response.json())
      .then(data => {
        const newTestimonials = data.results.map((user: any) => ({
          quote: getRandomTestimonial(),
          author: `${user.name.first} ${user.name.last}`,
          role: getRandomRole(),
          avatar: user.picture.large
        }));
        setTestimonials(newTestimonials);
      });
  }, []);

  const showMoreTestimonials = () => {
    setVisibleTestimonials(prev => Math.min(prev + 5, testimonials.length));
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        {visibleTestimonials < testimonials.length && (
          <div className="text-center mt-12">
            <Button variant="outline" onClick={showMoreTestimonials}>
              Show More Testimonials
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function getRandomTestimonial() {
  const testimonials = [
    "This chatbot builder is a game-changer! It's so intuitive that I was able to create a fully functional chatbot for my e-commerce site in just a few hours. Highly recommend!",
    "I was skeptical about chatbots, but this builder made it so easy. Our customer service efficiency has improved by 40% since implementation. It's a must-have tool!",
    "The AI capabilities of this chatbot builder are mind-blowing. It's like having a 24/7 sales team that never sleeps. Our conversion rates have skyrocketed!",
    "As a non-tech person, I was worried about building a chatbot. But this platform made it a breeze! The drag-and-drop interface is so user-friendly. Love it!",
    "We've tried other chatbot builders, but this one takes the cake. The customization options are endless, and the analytics help us continually improve our bot's performance.",
    "This chatbot builder has revolutionized how we handle customer inquiries. It's like having an extra team member who works round the clock. Absolutely worth every penny!",
    "I'm amazed at how quickly we were able to deploy our chatbot using this builder. The templates are fantastic, and the AI suggestions really helped us craft engaging conversations.",
    "Our support team was drowning in repetitive questions. This chatbot builder solved that problem overnight. Now we can focus on more complex customer issues. It's been a lifesaver!",
    "The integration capabilities of this chatbot builder are impressive. We connected it to our CRM, and now our sales process is smoother than ever. Couldn't be happier!",
    "As a small business owner, I wear many hats. This chatbot builder has essentially become my virtual assistant, handling customer queries and even qualifying leads. It's incredible!",
  ];
  return testimonials[Math.floor(Math.random() * testimonials.length)];
}

function getRandomRole() {
  const roles = [
    "E-commerce Manager",
    "Customer Service Director",
    "Digital Marketing Specialist",
    "Small Business Owner",
    "Tech Startup Founder",
    "Online Retail Entrepreneur",
    "Customer Experience Lead",
    "Sales Operations Manager",
    "Digital Transformation Consultant",
    "AI Implementation Specialist"
  ];
  return roles[Math.floor(Math.random() * roles.length)];
}