import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Code, ShoppingCart, Share2, TestTube, Smartphone, Palette } from 'lucide-react';
import { useEffect } from 'react';

const Services = () => {
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
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Build powerful, scalable websites with modern frameworks and technologies. We create responsive designs that work seamlessly across all devices and deliver exceptional user experiences.',
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce Development',
      description: 'Complete ecommerce solutions from concept to launch. We integrate secure payment gateways, inventory management, and analytics to help your online store thrive.',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic campaigns that amplify your brand voice and engage your target audience. From content creation to analytics, we handle every aspect of your social presence.',
    },
    {
      icon: TestTube,
      title: 'Software Testing',
      description: 'Comprehensive quality assurance services ensuring your applications are bug-free and perform flawlessly. We conduct thorough testing across all scenarios and use cases.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver engaging experiences. We develop iOS and Android apps with intuitive interfaces and robust functionality.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality. We create interfaces that are beautiful, intuitive, and optimized for conversion.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              We offer a comprehensive suite of digital services designed to help your business succeed in the modern digital landscape. From concept to execution, we're with you every step of the way.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`p-8 bg-card hover-lift border-border group fade-in-up stagger-${(index % 6) + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
