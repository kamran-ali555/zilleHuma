import { TrendingUpIcon, Target, LightbulbIcon, GlobeIcon, BookOpenIcon } from 'lucide-react';
const FuturePlans = () => {
  return <section id="future" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Plans</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            I'm constantly looking ahead to evolve my skills and expand my
            impact in the social media marketing landscape.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <GlobeIcon size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Expansion</h3>
            <p className="text-blue-100">
              Expanding both North Elegance Hub and Info Finder into new
              international markets, with a focus on Europe and Asia by 2025.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <LightbulbIcon size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation Lab</h3>
            <p className="text-blue-100">
              Launching a dedicated innovation lab to explore emerging social
              media technologies and develop proprietary marketing tools.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <BookOpenIcon size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Knowledge Sharing</h3>
            <p className="text-blue-100">
              Publishing a comprehensive guide on social media marketing
              strategies and launching an educational platform for aspiring
              marketers.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Target size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Industry Specialization</h3>
            <p className="text-blue-100">
              Developing specialized social media marketing solutions for
              underserved industries with unique challenges and opportunities.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUpIcon size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Sustainable Growth</h3>
            <p className="text-blue-100">
              Implementing a sustainable growth model that balances
              profitability with social responsibility and environmental
              consciousness.
            </p>
          </div>
          <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <div className="flex justify-center items-center h-full">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">And More to Come...</h3>
                <p className="text-blue-100">
                  The future is bright with endless possibilities. Let's connect
                  and create something amazing together.
                </p>
                <button className="mt-6 bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-medium transition-colors">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FuturePlans;