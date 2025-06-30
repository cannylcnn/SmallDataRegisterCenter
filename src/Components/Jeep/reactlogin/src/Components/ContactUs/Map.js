import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Style/ContactUs/Map.css'



function Map() {

    const handleToggle = (event) => {

        const today = event.target.nextElementSibling;

        if (today.style.display === "none" || today.style.display === "") { today.style.display = "inline" }

        else { today.style.display = "none" }
    }




    return (
        <>

            <div className="parent">
                <div className='map-left' >
                    <div className='leftbox-2' >
                        <p id='contact-us' >CONTACT US</p>
                        <hr id='mapline'></hr>
                        <h5>Barchetta</h5>
                        <br></br>
                        <p>1301 Newton Street, Saint Cloud, Minnesota 992002</p>
                        <p>(111) 111-1111</p>
                        <div></div>
                        <br></br>
                        <h5>Hours</h5>
                        <div onClick={handleToggle}><p>Open today 09:00 a.m. – 05:00 p.m. &#9660;</p>
                            <div className="gunler" >
                                <ul>
                                    <p>Mon 09:00 am – 05:00 pm</p>
                                    <p>Tue 09:00 am – 05:00 pm</p>
                                    <p>Wed 09:00 am – 05:00 pm</p>
                                    <p>Thu 09:00 am – 05:00 pm</p>
                                    <p>Fri 09:00 am – 05:00 pm</p>
                                    <p>Sat Closed</p>
                                    <p>Sun Closed</p>
                                </ul>
                            </div>
                        </div>

                        <div id="div-1" >
                            <p>Monday - Friday: 9am - 5pm</p>
                            <p>Saturday: 10am - 5pm</p>
                            <p>Sunday: 10am - 4pm</p>
                        </div>

                        <button className="touchbtn"><p id='tchtext'>GET IN TOUCH!</p></button>
                    </div>
                </div>

            
















            </div>
        </>
    );
}

export default Map;