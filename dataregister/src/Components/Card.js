import 'bootstrap/dist/css/bootstrap.css';
import '../Style/PropsPage.css';
import '../Style/Card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



function Card({ driver }) {

    const navigate = useNavigate();
    const navigateDetails = (driver) => {
        navigate(`/DriverProfile/${driver.id}`, { state: { driver } })
    }

    // PropsPage sayfasını bağladıktan sonra Bu alanda databasedeki isimleri yazıyoruz.


    return (
        <>
            <div className="cards" style={{ width: '18rem' }}>
                <img src={driver.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    
                    <h4 className="card-title"> Order: {driver.id}</h4>
                    <hr></hr>
                    <p className="card-title"> Name: {driver.firstName}</p>
                    <p className="card-title"> Surname: {driver.lastName}</p>
                    <p className="card-title"> Age: {driver.age}</p>
                    
                    <hr></hr>
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

export default Card;
