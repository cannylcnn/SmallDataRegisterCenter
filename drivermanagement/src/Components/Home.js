import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import "../Style/Home.css";
import tabela from '../Assets/tabela.png'





function Home() {

    const navigater = useNavigate()

    const Click = () => {
      navigater('/RegisterPage');
    };
    

    return (
        <>
            <section>
                <div id='ContainerBox' className="container">
                    <div id='row' className="row">
                        <div id='Box1' className="col-sm">                 

                            <h1 id='stop' >DUR OKUMADAN GEÇME !</h1>
                            <br></br>
                            <article id='text' className='text-center' >
                                <p>
                                    Trafik kuralları, sürücülerin, yayaların ve yol kullanıcılarının güvenliğini sağlamak amacıyla belirlenmiş kurallar bütünüdür. Hem şehir içi hem de şehirlerarası yollarda kazaları önlemek, düzenli bir trafik akışı sağlamak ve herkesin güvenle seyahat edebilmesi için trafik kurallarına 
                                    uymak son derece önemlidir.
                                </p>
                                <p>
                                    Örneğin, hız limitleri ve trafik ışıkları, trafiğin güvenli akışını sağlamak için oluşturulmuştur. Yüksek hız, kontrol kaybına neden olarak kaza riskini artırabilir.
                                </p>

                                <p>
                                    Trafik ışıkları ise araç ve yaya geçişlerini kontrol ederek çarpışmaları önler.
                                    Ayrıca, emniyet kemeri kullanımı gibi güvenlik önlemleri de sürücü ve yolcuların hayati tehlikelerini en aza indirir.
                                </p>
                            </article>
                            <button id='danger' type="button" onClick={Click} className="btn btn-danger">ARAMIZA KATIL !</button>
    
                        </div>
                   
                        <div id='Box2' className="col-sm">
                            <div><img id='dur' src={tabela}></img></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;


