import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Style/Inventory/SectionThree.css'
import { useState } from 'react';

const image =['https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/auto-automobile-automotive-1394134.jpg/:/rs=w:1300,h:800'
,'https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/4x4-auto-automobile-812901.jpg/:/rs=w:1300,h:800',  
'https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/automobile-automotive-car-2301218.jpg/:/rs=w:1300,h:800'
,'https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/asphalt-automobiles-bumper-2235521.jpg/:/rs=w:1300,h:800',
'https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/pexels-2301215.jpg/:/rs=w:1300,h:800'
]


function SectionThree() {

  const [currentIndex, setCurrentIndex] = useState(2)



  function moveleft(){


    if (currentIndex >0){

      setCurrentIndex(currentIndex-1)

    }



  }



    return (
      <>
        <div className='carousel'>
            <button className="nav-button prev" onClick="moveleft()"></button>  
               
              <div className="carousel-container" id="carouselContainer" >
                <div><img src="https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/auto-automobile-automotive-1394134.jpg/:/rs=w:1300,h:800" /></div>
                <div><img src="https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/4x4-auto-automobile-812901.jpg/:/rs=w:1300,h:800" /></div>
                <div><img src="https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/automobile-automotive-car-2301218.jpg/:/rs=w:1300,h:800" /></div>
                <div><img src="https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/asphalt-automobiles-bumper-2235521.jpg/:/rs=w:1300,h:800" /></div>
                <div><img src="https://img1.wsimg.com/isteam/ip/35ccfde6-099a-4d10-a4fd-448030cc24c3/pexels-2301215.jpg/:/rs=w:1300,h:800" /></div>
              </div>

            <button className="nav-button next" OnClick="moveright()"></button>

        </div>
      </>
    );
  }
  
  export default SectionThree;
  