"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Star, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const timeline = [
  {
    year: "2000",
    title: "The Beginning",
    description: "Asian Kids Dance Crew was founded with a vision to create a space where young talents could flourish."
  },
  {
    year: "2005",
    title: "First Major Performance",
    description: "Our students performed at their first major cultural event, marking the start of many successful shows."
  },
  {
    year: "2010",
    title: "Expansion",
    description: "Opened our second studio location to accommodate growing demand and introduce new dance programs."
  },
  {
    year: "2015",
    title: "National Recognition",
    description: "Received national recognition for excellence in dance education and youth development."
  },
  {
    year: "2020",
    title: "Digital Evolution",
    description: "Adapted to changing times by introducing hybrid learning options while maintaining our core values."
  },
  {
    year: "Present",
    title: "Continuing Legacy",
    description: "Continuing to inspire and nurture the next generation of dancers and artists."
  }
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We believe in nurturing the love for dance and artistic expression in every student."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive community where students can grow and thrive together."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Striving for excellence in every aspect of our teaching and performances."
  },
  {
    icon: Trophy,
    title: "Achievement",
    description: "Celebrating the achievements and growth of each student on their journey."
  }
];

export default function About() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <div className="relative">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/diqcdbpg4/video/upload/v1733512004/sample_video_gwmu34.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl px-4"
          >
            <Badge className="mb-6 text-lg px-6 py-2">Our Story</Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">Inspiring Young Artists Since 2000</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Where passion meets excellence in dance and performing arts education
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Values */}
      <div ref={missionRef} className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={missionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge>Our Mission</Badge>
            <h2 className="text-4xl font-bold gradient-text">Nurturing Talent, Building Character</h2>
            <p className="text-lg text-muted-foreground">
              At Asian Kids Dance Crew, we believe in the transformative power of dance and arts education. 
              Our mission is to provide a nurturing environment where young artists can discover their 
              potential, develop their skills, and build confidence that extends beyond the dance floor.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold gradient-text">1000+</h4>
                <p className="text-muted-foreground">Students Trained</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold gradient-text">20+</h4>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold gradient-text">100+</h4>
                <p className="text-muted-foreground">Annual Shows</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold gradient-text">50+</h4>
                <p className="text-muted-foreground">Awards Won</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <value.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="bg-muted py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge>Our Journey</Badge>
            <h2 className="text-4xl font-bold mt-4 mb-6">Two Decades of Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a leading dance institution, our journey has been 
              marked by passion, dedication, and countless success stories.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-30" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2 pr-8 text-right">
                    <div className={index % 2 === 0 ? "text-right" : "text-left"}>
                      <Badge variant="outline" className="mb-2">{item.year}</Badge>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <div className="h-4 w-4 rounded-full bg-primary" />
                  </div>
                  <div className="w-1/2 pl-8" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div ref={ctaRef} className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards an exciting journey in dance and performing arts. 
            Join our vibrant community of young artists today.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}