import Link from 'next/link'
import { tags } from '../lib/menu'
import { useForm } from "react-hook-form";

export default function Header(){
  
  

    return(
        <>
<header className="z-30 w-full px-2 py-4 bg-white sm:px-4">
  <div className="flex items-center justify-between mx-auto max-w-7xl">
    <a href="/" title="Kutty Home Page" className="flex items-center">
       
      <span className="sr-only">Home</span>
    </a>
    

    <div className="flex items-center space-x-1">
    
     
      <div className="hidden space-x-1 md:inline-flex">
      <Link href="/">
          <a className="btn btn-sm btn-link">Home</a>
        </Link>
      </div>
      <Link href="/add">
          <a className="btn btn-sm btn-link">Add a Tool</a>
        </Link>

        <form  action="/search" method="get">
          <input type="text" className="border p-1" name="query" />
          <input type="submit" className="p-1 border" value="search" />
        </form>

    </div>

  </div>
  <div className="p-2 mt-3 overflow-y-auto border-t whitespace-nowrap scroll-hidden">

<ul className="inline-flex items-center list-none">
         
         {
         tags?.map(function(menu,index){
           return(
              <li  key={index} className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">
              <Link href={`/${menu}`}>
                 <a className="px-1">{menu}</a>
              </Link>
             </li>
            )
         })
         }

        </ul>
 </div>
</header>
</>
    )
}