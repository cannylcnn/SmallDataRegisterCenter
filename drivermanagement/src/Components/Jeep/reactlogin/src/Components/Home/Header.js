import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Style/Home/Header.css'

function Header() {
    return (
        <>
            <div className="container">

                <div className="row" id='rowOne'>

                    <div className="col-sm, col-sm-one">
                        <div><p id='text'>WE'RE THE QUALITY</p></div>
                        <div><p id='text' >USED 4X4</p></div>
                        <div><p id='text' >SPECIALISTS.</p></div>
                        <button id='buttonOne'><p id='btnyazi'>CONTACT US</p></button>

                    </div>

                    <div className="col-sm, col-sm-two">
                        <img id='foto-one' src='https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/alloy-rim-automobile-automotive-2301226.jpg/:/rs=w:1280,h:855' />
                    </div>

                </div>

            </div>

        </>
    );
}

export default Header;
