import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import LegacySection from "@/components/LegacySection";
import VariantsSection from "@/components/VariantsSection";
import IngredientsSection from "@/components/IngredientsSection";
import HowToUseSection from "@/components/HowToUseSection";
import TrustBadges from "@/components/TrustBadges";

import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyBuyButton from "@/components/StickyBuyButton";
import CartDrawer from "@/components/CartDrawer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <CartProvider>
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <BenefitsSection />
    <LegacySection />
    <VariantsSection />
    <IngredientsSection />
    <HowToUseSection />
    <TrustBadges />
    
    <FAQSection />
    <ContactSection />
    <Footer />
    <StickyBuyButton />
    <CartDrawer />
    <ScrollToTop />
  </CartProvider>
);

export default Index;
