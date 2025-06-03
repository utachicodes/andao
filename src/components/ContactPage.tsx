
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-8 text-gray-900">
            Contact
          </h1>
          <div className="w-16 h-px bg-gray-300 mb-12"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400 resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <Button className="bg-gray-900 hover:bg-gray-800 text-white font-light px-8 py-3 text-base transition-all duration-300 mt-8">
                Send Message
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-8">Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">abdoullah.ndao@example.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Dakar, Senegal</p>
              </div>
              
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/abdoullahndao/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  linkedin.com/in/abdoullahndao
                </a>
              </div>

              <div>
                <h3 className="text-lg font-light text-gray-900 mb-2">Availability</h3>
                <p className="text-gray-600">Open for freelance projects and collaborations</p>
              </div>

              <div>
                <h3 className="text-lg font-light text-gray-900 mb-2">Specializations</h3>
                <div className="text-gray-600 text-sm space-y-1">
                  <div>• AI/ML Development</div>
                  <div>• Python Applications</div>
                  <div>• Computer Vision</div>
                  <div>• Data Analysis</div>
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
