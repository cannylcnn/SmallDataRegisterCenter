import 'bootstrap/dist/css/bootstrap.css';
import '../Style/Details.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Card from './Card';

function Details() {

    const location = useLocation();
    const {driver} = location.state;

    const latitude  = driver.address.coordinates.lat; 
    const longitude = driver.address.coordinates.lng;

    const navigate = useNavigate();

    const navigateDetails = (driver) => {
    navigate(`/DriverProfile/${driver.id}`, { state:{driver} } ) // komşu al sende koullan 
  }
  
  console.log(driver)


    return (
      <>
    
        <h3>Sürücü Detayları</h3>

        <div className="card" style={{ width: '20rem',marginLeft:"20px" }}>
        <img src={driver.image} className="card-img-top" alt="..." />

        <div className="card-body">

          <h5 className="card-title">{driver.firstName} {driver.lastName}</h5>
          <p className="card-text">Yaşı: {driver.age}</p>
          <p>Doğum Tarihi: {driver.birthDate}</p>
          <p>Şehir: {driver.address.city}</p>
          <p>Eyalet: {driver.address.state}</p>
          <p>Kordinat 1: {driver.address.coordinates.lat} </p>
          <p>Kordinat 2: {driver.address.coordinates.lng} </p>

          <h5>Fiziksel Özellikler </h5>
          <p> Boy Uzunlupu: {driver.height}</p>
          <p> Kilo Durumu: {driver.weight}</p>
          <p> Saç Tipi: {driver.hair.type}</p>
          <p> Saç Rengi: {driver.hair.color}</p>

          <button
            className='btn btn-danger mx-1'
            type='button'
            onClick={() => navigateDetails(driver)}>
            <FontAwesomeIcon icon={faInfoCircle} ></FontAwesomeIcon>
          </button>

        </div>
      </div>
  
    </>

    );
  }

export default Details;