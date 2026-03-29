import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919246735245";

const CartDrawer = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart, isOpen, setIsOpen } = useCart();

  const handleWhatsAppCheckout = () => {
    const orderLines = items
      .map((i) => `• ${i.size} (${i.label}) x${i.quantity} — ₹${i.price * i.quantity}`)
      .join("%0A");
    const msg = `Hi, I'd like to order Kasturi Kayam Churna:%0A${orderLines}%0A%0ATotal: ₹${totalPrice}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const handleCODCheckout = () => {
    const orderLines = items
      .map((i) => `• ${i.size} (${i.label}) x${i.quantity} — ₹${i.price * i.quantity}`)
      .join("%0A");
    const msg = `Hi, I'd like to place a COD order for Kasturi Kayam Churna:%0A${orderLines}%0A%0ATotal: ₹${totalPrice}%0A%0APlease share payment and delivery details.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 mt-4">
              {items.map((item) => (
                <div key={item.size} className="flex items-center gap-4 bg-muted/50 rounded-xl p-4">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm">Kasturi Kayam Churna — {item.size}</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-bold text-foreground mt-1">₹{item.price * item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.size, item.quantity - 1)}
                      className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.size, item.quantity + 1)}
                      className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.size)}
                      className="h-7 w-7 rounded-full flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors ml-1"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-bold text-foreground">₹{totalPrice}</span>
              </div>
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3 rounded-lg font-semibold text-sm bg-herbal-medium text-primary-foreground flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" />
                Order via WhatsApp
              </button>
              <button
                onClick={handleCODCheckout}
                className="w-full py-3 rounded-lg font-semibold text-sm bg-primary text-primary-foreground flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Cash on Delivery (COD)
              </button>
              <button
                onClick={clearCart}
                className="w-full py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
