import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle, Star } from "lucide-react";
import productImage from "@/assets/product-hero.png";

const variants = [
  { size: "100g", label: "Trial Pack" },
  { size: "250g", label: "Most Popular" },
  { size: "500g", label: "Best Value" },
];

const HeroSection = () => {
  const [selectedSize, setSelectedSize] = useState("250g");

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-herbal-gradient">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-1.5 rounded-full mb-6">
              <Star className="h-3.5 w-3.5 text-accent fill-accent" />
              <span className="text-xs font-semibold text-accent-foreground">Trusted Since 1962</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
              Kasturi Kayam{" "}
              <span className="text-gradient-gold">Churna</span>
            </h1>

            <p className="text-lg md:text-xl font-display italic text-primary mb-3">
              Trusted Ayurvedic Digestive Formula Since 1962
            </p>

            <p className="text-muted-foreground mb-8 max-w-md">
              Supports Gut Health • Improves Digestion • Safe for Daily Use
            </p>

            {/* Size selector */}
            <div className="flex gap-3 mb-8">
              {variants.map((v) => (
                <button
                  key={v.size}
                  onClick={() => setSelectedSize(v.size)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                    selectedSize === v.size
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary"
                  }`}
                >
                  <span className="block font-bold">{v.size}</span>
                  <span className="block text-xs opacity-80">{v.label}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#variants"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                <ShoppingCart className="h-4 w-4" />
                Buy Now
              </a>
              <a
                href="https://wa.me/919999999999?text=I%20want%20to%20order%20Kasturi%20Kayam%20Churna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-herbal-medium text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 glow-herbal rounded-full" />
              <img
                src={productImage}
                alt="Kasturi Kayam Churna – Ayurvedic Digestive Powder"
                className="relative z-10 w-72 md:w-96 animate-float"
                width={800}
                height={800}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
