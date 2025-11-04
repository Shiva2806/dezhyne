import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';
import portfolio6 from '@/assets/portfolio-6.jpg';
import portfolio7 from '@/assets/portfolio-7.jpg';
import portfolio8 from '@/assets/portfolio-8.jpg';
import portfolio9 from '@/assets/portfolio-9.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

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

  const projects = [
    { image: portfolio1, title: 'Brand Identity Design', category: 'Branding', tag: 'Branding' },
    { image: portfolio2, title: 'E-commerce Platform', category: 'E-commerce', tag: 'E-commerce' },
    { image: portfolio3, title: 'Mobile App Design', category: 'UI/UX', tag: 'UI/UX' },
    { image: portfolio4, title: 'Corporate Website', category: 'Branding', tag: 'Web Development' },
    { image: portfolio5, title: 'Social Media Campaign', category: 'UI/UX', tag: 'Marketing' },
    { image: portfolio6, title: 'Luxury Fashion Store', category: 'E-commerce', tag: 'E-commerce' },
    { image: portfolio7, title: 'SaaS Dashboard', category: 'UI/UX', tag: 'UI/UX' },
    { image: portfolio8, title: 'Restaurant Branding', category: 'Branding', tag: 'Branding' },
    { image: portfolio9, title: 'Tech Startup Website', category: 'E-commerce', tag: 'Web Development' },
  ];

  const filters = ['All', 'Branding', 'E-commerce', 'UI/UX'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto fade-in-up">
            <h1 className="text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-muted-foreground">
              Where Creativity Meets Results – A showcase of projects crafted with innovation and strategy.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 fade-in-up stagger-1">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`${
                  activeFilter === filter 
                    ? 'bg-primary text-white' 
                    : 'border-border hover:bg-primary/10'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden border-border hover-lift cursor-pointer fade-in-up stagger-${(index % 6) + 2}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                    <p className="text-primary text-sm font-semibold mb-2">{project.tag}</p>
                    <h3 className="text-white text-xl font-bold mb-4 text-center">{project.title}</h3>
                    <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary">
                      View Case Study
                    </Button>
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

export default Portfolio;
