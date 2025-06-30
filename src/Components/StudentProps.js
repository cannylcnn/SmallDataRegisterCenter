import 'bootstrap/dist/css/bootstrap.css';
import '../Style/PropsPage.css';
import '../Style/Card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Card from '../Components/Card';
import List from './List';
import { useEffect, useState } from 'react';


function StudentProps({}) {

    const [posts,setPost] = useState([]);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    // USEEFFECT TEKLİ GET METODU
    /* 
    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((data) => {
                setStudents(data.users)
                setLoading(false)
            })
            .catch((error) => console.log("Sürücü Güncellenmedi", error))
        console.log(students)
    })
    */


  
    useEffect(() => {

        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((data) => {
                setStudents(data.users)
                
            })
            .catch((error) => console.log("Sürücü Güncellenmedi", error))
        console.log(students)


        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => {                    
            setPost(data.posts)
            setLoading(false) // her zaman sondaki fetch te kullanılır. 
            })
            .catch((error) => console.log("Post Güncellenmedi", error))
        console.log(students)
    }

    ,[] // boş array bir kere daha yükle anlamına gelir zorlama için yapılır.

    )


    


    return (
        <>
            <div id='baslik'><p>Post</p></div>
            <div className='containers'>
              {posts.map((post) => (
                <List item = {post} />
            )
            )
            }        
            </div>


            <div id='baslik'><p>Öğrenci Listesi</p></div>
            <div className='containers'>
                {students.map((student) => (
                    <Card driver = {student} />
                )
                )
                }
            </div>
        </>
    );
}

export default StudentProps;
