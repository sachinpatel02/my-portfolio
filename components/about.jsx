import { personalInfo } from "../data/data";
import { Code, Database, Globe, Smartphone } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Node.js, Express, MongoDB, MySQL, REST APIs",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      description: "JavaScript, Python, Java, SQL",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Tools & Technologies",
      description: "Git, Postman, AWS, Vercel, VS Code, Figma",
    },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm a passionate developer who loves creating digital experiences
            that make a difference.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              🧭 My Journey 
            </h3>
            <p className="text-gray-300 mb-4">
              With a strong foundation in both frontend and backend
              technologies, I specialize in building full-stack web applications
              that are not only functional but also thoughtfully designed. My
              experience spans across modern frameworks, clean code
              architecture, and performance-focused development.
            </p>
            <p className="text-gray-300 mb-4">
              I'm currently pursuing a Master’s degree in Artificial
              Intelligence and Machine Learning, which has expanded my expertise
              in areas like deep learning, natural language processing, and
              intelligent systems. This academic journey complements my web
              development skills, enabling me to build smart, data-driven
              applications.
            </p>
            <p className="text-gray-300 mb-4">
              I'm passionate about staying at the forefront of
              technology—whether that’s adopting the latest in web development
              or exploring real-world applications of AI. I strive to create
              user experiences that are fast, intuitive, and future-ready.
            </p>

            <div className="flex items-center text-gray-400">
              <span className="font-medium">Location:</span>
              <span className="ml-2">{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
            <h3 className="text-xl font-semibold text-white mb-4">
              Education 🎓
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>👨🏻‍🎓 MCA with AI & ML from Parul University, Vadodara</li>
              <li>👨🏻‍🎓 BCA from SGGU, Vadodara</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-4 mt-10">
              Quick Facts ✍🏻
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>💻 3+ years of development experience</li>
              <li>💼 4.5+ years of experience with International Clients</li>
              <li>🎓 Holding Master’s degree in AI & ML </li>
              <li>🧑🏼‍💻 Full-stack development expertise</li>
              <li>🧠 Strong foundation in Data Structures & Algorithms</li>
              <li>📕 Always eager to learn new technologies</li>
            </ul>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6">
            🚀 Professional Experience 
          </h3>
          <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 space-y-4">
            <div>
              <h4 className="text-blue-400 text-xl font-bold">
                Senior Systems Engineer – Infosys Limited
              </h4>
              <p className="text-gray-400 text-sm">
                Dec 2020 – Apr 2025 · Remote – Pune, Maharashtra, India
              </p>
            </div>
            <ul className="list-none text-gray-300 space-y-2 text-lm">
              <li>
                ➝ Led development and infrastructure optimization using <strong className="text-blue-300">Python,
                MySQL, MongoDB, and networking technologies.</strong>
              </li>
              <li>
                ➝ Collaborated with international clients to deliver strategic
                network solutions, <strong className="text-blue-300">saving over $700,000 USD.</strong>
              </li>
              <li>
                ➝ Acted as Network SME, driving infrastructure and backend design
                decisions across multiple projects.
              </li>
              <li>
                ➝ Built custom automation tools and client-specific optimizations
                that improved system performance.
              </li>
              <li>
                ➝ Delivered technical training and led engineering teams on key
                networking and backend initiatives.
              </li>
              <li>
                ➝ Developed backend tools for automation and seamless
                infrastructure integration.
              </li>
              <li>
                ➝ Recognized with <strong className="text-blue-300">Infosys CIS Rise Insta Award 🏆🏆🏆(×3) </strong>and <strong className="text-blue-300">Delivery
                Ninja Award 🏆🏆(×2)</strong> for technical excellence.
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
