import { faItalic } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useLocation } from 'react-router-dom';

function UserPage() {


    const location = useLocation();
    const {firstName,lastName,image,state,country} = location.state;

   // console.log("İmaj Adresi Bulunamadı",image) gelmeyen bilgileri böyle işliyoruz
    

    return (
        <>
           
           <div className='pf' style={{ marginBottom: "10px" }} ><p>{firstName} {lastName}'s Photo & Media Library </p></div>
            <div className='profileBox' >

                <div className='backgroundPhoto' ><img id='bck' style={{ display: "block", objectFit: "cover" }} src="https://picsum.photos/1200/300" alt='backgroundPhoto' ></img></div>

                <div className='profilePhoto'><img style={{ width: "168px", height: "168px", borderRadius: "50%" }} src={image} alt='profilePicture' /></div>

                <div className='profileName'><h3>{firstName} {lastName} </h3></div>

                <div><h5 className='profileLocation' ><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} style={{ marginTop: "-4px" }} fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg> {state}, {country} </h5></div>


                <hr id='line'></hr>
                <ul className='profileLinks' >
                    <li><Link to="/" className="nav-link px-2" >Timeline</Link></li>
                    <li><Link to="" className="nav-link  px-2" >About</Link></li>
                    <li><Link to="" className="nav-link  px-2" >Friends</Link></li>
                    <li><Link to="" className="nav-link  px-2" >Media</Link></li>
                    <li><Link to="" className="nav-link  px-2" >More</Link></li>
                    <div className='sendbtn'><button id='sendbtn' className='btn btn-primary' type='button'>Send Message</button></div>
                </ul>
            </div>
        </>

    );
}

export default UserPage;