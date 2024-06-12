import { Link } from 'react-router-dom';
import '../../styles/home.css';
const Home = () => {
  return (
    <>
    <div  className='Main-home'>
        <nav>
            <div className='logo'>
            <h3>FITZMARK</h3>
            </div>
            <div className='search-engine'>
              <button><i className="fa-solid fa-magnifying-glass"></i></button>
              <input placeholder='Buscar...'/>
            </div>
            <div className='user-shop'>

              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-cart-shopping"></i>
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

