import React from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
    checkoutViaWhatsApp,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  const formattedSubtotal = `$${subtotal.toLocaleString('es-CO')} COP`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* BACKDROP */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0d0d12] border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl">
          
          {/* HEADER */}
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-white" />
                <h2 className="font-display font-bold text-base text-white uppercase tracking-wider">
                  CARRITO DE COMPRA
                </h2>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Cerrar carrito"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* FREE SHIPPING ANNOUNCEMENT */}
            <div className="py-2.5 px-3 my-4 bg-zinc-900/90 border border-zinc-800 rounded-lg flex items-center justify-between text-xs font-mono text-zinc-300">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>ENVÍOS A TODO COLOMBIA</span>
              </span>
              <span className="text-[10px] text-zinc-500 uppercase">CALI - ORIGEN</span>
            </div>
          </div>

          {/* CART ITEMS LIST */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white uppercase tracking-wider mb-1">
                    TU CARRITO ESTÁ VACÍO
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans max-w-xs">
                    Explora nuestra nueva colección y añade las piezas que representen tu estilo.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-white text-black font-display font-bold text-xs tracking-widest uppercase hover:bg-zinc-200 transition-colors"
                >
                  VER PRENDAS
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 p-3 bg-zinc-950/80 border border-zinc-800/80 rounded-xl"
                >
                  {/* THUMBNAIL */}
                  <div className="w-20 h-24 rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wider">
                          {item.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                          aria-label="Eliminar prenda"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                        Talla: <span className="text-white font-bold">{item.size}</span>
                      </div>
                      <div className="font-display font-semibold text-xs text-zinc-200 mt-1">
                        ${item.price.toLocaleString('es-CO')} COP
                      </div>
                    </div>

                    {/* QUANTITY CONTROLS */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-zinc-800 rounded bg-zinc-900">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.size, -1)}
                          className="px-2 py-0.5 text-zinc-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.size, 1)}
                          className="px-2 py-0.5 text-zinc-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500">
                        Sub: ${(item.price * item.quantity).toLocaleString('es-CO')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* FOOTER TOTAL & WHATSAPP CHECKOUT */}
          {cart.length > 0 && (
            <div className="pt-4 border-t border-zinc-800 space-y-4">
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-zinc-400">
                  <span>PRENDAS EN BOLSA:</span>
                  <span className="text-white font-bold">{totalItems} piezas</span>
                </div>
                <div className="flex justify-between text-sm text-zinc-200 font-display">
                  <span>TOTAL ESTIMADO:</span>
                  <span className="font-bold text-base text-white">{formattedSubtotal}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={checkoutViaWhatsApp}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-display font-bold text-xs tracking-[0.2em] uppercase rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 text-black fill-current" />
                  <span>FINALIZAR PEDIDO POR WHATSAPP</span>
                </button>

                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1">
                  <button
                    type="button"
                    onClick={clearCart}
                    className="hover:text-zinc-300 transition-colors"
                  >
                    Vaciar carrito
                  </button>
                  <span>Atención directa y segura</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
