import Add_cart from "../components/add_cart";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../public/firebase";
import { doc, updateDoc,deleteDoc } from "firebase/firestore";
import { useRouter } from "next/router";
export default function  Productlist({uid}){
   let [alldata,setalldata]=useState([])
   let [count,setcount]=useState(0)
  let [total,settotal]=useState(0)
  let router=useRouter()
   useEffect(()=>{
     if(!uid)
     return

    (
      async ()=>{
        const querySnapshot = await getDocs(collection(db, "user",uid,'cart'));
        let data=[]
        let totalcost=0;
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          let obj=doc.data()
          totalcost+=obj.count*obj.price
          data.push(obj)
          setcount(obj.count)
        });
        setalldata(data)
        settotal(totalcost)
       
          localStorage.setItem('val',JSON.stringify(totalcost))

      
        
      }
    )()
    

   },[count,uid])
  async function delete_button(slug){
    await deleteDoc(doc(db, "user", uid,'cart',slug)); 
    setcount(0)
   }
    return(
      <div className="flex flex-col items-center flex-wrap w-screen">
        <Navbar/>
        <div className="flex  mt-40 flex-wrap w-full justify-evenly gap-10">
<div className="  flex justify-between flex-wrap w-[70%]">
<table class="table table-hover  border-black border-4 bg-slate-300">
  <thead>
    <tr>
      <th scope="col">SL</th>
      <th scope="col">Name</th>
      <th scope="col">category</th>
      <th scope="col">brand</th>
      <th scope="col">Price</th>
      <th scope="col">count</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <>
    {
     
      alldata.map((obj,index)=>{
        return(
          <tr>
          <th scope="row">{index+1}</th>
          <td>{obj.name}</td>
          <td>{obj.category}</td>
          <td>{obj.brand}</td>
          <td>{obj.price}</td>
          <td> <input type="number"  value={obj.count} max={obj.countInStock} onChange={ async(e)=>{
               setcount(e.target.value) 
               let num=Number(e.target.value)
               if(num<=obj.countInStock){

               
                
               const washingtonRef = doc(db, "user", uid,'cart',obj.slug);
                await updateDoc(washingtonRef,{
                  count:num
      });
    }
              
          }}/>
          </td>
          <td>{obj.count * obj.price}</td>
          <td><button className="button-del" onClick={()=>{
            delete_button(obj.slug)
          }}>Delete</button></td>
        </tr>

        )
      })
      
    }
    <tr>
      <th>Total</th>
      <td>{total}$</td>
    </tr>
    </>
   
    
  </tbody>
</table>
</div>
<div className="popup flex w-44 flex-col p-3 items-center h-30">
  <div>{total}$</div>
  <button className=" text-white   px-4 py-2 bg-[#FFD700] mt-2 outline-none border-none " onClick={()=>{
     if(total==0)
     return;
     else{
       router.push('/shipping')
     }
  }}> Check Out
          </button>
</div>
 <style jsx>
  {
    `
    .popup{
      background-color: #ffffff;
box-shadow: 0px 12px 10px 5px rgba(0, 0, 0, 0.2)
    }
    `
  }
 </style>
</div>
<Add_cart/>
</div>
    )
}