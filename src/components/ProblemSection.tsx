import { motion } from "framer-motion";
import { AlertTriangle, Frown, Clock, Leaf } from "lucide-react";

const problems = [
  { icon: Frown, title: "Constipation", desc: "Irregular bowel movements affecting daily comfort" },
  { icon: AlertTriangle, title: "Poor Digestion", desc: "Bloating, gas, and heaviness after meals" },
  { icon: Clock, title: "Gut Imbalance", desc: "Sluggish metabolism and low energy levels" },
];

const ProblemSection = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Struggling with Digestive Issues?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Millions face these problems daily. Ayurveda offers a time-tested, natural path to digestive wellness.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border text-center"
          >
            <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <p.icon className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gold-gradient rounded-2xl p-8 md:p-12 text-center"
      >
        <Leaf className="h-10 w-10 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-3">The Ayurvedic Solution</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Kasturi Kayam Churna combines centuries-old Ayurvedic wisdom with carefully selected natural herbs
          to support your digestive system gently and effectively — without harsh chemicals.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
