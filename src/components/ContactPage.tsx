
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', organization: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-inter font-bold mb-6 bioluminescent-glow">
              Get In Touch
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join us in protecting our oceans. Whether you're a researcher, partner, or supporter, we'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-ocean-cyan/20 p-8">
              <h2 className="text-2xl font-semibold text-ocean-bioluminescent mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-ocean-cyan/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-ocean-bioluminescent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-ocean-cyan/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-ocean-bioluminescent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-white/80 mb-2">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-ocean-cyan/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-ocean-bioluminescent transition-colors"
                    placeholder="Your organization"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white/80 mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-ocean-cyan/30 rounded-lg text-white focus:outline-none focus:border-ocean-bioluminescent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="research">Research Collaboration</option>
                    <option value="funding">Funding & Investment</option>
                    <option value="technology">Technology Inquiry</option>
                    <option value="media">Media & Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-ocean-cyan/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-ocean-bioluminescent transition-colors resize-none"
                    placeholder="Tell us about your interest in DeepSea AI..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-ocean-teal hover:bg-ocean-cyan text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:animate-glow"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-ocean-cyan/20 p-8">
                <h3 className="text-xl font-semibold text-ocean-bioluminescent mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <div className="text-white font-medium">Headquarters</div>
                      <div className="text-white/70">Dakar, Senegal</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📧</div>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-white/70">hello@deepsea-ai.org</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🌐</div>
                    <div>
                      <div className="text-white font-medium">Coverage</div>
                      <div className="text-white/70">West African Waters</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-ocean-cyan/20 p-8">
                <h3 className="text-xl font-semibold text-ocean-bioluminescent mb-6">Partnership Opportunities</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ocean-teal rounded-full mr-3"></div>
                    <span className="text-white/80">Research Institutions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ocean-teal rounded-full mr-3"></div>
                    <span className="text-white/80">Government Agencies</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ocean-teal rounded-full mr-3"></div>
                    <span className="text-white/80">Conservation Organizations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ocean-teal rounded-full mr-3"></div>
                    <span className="text-white/80">Technology Companies</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ocean-teal rounded-full mr-3"></div>
                    <span className="text-white/80">Fishing Communities</span>
                  </div>
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
