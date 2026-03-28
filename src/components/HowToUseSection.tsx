import { motion } from "framer-motion";
import { Clock, Utensils, Users } from "lucide-react";

const steps = [
  { icon: Utensils, title: "Take 1 spoon (3-5g)", desc: "Mix with warm water or as directed by a physician" },
  { icon: Clock, title: "After meals or at bedtime", desc: "For best results, use consistently as part of your routine" },
  { icon: Users, title: "Suitable for adults", desc: "Consult a physician for children or specific health conditions" },
];

const HowToUseSection = () => (
  <section id="how-to-use" className="py-16 md:py-24 bg-herbal-gradient">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Simple & Effective</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">How to Use</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-xl p-6 text-center border border-border"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <s.icon className="h-7 w-7 text-primary" />
            </div>
            <div className="text-sm font-bold text-accent mb-2">Step {i + 1}</div>
            <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToUseSection;
