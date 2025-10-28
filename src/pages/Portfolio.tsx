import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';
import portfolio6 from '@/assets/portfolio-6.jpg';
import portfolio7 from '@/assets/portfolio-7.jpg';
import portfolio8 from '@/assets/portfolio-8.jpg';
import portfolio9 from '@/assets/portfolio-9.jpg';
import { useEffect } from 'react';

const Portfolio = () => {
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
  const portfolioItems = [
    {
      image: portfolio1,
      title: 'Modern Ecommerce Platform',
      category: 'Ecommerce',
    },
    {
      image: portfolio2,
      title: 'Social Analytics Dashboard',
      category: 'Web Application',
    },
    {
      image: portfolio3,
      title: 'Corporate Website Redesign',
      category: 'Website',
    },
    {
      image: portfolio4,
      title: 'Fashion Brand Store',
      category: 'Ecommerce',
    },
    {
      image: portfolio5,
      title: 'Marketing Automation Tool',
      category: 'SaaS Platform',
    },
    {
      image: portfolio6,
      title: 'Real Estate Portal',
      category: 'Website',
    },
    {
      image: portfolio7,
      title: 'Healthcare Management System',
      category: 'Web Application',
    },
    {
      image: portfolio8,
      title: 'Restaurant Ordering App',
      category: 'Mobile App',
    },
    {
      image: portfolio9,
      title: 'Financial Services Platform',
      category: 'Website',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful projects. Each one represents our commitment to delivering exceptional digital experiences that drive real results for our clients.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index}
                className={`overflow-hidden hover-lift border-border bg-card group cursor-pointer fade-in-up stagger-${(index % 6) + 1}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <p className="text-primary text-sm font-semibold mb-1">{item.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
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

export default Portfolio;
