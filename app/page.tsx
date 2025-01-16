import { HeroSection } from "@/components/hero-section";
import { FeaturedClasses } from "@/components/featured-classes";
import { Achievements } from "@/components/achievements";

import { Testimonials } from "@/components/testimonials";
import { InstagramFeed } from "@/components/instagram-feed";
import { CallToAction } from "@/components/call-to-action";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Achievements />
      <FeaturedClasses />
      
      <Testimonials />
      <InstagramFeed />
      <CallToAction />
    </>
  );
}