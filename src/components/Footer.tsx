import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary to-purple-50 py-16">
      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold mb-6">Let's start something great together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's create something amazing.
          </p>
          <div className="flex gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg">
                Let's Talk
              </Button>
            </Link>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:bg-primary hover:text-white transition-all hover-lift"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:bg-primary hover:text-white transition-all hover-lift"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@dezhyne.com" 
                className="p-3 rounded-full bg-white hover:bg-primary hover:text-white transition-all hover-lift"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+916383975308" 
                className="p-3 rounded-full bg-white hover:bg-primary hover:text-white transition-all hover-lift"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="Dezhyne Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming visionary ideas into stunning digital realities through innovative design and cutting-edge technology.
            </p>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground">Stay updated with our latest news and insights.</p>
            <form className="flex flex-col gap-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border-border"
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Phone:</span><br />
                +91 6383975308
              </p>
              <p>
                <span className="font-medium text-foreground">Email:</span><br />
                info@dezhyne.com
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link to="/blogs" className="text-muted-foreground hover:text-primary transition-colors">
                Blogs
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Dezhyne. All rights reserved.
          </p>
          <Link 
            to="/privacy" 
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
