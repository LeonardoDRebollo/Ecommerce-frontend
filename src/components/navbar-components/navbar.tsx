import React, { useState, ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/components.css'; // Estilos para el spinner
import UserDropdown from "./user-dropdown";



interface Notification {
    titulo: string;
    notificacion: string;
    fecha_notificacion: Date;
  }
  

const recibirNotificaciones = (): Notification[] => {
    return [
      {
        titulo: "Nueva Actualización",
        notificacion: "Se ha actualizado la política de privacidad.",
        fecha_notificacion: new Date(),
      },
      {
        titulo: "Nuevo Mensaje",
        notificacion: "Tienes un nuevo mensaje de Juan Pérez.",
        fecha_notificacion: new Date(),
      },
      {
        titulo: "El articulo #!!! ESTA EN OFERTA",
        notificacion: "Tienes un nuevo mensaje de Juan Pérez.",
        fecha_notificacion: new Date(),
      },
      {
        titulo: "Nuevas rebajas de navidad",
        notificacion: "Tienes un nuevo mensaje de Juan Pérez.",
        fecha_notificacion: new Date(),
      },
    ];
  };

const Navbar = () => {




    const [MostrarFavoritos, setMostrarFavorito] = useState(false);
    const [MostrarCarrito, setMostrarCarrito] = useState(false);
    const [MostrarNotificaciones, setMostrarNotificaciones] = useState(false);
    const [notificaciones, setNotificaciones] = useState<Notification[]>([]);
    


  useEffect(() => {
    const notificacionesRecibidas = recibirNotificaciones();

    setNotificaciones(notificacionesRecibidas);
  }, []);



  return (
    <nav>
    <div className="logo">
      <Link to={'/'}>
      <h3>FITZMARK</h3>
      </Link>
      
    </div>

    <div className="s-u">
      <div className="search-engine">
        <input placeholder="Buscar..." />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="user-shop">
        <div
          className="icon-container"
          onMouseEnter={() => setMostrarFavorito(true)}
          onMouseLeave={() => setMostrarFavorito(false)}
        >
          <i className="fa-solid fa-heart"></i>
          {MostrarFavoritos && (
            <div className="dropdown">
              <h4>Favorites</h4>
              {/* Aquí puedes agregar más contenido del dropdown */}
            </div>
          )}
        </div>

        <div
          className="icon-container"
          onMouseEnter={() => setMostrarCarrito(true)}
          onMouseLeave={() => setMostrarCarrito(false)}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          {MostrarCarrito && (
            <div className="dropdown">
              <h4>Carrito</h4>
              <p></p>
              {/* Aquí puedes agregar más contenido del dropdown */}
            </div>
          )}
        </div>

        <div
      className="icon-container"
      onMouseEnter={() => setMostrarNotificaciones(true)}
      onMouseLeave={() => setMostrarNotificaciones(false)}
    >
      <i className="fa-solid fa-bell notification-icon"></i>
      {notificaciones.length > 0 && <div className="notification-dot"></div>}
      {MostrarNotificaciones && (
        <div className="dropdown">
          <div className="dropdown-title">
            <h4>Notificaciones</h4>
          </div>

          <div className="dropdown-body">
            {notificaciones.length === 0 && <p className="no-notification">No tienes nuevas notificaciones</p>}
            {notificaciones.map((notification, index) => (
              <div className="Notificacion" key={index}>
                <div className="title-div-not">
                  <p className="notificacion-title">
                    {notification.titulo}
                  </p>
                  <i className="fa-solid fa-xmark"></i>
                </div>

                <p className="notificacion-desc">
                  {notification.notificacion}
                </p>
                <p className="notificacion-date">
                  {notification.fecha_notificacion.toString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
      </div>
    </div>

    <UserDropdown/>
  </nav>
  );
};

export default Navbar;