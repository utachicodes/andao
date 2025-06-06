
import { Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdoullahaljersi@gmail.com",
      link: "mailto:abdoullahaljersi@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+221 78 108 05 06",
      link: "tel:+221781080506"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Somone, Senegal",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/abdoullahndao",
      username: "abdoullahndao"
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/utachicodes",
      username: "utachicodes"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Get In Touch
          </h1>
          <div className="w-20 h-px bg-gray-600 mb-8"></div>
          <p className="text-xl text-gray-400 font-light">
            Let's discuss opportunities, collaborate on projects, or just have a conversation about tech
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-medium text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="group">
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="flex items-center gap-4 p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:border-gray-600/50 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl">
                      <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Connect With Me</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:border-gray-600/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <social.icon className="w-5 h-5 text-white" />
                    <div>
                      <div className="text-white font-medium">{social.label}</div>
                      <div className="text-gray-400 text-sm">{social.username}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
            <h3 className="text-lg font-medium text-white mb-3">Resume</h3>
            <p className="text-gray-400 text-sm mb-4">
              Download my resume to learn more about my experience and skills.
            </p>
            <Button 
              className="bg-white text-black hover:bg-gray-100 font-medium"
              onClick={() => {
                window.open('https://docs.google.com/document/d/1GWOCG96sRl3i_czb2guBgxTNcF1VbjeYt4DMUpL6RGI/edit?usp=sharing', '_blank');
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-lg font-medium text-white">Currently Available</h3>
            </div>
            <p className="text-gray-400 text-sm">
              I'm actively looking for internship opportunities, freelance projects, 
              and collaboration on interesting tech challenges. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
