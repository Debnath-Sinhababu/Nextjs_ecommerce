
import Link from 'next/link'
export default function Productitem({product}){
    return(
        
        <div className="group">
            
                
        <div className="min-h-80 flex flex-col w-full bg-gray-200">
        <Link href={`product/${product.slug}`}>
            <a>
          <img src={product.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
          </a>
          </Link>
        </div>
       
        
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
          
               
               {product.name}
              
            </h3>
            <p className="mt-1 text-sm text-black font-bold">{product.brand}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
          <Link href={`product/${product.slug}`}>
          <button className=" text-white rounded-full h-8 px-2 bg-[#FFD700]"> Add to Cart
          </button>
          </Link>
        </div>
      </div>    
  
 

        
    )
}