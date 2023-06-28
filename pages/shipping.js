import Head from "next/head";
import Add_cart from "../components/add_cart";
import Checkoutwizard from "../components/checkoutwizard";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
 export default function Shipping(){
    let router= useRouter()
     function place_order(e){
        e.preventDefault()
       router.push('/payment')
     }
    return(
        <div className="bg-white w-screen h-screen">
            <Head>
            <link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/>

<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  rel="stylesheet"
/>
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.js"
  defer
></script>
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.css"
  rel="stylesheet"
/>
            </Head>
            <Navbar></Navbar>
            <div className="mt-15 pt-20">
            <Checkoutwizard activestep={1}/>
            </div>
            <div className="w-screen flex items-center flex-col">
                <h3 style={{fontWeight:'bold'}}>Shipping Address</h3>
            <form class="mb-0 border-2 border-[#4a4e4d] w-[800px] p-10 " onSubmit={place_order}>

<div class="row mb-4">
  <div class="col">
    <div class="form-outline">
      <input type="text" id="form9Example1" class="form-control input-custom" required />
      <label class="form-label" for="form9Example1">First name</label>
    </div>
  </div>
  <div class="col">
    <div class="form-outline">
      <input type="text" id="form9Example2" class="form-control input-custom" required />
      <label class="form-label" for="form9Example2">Last name</label>
    </div>
  </div>
</div>
<div class="row mb-4">
  <div class="col">
    <div class="form-outline">
      <input type="text" id="form9Example3" class="form-control input-custom" required />
      <label class="form-label" for="form9Example3">City</label>
    </div>
  </div>
  <div class="col">
    <div class="form-outline">
      <input type="text" id="form9Example4" class="form-control input-custom" required />
      <label class="form-label" for="form9Example4">Zip</label>
    </div>
  </div>
</div>

<div class="row mb-4">
  <div class="col">
    <div class="form-outline">
      <input type="text" id="form9Example6" class="form-control input-custom" required />
      <label class="form-label" for="form9Example6">Address</label>
    </div>
  </div>
  <div class="col">
    <div class="form-outline">
      <input type="email" id="typeEmail" class="form-control input-custom" required />
      <label class="form-label" for="typeEmail">Email</label>
    </div>
  </div>
</div>

<div class="float-end ">
 
  <button type="submit" className="btn"

   >Place order</button>
    <style jsx>{
        `
      .btn{
        background-color: #0062CC ;
        color:white
      }  
        `
    }
     
    </style>
</div>

</form>
            </div>
            <Add_cart/>
        </div>
    )
 }