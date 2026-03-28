import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const StickyBuyButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:hidden">
      <a
        href="#variants"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold shadow-lg text-sm"
      >
        <ShoppingCart className="h-4 w-4" />
        Buy Now
      </a>
    </div>
  );
};

export default StickyBuyButton;
