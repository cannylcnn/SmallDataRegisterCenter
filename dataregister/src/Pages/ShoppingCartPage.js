import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function ShoppingCartPage({ cartItems , removefromShoppingCart }) {
  const total = Array.isArray(cartItems) ?  cartItems.reduce((sum,item)=> sum+item.price * item.adet, 0) : 0;

  return (
    <>
        {
          cartItems.length === 0 ? 
            
          (<div><div>Sepetiniz Boş</div> <Link to="/BasketPage"><button className='btn btn-warning' >Alışverişe Başla</button></Link> </div>)
            
          :(
            <div>

              <h6>Sepetinizdeki Ürünler</h6>
              {
                cartItems.map((urun)=>(

                  <div>
                    <h5> Ürün Adı :{urun.name}</h5>
                    <h5> Fiyatı :{urun.price}</h5>
                    <h5> Adeti :{urun.adet}</h5>

                    
                    <button 
                    className='btn btn-danger'
                    onClick={() => removefromShoppingCart(urun.id)}    
                    >Ürünü Sepetten Sil 
                    </button>

                    <hr></hr>
                  </div>
                ))
              }
            <br></br>
            <h5>Toplam:{total.toLocaleString('tr-TR')}₺</h5>
            </div>      
        )
        }
    </>
  );
}
export default ShoppingCartPage;