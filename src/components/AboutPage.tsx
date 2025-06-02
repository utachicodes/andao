
const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-inter font-bold mb-6 bioluminescent-glow">
              About DeepSea AI
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Founded in Dakar, Senegal, we're pioneering the future of ocean conservation through artificial intelligence.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-ocean-bioluminescent mb-6">Our Story</h2>
              <p className="text-white/80 mb-4 leading-relaxed">
                DeepSea AI was born from a vision to protect West Africa's precious marine ecosystems. Founded by Abdoullah Ndao, a marine biologist and AI researcher from Senegal, our mission emerged from witnessing firsthand the challenges facing our oceans.
              </p>
              <p className="text-white/80 mb-4 leading-relaxed">
                With illegal fishing threatening local communities and marine biodiversity declining rapidly, we realized that traditional monitoring methods weren't enough. We needed innovative solutions that could scale across vast ocean territories.
              </p>
              <p className="text-white/80 leading-relaxed">
                Today, DeepSea AI combines cutting-edge machine learning with satellite imagery, underwater sensors, and local knowledge to create comprehensive ocean monitoring systems that protect marine life and support sustainable fishing practices.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-ocean-teal to-ocean-cyan rounded-2xl flex items-center justify-center">
                <div className="text-6xl opacity-20">🌊</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ocean-bioluminescent/20 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-ocean-cyan/20">
              <h3 className="text-2xl font-semibold text-ocean-bioluminescent mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                To leverage artificial intelligence and advanced technology to monitor, protect, and restore marine ecosystems while empowering local communities with sustainable ocean management tools.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-ocean-cyan/20">
              <h3 className="text-2xl font-semibold text-ocean-bioluminescent mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                A future where technology and traditional knowledge work together to ensure healthy, thriving oceans for generations to come, starting with the waters of West Africa and expanding globally.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-ocean-bioluminescent mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-ocean-cyan/20">
                <div className="text-3xl mb-4">🌍</div>
                <h4 className="text-lg font-semibold text-white mb-2">Sustainability</h4>
                <p className="text-white/70 text-sm">Every solution we build prioritizes long-term environmental health.</p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-ocean-cyan/20">
                <div className="text-3xl mb-4">🤝</div>
                <h4 className="text-lg font-semibold text-white mb-2">Community</h4>
                <p className="text-white/70 text-sm">We work hand-in-hand with local fishing communities and stakeholders.</p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-ocean-cyan/20">
                <div className="text-3xl mb-4">🔬</div>
                <h4 className="text-lg font-semibold text-white mb-2">Innovation</h4>
                <p className="text-white/70 text-sm">We push the boundaries of what's possible with marine technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
