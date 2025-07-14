import Image from "next/image";
import { personalInfo } from "../data/data";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="fiexd min-h-screen flex items-center justify-center bg-black px-4 pt-20"
    >
      <div className="max-w-6xl  my-auto w-full flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
        {/* Image Section */}
        <div className="w-40 sm:w-48 md:w-64 aspect-square rounded-full overflow-hidden shadow-lg flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="/sachinpic.jpg"
            alt={personalInfo.name}
            width={256}
            height={256}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 p-5">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-2xl text-gray-300 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">
            {personalInfo.bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-400 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-200 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-blue-400 text-blue-300 px-8 py-3 rounded-lg hover:bg-blue-600/10 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Chevron Arrow */}
      <div className="absolute bottom-6 animate-bounce">
        <ChevronDown size={32} className="mx-auto text-gray-500" />
      </div>
    </section>
  );
}
