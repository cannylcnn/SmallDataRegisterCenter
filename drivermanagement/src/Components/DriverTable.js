import 'bootstrap/dist/css/bootstrap.css';
import "../Style/DriverTable.css"
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "../Style/Driver.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faInfoCircle, faYenSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function DriverTable() {
    

    const [driverList, setDriverList] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    

    const location = useLocation();
    const { driver } = location.state;
    console.log(driver)

    useEffect(() => {

        fetch('https://dummyjson.com/users')
            .then((res) => res.json())
            .then((data) => {

                setDriverList(data.users);
                setLoading(false)
            })
            .catch((error) => console.log("Error Fetching Driver List:", error));
        console.log(driverList)
    }, []);

    const deleteDriver = (id) => {

        fetch(`https://dummyjson.com/users/${id}`,
          { method: "DELETE" }
        )
    
          .then(() => {
            setDriverList(driverList.filter(driver => driver.id !== id))
          })
      }

      const update = (driver) =>{
        
        navigate(`/Driver/${driver.id}`, { state:{driver} } )
      }

      const [edit, setEdit] = useState(null)

      const navigateDetails = (driver) => {
        navigate(`/PropsPage/${driver.id}`, { state:{driver} } )
      }


    return (
        <>
           
           <div className='pf' style={{width:"900px", borderBottom:"1px" , borderRadius:"0px", borderTopLeftRadius:"10px", borderTopRightRadius:"10px", marginLeft:"254px" }}><p>Table of All Drivers</p></div> 
            <table id='list' className='table table-dark mt-0'>
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Delete</th>
                        <th>Detaylar</th>
                    </tr>
                </thead>

                <tbody>{driverList.map(driver => (                     // DATABASE DEKİ İSİMLERİ TABLOYA CAGIRIRIZ
                    <tr key={driver.id} >
                        <td>{driver.id}</td>
                        <td>{driver.firstName}</td>
                        <td>{driver.lastName}</td>

                        <td>
                            <button
                            id='trash'
                                type='button'
                                className='btn btn-success mx-0'
                                onClick={() => deleteDriver(driver.id)}
                            ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                        </td>

                        <td>
                            <button id='detail'
                                className='btn btn-danger mx-0'
                                type='button'
                                onClick={() => navigateDetails(driver)}
                            ><FontAwesomeIcon  icon={faInfoCircle} ></FontAwesomeIcon></button>
                        </td>

                    </tr>
                ))}

                </tbody>

            </table>

        </>
    );
}

export default DriverTable;