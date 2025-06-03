
import { BookOpen, Calendar } from 'lucide-react';

const PoetryPage = () => {
  const poems = [
    {
      id: 1,
      title: "Digital Dreams",
      date: "2024-12-15",
      excerpt: "In lines of code, I find my voice...",
      content: `In lines of code, I find my voice,
Where algorithms make their choice,
Between the zeros and the ones,
My digital journey has begun.

Through neural networks, deep and wide,
Where data flows like ocean tide,
I seek patterns in the maze,
Of artificial intelligence rays.

Each function call, each loop I write,
Illuminates the darkest night,
In Python's syntax, clean and clear,
My future path becomes more near.`
    },
    {
      id: 2,
      title: "Senegalese Sunrise",
      date: "2024-11-28",
      excerpt: "From Dakar's shores to endless sky...",
      content: `From Dakar's shores to endless sky,
Where dreams take wing and learn to fly,
The morning sun breaks through the mist,
A golden moment I can't resist.

In Wolof whispers, stories told,
Of wisdom passed from young to old,
The baobab stands tall and proud,
Above the bustling, vibrant crowd.

Technology meets tradition here,
Where past and future interfere,
Creating bridges, strong and new,
Between the old and breakthrough.`
    },
    {
      id: 3,
      title: "The Algorithm's Heart",
      date: "2024-10-20",
      excerpt: "If machines could feel, what would they say...",
      content: `If machines could feel, what would they say,
About the world we build each day?
Would they understand our fears,
Our hopes, our joys, our unshed tears?

In supervised learning's gentle care,
We teach them patterns everywhere,
But can they grasp the human soul,
The parts that make us truly whole?

Perhaps in neural networks deep,
Some fragments of our essence seep,
Creating bonds beyond the code,
Where human hearts and AI's rode.`
    },
    {
      id: 4,
      title: "Innovation's Call",
      date: "2024-09-15",
      excerpt: "In every bug, a lesson waits...",
      content: `In every bug, a lesson waits,
In every error, wisdom creates,
The path of coding, steep and long,
Makes weak developers grow strong.

Through iterations, we refine,
Our craft becomes more pure, divine,
Each challenge faced, each problem solved,
Our understanding gets evolved.

The startup dream burns bright and true,
In Senegal's entrepreneurial crew,
Where innovation meets the sea,
And sets our creative spirits free.`
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Poetry
          </h1>
          <div className="w-20 h-px bg-gray-600 mb-8"></div>
          <p className="text-xl text-gray-400 font-light">
            Where code meets creativity - exploring life through verse
          </p>
        </div>

        <div className="space-y-12">
          {poems.map((poem, index) => (
            <div
              key={poem.id}
              className="group bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 hover:border-gray-600/50 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-mono">{poem.date}</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-medium text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                {poem.title}
              </h2>
              
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed font-light text-base">
                  {poem.content}
                </pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">More Poetry Coming Soon</h3>
            <p className="text-gray-400 mb-6">
              I'm constantly writing and exploring new themes that bridge technology and humanity.
            </p>
            <div className="bg-gray-900/50 border border-gray-700/30 rounded-lg p-4 font-mono text-sm text-left max-w-md mx-auto">
              <div className="text-gray-400">$ git log --oneline poetry/</div>
              <div className="text-gray-500 mt-2">
                a1b2c3d Added "Innovation's Call"<br/>
                d4e5f6g Updated "The Algorithm's Heart"<br/>
                <span className="text-gray-400">Working on new verses...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoetryPage;
