import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Check, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const products = [
  { size: "100g", label: "Trial Pack", price: 99, originalPrice: 149, tag: null },
  { size: "250g", label: "Most Popular", price: 199, originalPrice: 299, tag: "Best Seller" },
  { size: "500g", label: "Best Value", price: 349, originalPrice: 499, tag: "Save 30%" },
];

const VariantsSection = () => {
  const { toast } = useToast();
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const handleAddToCart = (size: string) => {
    setAddedItems((prev) => [...prev, size]);
    toast({
      title: "Added to cart!",
      description: `Kasturi Kayam Churna ${size} added successfully.`,
    });
    setTimeout(() => setAddedItems((prev) => prev.filter((s) => s !== size)), 2000);
  };

  return (
    <section id="variants" className="py-16 md:py-24 bg-warm-gradient">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Shop Now</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Choose Your Pack
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {products.map((p, i) => {
            const isPopular = p.tag === "Best Seller";
            const added = addedItems.includes(p.size);
            return (
              <motion.div
                key={p.size}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-background rounded-2xl p-6 border text-center transition-all duration-300 hover:shadow-xl ${
                  isPopular ? "border-primary shadow-lg scale-[1.02]" : "border-border"
                }`}
              >
                {p.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                      isPopular
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}>
                      {p.tag}
                    </span>
                  </div>
                )}

                <h3 className="font-bold text-foreground text-lg mt-2">{p.size}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.label}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">₹{p.price}</span>
                  <span className="text-sm text-muted-foreground line-through ml-2">₹{p.originalPrice}</span>
                </div>

                <div className="space-y-2 mb-6 text-left">
                  {["100% Ayurvedic", "Free Shipping", "COD Available"].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {f}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleAddToCart(p.size)}
                  disabled={added}
                  className={`w-full py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    added
                      ? "bg-primary/20 text-primary"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="h-4 w-4" /> Added!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4" /> Add to Cart
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-6 mt-10 text-sm text-muted-foreground">
          {["Razorpay", "UPI", "COD"].map((m) => (
            <span key={m} className="flex items-center gap-1">
              <Star className="h-3 w-3 text-accent fill-accent" /> {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VariantsSection;
