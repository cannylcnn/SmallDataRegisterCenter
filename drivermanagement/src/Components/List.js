import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';





function List({item}){

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item disabled" aria-disabled="true">{item.title}</li>
                <li className="list-group-item">{item.body}</li>
                <li className="list-group-item">{item.tags}</li>
                <li className="list-group-item">{item.views}</li>
            </ul>
        </>
    );
}
export default List;