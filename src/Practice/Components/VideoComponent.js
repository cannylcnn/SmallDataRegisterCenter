// import 'bootstrap/dist/css/bootstrap.css';


function VideoComponent({ props }) {

    return (
        <>

            <div className="container" >
  
                <p style={text.title} ></p>
            </div>


            <div className='container' style={{padding:"50px"}} >
                
                {props.map((video)=> 
                    
                    <div>
                        <video style={{width:"90px", height:"90px",borderRadius:"50%",}} controls>
                            <source src={video} type='video/mp4'></source>
                        </video>
                        <p>Öne Çıkanlar</p>
                    </div>
                )}

            </div>
        </>
    );
}

const text={title:{color:"blue", fontSize:"150px"}};



export default VideoComponent;