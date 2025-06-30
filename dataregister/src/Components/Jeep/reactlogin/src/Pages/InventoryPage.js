import Card from "../Components/Home/Card";
import SectionFour from "../Components/Inventory/SectionFour";
import SectionThree from "../Components/Inventory/SectionThree";
import Footer from "../Components/Home/Footer";

function InventoryPage() {
  return (
    <>
    
    <div id='newar' ><p>NEW ARRIVALS</p></div>
      <hr id='line' ></hr>
      <div className='cards' >
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
      </div>
      <SectionFour/>
      <SectionThree/>
      <Footer/>
   
      


 
    </>
  );
}

export default InventoryPage;
