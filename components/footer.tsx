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
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Classes', href: '/classes' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Instructors', href: '/instructors' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Schedule', href: '/schedule' },
      { name: 'Virtual Tour', href: '/virtual-tour' },
      { name: 'Register', href: '/register' },
      { name: 'FAQ', href: '/faq' }
    ],
    social: [
      { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/asiankids_dancecrew_official' },
      { name: 'Facebook', icon: Facebook, href: '#' },
      { name: 'YouTube', icon: Youtube, href: '#' }
    ]
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
            <p className="text-muted-foreground">
              Empowering young dancers through movement and creativity since 2000.
            </p>
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

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="grid grid-cols-1 gap-2">
              {navigation.main.slice(0, 6).map((item) => (
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <p>Asian Kids School of Dance & Music</p>
                  <p>Pady road, Near Supplyco,</p>
                  <p>Cherkala(KASARAGOD)</p>
                </div>
              </div>
              <a 
                href="tel:+918138865559" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                +91 81388 65559
              </a>
              <a 
                href="mailto:contact@asiankids.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                contact@asiankids.com
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 mt-1" />
                <div>
                  <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                  <p>Sat: 10:00 AM - 6:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for updates on classes, events, and performances.
            </p>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Asian Kids Dance Crew. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}