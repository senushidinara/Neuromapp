import React, { useEffect, useState } from 'react';

interface Props {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

const ImageLightbox: React.FC<Props> = ({ images, initialIndex = 0, onClose }) => {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [images.length, onClose]);

  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={onClose}>
      <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="Close"
          className="absolute top-2 right-2 text-white bg-black bg-opacity-40 rounded-full p-2 hover:bg-opacity-60"
          onClick={onClose}
        >
          ✕
        </button>

        <img src={images[index]} alt={`Image ${index + 1}`} className="w-full max-h-[80vh] object-contain rounded-md" />

        {images.length > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-30 hover:bg-opacity-60 rounded-full p-3"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-30 hover:bg-opacity-60 rounded-full p-3"
            >
              ›
            </button>
            <div className="flex justify-center gap-2 mt-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
