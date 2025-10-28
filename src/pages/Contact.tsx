import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Contact Layout */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 bg-card border-border">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-background border-border"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Email Address <span className="text-primary">*</span>
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@example.com" 
                    className="bg-background border-border"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Message <span className="text-primary">*</span>
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="bg-background border-border resize-none"
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
            <div>
              <Card className="p-8 bg-card border-border mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Address</p>
                      <p className="text-muted-foreground">123 Business Ave, City</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 9 AM - 5 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-muted-foreground">+91 6383975308</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">info@dezhyne.com</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden border-border">
                <div className="w-full h-64 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Map Location</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
