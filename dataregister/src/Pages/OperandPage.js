


function OperandPage({ isLogin, userName }) {


    return (
        <>
            <div>

                {!isLogin && (

                    <h1>Hoşgeldiniz Lütfen Giriş Yapınız </h1>

                )}

                {isLogin && (

                <p>Hoşgeldin {userName}</p>

                )}


            </div>

        </>
    );
}



export default OperandPage;