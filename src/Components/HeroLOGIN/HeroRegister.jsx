import {  createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";

import { BsEyeSlashFill,BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeroRegister = () => {
  const [registerError, setRegisterError]=useState("");
  const [sucess,setSucess]=useState('');
   const [showPassword,setShowPassword]=useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name=e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted=e.target.terms.checked;
    setRegisterError('')
    setSucess('');
  
    if (password.length<6) {
      setRegisterError('password shoud be at lest 6 characters or laonger');
      return;
    }

    else if( !/[A-Z]/.test(password)){
setRegisterError('YOU PASSWORD SHOULD HAVE LAST UPPER CASE');
return;   
    }
    else if(!accepted){
      setRegisterError('please accepted our terms')
      return ;
    }
    console.log(email, password,accepted);
   
    // create user
  createUserWithEmailAndPassword(auth, email, password,name)
  .then(result=>{
    console.log(result.user);
    setSucess('user create sucess')
// --------------update profile----------------------------
updateProfile(result.user,{
  displayName:name,
  photoURL:'https:ssjoy.com'
})
.then(()=>console.log('profile updated'))
.catch()

    // ------------ send varify--------------------------------
    sendEmailVerification(result.user)
    .then( ()=>{
      alert('please  cheak your email and verify your account')
    })
  })

  .catch((error) => {
   console.error(error);
   setRegisterError(error.message);
    // ..----------------------------------------------
  });
  

  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {/* form */}
              <form onSubmit={handleRegister}>

              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
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
                    type={showPassword? 'test':'password'}
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

                  <br />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  {/* cheak box  */}
                  <div className="inline-flex gap-3" >
                  <input type="checkbox" name="terms" id="terms" />
                  <lebel htmlFor='terms' >  Accept our Terms</lebel>
                  </div>
                 
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">submit</button>
                </div>
              </form>

            <div>
            
                 {
                registerError && <p>{registerError}</p>
              } 
             <div>
              {
                sucess && <p className="text-lg text-green-500"> {sucess}</p>
              }
              <p>Alredy Have an account ? <Link className="border bg-sky-600" to="/login">Login</Link></p>
             </div>
              
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
