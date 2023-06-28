import Link from "next/link"
import { useEffect,useState } from "react"
import { doc,getDoc } from "firebase/firestore"
import { db } from "../public/firebase"
export default function Navbar({count}){
  
 
  
    return(
      <nav class="bg-gray-800 fixed w-screen py-4 top-0 text-white flex justify-between px-4">
        <div>
       Navbar
       </div>
       <div className="flex justify-between gap-5">
        <Link href='/home'>
          <a>
        <div>Home</div>
        </a>
        </Link>
        {
          count==undefined? <div>Cart</div>: <div>Cart <span className="count">{count}</span></div>
        }
       
        <style jsx>
        {` .count{
          width:fit-content;
          height:fit-content;
          border:1px solid;
          border-radius:100%;
          background-color:red;
          padding:2px
        }
        
        `

        }

        

        </style>
        <Link href='/'>
        <a>
        <div>Logout</div>
        </a>
        </Link>
       </div>
    </nav>
    )
}