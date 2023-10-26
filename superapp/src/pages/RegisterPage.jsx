import Signupform from '../components/Register/SignUpForm';
import Banner from '../components/Register/Banner';

const RegisterPage = () =>{
    return (
        <div style={{display: "flex"}}>
        <Banner />
       <Signupform/>
        </div>
    );
};

export default RegisterPage;