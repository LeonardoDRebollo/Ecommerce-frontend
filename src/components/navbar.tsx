import React, { useState, ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/components.css'; // Estilos para el spinner



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
      <h3>FITZMARK</h3>
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
          <i className="fa-solid fa-bell"></i>
          {MostrarNotificaciones && (
            <div className="dropdown">
              <div className="dropdown-title">
                <h4>Notificaciones</h4>
              </div>

              <div className="dropdown-body">
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

    <Link to={"/login"}>
      <div className="user-dropdown">
        <label className="user-email">leonardod.rebollo@gmail.com</label>
        <img
          src="https://storage.googleapis.com/wnr-ai/uploads/chat/ai/avatar/de1ee35faea6c14048728cb1d0739d12/v512_de1ee35faea6c14048728cb1d0739d12.png"
          width="40"
          height="40"
        />
      </div>
    </Link>
  </nav>
  );
};

export default Navbar;