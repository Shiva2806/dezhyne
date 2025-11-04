import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      description: 'Exploring emerging trends in modern web design and what makes websites stand out in today\'s competitive landscape.',
      readTime: '5 min read',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      image: blog2,
      title: 'Building Scalable E-commerce Platforms',
      description: 'Best practices for enterprise-level online stores that handle millions of transactions seamlessly.',
      readTime: '7 min read',
      gradient: 'from-purple-400 to-pink-600'
    },
    {
      image: blog3,
      title: 'The Power of Micro-interactions',
      description: 'How small details create memorable experiences and improve user engagement across digital platforms.',
      readTime: '4 min read',
      gradient: 'from-orange-400 to-red-600'
    },
    {
      image: blog1,
      title: 'AI in Modern Web Development',
      description: 'Discover how artificial intelligence is revolutionizing the way we build and design websites.',
      readTime: '6 min read',
      gradient: 'from-blue-400 to-indigo-600'
    },
    {
      image: blog2,
      title: 'Mobile-First Design Strategies',
      description: 'Creating exceptional user experiences that prioritize mobile users without compromising desktop quality.',
      readTime: '5 min read',
      gradient: 'from-teal-400 to-cyan-600'
    },
    {
      image: blog3,
      title: 'Brand Identity in the Digital Age',
      description: 'Building cohesive brand experiences across multiple digital touchpoints and platforms.',
      readTime: '8 min read',
      gradient: 'from-rose-400 to-pink-600'
    },
  ];

  const faqs = [
    {
      question: "What services does Dezhyne offer?",
      answer: "We offer comprehensive digital services including web development, e-commerce solutions, branding & identity, strategy & growth, social media marketing, and paid media campaigns."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive e-commerce platform could take 3-4 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer: "We work with businesses of all sizes, from startups to enterprise companies. Our flexible approach allows us to tailor solutions to your specific needs and budget."
    },
    {
      question: "What is your design process?",
      answer: "Our process includes four key phases: Strategy (understanding your goals), Design (crafting beautiful interfaces), Development (building with precision), and Delivery (launching with excellence). We maintain close collaboration throughout."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital presence continues to perform optimally. We're here to help you grow long-term."
    },
    {
      question: "How do I get started with Dezhyne?",
      answer: "Simply reach out through our contact page or give us a call. We'll schedule an initial consultation to discuss your project, goals, and how we can help bring your vision to life."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Blogs Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto fade-in-up">
            <h1 className="text-6xl font-bold mb-6">Latest Insights</h1>
            <p className="text-xl text-muted-foreground">
              Thoughts, stories, and ideas from our team of digital innovators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32">
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary font-semibold mb-3">{blog.readTime}</p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{blog.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{blog.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Read More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto fade-in-up stagger-7">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our services and process
              </p>
            </div>

            <Card className="p-8 border-border">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">Still have questions?</p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Let's Talk
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
