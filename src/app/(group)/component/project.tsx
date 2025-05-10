import Link from "next/link";
import Image from "next/image"; 

import port from '../../../../public/pic2.jpg' 
import skill from '../../../../public/pic.jpg'
export default function Project (){
    return(
        <div   id="project"    >
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My project
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
       
      my frontend development skills, I built a modern and responsive user interface with smooth performance and clean design. Additionally, I integrated vanilla Python to handle background logic and automation tasks, showcasing my ability to blend creative frontend design with practical Python-based functionality. This project reflects my expertise in building high quality, efficient, and user-focused web applications.
      
      </p>
    </div>
    <div className="flex flex-wrap -m-5   -mt-9   "> 
        {/*project*/}
      <div className="lg:w-1/2 sm:w-1/1 p-4 cursor-pointer    "      >
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={port}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Hachathon project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Python
            </h1>
            <p className="leading-relaxed line-clamp-2">
              
            Welcome to Number Tabile App
🔠 Type a Number, Get the Tale
            
            </p> 
            <Link target="_blank" href='   https://generate-table-python-e6ryfjbjsbx5v9ach4r4ue.streamlit.app/ '    >
            <p className="leading-relaxed  text-blue-500 hover:underline     ">View Project..</p> 
            </Link> 

          </div>
        </div>
      
      
        
        
      
      
        </div>
      
      
        
        
      
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer     "      >
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={skill}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Hackathon
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Pratic
            </h1>
            <p className="leading-relaxed   line-clamp-2">
              
            
            E-Commerce Website
            
            </p> 
            <Link target="_blank" href='       https://hackathon-templete-5.netlify.app/      '    >
            <p className="leading-relaxed  text-blue-500 hover:underline     ">View Project..</p> 
            </Link> 
            
          </div>
      
      </div>
        
        
      
        </div>
      
      
        
        
      
    </div>
  </div>
</section>




        </div>
    )
}