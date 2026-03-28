import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-5 w-5 text-primary-foreground" />
            <span className="font-display text-lg font-bold text-primary-foreground">Kasturi Kayam Churna</span>
          </div>
          <p className="text-sm text-primary-foreground/60">
            A trusted Ayurvedic digestive formula by Sri Seetharam Anjaneya Pharmacy, Telangana. Helping families since 1962.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-primary-foreground mb-4 text-sm">Quick Links</h4>
          <div className="space-y-2">
            {["Benefits", "Variants", "How to Use", "FAQ"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-primary-foreground mb-4 text-sm">Legal</h4>
          <div className="space-y-2">
            {["Privacy Policy", "Terms & Conditions", "Shipping Policy", "Refund Policy"].map((link) => (
              <a key={link} href="#" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Kasturi Kayam Churna. All rights reserved. | Sri Seetharam Anjaneya Pharmacy, Telangana, India.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
