
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Download, ExternalLink, Send, Github, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Get in Touch
            </h1>
          </div>
          <p className="text-xl text-gray-300 font-light max-w-3xl">
            Ready to collaborate on your next AI project or discuss innovative solutions? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-green-400" />
                Send Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-400 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-400 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-400 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Project inquiry / Collaboration / Other"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-medium">Message</label>
                  <textarea 
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-400 text-white placeholder-gray-400 resize-none transition-all duration-300"
                    placeholder="Tell me about your project or how we can collaborate..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <a 
                      href="mailto:abdoullahaljersi@gmail.com" 
                      className="text-green-400 hover:text-green-300 transition-colors duration-300"
                    >
                      abdoullahaljersi@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <a 
                      href="tel:+221781080506" 
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      +221 78 108 05 06
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="text-purple-400">Dakar, Senegal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume & Links */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Resources</h2>
              
              <div className="space-y-4">
                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('#', '_blank')} // Replace with actual Google Drive link
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-semibold py-3 transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://www.linkedin.com/in/abdoullahndao/', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black font-semibold py-3 transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('#', '_blank')} // Replace with actual GitHub link
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Portfolio
                </Button>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Availability</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Open to full-time opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Available for consulting</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-sm text-green-400">
                  <strong>Response Time:</strong> Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
