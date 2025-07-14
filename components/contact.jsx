import { socialLinks, personalInfo } from "../data/data";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1227"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M738.6 575.8 1175.4 0H1070L693.3 505.6 387.5 0H0l458.4 725.7L0 1227h105.5l399.1-538.7L812.5 1227H1200L738.6 575.8z" />
  </svg>
);
const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: XIcon,
  instagram: Instagram,
  facebook: Facebook,
  leetcode: () => (
    <div className="w-5 h-5 rounded text-white text-xl flex items-center justify-center font-bold">
      LC
    </div>
  ),
};

export default function Contact() {
  return (
    <section id="contact" className="py-10 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info + Social */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Connect
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{personalInfo.location}</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const IconComponent = iconMap[social.slug];
                  return (
                    <a
                      key={social.slug}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-neutral-900 rounded-lg hover:bg-neutral-800 hover:text-blue-400 text-gray-300 transition-colors duration-200"
                      title={social.name}
                    >
                      {IconComponent && <IconComponent />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-neutral-800 bg-neutral-900 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-neutral-800 bg-neutral-900 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-800 bg-neutral-900 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-400 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors duration-200 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
