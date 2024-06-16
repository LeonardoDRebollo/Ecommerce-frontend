import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../styles/components.css';
import { Link } from 'react-router-dom';

interface Producto {
  imagen: string;
  nombre_producto: string;
  precio: number;
}

interface CarouselSectionProps {
  title: string;
  productos: Producto[];
}

const CarouselProducts: React.FC<CarouselSectionProps> = ({ title, productos }) => {
  return (
    <div className="productos-carousel">
      <h3>{title}</h3>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 6,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {productos.map((producto, index) => (
          <Link
          to={`/producto/${index}`}
          state={{ producto }}
          key={index}
          className="product-card"
        >
          <div className="product-image">
            <img src={producto.imagen} alt={producto.nombre_producto} />
          </div>
          <div className="product-body">
            <h4>{producto.nombre_producto}</h4>
            <label>{producto.precio} MX</label>
          </div>
        </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselProducts;
