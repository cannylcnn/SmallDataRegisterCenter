import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import { useNavigate } from 'react-router-dom';
import fotologo from '../Assets/anka.png';

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/LoginPage`);  // navigate ile her zaman backtick kullan
  };



  return (
    <>
      <div className='position'>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            
            <div><img id='anka' src={fotologo} /></div>
          

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 text-white">ANASAYFA</Link></li>
              <li><Link to="" className="nav-link px-2 text-white">ŞUBELERİMİZ</Link></li>
              <li><Link to="" className="nav-link px-2 text-white">FİYAT LİSTESİ</Link></li>
              <li><Link to="" className="nav-link px-2 text-white">HAKKIMIZDA</Link></li>
            </ul>

            <div className="text-end">
              <button type="button" onClick={handleClick} className="btn btn-outline-light me-2">Giriş</button>
              <button type="button" onClick={""} className="btn kyt">Kayıt Oluştur</button>
            </div>
          </div>
        </div>
      </header>
      </div>
    </>
  );
}

export default Navbar;


