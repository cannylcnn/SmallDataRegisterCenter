import 'bootstrap/dist/css/bootstrap.css';
import '../../Style/Profile.css';



function Profile({ profileProps }) {

    return (
        <>
            <div className="container">
                <div className="row align-items-center mb-2 ">

                <h4 id="tag" className='me-2' >@{profileProps.username}</h4>
                    <div className="col-4 text-center ">
                        <div><img style={{ width: "80px", height: "80px", borderRadius: "50px", marginTop: "15px" }} src={profileProps.profilepicture} alt='picture' /></div>
                        <br></br>
                        <span>{profileProps.bio}</span>
                    </div>

                    <div className='col-8'>
                        <div className='d-flex mb-2' style={{marginLeft:"-11px"}} >
                            <span className='me-2' >Gönderi {profileProps.posts} </span>
                            <span className='me-2' >Takipçi {profileProps.follower} </span>
                            <span className='me-2' >Takip   {profileProps.follow} </span>
                        </div>
                    </div>


                    <div id="box" className='d-flex mb-2 align-item-center'>
                        <button id="duzenle" className='btn btn-primary me-2' >Düzenle</button>
                        <button id="share" className='btn btn-primary me-2' >Profili Paylaş</button>
                        <button id="plus" className='btn btn-primary me-2' >+</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Profile;