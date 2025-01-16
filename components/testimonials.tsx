"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya",
    role: "Parent",
    image: "",
    quote: "My daughter has grown so much in confidence since joining Asian Kids Dance Crew. The instructors are amazing!"
  },
  {
    name: "Sanjay",
    role: "Student",
    image: "",
    quote: "The dance classes here are fun and challenging. I've made great friends and learned awesome moves!"
  },
  {
    name: "Ramesh",
    role: "Parent",
    image: "",
    quote: "Asian Kids Dance Crew provides a perfect balance of discipline and creativity. It's been wonderful for my kids."
  },
  {
    name: "Hemavathi",
    role: "Parent",
    image: "",
    quote: "The variety of classes and professional instruction has helped my son discover his passion for arts."
  },
  {
    name: "Atul",
    role: "Student",
    image: "",
    quote: "I've learned not just dance, but discipline, teamwork, and confidence. Asian Kids Dance Crew is like my second family!"
  },
  {
    name: "Rajesh",
    role: "Parent",
    image: "",
    quote: "The growth we've seen in our children, both in skills and personality, has been remarkable."
  }
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4
  });

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section ref={ref} className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from our students and parents about their experience at Asian Kids Dance Crew
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${currentPage}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-lg mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentPage === index ? "bg-primary w-4" : "bg-primary/30"
              }`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}