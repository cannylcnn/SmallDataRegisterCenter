import { useState } from 'react';
import '../Style/Pics.css';




function Pics({ props }) {


    return (
        <>

            {/* 
                {props.map((picture)=>(

                <div className="" style={{ width: '18rem', height:"auto"}}>
                    
                    <img className="card-img-top" src={picture} alt="Card image cap" />
                
                </div>            
            ))} 
             
            */}

            {props.map((picture,index)=>(

            <div key={index} className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={picture} alt="Card image cap" />
                <div className="card-body">
                </div>
            </div>
            ))}

        </>
    );
}
export default Pics;