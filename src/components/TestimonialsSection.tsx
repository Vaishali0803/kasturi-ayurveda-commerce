import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Rajesh Kumar", city: "Hyderabad", text: "I've been using Kasturi Kayam Churna for 3 months. My digestion has improved significantly and I feel lighter throughout the day.", rating: 5 },
  { name: "Priya Sharma", city: "Delhi", text: "Finally found a natural remedy that actually works! No more bloating after meals. Highly recommended for anyone with digestive issues.", rating: 5 },
  { name: "Anand Reddy", city: "Warangal", text: "My family has trusted this brand for years. The quality is consistent and it's gentle on the stomach. A must-have at home.", rating: 5 },
  { name: "Sunita Devi", city: "Mumbai", text: "Very effective and safe. I was hesitant at first, but this churna has become part of my daily routine now. Great product!", rating: 4 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 md:py-24 bg-warm-gradient">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Customer Love</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">What Our Customers Say</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-xl p-6 border border-border"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className={`h-4 w-4 ${j < r.rating ? "text-accent fill-accent" : "text-border"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4 italic">"{r.text}"</p>
            <div>
              <p className="font-bold text-foreground text-sm">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.city}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
