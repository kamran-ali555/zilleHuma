import { Children } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, InstagramIcon, TwitterIcon, FacebookIcon, LinkedinIcon } from 'lucide-react';
import image1 from '../assets/img15.png';
import image29 from '../assets/img29.png';
import image28 from '../assets/img28.png';
import image4 from '../assets/img18.png';
import image5 from '../assets/img19.png';
import image6 from '../assets/img15.png';
import image7 from '../assets/img20.png';
import image8 from '../assets/img22.png';
import image9 from '../assets/img24.png';

const Gallery = () => {
  const galleryItems = [{
    title: 'Social Media Campaign',
    platform: 'linkedin',
    image: image1,
    stats: '10k+ Reach',
    icon: <LinkedinIcon className="w-6 h-6" />,
    // icon: <InstagramIcon className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-500'
  }, {
    title: 'Mini Freelancing Hub Nagar',
    platform: 'facebook',
    image: image29,
    stats: '50K+ Followers',
    icon: <FacebookIcon className="w-6 h-6" />,
    // icon: <TwitterIcon className="w-6 h-6" />,
    gradient: 'from-blue-400 to-blue-600'
  }, {
    title: 'Community Engagement',
    platform: 'LinkedIn',
    image: image28,
    stats: '500K+ Interac...',
    icon: <LinkedinIcon className="w-6 h-6" />,
    gradient: 'from-blue-600 to-blue-800'
  }, {
    title: 'Thank you to AKRSP for your invaluable support in turning my vision',
    platform: 'Facebook',
    image: image4,
    stats: '50K+ Connec...',
    icon: <FacebookIcon className="w-6 h-6" />,
    gradient: 'from-blue-700 to-blue-900'
  },, {
    title: 'Professional Network',
    platform: 'LinkedIn',
    image: image5,
    stats: '10K+ Connec...',
    icon: <LinkedinIcon className="w-6 h-6" />,
    gradient: 'from-blue-700 to-blue-900'
  }, {
    title: 'Conducting a freelancing session',
    platform: 'Facebook',
    image: image7,
    stats: '50K+ Connec...',
    icon: <FacebookIcon className="w-6 h-6" />,
    gradient: 'from-blue-700 to-blue-900'
  }, {
    title: 'Empowering communities through IT education',
    platform: 'LinkedIn',
    image: image8,
    stats: '10K+ Connec...',
    icon: <LinkedinIcon className="w-6 h-6" />,
    gradient: 'from-blue-700 to-blue-900'
  }, {
    title: 'leading innovative projects',
    platform: 'Facebook',
    image: image9,
    stats: '50K+ Connec...',
    icon: <FacebookIcon className="w-6 h-6" />,
    gradient: 'from-blue-700 to-blue-900'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section id="gallery" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Gallery Showcase
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Explore our creative work and successful campaigns across different
            social media platforms.
          </p>
        </div>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }}>
          {galleryItems.map((item, index) => <motion.div key={index} variants={itemVariants} className="group relative overflow-hidden rounded-xl">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-60`}></div>
                </div>
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top Content */}
                  <div className="flex justify-between items-start">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      {item.icon}
                    </div>
                    <motion.div className="bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100" whileHover={{
                  scale: 1.1
                }}>
                      <ExternalLinkIcon className="w-6 h-6" />
                    </motion.div>
                  </div>
                  {/* Bottom Content */}
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">{item.platform}</span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                        {item.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </motion.div>
        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[{
          label: 'Total Reach',
          value: '1M+'
        }, {
          label: 'Campaigns',
          value: '200+'
        }, {
          label: 'Platforms',
          value: '8+'
        }, {
          label: 'Success Rate',
          value: '95%'
        }].map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h4 className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </h4>
              <p className="text-slate-300">{stat.label}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Gallery;