const Features = () => {
  return (
    <section
  id="features"
  className="bg-slate-950 text-white py-20 px-10"
>
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose TubeRAG?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-red-500 transition">
          <div className="text-5xl mb-4">🧠</div>
          <h3 className="text-xl font-semibold mb-2">AI Chat</h3>
          <p className="text-gray-400">
            Ask questions about any YouTube video.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-red-500 transition">
          <div className="text-5xl mb-4">📜</div>
          <h3 className="text-xl font-semibold mb-2">History</h3>
          <p className="text-gray-400">
            Access all your previous conversations.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-red-500 transition">
          <div className="text-5xl mb-4">💾</div>
          <h3 className="text-xl font-semibold mb-2">Memory</h3>
          <p className="text-gray-400">
            Continue conversations naturally with context.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-red-500 transition">
          <div className="text-5xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Fast Search</h3>
          <p className="text-gray-400">
            Semantic search powered by vector embeddings.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;