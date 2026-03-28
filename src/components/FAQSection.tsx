import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Is Kasturi Kayam Churna safe for daily use?", a: "Yes, it is made from 100% natural Ayurvedic herbs and is designed for regular use. However, we recommend consulting your physician if you have any specific health concerns." },
  { q: "Are there any side effects?", a: "Being a natural Ayurvedic formulation, it is generally well-tolerated. Some individuals may experience mild effects initially as the body adjusts. Discontinue use and consult a doctor if any discomfort persists." },
  { q: "How long should I use this product?", a: "For best results, use consistently for at least 2-3 weeks. Long-term usage is safe, but periodic consultation with a healthcare provider is recommended." },
  { q: "What are the available payment options?", a: "We accept Razorpay, UPI, net banking, debit/credit cards, and Cash on Delivery (COD) for your convenience." },
  { q: "What is the delivery timeline?", a: "Orders are typically delivered within 5-7 business days across India. Free shipping is available on all orders." },
  { q: "Can children use this churna?", a: "This product is formulated for adults. For children, please consult a qualified Ayurvedic practitioner or physician before use." },
];

const FAQSection = () => (
  <section id="faq" className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Got Questions?</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Frequently Asked Questions</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left font-semibold text-foreground text-sm hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
