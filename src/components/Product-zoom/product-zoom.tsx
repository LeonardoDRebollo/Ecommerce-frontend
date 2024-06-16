// Producto.tsx
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import '../../styles/producto.css';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

interface ProductoImgen {
  imagen: string;
}

const Producto_zoom: React.FC<ProductoImgen> = ({ imagen }) =>  {
  const [zoomScale, setZoomScale] = useState(2);




  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const originalWidth = img.naturalWidth;
      const originalHeight = img.naturalHeight;
      const resolution = originalWidth * originalHeight;
      let scale;
      if (resolution < 1000000) {
        scale = 3.5;
      } else if (resolution < 4000000) {
        scale = 0.8;
      } else {
        scale = 0.3;
      }
      setZoomScale(scale);
    };
    img.src = imagen;
  }, [imagen]);

  console.log(zoomScale)

  return (
        <InnerImageZoom 
          src={imagen} 
          zoomSrc={imagen} 
          zoomType="hover"
          zoomScale={zoomScale} 
          className="product-zoom-image"
        />
  );
};

export default Producto_zoom;
