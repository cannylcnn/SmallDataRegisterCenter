import 'bootstrap/dist/css/bootstrap.css';
import '../Style/Footer.css';
import { Link } from "react-router-dom";



function Footer() {

    return (
        <>
            <footer className="footer" role="contentinfo" itemScope itemType="http://schema.org/WPFooter">           
                <ul className="footer-links" role="navigation" aria-labelledby="footer-links-heading">
                    <li><Link> Anasayfa</Link></li>
                    <li><Link> Şubelerimiz</Link></li>
                    <li><Link> Paketlerimiz</Link></li>
                    <li><Link> Hakkımızda</Link></li>
                    <li><Link> İletişim</Link></li>
                </ul>
                <p className="copyright">© 2012 Anka Sürücü Kursları Reserved.</p>
            </footer>
        </>
    );
}

export default Footer;