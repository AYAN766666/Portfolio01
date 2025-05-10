import Link from "next/link"; 
import Image  from "next/image"; 
import coding from "../../../../public/lobo.jpg"


import { FaLinkedin } from "react-icons/fa";


export default function Footer (){
    return(
        <div className="bg-gray-50"        >
         <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"> 

      <Image className="rounded-full w-[50px]  " src={coding} alt="No image"   height={100}  width={100}    ></Image>
      
      
      <span className="ml-3 text-xl">MY LOVE CODING</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 MY LOVE CODING 
      
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target="_blank"  href={"https://www.linkedin.com/in/aayan-rajput-4817a2292/ "} className="text-gray-500">
         
      <FaLinkedin className="text-3xl hover:text-blue-500        " />
        
      </Link>
      
      
      
    </span>
  </div>
  </footer>


        </div>
    )
}