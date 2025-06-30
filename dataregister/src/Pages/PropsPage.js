import 'bootstrap/dist/css/bootstrap.css';
import '../Style/PropsPage.css';
import Props from '../Components/Props';
import Card from '../Components/Card';
import { useEffect, useState } from 'react';

function PropsPage() {
   

    const [drivers,setDrivers] = useState([]);
    const [loading,setLoading] = useState(true);  // veri almaya acıgım köprü görevi görüyor. 

    useEffect(()=>{
        fetch("https://dummyjson.com/users")    // önce bu adrese git
        .then((res) => res.json())              // cevabı al ve json formatı giydir
        .then((data) => {                       // alınan cevabın hepsine data yazarız
                            setDrivers(data.users) 
                            setLoading(false)
                        })
        .catch((error)=> console.log("Sürücü Güncellenmedi", error)) // ne olur ne olmaz bir sıkıntı ile karsılasınca bunu yazdır. 
        console.log(drivers)
    })

    return (
        <>
        {/* <Props driver = {driver} /> {*/}

        <div id='baslik' style={{width:"1214px",marginLeft:"60px",marginTop:"15px",borderRadius:"10px",marginBottom:"-25px"}}>
        <p>Driver Cards</p></div>

        
         
        <div className='containers'>
          {drivers.map((driver)=>(<Card driver = {driver} />))}        
        </div>
       

       {/* <div className='containers'><Card driver={drivers}/></div> */}


        </>
    );
}

export default PropsPage;
