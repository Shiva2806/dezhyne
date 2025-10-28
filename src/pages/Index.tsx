import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Code, ShoppingCart, Share2, Star } from 'lucide-react';
import heroImg from '@/assets/hero-bg.jpg';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const Index = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.',
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce Solutions',
      description: 'Comprehensive online store development with secure payment integration and inventory management systems.',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns designed to boost engagement, grow your audience, and drive conversions.',
    },
  ];

  const portfolioItems = [
    { image: portfolio1, title: 'Modern Ecommerce Platform' },
    { image: portfolio2, title: 'Social Analytics Dashboard' },
    { image: portfolio3, title: 'Corporate Website Redesign' },
  ];

  const testimonials = [
    {
      text: 'Working with Dezhyne transformed our digital presence completely. Their attention to detail and innovative approach exceeded all our expectations.',
      author: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
    },
    {
      text: 'The team at Dezhyne delivered exceptional results on time and within budget. Their expertise in web development is unmatched.',
      author: 'Michael Chen',
      role: 'Founder, Digital Ventures',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center pt-20 px-6"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.9)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Crafting the Future of
            <span className="block gradient-text">Digital Experiences</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            We transform visionary ideas into stunning digital realities. Our expert team delivers innovative solutions that drive growth and captivate audiences.
          </p>
          <Link to="/portfolio">
            <Button size="lg" className="bg-primary hover:bg-primary/90 hover-glow text-lg px-8 py-6 animate-fade-in">
              View Our Work
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Core Services</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business and engage your audience.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 bg-card hover-lift border-border"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Snippet */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Recent Projects</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A showcase of our latest work, demonstrating our commitment to excellence and innovation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover-lift border-border bg-background"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 text-muted-foreground italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
