import 'bootstrap/dist/css/bootstrap.css';
import "../Style/Driver.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faInfoCircle, faYenSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



function Driver() {


  const [driverList, setDriverList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [driver, setDriver] = useState({

    isim: "",
    soyisim: "",
    yas: "",
    email: "",
    resim:"",
    telefon:"",
    dogumtarihi:""
  })


  const [edit, setEdit] = useState(null)
  const navigate = useNavigate();


  useEffect(() => {

    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {

        setDriverList(data.users);
        setLoading(false)
      })
      .catch((error) => console.log("Error Fetching Driver List:", error));   // birinci sayfa location taşıma sayfasının
    console.log(driverList)


  }, []);

  const addDriver = () => {

    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        firstName: driver.isim,
        lastName: driver.soyisim,
        age: driver.yas,
        email: driver.email,
        image:driver.resim,
        phone:driver.telefon,
        birthDate:driver.dogumtarihi
      }),

    })
      .then((res) => res.json())
      .then((newDriver) => {
        setDriverList([...driverList, newDriver]);
        console.log(driver)
        setDriver({ isim: "", soyisim: "", yas: "", email: "", resim:"" , telefon:"", dogumtarihi:"" });
      })
      .catch((error) => console.log('Error adding student:', error));
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setDriver(firststate => ({ ...firststate, [name]: value }))
  }


  const deleteDriver = (id) => {

    fetch(`https://dummyjson.com/users/${id}`,
      { method: "DELETE" }
    )

      .then(() => {
        setDriverList(driverList.filter(driver => driver.id !== id))
      })
  }

  const updateDriver = () => {

    fetch(`https://dummyjson.com/users/${edit}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',  // PAKET GÖNDERİLERİNDE HEADERS KISMINI YAZARIZ
        },
        body: JSON.stringify({

          firstName: driver.isim,
          lastName: driver.soyisim,
          age: driver.yas,
          email: driver.email,
          image: driver.resim,
          phone:driver.telefon,
          birthDate:driver.dogumtarihi,
        }),
      },
    )

      .then(((res) => res.json()))
      .then((updatedDriver) => {
        setDriverList(driverList.map((driver) => driver.id === edit ? updatedDriver : driver));
        setEdit(null);
        setDriver({ isim: "", soyisim: "", yas: "", email: "" , resim: "" , telefon:"", dogumtarihi:"" })
      })

  }

  const navigateDetails = (driver) => {

    navigate(`/Details/${driver.id}`, { state:{driver} } )
  }

  const tableWay = ()=> {

    navigate(`/LoginPage`,{state:{driver}})

  }


  //const tableWay = ()=> {
    //navigate(`/DriverTable`,{state:{driver}})

  //}

  
  console.log(driver)


  return (
    <>
      <section className='mainContainer' >
        <div className='container-fluid'>
          <div className='formContainer'>
            <div id='h1' ><p>Yeni Müşteri Kayıt Formu < img id='tick' src={"https://static.vecteezy.com/system/resources/thumbnails/011/858/556/small/green-check-mark-icon-with-circle-tick-box-check-list-circle-frame-checkbox-symbol-sign-png.png"}/></p></div>
            <div id='h2' ><p>Lütfen Bilgileri Eksiksiz Doldurunuz </p></div>

            <legend id='lgndname' >Müşteri Bilgileri</legend>
            
            <div className='input1' >
              <div className='add' >
                <input type='text'
                  name='isim'
                  value={driver.isim}
                  onChange={handleChange}
                  required
                ></input>
                <p className='fontPackage' >İsim</p>
              </div>

              <div>
                <input type='text'
                  name='soyisim'
                  value={driver.soyisim}
                  onChange={handleChange}
                ></input>
                <p className='fontPackage' >Soyisim</p>
              </div>
            </div>
            
            <div className='input1' >
              <div className='add' >
                <input type='text'
                  name='yas'
                  value={driver.yas}
                  onChange={handleChange}
                ></input>
                <p className='fontPackage' >Yas</p>
              </div>

              <div>
                <input type='text'
                  name='email'
                  value={driver.email}
                  onChange={handleChange}
                ></input>
                <p className='fontPackage' >Email</p>
              </div>
            </div>

            <div className='input1' >
              <div className='add' >
                <input type='text'
                  name='telefon'
                  value={driver.telefon}
                  onChange={handleChange}
                ></input>
                <p className='fontPackage' >Telefon</p>
              </div>
              
              <div>
                <input type='text'
                  name='dogumtarihi'
                  value={driver.dogumtarihi}
                  onChange={handleChange}
                ></input>
                <p className='fontPackage' >Doğum Tarihi</p>
              </div>
            </div>
          <br></br>


            <div className='check' >
            <input type="checkbox"/>
            <p>Bilgilerimi Eksiksiz Doldurdum</p>
           </div>
           <div className='check' >
            <input type="checkbox"/>
            <p>Sözleşmeyi Okudum ve Kayıt Olmayı Kabul Ediyorum.</p>
            
           </div>

           
            <div className='ekbtn' >
              <button id='ekle' 
              onClick={addDriver}
              >Ekle</button>
            </div>

            <div className='ekbtn'>
              
              <button
                id='ekle'
                onClick={updateDriver}
              > Güncelle
              </button>
            </div>

            <div className='ekbtn'>
              <button id='ekle' onClick={tableWay} >Sürücü Listesi</button>
            </div>

          </div>
        </div>


         {/* <table id='list' className='table mt-5'>

          <thead>
            <tr>
              <th>Order</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Delete</th>
              <th>Edit</th>
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
                  type='button'
                  className='btn btn-success mx-1'
                  onClick={() => deleteDriver(driver.id)}
                ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
              </td>


              <td>
                <button
                  type='button'
                  className='btn btn-success mx-1'
                  onClick={() => {
                    setDriver({
                      isim: driver.firstName,
                      soyisim: driver.lastName,
                      email: driver.email,
                      yas: driver.age,
                      resim: driver.image,
                      dogumtarihi:driver.birthDate,
                      telefon:driver.phone
                    });
                    setEdit(driver.id)
                  }
                  }
                ><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                </button>
              </td>

              <td>
                <button
                  className='btn btn-danger mx-1'
                  type='button'
                  onClick={() => navigateDetails(driver)}
                ><FontAwesomeIcon icon={faInfoCircle} ></FontAwesomeIcon></button>
              </td>
            </tr>
          ))}

          </tbody>
        </table>
        
        */}
        









      </section>
    </>
  );
}
export default Driver;