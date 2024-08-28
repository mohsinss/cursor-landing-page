import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4">
        <Input placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  )
}