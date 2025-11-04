import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Code, ShoppingCart, Share2, TestTube, Smartphone, Palette } from 'lucide-react';
import { useEffect } from 'react';
import serviceWeb from '@/assets/service-web.jpg';
import serviceEcommerce from '@/assets/service-ecommerce.jpg';
import serviceBranding from '@/assets/service-branding.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';
import serviceSocial from '@/assets/service-social.jpg';
import servicePaidMedia from '@/assets/service-paid-media.jpg';

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
      image: serviceWeb
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce Development',
      description: 'Complete ecommerce solutions from concept to launch. We integrate secure payment gateways, inventory management, and analytics to help your online store thrive.',
      image: serviceEcommerce
    },
    {
      icon: Palette,
      title: 'Branding & Identity',
      description: 'Create memorable brand identities that resonate with your audience. From logo design to complete brand guidelines, we craft cohesive visual systems.',
      image: serviceBranding
    },
    {
      icon: TestTube,
      title: 'Strategy & Growth',
      description: 'Strategic planning and execution to help your business grow. We analyze market opportunities and create data-driven strategies for sustainable success.',
      image: serviceStrategy
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic campaigns that amplify your brand voice and engage your target audience. From content creation to analytics, we handle every aspect of your social presence.',
      image: serviceSocial
    },
    {
      icon: Smartphone,
      title: 'Paid Media',
      description: 'Drive targeted traffic and conversions through strategic paid advertising campaigns across Google, Facebook, Instagram, and other platforms.',
      image: servicePaidMedia
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto fade-in-up">
            <h1 className="text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions designed to help your business succeed in the modern digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`overflow-hidden border-border hover-lift group fade-in-up stagger-${(index % 6) + 1}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
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
