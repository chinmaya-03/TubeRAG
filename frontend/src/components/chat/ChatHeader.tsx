const ChatHeader = () => {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-950 px-8 py-5">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-2xl font-bold text-red-500">
          🎥 TubeRAG Chat
        </h1>

        <p className="text-gray-400 mt-2">
          Ask anything about the YouTube video.
        </p>

      </div>
    </header>
  );
};

export default ChatHeader;