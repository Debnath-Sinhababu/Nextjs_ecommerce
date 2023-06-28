import { getAuth, sendEmailVerification,createUserWithEmailAndPassword } from "firebase/auth";
 import { useState } from "react";
 import auth from "../public/firebase";
 import Link from 'next/link';
 import { doc, setDoc } from "firebase/firestore"; 
 import { db } from "../public/firebase";
export default function Signup(){
   let [email,setemail]=useState('')
   let [password,setpassword]=useState('')
   let [name,setname]=useState('')
   let [verify,setverify]=useState(false)
   let [error,seterror]=useState('')
    function sign_up(event){
        event.preventDefault()
       
        createUserWithEmailAndPassword(auth,email, password)
        .then(function(userobj){
         
          const user=userobj.user
          console.log(user)
            sendEmailVerification(user).then(()=>{
            setverify(true)
            async function setdata(){
              await setDoc(doc(db, "user",user.uid), {
                name: name,
                email:user.email,
                
                address:''
              });
            }

            setdata()
           
            })
          
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
           seterror(errorMessage)
           setTimeout(()=>{
             seterror('')
           },2000)
          console.log(errorCode, errorMessage);
        });


     }
   return(
    error!=''? <p>{error}</p>:verify==true? <><h4>We have sent verification email .Pls verify its you</h4>
   <Link href='/'>Log in after verification</Link> 
   </>
    :
  <div className="w-screen h-screen flex justify-center">

  
    <title>Glassmorphism login Form Tutorial in html css</title>
      <head>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet"/>
    
    </head>
    <style media="screen" jsx>{
        `
      *,
*:before,
*:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}



form{
    height: 100%;
    min-width: 40%;
    background-color: rgba(255,255,255,0.13);
   
    
    
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 3% 5% 0% 5%;
    display:flex;
    align-items:center;
    flex-direction:column;
    flex-wrap:wrap
}
form *{
    font-family: 'Poppins',sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}
form h3{
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}
input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}
::placeholder{
    color: #e5e5e5;
}
button{
    margin-top: 40px;
    width: 100%;
    background-color: black;
    color: black;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom:10px
}
.social{
  margin-top: 30px;
  display: flex;
}
.social div{
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255,255,255,0.27);
  color: #eaf0fb;
  text-align: center;
}
.social div:hover{
  background-color: rgba(255,255,255,0.47);
}
.social .fb{
  margin-left: 25px;
}
.social i{
  margin-right: 4px;
}
.div1{
    width:100%;
   
}
`
}
    </style>


   
    <form onSubmit={sign_up}>
        <h3>Signup Here</h3>
        <div className="div1">
        <label for="username">Name</label>
        <input type="text" placeholder="name" id="name" value={name} onChange={(e)=>{
           setname(e.target.value)
        }} />
        </div>
        <div className="div1">
        <label for="username" >Username</label>
        <input type="text" placeholder="Email or Phone" id="username" value={email}
         onChange={(e)=>{
            setemail(e.target.value)
        }}
        />
        </div>
        <div className="div1">
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={password} 
           onChange={(e)=>{
           setpassword(e.target.value)
        }}
        />
        </div>
        <div className="div1">
        <button >Sign Up</button>
        </div>
       <Link href='/'>Already registerd? Log in</Link>
    </form>



   </div>
   )
}