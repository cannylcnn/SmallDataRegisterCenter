import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Style/Home/SectionOne.css'

function SectionOne() {
    return (
        <>
            <div className='boxTwo'>
                <div className='sectionOne'>
                    <div><p id='sectionOneText' >Ranked #1 4x4 Dealer 5 years in a row</p></div>
                    <button id='sectionBtn'><p id='sectionBtnText' >CONTACT US</p></button>
                </div>
            </div>

            <div className='jeepPhotoOne' ><img src='https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/neonbrand-285967-unsplash.jpg/:/cr=t:22.61%25,l:0%25,w:100%25,h:77.39%25/rs=w:1240,h:620,cg:true' /></div>
            <br></br>
            <br></br>

            <div className="container">
                <div className="row">
                    <div id='leftphoto' className="col-sm">
                        <div><img src='https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/car-buying-car-dealership-car-key-97079.jpg/:/cr=t:19.56%25,l:0%25,w:100%25,h:74.99%25/rs=w:600,h:300,cg:true' /></div>
                        <div className='textbox' >
                            <div><h5>FRIENDLY STAFF</h5></div>
                            <div><p>From the moment you step onto our lot to second when you get the new keys to your new vehicle, our staff is there to ensure you have an enjoyable experience. They have decades of experience between them, so don't be afraid to get your questions answered!</p></div>

                        </div>
                    </div>


                    <div id='rightphoto' className="col-sm">
                        <div><img src='https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/colton-strickland-718057-unsplash.jpg/:/cr=t:19.02%25,l:0%25,w:100%25,h:62.5%25/rs=w:600,h:300,cg:true' /></div>
                        <div className='textbox' >
                            <div><h5>OUR FINANCING PROGRAM</h5></div>
                            <div><p>Are you looking to take out a loan for your next vehicle? Avoid spending time traveling to credit unions, and apply for a loan with us! We guarantee fixed loan repayment terms that will only change if both the customer and our financial department agree. </p></div>

                        </div>
                    </div>

                </div>
                
            </div>

        </>
    );
}

export default SectionOne;