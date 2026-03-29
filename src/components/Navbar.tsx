import { useState } from "react";
import { Menu, X, Leaf, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "Variants", href: "#variants" },
  { label: "How to Use", href: "#how-to-use" },
  
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-display text-lg font-bold text-foreground">Kasturi Kayam</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-foreground hover:text-primary transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <a
            href="#variants"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Buy Now
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-foreground hover:text-primary transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#variants"
            onClick={() => setOpen(false)}
            className="block mt-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
          >
            Buy Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
