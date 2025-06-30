import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Style/Home/Comments.css'

function Comments() {
    return (
        <>
            <div className='commentTable' >

                <div id='commentcardsOne' className="card" style={{ width: '26rem', height:'18rem'}}>
                    <div className="card-body">
                        <div><p id='comment' className="card-title">"Found my son's new used car here. The application process was seamless. Staff was friendly and courteous."</p></div>
                        <div><h4 id='commenter' className="card-text">Jakob</h4></div>
                    </div>
                </div>

                <div id='commentcards' className="card" style={{ width: '26rem', height:'18rem'}}>
                    <div className="card-body">
                        <div><p id='comment' className="card-title">"After having a series of unfortunate experiences, I was happy I finally found a business where they understand people and help you find the right fit."</p></div>
                        <div><h4 id='commenter' className="card-text">Emily</h4></div>
                    </div>
                </div>


                <div id='commentcardsThree' className="card" style={{ width: '26rem', height:'18rem'}}>
                    <div className="card-body">
                        <div><p id='comment' className="card-title">"I highly recommend Business Name! Great staff with a lot of great cars to choose from."</p></div>
                        <div><h4 id='commenter' className="card-text">Walter</h4></div>
                    </div>
                </div>

            

            </div>
        </>
    );
}

export default Comments;