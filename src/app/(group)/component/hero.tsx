'use client';

import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
 import pic from "../../../../public/ayan.jpg"
export default function Hero() {
  const description1 = "Fast & Secure Website Solutions | Next.js | Sanity Expert | Tailwind CSS | Modern Python AI | Expert Front End Web Developer | Free Consultation.";
  

  return (
    <div className="bg-gray-100">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Web Developer", "Python Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-blue-700 px-10 mb-4"></div>

            <div className="mb-8 leading-relaxed text-center">
              <p>{description1}</p>
            </div>

            <div className="flex justify-center">
              <Link href={"#contact"}>
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src={pic}
              className="object-cover object-center rounded mx-auto w-[15rem]"
              alt="static"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
