const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-6">
          About TubeRAG
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto leading-8">
          TubeRAG is an AI-powered YouTube Question Answering application built
          using Retrieval-Augmented Generation (RAG). Simply paste a YouTube
          video URL, analyze its transcript, and ask questions in natural
          language. The application retrieves relevant transcript chunks using
          semantic search and generates accurate answers with Google Gemini.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-14">

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-center">
            ⚛️
            <h3 className="mt-3 font-semibold">React</h3>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-center">
            ⚡
            <h3 className="mt-3 font-semibold">FastAPI</h3>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-center">
            🧠
            <h3 className="mt-3 font-semibold">LangChain</h3>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-center">
            💾
            <h3 className="mt-3 font-semibold">FAISS</h3>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-center">
            🤖
            <h3 className="mt-3 font-semibold">Gemini</h3>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-center">
            🎥
            <h3 className="mt-3 font-semibold">
              YouTube Transcript API
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;