import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import img1 from '../../assets/humma5.png'
export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'ZILLE-HUMA',
      subtitle: 'Co-founder of North Elegance Hub & Info Finder. Transforming businesses through strategic social media marketing and digital innovation.',
      gradient: 'from-blue-600 to-purple-600',
      image: 'https://via.placeholder.com/500'
    },
    {
      title: 'North Elegance Hub',
      subtitle: 'Empowering women through freelancing opportunities, vocational training, and skills development initiatives.',
      gradient: 'from-purple-600 to-pink-600',
      image: 'https://via.placeholder.com/500'
    },
    {
      title: 'Info Finder',
      subtitle: 'Revolutionizing tourism with location-based information and seamless booking experiences for adventures and cultural experiences.',
      gradient: 'from-blue-600 to-indigo-600',
      image: 'https://via.placeholder.com/500'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-pink-500/20 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 py-16 pt-32 relative z-10  flex flex-col md:flex-row justify- items-center md:gap-20">
        <div className="md:w-1/2 order-2 md:order-1 flex justify-center">
          <img src={img1} alt="Hero Slide" className="w-[80%] h-[500px] max-w-md rounded-full " />
        </div>
        <div className="md:w-1/2 order-1 md:order-2 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent`}>
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p className="text-xl md:text-2xl mb-8 max-w-lg text-slate-600">
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Get in Touch
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-400 hover:bg-gray-600'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
