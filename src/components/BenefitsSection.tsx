import { motion } from "framer-motion";
import { Heart, Repeat, Sparkles, ShieldCheck, Leaf } from "lucide-react";

const benefits = [
  { icon: Heart, title: "Gut Health Support", desc: "Helps maintain a healthy digestive environment" },
  { icon: Repeat, title: "Healthy Bowel Movement", desc: "Supports regularity and natural rhythm" },
  { icon: Sparkles, title: "Improved Digestion", desc: "Promotes better nutrient absorption" },
  { icon: ShieldCheck, title: "Safe for Regular Use", desc: "Gentle formula suitable for daily consumption" },
  { icon: Leaf, title: "100% Ayurvedic", desc: "Pure herbal formulation, no synthetic additives" },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-16 md:py-24 bg-herbal-gradient">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          Key Benefits
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-background rounded-xl p-6 text-center border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <b.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-bold text-foreground text-sm mb-1">{b.title}</h3>
            <p className="text-xs text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
