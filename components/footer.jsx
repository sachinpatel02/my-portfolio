import { personalInfo } from "../data/data";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
