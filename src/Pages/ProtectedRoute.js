import 'bootstrap/dist/css/bootstrap.css';
import { Navigate } from 'react-router-dom';



function ProtectedRoute( { children } ) {


    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/LoginPage"/> // token doğru ise childrena ait olan routa git yanlış ise loginpageye git. 

}

export default ProtectedRoute;