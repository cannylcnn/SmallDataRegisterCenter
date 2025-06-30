import '../../Style/Home/SectionTwo.css'


function SectionTwo() {

    return (
        <>
            <section>
                <div className='sectionTwoBox'>
                    <div className='join' ><p> JOIN OUR COMMUNITY </p></div>
                    <form>
                        <div className="form-1">
                            <input className="input-1" type='e-mail' placeholder='Email Adress'/>
                            <button className='btnsign' ><p id='textsign'>SIGN UP</p></button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default SectionTwo;
