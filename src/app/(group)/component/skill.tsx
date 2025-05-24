
"use client";
import { AiOutlineEdit } from "react-icons/ai";
import { useEffect, useState } from "react";

const skillsData = [
  { name: "Next.js", level: 70 },
  { name: "Tailwind CSS", level: 90 },
  { name: "HTML", level: 100 },
  { name: "CSS", level: 80 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "Python", level: 70 },
];

export default function Skills() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= skillsData.length) return;

    const timeout = setTimeout(() => {
      setVisibleCount((count) => count + 1);
    }, 200);

    return () => clearTimeout(timeout);
  }, [visibleCount]);

  return (
    <div id="skills">
      <section className="text-gray-700 body-font bg-gradient-to-tr from-purple-900 via-indigo-900 to-black py-24">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-400 tracking-widest font-semibold mb-2">
              SKILLS
            </h2>
            <h1 className="sm:text-4xl text-3xl font-extrabold text-white">
              My Professional Skills
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-indigo-300 text-lg">
              Here are some of the technologies and languages I excel in, with my proficiency levels.
            </p>
          </div>

          <div className="flex flex-wrap justify-center -m-6">
            {skillsData.map((skill, index) => (
              <div
                key={skill.name}
                className={`p-6 w-full md:w-1/3 transition-all duration-700 ease-out
                  ${
                    index < visibleCount
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-500 shadow-lg border border-indigo-700">
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 mr-4 flex items-center justify-center rounded-full bg-indigo-600 text-white text-xl font-bold drop-shadow-lg">
                      <AiOutlineEdit />
                    </div>
                    <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
                  </div>
                  <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md transition-all duration-1000 ease-in-out"
                      style={{ width: `${index < visibleCount ? skill.level : 0}%` }}
                    ></div>
                  </div>
                  <p className="mt-3 text-right font-semibold text-indigo-300">{skill.level}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



