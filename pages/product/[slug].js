import { useRouter } from 'next/router'
import Link from 'next/link'
import data from '../../utils/data'
import Navbar from '../../components/navbar'
import Add_cart from '../../components/add_cart'
import { useState } from 'react'
import { useEffect } from 'react'
import { doc, getDoc,setDoc,updateDoc } from "firebase/firestore";
import { db } from '../../public/firebase'
import useId from '@mui/material/utils/useId'
export default function Productscreen({uid}){
     console.log(uid)
    let [count,setcount]=useState(0)
    const {query}=useRouter()
    console.log(query)
    const {slug}=query
   let getproduct=data.products.filter((obj)=>{
       return obj.slug==slug
   })
   let productobj=getproduct[0]
   useEffect(()=>{
    if(!uid)
    return
    async function hello(){
       
     const docRef = doc(db, "user", uid,'cart',slug);
     const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        let a=docSnap.data().count
         setcount(a)
      }
    }
    hello()
 },[uid])
 async function add_to_cart(){
    const docRef = doc(db, "user", uid,'cart',slug);
    const docSnap = await getDoc(docRef);
     if(docSnap.exists()){
       let data=docSnap.data()
         let a=data.count+1
         if(a>productobj.countInStock){
            alert('cant add more ')
            return
         }
       setcount(a)
       const washingtonRef = doc(db, "user", uid,'cart',slug);
       await updateDoc(washingtonRef,{
        count:a
      });
      
     }
     else{
        if(productobj.countInStock==0){
            alert('cant add more')
            return
        }
        setcount(1)
        await setDoc(doc(db, "user", uid,'cart',slug), {
            name:productobj.name,
            category:productobj.category,
            countInStock: productobj.countInStock,
            price: productobj.price,
            count:1,
            brand:productobj.brand,
            slug:productobj.slug
          });
          
     }
   }
    return(
        <>
        <Navbar count={count}/>
        <div className='mt-18 pt-20 bg-white  overflow-hidden'>
            {
                !slug? 
               
                <div>Product Not found</div>
                
                :
                 <div className='w-full h-screen overflow-hidden  p-5'>
                   
                    <div className='flex gap-8 w-full'>
                    <div className="flex flex-col  bg-gray-200 ">
        
            
          <img src={productobj.image} alt="Front of men&#039;s Basic Tee in black." className="  object-cover  w-fit h-fit"/>
          
         
        </div>
            <div className='flex   w-screen  items-start gap-10'>
                <div className='p-2 flex flex-col'>
                    <h1 className='font-bold text-xl'>{productobj.name} </h1>
                    <ul className='font-serif'>
                        
                        <li>catagory: {productobj.category}</li>
                        <li>Brand: {productobj.brand}</li>
                        <li>{productobj.rating} of {productobj.numReviews} reviews</li>
                        <li> description: {productobj.description}</li>
                    </ul>
                </div>
                <div className='flex w-44 flex-col p-3  popup'>
                <div className='flex gap-5 w-full'> 
                    <div>Price </div>
                    <div>${productobj.price}</div>
                </div>
                <div className='flex gap-5 w-full'>
                  <div>Stock</div>
                  <div>{productobj.countInStock}</div>

                </div>
               <div className='w-full'>
               <button className=" text-white  h-7 px-2 bg-[#FFD700] mt-2 outline-none border-none" onClick={add_to_cart}> Add to Cart
          </button>
             </div>
                </div>
            </div>
                    </div>
                 </div>
            }
       <style jsx>
         {`
          .popup{
            background-color: #ffffff;
     box-shadow: 0px 12px 10px 5px rgba(0, 0, 0, 0.2)
          }
         `

         }
       </style>
        </div>
        <Add_cart/>
        </>
    )
}