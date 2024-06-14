import React, { useState, ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from "../../components/navbar";


interface Productos {
  imagen: string;
  nombre_producto: string;
  precio: number;
}



const recibirProductos = (): Productos[] => {
  return [
    {
      imagen: "https://cdn1.coppel.com/images/catalog/pm/2050453-1.jpg",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
    {
      imagen: "https://cdn1.coppel.com/images/catalog/pm/2050453-1.jpg",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
    {
      imagen: "https://cdn1.coppel.com/images/catalog/pm/2050453-1.jpg",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
    {
      imagen: "https://cdn1.coppel.com/images/catalog/pm/2050453-1.jpg",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
    {
      imagen: "https://m.media-amazon.com/images/I/717njqTYEJL._AC_UF894,1000_QL80_.jpg",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
    {
      imagen: "https://cdn1.coppel.com/images/catalog/pm/2050453-1.jpg",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
    {
      imagen: "https://cdn1.coppel.com/images/catalog/pm/2050453-1.jpg",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
    {
      imagen: "https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00075376489831l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
    {
      imagen: "https://cdn1.coppel.com/images/catalog/pm/2050453-1.jpg",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
    {
      imagen: "https://cdn1.coppel.com/images/catalog/pm/2050453-1.jpg",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
    {
      imagen: "https://cdn1.coppel.com/images/catalog/pm/2050453-1.jpg",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
    {
      imagen: "https://cdn1.coppel.com/images/catalog/pm/2050453-1.jpg",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
    {
      imagen: "https://cdn1.coppel.com/images/catalog/pm/2050453-1.jpg",
      nombre_producto: "Laptop LENOVO 14'5 i5 12 MESE SIN INTERESES",
      precio: 5450,
    },
  ];
};

const Home = () => {

  const [Productos, setProductos] = useState<Productos[]>([]);


  useEffect(() => {
    const productosRecibidos = recibirProductos();

    setProductos(productosRecibidos);
  }, []);


  return (
    <>
      <div className="Main-home">
         <Navbar/>
      </div>
      <div className="body-page">
        <section className="main-carrusel"></section>
        <div className="Ofertas-dia">
        <h3>OFERTAS DEL DIA</h3>
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
          {Productos.map((producto, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={producto.imagen} alt={producto.nombre_producto} />
              </div>
              <div className="product-body">
                <h4>{producto.nombre_producto}</h4>
                <label>{producto.precio} MX</label>
              </div>
            </div>
          ))}
        </Carousel>
        </div>
        
      </div>
    </>
  );
};

export default Home;
