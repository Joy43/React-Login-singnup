import {sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { BsEyeSlashFill,BsEyeFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  
    const [registerError, setRegisterError]=useState("");
    const [sucess,setSucess]=useState('');
    const [showPassword,setShowPassword]=useState(false);
    const emailRef=useRef(null);

    const handleLogin=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        setRegisterError('')
        setSucess('');
      
        signInWithEmailAndPassword(auth, email, password)
       
        .then(result=>{
            console.log(result.user);
            // -------email valid-------
            if(result.user.email){
              setSucess('Login sucess')
            }
            // -------- 
            else{
              alert('please verify your email address')
            }
            
          })
        
          .catch((error) => {
           console.error(error);
           setRegisterError(error.message);
            // ..
          });
    }
const handleforgotPassword=()=>{
const email=emailRef.current.value;
if(!email){
  console.log('please provide a email',emailRef.current.value)
  return;
}
else if(! /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ .test (email)){
  alert('plese write a valid email')
return;
}
// send validation email
sendPasswordResetEmail(auth,email)
.then(()=>{
  console.log('plese cheak your eamil')
})
.catch(error =>{
  console.log(error)
})

}

    // reset password

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <div className="card-body">

                {/* form */}
             <form onSubmit={handleLogin}>

             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    ref={emailRef}
                    className="input input-bordered"
                    required
                  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* password */}
                <div className="showbtn inline-flex gap-2 relative ">
                  <input
                    type={showPassword? 'text':'password'}
                    name="password" 
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <span className="mt-3" onClick={()=>setShowPassword(!showPassword)}> 
                  {
                    showPassword?<BsEyeSlashFill></BsEyeSlashFill>:<BsEyeFill></BsEyeFill>
                  }
                  </span>
                  </div>

                  {/* forget password */}
                <label className="label">
                  <a  onClick={handleforgotPassword} href="#" 
                  className="label-text-alt link link-hover">Forgot password?</a>
                </label>


              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              </form>

              <div>
            
            {
           registerError && <p>{registerError}</p>
         } 
        <div>
         {
           sucess && <p className="text-lg bg-green-400 text-white"> {sucess}</p>
         }
         <br />
         <p>Newto this website please  <Link className="border bg-sky-600" to="/heroregister">Register</Link> </p>
        </div>
         
       </div> </div>
            </div>





        </div>
      </div>
    );
};

export default Login;