"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  {
    name: "Shyamds Vaidhyar",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737116317/shyam_udmxv6.jpg",
    instagram: "son_of_devadas",
  },
  {
    name: "Vaishak",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737117033/vaishak_m9da2e.png",
    instagram: "",
  },
  {
    name: "Vinod",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737117034/vinod_m25cwy.png",
    instagram: "",
  },
  {
    name: "Pradeep",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737117033/pradeep2_nxg9z4.png",
    instagram: "",
  },
  {
    name: "Akshay Kumar",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737115309/akshay2_mt7y7o.png",
    instagram: "annu_akshay",
  },
  {
    name: "Rengith",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737116275/renjith_wpp6ya.png",
    instagram: "mr_capture_head",
  },
  {
    name: "Praveen",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737255908/Screenshot_20240806-181434_pvobzx.webp",
    instagram: "",
  },
  {
    name: "Karthik",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737117032/karthik_vy6kb3.png",
    instagram: "",
  },
  {
    name: "Gappy",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464082/gappi_r5tbl1.webp",
    instagram: "",
  },
  {
    name: "Mithun",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737117033/mithun_s2dlxz.png",
    instagram: "",
  },

  {
    name: "Manu",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737254784/manu_wjrpzc.png",
    instagram: "",
  },

  {
    name: "Sarat",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737255762/Screenshot_20240807-142401_abfkue.webp",
    instagram: "",
  },
  {
    name: "Radhu",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464111/Screenshot_20240807-143927_hdmt14.png",
    instagram: "",
  },
  {
    name: "Anupama",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464111/Screenshot_20240809-204459_riturz.png",
    instagram: "",
  },
  {
    name: "Vavachi",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464110/Screenshot_20240807-142833_suaixg.png",
    instagram: "",
  },
  {
    name: "Ranjith Pady",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464110/Screenshot_20240807-183203_zge7ju.webp",
    instagram: "",
  },
  {
    name: "Anjur",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464107/Screenshot_20240807-143210_igqhss.png",
    instagram: "annu_akshay",
  },
  {
    name: "Vishnu",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464107/Screenshot_20240807-143341_cotwwh.png",
    instagram: "mr_capture_head",
  },
  {
    name: "Sooraj",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464107/Screenshot_20240807-143248_ejnyjq.png",
    instagram: "",
  },
  {
    name: "Neethu",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737465560/Screenshot_20250121-184817_quoseg.png",
    instagram: "",
  },
  {
    name: "Pranav",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737465694/Screenshot_20250121-185056_zb7bmv.png",
    instagram: "",
  },
  {
    name: "Srijina",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464106/Screenshot_20240807-143100_wxjznl.webp",
    instagram: "",
  },

  {
    name: "Swapna",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737465846/Screenshot_20250121-185330_fz2dvl.png",
    instagram: "",
  },

  {
    name: "Ameya",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464105/Screenshot_20240807-142954_mdkns1.webp",
    instagram: "",
  },
  {
    name: "Nakshatra",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464104/Screenshot_20240807-142724_tyyuji.png",
    instagram: "",
  },
  {
    name: "Richu",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464104/Screenshot_20240807-142543_qcdsjd.png",
    instagram: "",
  },
  {
    name: "Ranjith",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464104/Screenshot_20240807-142616_riph6h.webp",
    instagram: "",
  },
  {
    name: "Shreya",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464103/Screenshot_20240807-142205_ua3fur.png",
    instagram: "",
  },
  {
    name: "Rakhi",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464103/Screenshot_20240807-142123_pfd25p.png",
    instagram: "annu_akshay",
  },
  {
    name: "Midhuna",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464102/Screenshot_20240806-181958_cuniz3.png",
    instagram: "mr_capture_head",
  },
  {
    name: "Navami",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737466519/Screenshot_20250121-190436_teqx5v.png",
    instagram: "mr_capture_head",
  },
  {
    name: "Achu",
    image:
      "https://res.cloudinary.com/diqcdbpg4/image/upload/v1737464109/Screenshot_20240807-144016_n2gftp.webp",
    instagram: "mr_capture_head",
  },
  
  // Add more members here
];

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
          <source
            src="https://player.vimeo.com/external/494252666.hd.mp4?s=2f448cf4273903cc3f7f8626133a2052d7c5b961&profile_id=175"
            type="video/mp4"
          />
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
            <h1 className="text-4xl md:text-7xl font-bold mb-4 gradient-text">
              Meet Our Team
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
              The talented individuals who make Asian Kids Dance Crew
              extraordinary
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
                      onClick={() =>
                        window.open(
                          `https://instagram.com/${member.instagram}`,
                          "_blank"
                        )
                      }
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardContent className="text-center p-3">
                  <h3 className="font-medium text-sm truncate">
                    {member.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
