import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Page Title */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-6xl font-bold mb-6">Drop Us a Message</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're excited to work with you! Please share your details, and we'll respond within 2 business days.
            </p>
          </div>

          {/* Contact Form */}
          <Card className="p-12 bg-white border-border mb-16 fade-in-up stagger-1">
            <form className="space-y-8">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="underline-input"
                />
              </div>
              
              <div>
                <Input 
                  type="email"
                  placeholder="Your Email Address *" 
                  className="underline-input"
                  required
                />
              </div>
              
              <div>
                <Input 
                  type="tel"
                  placeholder="Your Phone Number" 
                  className="underline-input"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Tell us about your project... *"
                  rows={5}
                  className="underline-input resize-none"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 hover-glow"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="fade-in-up stagger-2">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold mb-1">Address</p>
                <p className="text-sm text-muted-foreground">123 Business Ave, City</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-sm text-muted-foreground">+91 6383975308</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold mb-1">Email</p>
                <p className="text-sm text-muted-foreground">info@dezhyne.com</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold mb-1">Hours</p>
                <p className="text-sm text-muted-foreground">Mon-Fri: 9 AM - 5 PM</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
