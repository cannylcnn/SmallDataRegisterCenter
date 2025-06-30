import React from "react";
import { useState } from "react";


function OperandPage2() {


    const [isLogin, setisLogin] = useState(false);
    const [userName, setuserName] = useState("");

    const handleLogin = () => {

        setisLogin(true);
        setuserName("Can");

    }

    const handleLoginFalse = () => {

        setisLogin(false);
        setuserName("Can");

    }


    return (
        <>

            <button
                onClick={handleLogin}
            >Giriş
            </button>

            {!isLogin && (

                <h1>Giriş Başarısız</h1>
            )
            }

            {isLogin && (

                <h1>Hoşgeldiniz {userName} </h1>
            )
            }

        </>
    );
}



export default OperandPage2;

