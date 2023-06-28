import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Productitem from '../components/productitem'
import data from '../utils/data'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";
import auth from '../public/firebase'
import { useState } from 'react'
import { useRouter } from 'next/router'
function Login(){
  let router=useRouter()
  let [verify,setverify]=useState(true)
  let [register,setregister]=useState('')
  let [email,setemail]=useState('')
  let [password,setpassword]=useState('')
  function log_in(event){
   event.preventDefault()
   signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
     if(user.emailVerified){
      
      router.push('/home')
     }
     else{
      setverify(false)
     }
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     setregister(errorMessage)
     setTimeout(()=>{
         setregister('')
     },2000)
   });
    setemail('')
    setpassword('')
  }
  return(
    <>
    {
     register!=''? <p>{register}</p>: verify==false?<p>Pls verify your email address</p>:
    
      <div class="container">
<div class="screen">
  <div class="screen__content">
    <form class="login" onSubmit={log_in}>
      <div class="login__field">
        <i class="login__icon fas fa-user"></i>
       
        <input type="email" class="login__input" placeholder="User name / Email" value={email}onChange={(e)=>{
          setemail(e.target.value)
        }}/>
      </div>
      <div class="login__field">
        <i class="login__icon fas fa-lock"></i>
        <input type="password" class="login__input" placeholder="Password" value={password}
         onChange={(e)=>{
             setpassword(e.target.value)
         }}
        />
      </div>
      <button class="button login__submit">
        <span class="button__text">Log In Now</span>
        <i class="button__icon fas fa-chevron-right"></i>
      </button>			
      	
    </form>
    <div class="social-login">
    <Link href='/signup'> dont have account ?Sign Up</Link>  
      
    </div>
  </div>
  <div class="screen__background">
    <span class="screen__background__shape screen__background__shape4"></span>
    <span class="screen__background__shape screen__background__shape3"></span>		
    <span class="screen__background__shape screen__background__shape2"></span>
    <span class="screen__background__shape screen__background__shape1"></span>
  </div>		
</div>
</div>
}
</>
  )
}
export default Login
