import '../../Style/Financing/Application.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Application() {
    return (
      <>
      <section>
        <div className='app-container' >
            <p id="newar" >FINANCING APPLICATION</p>
            <hr className='app-line' ></hr>
            <br></br>
            <p id="app-text" >Download the paperwork here to finance your car. Take some time to look it over. You can either bring it with you fully completed, or you can come in with your questions. We're happy to help you through the application process and to make sure you get the financing that is right for you!</p>
            
            <div className='pdf-Box' >
                <p>Finance Application Packet (pdf)</p>
                <button className='pdf-btn' ><p id='pdf-btn-text'>DOWNLOAD</p></button>
            </div>
        </div>
        <br></br>
        <br></br>
      </section>
      </>
    );
  }
  
  export default Application;