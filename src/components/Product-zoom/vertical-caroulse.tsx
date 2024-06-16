import React, { useState } from 'react';

interface VerticalCarouselProps {
  images: string[];
  onImageHover: (image: string) => void;
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ images, onImageHover }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleMouseEnter = (image: string) => {
    setSelectedImage(image);
    onImageHover(image);
  };

  return (
    <div className="vertical-carousel">
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`carousel-thumbnail ${selectedImage === image ? 'selected' : ''}`}
          onMouseEnter={() => handleMouseEnter(image)}
        >
          <img src={image} alt={`Thumbnail ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default VerticalCarousel;
