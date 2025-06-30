import 'bootstrap/dist/css/bootstrap.css';
import '../Style/PropsPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function Props({ driver }) {



    const navigate = useNavigate();
    const navigateDetails = (driver) => {
        navigate(`/DriverProfile/${driver.id}`, { state: { driver } })
    }

    // PropsPage sayfasını bağladıktan sonra bu alanda kendi yarattığımız props isimlerini yerleştiriyoruz.

    return (    
        <>

            <div className="cards" style={{ width: '18rem' }}>
                <img src={driver.image} className="card-img-top" alt="..." />
                <div className="card-body">

                    <h4 className='card-title'> {driver.id}</h4>
                    <h5 className="card-title"> {driver.name} {driver.surname}</h5>
                    <p className="card-title">  {driver.age}</p>
                    <p className="card-title">  {driver.email}</p>
                    <p className="card-title">  {driver.telefon}</p>  
                    <p className="card-title">  {driver.eyalet}</p>
                    <p className="card-title">  {driver.cinsiyet}</p>
                    <p className="card-title">  {driver.dogumtarihi}</p>
                    <p className="card-title">  {driver.kullaniciadi}</p>
                    <p className="card-title">  {driver.sifre}</p>

                    <button
                        className='btn btn-danger mx-1'
                        type='button'
                        id='profilebtn'
                        onClick={() => navigateDetails(driver)}>
                        <FontAwesomeIcon icon={faInfoCircle} ></FontAwesomeIcon>
                    </button>
                    
                </div>
            </div>

        </>
    );
}

export default Props;