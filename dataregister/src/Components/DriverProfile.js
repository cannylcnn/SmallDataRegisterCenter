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


function DriverProfile() {


    const standardIcon = L.icon({

        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });


    const location = useLocation();
    const { driver } = location.state;

    const latitude = driver.address.coordinates.lat;  // ikinci sayfa 
    const longitude = driver.address.coordinates.lng;


    return (
        <>

            <div className='pf' style={{ marginBottom: "10px" }} ><p>{driver.firstName} {driver.lastName}'s Photo & Media Library </p></div>
            <div className='profileBox' >

                <div className='backgroundPhoto' ><img id='bck' style={{ display: "block", objectFit: "cover" }} src="https://picsum.photos/1200/300" alt='backgroundPhoto' ></img></div>

                <div className='profilePhoto'><img style={{ width: "168px", height: "168px", borderRadius: "50%" }} src={driver.image} alt='profilePicture' /></div>

                <div className='profileName'><h3>{driver.firstName} {driver.lastName} </h3></div>

                <div><h5 className='profileLocation' ><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} style={{ marginTop: "-4px" }} fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg> {driver.address.state}, {driver.address.country} </h5></div>


                <hr id='line'></hr>
                <ul className='profileLinks' >
                    <li><Link to="/" className="nav-link px-2" >Timeline</Link></li>
                    <li><Link to="" className="nav-link  px-2" >About</Link></li>
                    <li><Link to="" className="nav-link  px-2" >Friends</Link></li>
                    <li><Link to="" className="nav-link  px-2" >Media</Link></li>
                    <li><Link to="" className="nav-link  px-2" >More</Link></li>
                    <div className='sendbtn'><button id='sendbtn' className='btn btn-primary' type='button'>Send Message</button></div>
                </ul>
            </div>

            <div className='konum' style={{ marginBottom: "10px" }} ><p>{driver.firstName} {driver.lastName}'s Interface</p></div>
            <div className='infoContainer' >
                <div className="container">
                    <div className="row">
                        <div className="col-sm" id='colflex'>
                        <div className='pf' style={{width:"1200px", height:"auto", padding:"5px", marginLeft:"-11px", borderRadius:"0px",borderTopLeftRadius:"0px", borderTopRightRadius:"0px" , marginBottom:"10px", fontSize:"80%", marginTop:"-10px"}}><p>Personal İnformations</p></div> 

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Surname</th>
                                        <th scope="col">Birth Date</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Password</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{driver.firstName}</td>
                                        <td>{driver.lastName}</td>
                                        <td>{driver.birthDate}</td>
                                        <td>{driver.age}</td>
                                        <td>{driver.gender}</td>
                                        <td>{driver.email}</td>
                                        <td>{driver.phone}</td>
                                        <td>{driver.username}</td>
                                        <td>{driver.password}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div className='konum' style={{ marginBottom: "10px" }} ><p>{driver.firstName} {driver.lastName}'s Location</p></div>
            <div className='mapContainer'>
            
                <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '350px', width: '100%', borderRadius: '5px' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[latitude, longitude]} icon={standardIcon}>
                        <Popup>
                            {driver.firstName} {driver.lastName}
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
        </>
    );
}
export default DriverProfile;