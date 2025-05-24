

// app/components/Project.tsx

import Link from "next/link";
import Image from "next/image";

export default function Project() {
  return (
    <div id="project" className="bg-gradient-to-tr from-purple-900 via-indigo-900 to-black py-24 px-5 md:px-20 min-h-screen">
      <section className="container mx-auto text-gray-300">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-extrabold mb-4 text-white tracking-wide">
            My Projects
          </h1>
          <p className="max-w-3xl mx-auto leading-relaxed text-indigo-300 text-lg">
            Showcasing my frontend and backend skills through modern design, smooth performance, and real-world functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Project Card Component */}
          {[
            {
              title: "Python Number Table App",
              description: "Type a number, get its table instantly. Powered by Python and Streamlit.",
              image: "/pic2.jpg",
              tag: "Hackathon Project",
              link: "https://generate-table-python-e6ryfjbjsbx5v9ach4r4ue.streamlit.app/",
            },
            {
              title: "E-Commerce Website",
              description: "A modern e-commerce store built with clean UI and focus on performance.",
              image: "/pic.jpg",
              tag: "Hackathon",
              link: "https://hackathon-templete-5.netlify.app/",
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-indigo-800 via-purple-900 to-pink-900 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <div className="relative w-full h-64 md:h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-all duration-500 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-t-3xl" />
              </div>

              <div className="p-6 md:p-8 space-y-3">
                <p className="text-sm text-indigo-300 font-medium">{project.tag}</p>
                <h2 className="text-xl md:text-2xl font-bold text-white">{project.title}</h2>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
