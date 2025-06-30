import Header from '../Components/Home/Header';
import Card from '../Components/Home/Card';
import SectionOne from '../Components/Home/SectionOne';
import Comments from '../Components/Home/Comments';
import SectionTwo from '../Components/Home/SectionTwo';
import Footer from '../Components/Home/Footer';

function HomePage() {
  return (
    <>
    
      <Header/>
      <div id='newar' ><p>NEW ARRIVALS</p></div>
      <hr id='line' ></hr>
      <div className='cards' >
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
      </div>
      <SectionOne/>
      <Comments/>
      <SectionTwo/>
      <Footer/>
    </>
  );
}

export default HomePage;
