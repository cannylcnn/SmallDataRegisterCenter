import 'bootstrap/dist/css/bootstrap.css';
import NavbarCart from '../Components/NavbarCart';

function BasketPage({AddBasket}) {

    const products = [

        {
            id:1,
            name: "Apple",
            adet:1,
            price: 15
        },

        {
            id:2,
            name: "Banana",
            adet:1,
            price: 17
        },

        {
            id:3,
            name: "Orange",
            adet:1,
            price: 12
        },

        
        {
            id:4,
            name: "Watermelon",
            adet:1,
            price: 25
        }    

        
    ]


    return (
        <>  

            {products.map((product, index) => (
                <div key={index}>
                    <h2>Ürün Adı {product.name} </h2>
                    <h2>Ürün Adeti {product.adet} </h2>
                    <h2>Ürün Fiyatı {product.price} </h2>
                    
                    <button
                    onClick={() => AddBasket(product)}
                    >Sepete Ekle
                    </button>

                </div>
            ))};


        </>
    );
}

export default BasketPage;
