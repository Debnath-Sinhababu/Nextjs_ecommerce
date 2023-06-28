import Head from 'next/head'
import Image from 'next/image'
import Add_cart from '../components/add_cart'
import Navbar from '../components/navbar'
import Productitem from '../components/productitem'
import { useEffect } from 'react'
 import { useRouter } from 'next/router'
import data from '../utils/data'
 
 export default function Home({uid}){
    let router=useRouter()
     return(
        <>
      
        
       <Navbar/>
       <div className="bg-white">
       <div className="p-2 mt-7">
         
     
         <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
           {
             data.products.map((product)=>{
               return(
               <Productitem product={product} />
               )
             })
           }
         
          
          
         </div>
       </div>
       <Add_cart/>
     </div>
      </>
        
        
         
     )
 }