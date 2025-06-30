import 'bootstrap/dist/css/bootstrap.css';
import Login from '../Components/Login';

function LoginPage({onLogin}) {
  

    return (
        <>
        <Login onLogin={onLogin} />
        </>
    );
}

export default LoginPage;
