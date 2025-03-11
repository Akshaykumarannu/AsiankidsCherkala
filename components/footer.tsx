"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    setEmail("");
  };


  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Classes", href: "/classes" },
      { name: "Gallery", href: "/gallery" },
      { name: "Instructors", href: "/instructors" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      { name: "Instagram", icon: Instagram, href: "https://instagram.com/asiankids_dancecrew_official" },
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "YouTube", icon: Youtube, href: "#" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted">
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Asian Kids Dance Crew</h3>
            <p className="text-muted-foreground">Empowering young dancers through movement and creativity since 2000.</p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
            <div className="flex gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Asian Kids Dance Studio</p>
                  <p>Romana Centre, Uduma, Kasaragod</p>
                </div>
              </div>
              <div className="flex gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Asian Kids School of Dance & Music</p>
                  <p>Pady Road, Near Supplyco, Cherkala, Kasaragod</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {["79073 93309", "95267 35765", "95673 36114", "81388 65559"].map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.replace(/ /g, "")}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" /> {phone}
                  </a>
                ))}
              </div>
              <div className="flex gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p>Sat & Sun: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="grid grid-cols-1 gap-2">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground">Subscribe to our newsletter for updates on classes and events.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background"
                />
                <Button type="submit" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}