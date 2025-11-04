import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, ShoppingCart, Share2, Star, Smartphone, Palette, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import heroLight from '@/assets/hero-light.jpg';
import serviceWeb from '@/assets/service-web.jpg';
import serviceEcommerce from '@/assets/service-ecommerce.jpg';
import serviceBranding from '@/assets/service-branding.jpg';
import work1 from '@/assets/work-1.jpg';
import work2 from '@/assets/work-2.jpg';
import work3 from '@/assets/work-3.jpg';
import blog1 from '@/assets/blog-1.jpg';
import blog2 from '@/assets/blog-2.jpg';
import blog3 from '@/assets/blog-3.jpg';

const Index = () => {
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

    document.querySelectorAll('.fade-in-up, .fade-in, .slide-in-left').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build powerful, scalable websites with modern frameworks and technologies.',
      image: serviceWeb
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Complete ecommerce solutions from concept to launch with secure payments.',
      image: serviceEcommerce
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Create memorable brand identities that resonate with your audience.',
      image: serviceBranding
    },
  ];

  const works = [
    { image: work1, title: 'Luxury Fashion E-commerce', tag: 'E-commerce' },
    { image: work2, title: 'Mobile Banking App', tag: 'UI/UX' },
    { image: work3, title: 'Brand Identity System', tag: 'Branding' },
  ];

  const blogs = [
    {
      image: blog1,
      title: 'The Future of Web Design in 2025',
      description: 'Exploring emerging trends in modern web design',
      readTime: '5 min read'
    },
    {
      image: blog2,
      title: 'Building Scalable E-commerce Platforms',
      description: 'Best practices for enterprise-level online stores',
      readTime: '7 min read'
    },
    {
      image: blog3,
      title: 'The Power of Micro-interactions',
      description: 'How small details create memorable experiences',
      readTime: '4 min read'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-24 px-6 relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroLight})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting the Future of <br />
              <span className="gradient-text">Digital Experiences</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              We turn ideas into stunning digital realities through innovative design and cutting-edge technology.
            </p>
            <Link to="/portfolio">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <p className="text-center text-muted-foreground mb-8 fade-in">Trusted by Leading Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all fade-in">
            <div className="h-12 w-32 bg-muted rounded" />
            <div className="h-12 w-32 bg-muted rounded" />
            <div className="h-12 w-32 bg-muted rounded" />
            <div className="h-12 w-32 bg-muted rounded" />
            <div className="h-12 w-32 bg-muted rounded" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden border-border hover-lift cursor-pointer fade-in-up stagger-${index + 1}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects where creativity meets results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden border-border hover-lift cursor-pointer fade-in-up stagger-${index + 1}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-primary text-sm font-semibold mb-1">{work.tag}</p>
                      <h3 className="text-white text-xl font-bold">{work.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-up stagger-4">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blogs Preview */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, stories and ideas from our team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden border-border hover-lift cursor-pointer fade-in-up stagger-${index + 1}`}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-3">{blog.readTime}</p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{blog.title}</h3>
                  <p className="text-muted-foreground text-sm">{blog.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-up stagger-4">
            <Link to="/blogs">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                Read More Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven process that delivers exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500" style={{ width: '75%', marginLeft: '12.5%' }} />
            
            {['Strategy', 'Design', 'Development', 'Delivery'].map((step, index) => (
              <div key={index} className={`text-center relative fade-in-up stagger-${index + 1}`}>
                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary relative z-10">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step}</h3>
                <p className="text-sm text-muted-foreground">
                  {index === 0 && 'Understanding your vision and goals'}
                  {index === 1 && 'Crafting beautiful interfaces'}
                  {index === 2 && 'Building with precision'}
                  {index === 3 && 'Launching with excellence'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto text-center fade-in-up">
          <h2 className="text-5xl font-bold mb-6">Let's start something great together</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's create something amazing.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
              Let's Talk
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
