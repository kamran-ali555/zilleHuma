import info from '../../assets/infofinder.png';
import neh from '../../assets/NEH-removebg-preview.png';

export function Companies() {
  return (
    <section id="companies" className="py-20 bg-white w-full">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proud co-founder of two innovative companies making a difference in their respective fields.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* North Elegance Hub */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
              <img className="text-white text-2xl font-bold" src={neh} alt="NEH" />
            </div>
            <h3 className="text-2xl font-bold mb-4">North Elegance Hub</h3>
            <p className="text-gray-600 mb-6">
              An organization dedicated to women's empowerment through:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span>Freelancing opportunities</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span>Vocational training programs</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span>Skills development initiatives</span>
              </li>
            </ul>
            <a className="text-purple-600 font-medium hover:underline" href="https://www.linkedin.com/posts/north-elegance-hub-neh_womenempowerment-communitydevelopment-collaborationforchange-activity-7298430435187933184-B1PC?utm_source=share&utm_medium=member_android&rcm=ACoAAE8D_rEBBcPp2L8gzcr8vXm37Sltx8TJuYk">Learn more →</a>
          </div>
          {/* Info Finder */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-16 w-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
              <img className="text-white text-2xl font-bold rounded-full" src={info} alt="Info Finder" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Info Finder</h3>
            <p className="text-gray-600 mb-6">
              A web-based platform revolutionizing tourism through:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                </div>
                <span>
                  Location-based information and seamless online booking
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                </div>
                <span>
                  Connecting tourists with hotels, adventure tours, and cultural experiences
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                </div>
                <span>Empowering local businesses with online presence</span>
              </li>
            </ul>
            <a className="text-purple-600 font-medium hover:underline" href="https://www.facebook.com/share/162HkBbBsi/">Learn more →</a>
          </div>
        </div>
      </div>
    </section>
  );
}






// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import info from '../../assets/infofinder.png';
// import neh from '../../assets/NEH-removebg-preview.png';

// export function Companies() {
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.2
//   });

//   const leftToCenter = {
//     hidden: { opacity: 0, x: -100 },
//     show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
//   };

//   const rightToCenter = {
//     hidden: { opacity: 0, x: 100 },
//     show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
//   };

//   return (
//     <section id="companies" className="py-20 bg-white w-full">
//       <div className="container mx-auto px-6">
//         <motion.div ref={ref} initial="hidden" animate={inView ? 'show' : 'hidden'} className="text-center mb-16">
//           <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             My Companies
//           </motion.h2>
//           <motion.p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Proud co-founder of two innovative companies making a difference in their respective fields.
//           </motion.p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* North Elegance Hub */}
//           <motion.div ref={ref} initial="hidden" animate={inView ? 'show' : 'hidden'} variants={leftToCenter} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
//             <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
//               <img className="text-white text-2xl font-bold" src={neh} alt="NEH" />
//             </div>
//             <h3 className="text-2xl font-bold mb-4">North Elegance Hub</h3>
//             <p className="text-gray-600 mb-6">
//               An organization dedicated to women's empowerment through:
//             </p>
//             <ul className="space-y-3 mb-6">
//               <li className="flex items-start">
//                 <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
//                   <div className="h-2 w-2 rounded-full bg-blue-600"></div>
//                 </div>
//                 <span>Freelancing opportunities</span>
//               </li>
//               <li className="flex items-start">
//                 <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
//                   <div className="h-2 w-2 rounded-full bg-blue-600"></div>
//                 </div>
//                 <span>Vocational training programs</span>
//               </li>
//               <li className="flex items-start">
//                 <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
//                   <div className="h-2 w-2 rounded-full bg-blue-600"></div>
//                 </div>
//                 <span>Skills development initiatives</span>
//               </li>
//             </ul>
//             <a className="text-purple-600 font-medium hover:underline" href="https://www.linkedin.com/posts/north-elegance-hub-neh_womenempowerment-communitydevelopment-collaborationforchange-activity-7298430435187933184-B1PC?utm_source=share&utm_medium=member_android&rcm=ACoAAE8D_rEBBcPp2L8gzcr8vXm37Sltx8TJuYk">Learn more →</a>
//           </motion.div>
//           {/* Info Finder */}
//           <motion.div ref={ref} initial="hidden" animate={inView ? 'show' : 'hidden'} variants={rightToCenter} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
//             <div className="h-16 w-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
//               <img className="text-white text-2xl font-bold rounded-full" src={info} alt="NEH" />
//             </div>
//             <h3 className="text-2xl font-bold mb-4">Info Finder</h3>
//             <p className="text-gray-600 mb-6">
//               A web-based platform revolutionizing tourism through:
//             </p>
//             <ul className="space-y-3 mb-6">
//               <li className="flex items-start">
//                 <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
//                   <div className="h-2 w-2 rounded-full bg-purple-600"></div>
//                 </div>
//                 <span>
//                   Location-based information and seamless online booking
//                 </span>
//               </li>
//               <li className="flex items-start">
//                 <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
//                   <div className="h-2 w-2 rounded-full bg-purple-600"></div>
//                 </div>
//                 <span>
//                   Connecting tourists with hotels, adventure tours, and cultural experiences
//                 </span>
//               </li>
//               <li className="flex items-start">
//                 <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
//                   <div className="h-2 w-2 rounded-full bg-purple-600"></div>
//                 </div>
//                 <span>Empowering local businesses with online presence</span>
//               </li>
//             </ul>
//             <a className="text-purple-600 font-medium hover:underline" href="https://www.facebook.com/share/162HkBbBsi/">Learn more →</a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
