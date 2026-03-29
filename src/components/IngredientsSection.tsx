import { motion } from "framer-motion";
import herbalPattern from "@/assets/herbal-pattern.png";

const herbs = [
  { name: "Svarnapati Leaves", benefit: "Supports natural bowel movement" },
  { name: "Yavani Fruit", benefit: "Helps relieve bloating and gas" },
  { name: "Haritaki Fruit", benefit: "Traditional digestive tonic" },
  { name: "Tvakpatra", benefit: "Supports digestive wellness" },
  { name: "Black Salt", benefit: "Aids in improving appetite" },
  { name: "Vibhitaki Fruit", benefit: "Promotes healthy digestion" },
];

const IngredientsSection = () => (
  <section className="py-16 md:py-24 relative overflow-hidden">
    <img
      src={herbalPattern}
      alt=""
      className="absolute right-0 top-0 w-72 opacity-10"
      loading="lazy"
      width={800}
      height={800}
    />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pure & Natural</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          Ayurvedic Ingredients
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          A carefully crafted blend of time-tested herbs — no chemicals, no fillers, no artificial additives.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {herbs.map((h, i) => (
          <motion.div
            key={h.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border"
          >
            <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
            <div>
              <h3 className="font-bold text-foreground text-sm">{h.name}</h3>
              <p className="text-xs text-muted-foreground">{h.benefit}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IngredientsSection;
