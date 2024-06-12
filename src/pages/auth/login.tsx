import '../../styles/auth.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='root'>

   
    <div  className='Main'>
        
  
      <div className="login-container">
      <div className='titulo'>
        <Link to={'/'}><h1>FITZMARK</h1></Link>
        
        </div>
        <div>
          <input className='input' type="text" id="username" name="username" placeholder='correo electronico'/>
        </div>
        <div>
          <input className='input' type="password" id="password" name="password" placeholder='Contraseña'/>
          <a>¿Olvidaste tu Contraseña?</a>
        </div>
        <div className='div-recordarme'>
            <input className='checkbox' type='checkbox'></input>
            <label>Recordarme</label>
        </div>
        <div className='div-button'>
          
        <div className='login-google'>
           <img src='https://www.vectorlogo.zone/logos/google/google-icon.svg' height={20} alt='Google' />
           <label>Login con Google</label>
        </div>

        <button className='btn-general' type="submit">Login</button>
        
        </div>
        
        <Link to="/registro">¿No tienes una cuenta?¡Registrate gratis ya mismo!</Link>
      </div>
    </div>
    </div>
  );
};

export default Login;

