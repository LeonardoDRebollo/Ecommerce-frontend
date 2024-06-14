import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components.css'; // Archivo de estilos para el dropdown (puedes crearlo como desees)

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option : string) => {
    switch (option) {
        case 'Mi cuenta':
          navigate('/mi-cuenta');
          break;
        case 'Configuración':
          navigate('/configuracion');
          break;
        case 'Mis pedidos':
          navigate('/mis-pedidos');
          break;
        case 'Vender':
          navigate('/vender');
          break;
        case 'Cerrar sesión':
          navigate('/login');
          break;
        default:
          break;
      }
    console.log('Option clicked:', option);
    // Por ejemplo, podrías navegar a una página específica o realizar una acción relacionada con la opción seleccionada
  };

  return (
    <div className="user-dropdown"
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
    >
      <div className="user-info" onClick={toggleDropdown}>
        <label className="user-email">leonardod.rebollo@gmail.com</label>
        <img
          src="https://storage.googleapis.com/wnr-ai/uploads/chat/ai/avatar/de1ee35faea6c14048728cb1d0739d12/v512_de1ee35faea6c14048728cb1d0739d12.png"
          alt="user-avatar"
          width="40"
          height="40"
          className="user-avatar"
        />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-option" onClick={() => handleOptionClick('Mi cuenta')}>
            Mi cuenta
          </div>
          <div className="dropdown-option" onClick={() => handleOptionClick('Configuración')}>
            Configuración
          </div>
          <div className="dropdown-option" onClick={() => handleOptionClick('Mis pedidos')}>
            Mis pedidos
          </div>
          <div className="dropdown-option" onClick={() => handleOptionClick('Vender')}>
            Vender
          </div>
          <div className="dropdown-option" onClick={() => handleOptionClick('Cerrar sesión')}>
            Cerrar sesión
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
