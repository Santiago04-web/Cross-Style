import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, Check, Shield } from 'lucide-react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState<string>('');
  const [addedAnimation, setAddedAnimation] = useState(false);

  React.useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || 'M');
      setActiveImage(product.image);
      setQuantity(1);
      setAddedAnimation(false);
    }
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
      },
      selectedSize,
      quantity
    );
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const handleBuyWhatsApp = () => {
    const text = `Hola Cross Style, estoy interesado en ordenar:\n*${product.name}*\n• Categoría: ${product.category}\n• Talla elegida: ${selectedSize}\n• Cantidad: ${quantity}\n• Precio: ${product.displayPrice}\n\n¿Tienen disponibilidad para envío inmediato?`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/573044028376?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* MODAL DIALOG */}
      <div className="relative w-full max-w-4xl bg-[#0f0f14] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label="Cerrar vista rápida"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-400 transition-all hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* IMAGE SECTION */}
          <div className="relative bg-zinc-950 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800">
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-zinc-800/80 group">
              <img
                src={activeImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-sm border border-zinc-700 rounded-md text-[10px] font-mono tracking-widest text-zinc-300 uppercase">
                {product.tag}
              </div>
            </div>

            {/* THUMBNAIL GALLERY */}
            {product.gallery.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-16 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeImage === img ? 'border-white scale-105' : 'border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT DETAILS */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* CATEGORY & BADGE */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase">
                  {product.category} // {product.subCategory}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-700 bg-zinc-900 text-zinc-400">
                  {product.id}
                </span>
              </div>

              {/* TITLE */}
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wider uppercase mb-2">
                {product.name}
              </h2>

              {/* PRICE */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display font-extrabold text-2xl text-white">
                  {product.displayPrice}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                  [PRECIO EDITABLE]
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-zinc-300 leading-relaxed font-sans mb-6">
                {product.description}
              </p>

              {/* TECH SPECS BOX */}
              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80 mb-6 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-zinc-400">
                  <span>SILUETA:</span>
                  <span className="text-zinc-200 font-medium">{product.fit}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>COMPOSICIÓN:</span>
                  <span className="text-zinc-200 font-medium">{product.composition}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>ORIGEN:</span>
                  <span className="text-zinc-200 font-medium">Cali, Colombia</span>
                </div>
              </div>

              {/* SIZE SELECTOR */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                    SELECCIONA TALLA:
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    Guía Streetwear Boxy
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-xs font-mono font-bold tracking-wider rounded-md border transition-all ${
                        selectedSize === size
                          ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                          : 'bg-zinc-900/80 text-zinc-400 border-zinc-700/80 hover:text-white hover:border-zinc-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                  CANTIDAD:
                </span>
                <div className="flex items-center border border-zinc-700 rounded-lg overflow-hidden bg-zinc-900">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-xs font-mono font-bold text-white">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-3 py-3.5 bg-white text-black font-display font-bold text-xs tracking-[0.2em] uppercase rounded-lg hover:bg-zinc-200 transition-all hover:scale-[1.01]"
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>¡AGREGADO AL CARRITO!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-black" />
                    <span>AÑADIR AL CARRITO</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleBuyWhatsApp}
                className="w-full flex items-center justify-center gap-3 py-3.5 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 font-display font-bold text-xs tracking-[0.2em] uppercase rounded-lg hover:bg-emerald-500/20 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>PEDIR DIRECTO POR WHATSAPP</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-500">
                <Shield className="w-3.5 h-3.5 text-zinc-400" />
                <span>Compra protegida y confirmación en tiempo real con Cross Style</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
