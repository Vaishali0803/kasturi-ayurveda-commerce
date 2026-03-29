import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section className="py-16 md:py-24 bg-herbal-gradient">
    <div className="container max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get in Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">Contact Us</h2>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <a href="tel:+919246735245" className="flex flex-col items-center gap-2 bg-background rounded-xl p-5 border border-border hover:shadow-md transition-shadow">
            <Phone className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-foreground">+91 92467 35245</span>
          </a>
          <a href="mailto:kasturikayamchurna1962@gmail.com" className="flex flex-col items-center gap-2 bg-background rounded-xl p-5 border border-border hover:shadow-md transition-shadow">
            <Mail className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-foreground">kasturikayamchurna1962@gmail.com</span>
          </a>
          <a
            href="https://wa.me/919246735245"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 bg-background rounded-xl p-5 border border-border hover:shadow-md transition-shadow"
          >
            <MessageCircle className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-foreground">WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
