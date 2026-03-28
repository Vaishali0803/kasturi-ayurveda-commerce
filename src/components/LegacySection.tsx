import { motion } from "framer-motion";
import { Award, MapPin, Clock } from "lucide-react";

const LegacySection = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Heritage</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            Legacy of Trust{" "}
            <span className="text-gradient-gold">Since 1962</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            For over six decades, Sri Seetharam Anjaneya Pharmacy has been crafting authentic Ayurvedic 
            formulations rooted in traditional knowledge. Our churna is prepared following time-honoured 
            processes passed down through generations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every batch is made with carefully sourced herbs and traditional preparation methods, ensuring 
            the highest standards of quality and efficacy that families across India have relied on for generations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4"
        >
          {[
            { icon: Clock, title: "60+ Years", desc: "Of Ayurvedic expertise and trusted formulations" },
            { icon: MapPin, title: "Made in Telangana", desc: "Manufactured by Sri Seetharam Anjaneya Pharmacy" },
            { icon: Award, title: "Traditional Formula", desc: "Time-tested recipe with authentic Ayurvedic herbs" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-card rounded-xl p-5 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default LegacySection;
