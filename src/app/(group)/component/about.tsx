import Image from "next/image" 
import about from '../../../../public/ayan.jpg'

export default async function About (){ 
  
return(

    <div id="about">

<section className="text-gray-600 body-font      ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto  w-[300px] h-[400px]     "
        alt="hero"
        src={about} 
        width={300} 
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
        <br className="hidden lg:inline-block" />
        
      </h1> 
      
      
      <p className="mb-5 leading-relaxed">

      As a passionate front-end developer, I specialize in creating fast, responsive, and modern websites using Next.js, Tailwind CSS, and Sanity CMS. I focus on delivering clean UI, smooth user experience, and scalable structures — perfect for individuals, startups, and small businesses.

On the scripting side  I build small Python-based projects that help automate simple tasks, demonstrate logical thinking, and enhance productivity. While I dont work with full-scale backend systems, I love using Python for creative, functional mini-tools.

My Expertise:
Front-end development with Next.js + Tailwind CSS

CMS integration using Sanity for easy content management

Python scripting for small utilities and automations

Mobile-first, responsive, and fast-loading designs

Reliable and simple project delivery with clear communication

Looking for a clean website with easy-to-manage content and a developer who understands both design and logic? Let’s connect and turn your vision into a working website!
      
      </p>
      <div className="flex justify-center"> 
        <a href="w-8ben.pdf"   >
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        </a>
        
      </div>
    </div>
  </div>
</section>














    </div>
)
} 
