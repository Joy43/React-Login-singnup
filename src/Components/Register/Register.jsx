
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
          console.log(result)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
       
        });

    };
    return (
        <form onSubmit={handleRegister}>
        <input
            className="mb-8 w-3/4 py-3 px-4"
            type="email"
            name="email" // Add name attribute
            id="email" // Add id attribute
        />
        <br />
        <input
            className="mb-8 w-3/4 py-3 px-4"
            type="password"
            name="password" // Add name attribute
            id="password" // Add id attribute
        />
        <br />
        <input
            className="mb-8 w-3/4 py-3 px-4 btn btn-secondary"
            type="submit"
            value="Register"
        />
    </form>
    );
};

export default Register;