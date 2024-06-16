// Producto.tsx
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar-components/navbar";
import "../../styles/producto.css";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import Producto_zoom from "../../components/Product-zoom/product-zoom";
import VerticalCarousel from "../../components/Product-zoom/vertical-caroulse";

interface Producto {
  imagen: string;
  nombre_producto: string;
  precio: number;
}

const otrasImagenesFicticias = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzt2Gleb-pwrulD5pqF2l62EJ3Dg7VzkKEKQ&s",
  "https://i5.walmartimages.com/seo/HP-Stream-14-Celeron-4GB-64GB-Laptop-Rose-Pink-Mouse-Pad-Bundle_046b1d05-4782-4ac5-991b-c7252b80eed5_1.e5cbbbd49d84e057a0432ade7ac5cefc.jpeg",
  "https://www.cnet.com/a/img/resize/6547e3b264f57f10b3febbe7844e930872b4006b/hub/2019/01/25/dc028536-6ce4-48ef-ad6b-311ff3981dbe/razer-blade-stealth-quartz-pink-2019-5.png?auto=webp&fit=crop&height=1200&width=1200",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-qv6QZZfW12T_Vc2RLz4xLPMd1HQkSamdQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15LSdNR2U1-_u2MEC5DQXqv5MXfBWoYG6nA&s",
];


const Producto: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const { producto } = location.state as { producto: Producto };
  const [currentImage, setCurrentImage] = useState(producto.imagen);

  return (
    <div className="producto-page">
      <section>
        <Navbar />
      </section>
      <section className="producto-page-body">
        <div className="product">
          <div className="vertical-carousel">
          <VerticalCarousel 
            images={[producto.imagen, ...otrasImagenesFicticias]}
            onImageHover={setCurrentImage} 
          />
          </div>
          <Producto_zoom imagen={currentImage} />
          <div className="product-details">
            <h2>{producto.nombre_producto}</h2>
            <p>Precio: {producto.precio} MX</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Producto;
