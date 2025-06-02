
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-slate-800">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Let's discuss how we can work together to bring your data science projects to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light text-slate-800 mb-6">Send a Message</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-lg transition-all duration-300">
                  Send Message
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-light text-slate-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-white/70 rounded-xl border border-gray-200/50">
                  <h3 className="font-medium text-slate-800 mb-2">Email</h3>
                  <p className="text-slate-600">abdoullah.ndao@example.com</p>
                </div>
                
                <div className="p-6 bg-white/70 rounded-xl border border-gray-200/50">
                  <h3 className="font-medium text-slate-800 mb-2">Location</h3>
                  <p className="text-slate-600">Dakar, Senegal</p>
                </div>
                
                <div className="p-6 bg-white/70 rounded-xl border border-gray-200/50">
                  <h3 className="font-medium text-slate-800 mb-2">Phone</h3>
                  <p className="text-slate-600">+221 XX XXX XXXX</p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-6">
                <h3 className="font-medium text-slate-800 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-slate-800 text-white rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-300">
                    LI
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-800 text-white rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-300">
                    GH
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-800 text-white rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-300">
                    TW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
