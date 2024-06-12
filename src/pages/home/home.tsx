import React, { useState, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.css';
const Home = () => {


  const [MostrarFavoritos, setMostrarFavorito] = useState(false);
  const [MostrarCarrito, setMostrarCarrito] = useState(false);
  const [MostrarNotificaciones, setMostrarNotificaciones] = useState(false);





  return (
    <>
    <div  className='Main-home'>
        <nav>
            <div className='logo'>
            <h3>FITZMARK</h3>
            </div>

            <div className='s-u'>
            <div className='search-engine'>
              <button><i className="fa-solid fa-magnifying-glass"></i></button>
              <input placeholder='Buscar...'/>

              
            </div>
            <div className='user-shop'>

            <div
              className='icon-container'
              onMouseEnter={() => setMostrarFavorito(true)}
              onMouseLeave={() => setMostrarFavorito(false)}
            >
              <i className="fa-solid fa-heart"></i>
              {MostrarFavoritos && (
                <div className='dropdown'>
                  <h4>Favorites</h4>
                  {/* Aquí puedes agregar más contenido del dropdown */}
                </div>
              )}
            </div>

            <div
              className='icon-container'
              onMouseEnter={() => setMostrarCarrito(true)}
              onMouseLeave={() => setMostrarCarrito(false)}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              {MostrarCarrito && (
                <div className='dropdown'>
                  <h4>Carrito</h4>
                  <p></p>
                  {/* Aquí puedes agregar más contenido del dropdown */}
                </div>
              )}
            </div>

            <div
              className='icon-container'
              onMouseEnter={() => setMostrarNotificaciones(true)}
              onMouseLeave={() => setMostrarNotificaciones(false)}
            >
              <i className="fa-solid fa-bell"></i>
              {MostrarNotificaciones && (
                <div className='dropdown'>
                  <h4>Notificaciones</h4>
                  {/* Aquí puedes agregar más contenido del dropdown */}
                </div>
              )}
            </div>
            </div>


            </div>

            <Link to={'/login'}>
            <div className='user-dropdown'>
                <label className='user-email'>leonardod.rebollo@gmail.com</label>
                <img src="https://storage.googleapis.com/wnr-ai/uploads/chat/ai/avatar/de1ee35faea6c14048728cb1d0739d12/v512_de1ee35faea6c14048728cb1d0739d12.png" width="40" height="40"/>
            </div>
            </Link>
        </nav>
    </div>
        <div className='body-page'>
            <section className='main-carrusel'>
          
            </section>
            
        </div>
  </>
  );
};

export default Home;

