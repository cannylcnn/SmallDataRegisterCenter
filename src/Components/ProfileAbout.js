import 'bootstrap/dist/css/bootstrap.css';
import '../Style/DriverProfile.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link } from "react-router-dom";


function ProfileAbout({}) {


    const standardIcon = L.icon({

        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });


    const location = useLocation();
    const { driver } = location.state;

    const latitude = driver.address.coordinates.lat;
    const longitude = driver.address.coordinates.lng;


    return (
        <>
        <div>








        </div>
        </>
    );
}
export default ProfileAbout;