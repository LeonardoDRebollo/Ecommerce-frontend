import React, { useState, ChangeEvent, useEffect } from 'react';
import '../../styles/auth.css';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../components/loading';

interface RegsProps {
  state: number;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  passwordRepit: string;
  setPasswordRepit: (password: string) => void;
}


function validacionPass0({ password } : { password: string }) {
  const minLength = /.{8,}/; 

  if (
    minLength.test(password)
  ) {
    return true; 
  } else {
    return false; 
  }
}
function validacionPass1({ password } : { password: string }) {
  const hasLowerCase = /[a-z]/;


  if (
    hasLowerCase.test(password)
    
  ) {
    return true;
  } else {
    return false; 
  }
}
function validacionPass2({ password } : { password: string }) { 
  const hasUpperCase = /[A-Z]/;
  if (
    hasUpperCase.test(password) 
   
  ) {
    return true;
  } else {
    return false;
  }
}
function validacionPass3({ password } : { password: string }) {
  const hasNumber = /[0-9]/;

  if (
    hasNumber.test(password) 
  ) {
    return true;
  } else {
    return false;
  }
}
function validacionPass4({ password } : { password: string }) {
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

  if (
    hasSpecialChar.test(password)
  ) {
    return true;
  } else {
    return false;
  }
}

function validacionPass5({ password, passwordRepit } : { password: string,passwordRepit: string }) {

  if (password === passwordRepit && password != '' && passwordRepit != '') {
  
    return true;
  } else {
    return false;
  }
}

const Regs: React.FC<RegsProps> = ({ state, email, setEmail, password, setPassword, passwordRepit, setPasswordRepit }) => {
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handlePasswordRepitChange = (e: ChangeEvent<HTMLInputElement>) => setPasswordRepit(e.target.value);


  if (state === 0) {
    return (
      
      <div className='Reigster'>
        <div className='titulo'>
          <h1>¿Cuál es tu correo electrónico?</h1>
        </div>

        <div>
          <input
            className='input'
            type="text"
            name="email"
            placeholder='Correo electrónico'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className='Reigster'>
        <h1>Ingresa tu nueva contraseña</h1>
        <div>
          <input
            className='input'
            type="password"
            name="password"
            placeholder='Contraseña'
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <p className='passmatch' id='passmatch' hidden>Las contraseñas deben ser iguales</p>
          <input
            className='input'
            type="password"
            name="passwordRepit"
            placeholder='Repite tu contraseña'
            value={passwordRepit}
            onChange={handlePasswordRepitChange}
          />
        </div>

        <div className='validation-main'>
          <div className={`passmatch ${validacionPass0({password}) ? 'valid-pass' : 'no-validpass'}`}><i className={`passmatch ${validacionPass0({password}) ? 'fa-solid fa-check' : 'fa-solid fa-xmark'}`}></i><li>La contraseña debe tener al menos 8 caracteres</li></div>
          <div className={`passmatch ${validacionPass1({password}) ? 'valid-pass' : 'no-validpass'}`}><i className={`passmatch ${validacionPass1({password}) ? 'fa-solid fa-check' : 'fa-solid fa-xmark'}`}></i><li>La contraseña debe tener al menos 1 letra minuscula</li></div>
          <div className={`passmatch ${validacionPass2({password}) ? 'valid-pass' : 'no-validpass'}`}><i className={`passmatch ${validacionPass2({password}) ? 'fa-solid fa-check' : 'fa-solid fa-xmark'}`}></i><li>La contraseña debe tener al menos 1 letra mayuscula</li></div>
          <div className={`passmatch ${validacionPass3({password}) ? 'valid-pass' : 'no-validpass'}`}><i className={`passmatch ${validacionPass3({password}) ? 'fa-solid fa-check' : 'fa-solid fa-xmark'}`}></i><li>La contraseña debe tener al menos 1 numero</li></div>
          <div className={`passmatch ${validacionPass4({password}) ? 'valid-pass' : 'no-validpass'}`}><i className={`passmatch ${validacionPass4({password}) ? 'fa-solid fa-check' : 'fa-solid fa-xmark'}`}></i><li>La contraseña debe tener al menos 1 caracter especial</li></div>
          <div className={`passmatch ${validacionPass5({password,passwordRepit}) ? 'valid-pass' : 'no-validpass'}`}><i className={`passmatch ${validacionPass5({password,passwordRepit}) ? 'fa-solid fa-check' : 'fa-solid fa-xmark'}`}></i><li>Las contraseñas deben ser iguales</li></div>
        </div>
      </div>
    );
  }
};





const Registro: React.FC = () => {
  const [state, setState] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepit, setPasswordRepit] = useState<string>('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  const handleNext = () => {
    // Save the current values (this example just logs them)
    console.log('Email:', email);
    console.log('Password:', password);
   // Realizamos todas las validaciones en un solo bucle
let valid = true;
if (state === 1) {
  const validations = [
    validacionPass0({ password }),
    validacionPass1({ password }),
    validacionPass2({ password }),
    validacionPass3({ password }),
    validacionPass4({ password }),
    validacionPass5({ password, passwordRepit }),
  ];

  // Verificamos si alguna validación falla
  for (let i = 0; i < validations.length; i++) {
    if (!validations[i]) {
      valid = false;
      break;
    }
  }

  if (valid) {
    console.log('Contraseña válida');
    setEmail('');
    setPassword('');
    setPasswordRepit('');
  } else {
    console.log('Contraseña no válida');
  }
} else {
  setState(state + 1);
}

  };

  return (
      


 <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='Main-pot'>
        <div className='titulo'>
          <Regs
            state={state}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            passwordRepit={passwordRepit}
            setPasswordRepit={setPasswordRepit}
          />
          <div className='div-btn'>
             <button type="button" className='btn-general' onClick={handleNext}>Siguiente</button>

          </div>
        </div>
        <div className='link-regist'>
           <Link to={'/'}>¡Ya estoy registrado!</Link>  
        </div>
       
      </div>
      )}
    </div>
  );
};

export default Registro;
