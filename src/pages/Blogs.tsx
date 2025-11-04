import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import blog1 from '@/assets/blog-1.jpg';
import blog2 from '@/assets/blog-2.jpg';
import blog3 from '@/assets/blog-3.jpg';

const Blogs = () => {
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

  const blogs = [
    {
      image: blog1,
      title: 'The Future of Web Design in 2025',
      description: 'Exploring emerging trends that are shaping the future of web design, from AI-powered layouts to immersive 3D experiences.',
      category: 'Design',
      readTime: '5 min read',
      date: 'Jan 15, 2025'
    },
    {
      image: blog2,
      title: 'Building Scalable E-commerce Platforms',
      description: 'Best practices for creating enterprise-level online stores that can handle massive traffic and complex operations.',
      category: 'Development',
      readTime: '7 min read',
      date: 'Jan 10, 2025'
    },
    {
      image: blog3,
      title: 'The Power of Micro-interactions',
      description: 'How small, thoughtful details in user interfaces create memorable experiences and drive user engagement.',
      category: 'UX',
      readTime: '4 min read',
      date: 'Jan 5, 2025'
    },
    {
      image: blog1,
      title: 'Mastering Brand Storytelling',
      description: 'Learn how to craft compelling brand narratives that resonate with your audience and build lasting connections.',
      category: 'Branding',
      readTime: '6 min read',
      date: 'Dec 28, 2024'
    },
    {
      image: blog2,
      title: 'Mobile-First Design Strategies',
      description: 'Essential techniques for creating exceptional mobile experiences that drive conversions and user satisfaction.',
      category: 'Mobile',
      readTime: '5 min read',
      date: 'Dec 20, 2024'
    },
    {
      image: blog3,
      title: 'The Art of Minimalist Web Design',
      description: 'Discover how less can be more when it comes to creating clean, effective, and beautiful websites.',
      category: 'Design',
      readTime: '4 min read',
      date: 'Dec 15, 2024'
    },
  ];

  const faqs = [
    {
      question: 'What services does Dezhyne offer?',
      answer: 'We offer comprehensive digital solutions including web development, e-commerce development, branding and identity design, UI/UX design, mobile app development, social media marketing, and digital strategy consulting.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A basic website typically takes 4-6 weeks, while complex e-commerce platforms or custom applications may take 3-6 months. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'What is your design process?',
      answer: 'Our process follows four key phases: Strategy (understanding your goals), Design (creating visual concepts), Development (building with precision), and Delivery (launching with excellence). We maintain close collaboration throughout each phase.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! We offer comprehensive maintenance and support packages to ensure your digital products continue to perform optimally. This includes updates, security patches, performance optimization, and technical support.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is project-based and depends on scope, complexity, and timeline. We provide transparent quotes after understanding your specific needs during a consultation. Contact us for a personalized estimate.'
    },
    {
      question: 'Can you work with our existing brand guidelines?',
      answer: 'Absolutely! We can work within your established brand guidelines or help refresh and evolve your brand identity as needed. We adapt our approach to align with your brand vision and goals.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16 max-w-3xl mx-auto fade-in-up">
            <h1 className="text-6xl font-bold mb-6">Insights & Stories</h1>
            <p className="text-xl text-muted-foreground">
              Thoughts, ideas, and perspectives from our team on design, development, and digital innovation.
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {blogs.map((blog, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden border-border hover-lift cursor-pointer fade-in-up stagger-${(index % 6) + 1}`}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-foreground">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {blog.description}
                  </p>
                  <Button variant="ghost" className="text-primary p-0 hover:bg-transparent">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about working with us
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4 fade-in-up stagger-2">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-white hover:shadow-soft transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-16 fade-in-up stagger-3">
              <p className="text-lg text-muted-foreground mb-6">Still have questions?</p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Let's Talk
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
