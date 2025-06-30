import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Style/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fotologo from '../Assets/anka.png';


function Login({onLogin}) {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError]       = useState(null);
    const navigate = useNavigate();

    
  const handleLogin = async (event) => {

    event.preventDefault();

    try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Giriş işlemi başarısız oldu');
        }
        
        const data = await response.json(); 
        localStorage.setItem("token", data.token)  
        
        onLogin();

        navigate("/DriverTable", { state:   
          { 
      

           } 
        });
        
        alert("Giriş başarılı!");
  
      } 
        catch (error) {
        console.error("Hata detayı:", error);
        setError("Giriş işlemi sırasında bir hata oluştu");
      }
  };

    return (
        <>
            <div className='loginContainer' >
            <div className='logotable' ><img id='fotologo' src={fotologo}/></div>

            <div className='lgnbox' >
            <form className='loginForm' >
                <div className="mb-3">

                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input
                    placeholder='Username' 
                    type="text" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                   
                </div>


                <div className="mb-3">

                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                    <input
                        placeholder='Password' 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div> 

                <button 
                id='logbtn'
                className="btn btn-primary"
                onClick={handleLogin}
                >Login
                </button>

            </form>
            </div>
            </div>

        </>
    );
}
export default Login;