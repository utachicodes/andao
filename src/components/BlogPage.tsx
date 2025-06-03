
import { useState } from 'react';
import { Calendar, Clock, Code2, Database, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Building XamSaDine AI: A Multilingual RAG System for Islamic Guidance",
      excerpt: "Deep dive into creating a Retrieval-Augmented Generation system that provides accurate Islamic guidance in multiple languages.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "AI/ML",
      image: "/placeholder.svg",
      tags: ["RAG", "NLP", "Python", "Docker"]
    },
    {
      id: 2,
      title: "Computer Vision for Marine Conservation: Detecting Marine Life with Neural Networks",
      excerpt: "How we used CUDA and deep learning to create 3D reconstructions of underwater environments for marine research.",
      date: "2025-01-10",
      readTime: "12 min read",
      category: "Computer Vision",
      image: "/placeholder.svg",
      tags: ["CUDA", "Neural Networks", "3D Modeling", "Conservation"]
    },
    {
      id: 3,
      title: "From RFID to AI: Building Smart Campus Solutions",
      excerpt: "Exploring the integration of RFID technology with machine learning for automated campus systems.",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "IoT",
      image: "/placeholder.svg",
      tags: ["RFID", "NFC", "Python", "Automation"]
    },
    {
      id: 4,
      title: "Data Analysis in Practice: Insights from Real-World Projects",
      excerpt: "Lessons learned from analyzing complex datasets across different industries and domains.",
      date: "2024-12-28",
      readTime: "10 min read",
      category: "Data Analysis",
      image: "/placeholder.svg",
      tags: ["Data Visualization", "Python", "Statistical Analysis"]
    },
    {
      id: 5,
      title: "The Future of Biofuel: Automating Algae Production with Python",
      excerpt: "How we built monitoring systems for algae-based biofuel production using sensors and automation.",
      date: "2024-12-20",
      readTime: "7 min read",
      category: "Automation",
      image: "/placeholder.svg",
      tags: ["Arduino", "Python", "CAD", "Sustainability"]
    }
  ];

  const categories = ['all', 'AI/ML', 'Computer Vision', 'Data Analysis', 'IoT', 'Automation'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI/ML': return Brain;
      case 'Computer Vision': return Code2;
      case 'Data Analysis': return Database;
      default: return Code2;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Tech Blog
            </h1>
          </div>
          <p className="text-xl text-gray-300 font-light max-w-3xl">
            Insights from the frontlines of AI development, data analysis, and innovative tech solutions.
          </p>
          
          {/* Terminal-style intro */}
          <div className="bg-gray-900/50 backdrop-blur border border-green-400/30 rounded-lg p-4 mt-8 font-mono text-sm">
            <div className="text-green-400">$ cat blog_mission.txt</div>
            <div className="text-gray-300 mt-2">
              Sharing knowledge through code, data, and real-world problem solving...
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-black'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => {
            const CategoryIcon = getCategoryIcon(post.category);
            
            return (
              <article
                key={post.id}
                className="bg-gray-800/30 border border-gray-700 rounded-xl overflow-hidden hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="aspect-video bg-gradient-to-br from-green-400/20 to-blue-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                    <CategoryIcon className="w-12 h-12 text-green-400" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="text-green-400 hover:text-green-300 p-0 h-auto font-medium group/btn"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8">
            <Code2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">More Articles Coming Soon</h3>
            <p className="text-gray-400 mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Stay tuned for more insights!
            </p>
            <div className="bg-gray-900/50 backdrop-blur border border-green-400/30 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400">$ git log --oneline</div>
              <div className="text-gray-300 mt-2">
                • Deep Learning Optimization Techniques<br/>
                • Building Scalable ML Pipelines<br/>
                • Advanced Computer Vision Applications<br/>
                • Real-time Data Processing with Python
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
