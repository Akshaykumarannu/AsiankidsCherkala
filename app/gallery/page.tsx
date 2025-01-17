"use client";

import { useState, useMemo } from "react";
import { HeroSection } from "./components/hero-section";
import { CategoryFilter } from "./components/category-filter";
import { MediaGrid } from "./components/media-grid";
import { mediaItems } from "./data/media-items";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Memoize filtered media items to prevent unnecessary recalculations
  const filteredMedia = useMemo(
    () =>
      selectedCategory === "all"
        ? mediaItems
        : mediaItems.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <div className="container py-16">
        <ScrollReveal>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </ScrollReveal>
        
        <MediaGrid items={filteredMedia as any} />
      </div>
    </div>
  );
}
