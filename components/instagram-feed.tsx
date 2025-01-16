"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const instagramPosts = [
  {
    image: "https://res.cloudinary.com/diqcdbpg4/image/upload/v1736408151/classical_image_akd_clpgy1.jpg",
    caption: "Dance Workshop 2024 🎭 Join us for an incredible journey of dance and expression!",
    postUrl: "https://www.instagram.com/p/C5GX8rPvtEM/",
    likes: 245,
    comments: 18
  },
  {
    image: "https://res.cloudinary.com/diqcdbpg4/image/upload/v1736409463/IMG-20240717-WA0018_wphmpf.jpg",
    caption: "Our students showcasing their talent at the annual performance ✨",
    postUrl: "https://www.instagram.com/p/C4_gGBTPq-q/",
    likes: 189,
    comments: 12
  },
  {
    image: "https://res.cloudinary.com/diqcdbpg4/image/upload/v1736408814/classiacal_akd_2_jpez9x.jpg",
    caption: "Classical Dance Performance by our talented students 🌟",
    postUrl: "https://www.instagram.com/p/C4899PdPG0A/",
    likes: 324,
    comments: 27
  },
  {
    image: "https://res.cloudinary.com/diqcdbpg4/image/upload/v1736409372/IMG-20240717-WA0030_j8kpvy.jpg",
    caption: "Hip Hop Workshop - Learn from the best! 🎵",
    postUrl: "https://www.instagram.com/p/C46NQV_P2Ap/",
    likes: 156,
    comments: 9
  },
  {
    image: "https://res.cloudinary.com/diqcdbpg4/image/upload/v1736411139/ak_group_2_zfqgxj.jpg",
    caption: "Contemporary Dance Class - Express yourself through movement 💫",
    postUrl: "https://www.instagram.com/p/C41c5aWvf_7/",
    likes: 278,
    comments: 21
  },
  {
    image: "https://res.cloudinary.com/diqcdbpg4/image/upload/v1736410349/photo_7_lukrth.jpg",
    caption: "Join our Summer Dance Camp 2024! 🌞",
    postUrl: "https://www.instagram.com/p/C4y7Q7fPkxu/",
    likes: 198,
    comments: 15
  },
  {
    image: "https://res.cloudinary.com/diqcdbpg4/image/upload/v1736414052/group_ak_5_sxlwcs.jpg",
    caption: "Hip Hop Workshop - Learn from the best! 🎵",
    postUrl: "https://www.instagram.com/p/C46NQV_P2Ap/",
    likes: 156,
    comments: 9
  },
  {
    image: "https://res.cloudinary.com/diqcdbpg4/image/upload/v1736414464/group_ak_6_esl1to.jpg",
    caption: "Classical Dance Performance by our talented students 🌟",
    postUrl: "https://www.instagram.com/p/C4899PdPG0A/",
    likes: 324,
    comments: 27
  },
  
  {
    image: "https://res.cloudinary.com/diqcdbpg4/image/upload/v1736413577/group_ak_4_ykoe6n.jpg",
    caption: "Contemporary Dance Class - Express yourself through movement 💫",
    postUrl: "https://www.instagram.com/p/C41c5aWvf_7/",
    likes: 278,
    comments: 21
  },
  
];

export function InstagramFeed() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-6 h-6" />
            <h2 className="text-3xl md:text-5xl font-bold">Follow Our Journey</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay connected with us on Instagram{" "}
            <a 
              href="https://www.instagram.com/asiankids_dancecrew_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @asiankids_dancecrew_official
            </a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-sm line-clamp-2">{post.caption}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <span className="flex items-center gap-1">
                          ❤️ {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          💬 {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => window.open('https://www.instagram.com/asiankids_dancecrew_official/', '_blank')}
          >
            <Instagram className="w-4 h-4" />
            Follow Us on Instagram
          </Button>
        </motion.div>
      </div>
    </section>
  );
}