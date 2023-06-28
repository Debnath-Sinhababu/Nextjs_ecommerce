import Link from 'next/link';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function Add_cart(){
    return(
        <Link href={'/productlist'}>
        <div className='fixed bottom-5 right-10 h-30 '>
            
            <AddShoppingCartIcon sx={{fontSize:50}}/>
        </div>
        </Link>
    )
}