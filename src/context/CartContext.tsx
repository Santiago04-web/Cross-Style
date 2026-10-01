import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: { id: string; name: string; category: string; price: number; image: string }, size: string, quantity?: number) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  checkoutViaWhatsApp: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('cross_style_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('cross_style_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  const addToCart = (
    product: { id: string; name: string; category: string; price: number; image: string },
    size: string,
    quantity = 1
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id && item.size === size);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          size,
          image: product.image,
          quantity,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string, size: string) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id: string, size: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const checkoutViaWhatsApp = () => {
    if (cart.length === 0) return;
    
    const formattedPrice = (val: number) => `$${val.toLocaleString('es-CO')} COP`;
    let message = `*PEDIDO CROSS STYLE - OFICIAL*\n`;
    message += `──────────────────\n`;
    message += `Hola Cross Style, deseo ordenar las siguientes prendas de su colección:\n\n`;

    cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*\n`;
      message += `   • Talla: ${item.size}\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      message += `   • Precio: ${formattedPrice(item.price * item.quantity)}\n\n`;
    });

    message += `──────────────────\n`;
    message += `*TOTAL APROXIMADO: ${formattedPrice(subtotal)}*\n\n`;
    message += `📍 *Ciudad de Envío:* Cali / Otra ciudad\n`;
    message += `👤 *Nombre del cliente:* \n`;
    message += `📱 Quedo atento a la confirmación de disponibilidad y datos de pago. ¡Gracias!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/573044028376?text=${encoded}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        checkoutViaWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
