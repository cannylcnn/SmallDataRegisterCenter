import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../../Practice/Components/Profile';
import Pics from '../../Components/Pics';
import VideoComponent from '../Components/VideoComponent';
import '../../Style/Pics.css';
import { useEffect, useState } from 'react';



function ProfPage() {

    const [personData, setPersonData] = useState(null);
    const [isloading, setisLoading]   = useState(false);
    


    const profileData = {

        username:"cannylcnn",
        profilePicture:"https://picsum.photos/200/300",
        post:"5",
        followers:"555",
        follow:"1200",
        bio:"software engineer, producer"
    }


     const pictureList = {
        
        picture1:"https://picsum.photos/id/237/200/300",
        picture2:"https://picsum.photos/id/247/200/300",
        picture3:"https://picsum.photos/id/238/200/300",        // Obje olarak tekli çagırdıgımızda kullanırız
        picture4:"https://picsum.photos/id/239/200/300",
        picture5:"https://picsum.photos/id/137/200/300",
        picture6:"https://picsum.photos/id/437/200/300",
   
    }
    

    const pictures = [
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/id/247/200/300",
        "https://picsum.photos/id/238/200/300",
        "https://picsum.photos/id/239/200/300",
        "https://picsum.photos/id/137/200/300",
        "https://picsum.photos/id/437/200/300",
    ]

    const videos = [

        'https://www.w3schools.com/html/movie.mp4',
        'https://www.w3schools.com/html/mov_bbb.mp4',
        'https://www.w3schools.com/html/movie.mp4',
        'https://www.w3schools.com/html/mov_bbb.mp4',
        'https://www.w3schools.com/html/movie.mp4',
        'https://www.w3schools.com/html/mov_bbb.mp4',
    ]

    /* useEffect(()=>{

        fetch('https://dummyjson.com/users/1')
        .then((res)=> res.json())

        .then((data)=>{

            const formatData = {

                username:data.username,
                profilepicture:data.image,
                posts:"150",
                follower:"1800",
                follow:"552",
                bio:"istanbul",
                foto: Array.from({length:50},()=>(`https://picsum.photos/200/300?random=${Math.random()}`))                                                                                  
            }

        setPersonData(formatData);
        })
        .catch((err)=>console.error("Api Erişim Hatası:",err))

    });
    */

  
  
    const asenkronYapi = async()=>{

        try{
            
            const response = await fetch("https://dummyjson.com/users/1");
            const data     = await response.json();
            setisLoading(true);


            const formatData = {

                username:data.username,
                profilepicture:data.image,
                posts:"150",
                follower:"1800",
                follow:"552",
                bio:"istanbul",
                foto: Array.from({length:50},()=>(`https://picsum.photos/200/300?random=${Math.random()}`))                                                                                 
            }
          
            setPersonData(formatData);
           
        }

    
        catch(error){

            console.error("Dummy Jsondan gelen users arrayindeki id numarası 1 olan kullanıcıya ulaşılmadı.",error)

        }

    }


    //useEffect(()=>{asenkronYapi();})

    if (!personData) {
        return <div>Loading...<button onClick={asenkronYapi()}>Tıkla</button></div>;
        
    }

    

    return (
        <>
            
            <Profile profileProps={personData}/>
            <VideoComponent props={videos}/>
            <div className='container' >
                <Pics className="card" props={personData.foto}/>
            </div>
            {/* <Pics props={pictureList}/> */}

            

        </>
    );




}
export default ProfPage;