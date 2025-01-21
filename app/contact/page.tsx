"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Mail, MapPin, Phone, Clock, MessageCircle, Send } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Asian Kids School of Dance & Music",
        "Pady road, Near Supplyco, ",
        "Cherkala(KASARAGOD)"
        ,
        
      ],
      color: "text-blue-500"

    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 81388 65559 \n, +91 95673 36114"],
      action: {
        text: "Call Now",
        href: "tel:+918138865559"
      },
      color: "text-green-500"
    },

    
    
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        
        ,
        "Asian Kids Dance Sudio",
        "Uduma,Near SBI Bank (KASARAGOD)"
      ],
      color: "text-blue-500"

    
    },
    
    
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 79073 93309"],
      action: {
        text: "Call Now",
        href: "tel:+917907393309"
      },
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["asiankidsdancecrew@gmail.com"],
      action: {
        text: "Send Email",
        href: "mailto: asiankidsdancecrew@gmail.com"
      },
      color: "text-pink-500"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: [
        
        "Saturday: 10:00 AM - 5:00 PM",
        "Sunday: 09:00 AM - 5:00 PM"
      ],
      color: "text-purple-500"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      title: "Instagram",
      href: "https://www.instagram.com/asiankids_dancecrew_official/",
      color: "text-pink-500 hover:bg-pink-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      href: "https://wa.me/918138865559",
      color: "text-green-500 hover:bg-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="relative h-[50vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/494252666.hd.mp4?s=2f448cf4273903cc3f7f8626133a2052d7c5b961&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <Badge className="mb-4 text-lg px-4 py-1">Contact Us</Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-4 gradient-text">Get in Touch</h1>
            <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
              We'd love to hear from you. Reach out to us through any of these channels.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative">
              <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Information</h2>
              <div className="absolute top-0 right-0 flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full border ${link.color} hover:text-white transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:shadow-primary/10 dark:hover:shadow-primary/20 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full ${item.color} bg-opacity-10`}>
                          <item.icon className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground">{detail}</p>
                          ))}
                          {item.action && (
                            <motion.a
                              href={item.action.href}
                              className={`inline-block mt-2 ${item.color} hover:underline`}
                              whileHover={{ x: 5 }}
                            >
                              {item.action.text} →
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="overflow-hidden">
  <CardContent className="p-0">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.0419706429743!2d75.08943201482968!3d12.43678789127469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4b9e5f3e85379%3A0xf66b7c6c8f6b8b35!2sAsian%20Kids%20Dance%20Studio%2C%20Uduma!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    <div className="p-4 text-center">
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=12.436788,75.089432"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 font-bold underline"
      >
        Get Directions →
      </a>
    </div>
  </CardContent>
</Card>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-2">
                Send Us a Message <Send className="h-6 w-6" />
              </h2>
              <Card className="overflow-hidden border-primary/20">
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}