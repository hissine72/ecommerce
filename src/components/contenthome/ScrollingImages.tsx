// src/components/ScrollingImages.tsx
import React from 'react';

const images = [
  "https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090128/boxes.png?auto=format&amp;ixlib=react-9.7.0",
  "https://ph-prod.imgix.net/wp-content/uploads/2024/04/17085102/hp_11.png?auto=format&ixlib=react-9.7.0&w=1075",
  "https://ph-prod.imgix.net/wp-content/uploads/2024/04/17085923/mailers.png?auto=format&ixlib=react-9.7.0&w=512",
  "https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090022/accessories.png?auto=format&ixlib=react-9.7.0&w=512",
  "https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090335/fillers.png?auto=format&ixlib=react-9.7.0&w=512",
  "https://ph-prod.imgix.net/wp-content/uploads/2024/04/09224015/Photo-Placeholder-19.png?auto=format&ixlib=react-9.7.0&w=1247"
];

const ScrollingImages: React.FC = () => {
  return (
    <div className="overflow-hidden h-[800px] w-[500px] relative">
      <div className="absolute inset-0 flex flex-col">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className="scroll-vertical" />
        ))}
        {images.map((src, index) => (
          <img key={index + images.length} src={src} alt={`Image ${index + 7}`} className="scroll-vertical" />
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;
