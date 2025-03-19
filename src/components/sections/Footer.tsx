import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, TwitterIcon, InstagramIcon, FacebookIcon, ArrowUpIcon } from 'lucide-react';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white w-full">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Zille-Huma</h3>
            <p className="mb-6 text-gray-300 max-w-md">
              Strategic social media marketing expert and co-founder of North
              Elegance Hub and Info Finder, dedicated to empowering businesses
              and individuals through digital innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              {/* <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a> */}
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#companies" className="text-gray-300 hover:text-white transition-colors">
                  Companies
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>huma76078@gmail.com</li>
              <li>+92 314 4553875</li>
              <li>Gilgit, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} zille-huma. All rights
            reserved.
          </p>
          <button onClick={scrollToTop} className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
            <ArrowUpIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>;
}