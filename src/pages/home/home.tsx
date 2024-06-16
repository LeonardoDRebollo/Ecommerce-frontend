import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import Navbar from "../../components/navbar-components/navbar";
import CarouselProducts from "../../components/home-carrousel/productos-corousel";
import { fetchSections } from "./home_API";
import LoadingSpinner from "../../components/loading";

interface Producto {
  imagen: string;
  nombre_producto: string;
  precio: number;
}

interface Section {
  title: string;
  productos: Producto[];
}

const Home: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSections();
        setSections(data.sections);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching sections:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="Main-home">
        <Navbar />
      </div>
      <div className="body-page">
        <section className="main-carrusel">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={5000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
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
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <img src="https://static.vecteezy.com/system/resources/previews/007/068/199/non_2x/summer-sale-banner-with-beach-vibes-decorate-and-product-display-cylindrical-shape-vector.jpg" />
            <img src="https://static.vecteezy.com/system/resources/previews/007/068/205/large_2x/summer-sale-banner-with-beach-vibes-decorate-and-product-display-cylindrical-shape-vector.jpg" />
            <img src="https://static.vecteezy.com/system/resources/previews/007/068/204/non_2x/summer-gift-promotion-coupon-banner-with-beach-vibes-decorate-free-vector.jpg" />
            <img src="https://static.vecteezy.com/system/resources/previews/007/068/198/non_2x/summer-sale-banner-with-beach-vibes-decorate-and-product-display-cylindrical-shape-vector.jpg" />
            <img src="https://static.vecteezy.com/system/resources/previews/006/560/561/non_2x/4-april-sale-poster-or-banner-with-4-over-on-product-podium-scene-april-4-sales-banner-template-design-for-social-media-and-website-special-offer-sale-50-off-campaign-or-promotion-free-vector.jpg" />
          </Carousel>
        </section>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <div className="grid-carousels">
            {sections.map((section, index) => (
              <React.Fragment key={index}>
              
                {index === 0 && (
                  <div className="inter-carousel-div">
                    <div>
                      <button>
                        <i className="fa-solid fa-tv"></i>
                        <p>Electronica</p>
                      </button>
                      <button>
                        <i className="fa-solid fa-shirt"></i>
                        <p>Ropa</p>
                      </button>
                      <button>
                        <i className="fa-solid fa-car"></i>
                        <p>Automoviles</p>
                      </button>
                      <button>
                        <i className="fa-solid fa-kitchen-set"></i>
                        <p>Electrodomesticos</p>
                      </button>
                    </div>
                  </div>
                )}
                  <CarouselProducts
                  title={section.title}
                  productos={section.productos}
                />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
