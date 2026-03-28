import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Clock, Flag } from "lucide-react";

const badges = [
  { icon: Leaf, label: "100% Natural" },
  { icon: ShieldCheck, label: "No Harmful Chemicals" },
  { icon: Clock, label: "Safe for Daily Use" },
  { icon: Flag, label: "Made in India" },
];

const TrustBadges = () => (
  <section className="py-12 md:py-16">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center gap-3 bg-card rounded-xl p-6 border border-border"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <b.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-bold text-foreground text-center">{b.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
