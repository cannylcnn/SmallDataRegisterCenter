import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Style/Home/Nav.css'
import logo from '../../ımages/logo.png';
import { Link } from 'react-router-dom'

function Nav() {

    return (
      
      <>
        <hr></hr>
        <div className='box'>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0, menu">
       
         
          <div className='logo' ><img src={logo} alt='logo' ></img></div>

            <li><Link to="/HomePage" target='_top' id="link" className="nav-link px-2">HOME</Link></li>
            <li><Link to="/InventoryPage" target='_top' id="link" className="nav-link px-2">INVENTORY</Link></li>
            <li><Link to="/FinancingPage" target='_top' id="link" className="nav-link px-2">FINANCING</Link></li>
            <li><Link to="/ContactUsPage" target='_top' id="link" className="nav-link px-2">CONTACT US</Link></li>
          
          </ul>
        </div>
        
        
      </>
    );
  }
  
  export default Nav;
  