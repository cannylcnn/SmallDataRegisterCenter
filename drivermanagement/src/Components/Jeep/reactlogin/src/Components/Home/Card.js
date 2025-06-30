import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Style/Home/Card.css'

function Card() {
    return (
        <>
      
            <div className="cardContainer">
            <div className="card" style={{ width: '18rem' }}>

                <img src="https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/Car_1-81d1f7d3.png/:/cr=t:5.36%25,l:13.84%25,w:69.09%25,h:89.29%25/rs=w:365,h:365,cg:true,m" className="card-img-top" alt="..." />
                
                <div className="card-body card-system ">
                    <h5 className="card-title">2015 Jeep Wrangler</h5>
                    <p className="card-text">Mileage : 75.644</p>
                    <p className="card-text">MPG : 20/25 hwy</p>
                    <p className="card-text">Engine : 2.4</p>
                    <p className="card-text">Trans: Automatic</p>
                    <p className="card-text">Color: Orange</p>
                    <button className='emailbtn'><p id='emailbtnyazi'>EMAIL FOR PRICE</p></button>
                </div>

            </div> 
            </div>

        </>
    );
}

export default Card;
