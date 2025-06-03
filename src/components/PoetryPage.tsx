
import { BookOpen, Calendar } from 'lucide-react';

const PoetryPage = () => {
  const poems = [
    {
      id: 1,
      title: "The Womb of Memory",
      date: "2024-12-15",
      excerpt: "The womb cradles echoes of sisters' sighs...",
      content: `The womb cradles echoes of sisters' sighs,
Where laughter and sorrow in harmony lie.
A bond everlasting, both fragile and strong,
A chorus of voices, life’s endless song.

Through time’s soft shadows, our stories reside,
Woven in silence, where memories abide.
A tapestry vivid, with threads bright and worn,
Of love that’s eternal, through joy and the storm.

Family’s a fire, both tender and grand,
A guiding light, hand clasped in hand.
Through trials and triumphs, the tale it unfolds,
The womb of memory forever holds.`
    },
    {
      id: 2,
      title: "ico: The Star Unclaimed",
      date: "2024-11-28",
      excerpt: "She is a star that lights the night...",
      content: `She is a star that lights the night,
A glow too pure, a spark too bright.
The world may watch, may chase her gleam,
But none can know the depths unseen.
      
She walks, and whispers fill the air,
Yet none should dare to stop and stare.
They call her name, they seek her gaze,
As if she’s theirs to set ablaze.
      
The wind may dance within her hijab,
The sun may shine to keep her wrapped.
But she’s a storm, untamed and free,
And none should claim what’s not meant for thy.
      
Let them try, let them yearn,
But some lights aren't theirs to turn.
For though the world may crave her grace,
Not all deserve to know her space.`
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
            I guess coders make good poets, welcome to the another side of me.
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
              I'm constantly writing and exploring new themes about the human experience, family, and the world around us.
            </p>
            <div className="bg-gray-900/50 border border-gray-700/30 rounded-lg p-4 font-mono text-sm text-left max-w-md mx-auto">
              <div className="text-gray-400">$ git log --oneline poetry/</div>
              <div className="text-gray-500 mt-2">
                a1b2c3d Added "Ico"<br/>
                d4e5f6g Updated "The Womb of Memory"<br/>
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
