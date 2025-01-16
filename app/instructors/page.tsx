"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const teamMembers = Array(40).fill(null).map((_, index) => ({
  name: `Team Member ${index + 1}`,
  image: `https://source.unsplash.com/random/400x400?portrait&${index}`,
  instagram: "asiankids_dancecrew_official"
}));

export default function Team() {
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
            <Badge className="mb-4 text-lg px-4 py-1">Our Family</Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-4 gradient-text">Meet Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
              The talented individuals who make Asian Kids Dance Crew extraordinary
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden group h-full">
                <div className="relative aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-white border-white hover:text-white"
                      onClick={() => window.open(`https://instagram.com/${member.instagram}`, '_blank')}
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardContent className="text-center p-3">
                  <h3 className="font-medium text-sm truncate">{member.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}