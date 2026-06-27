import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeVideo } from "../../services/api";

const Hero = () => {
  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    setError("");

    if (!url.trim()) {
      setError("Please enter a YouTube URL.");
      return;
    }

    setLoading(true);

    try {
      const data = await analyzeVideo(url);

      console.log(data);

      navigate("/chat");
    } catch (error) {
      console.error(error);
      setError("Failed to connect to the backend. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white flex items-center justify-center py-28">
      <div className="text-center max-w-3xl px-6">

        <div className="inline-block px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 mb-6">
          🎥 AI Powered YouTube Assistant
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Understand Any
          <br />
          <span className="text-red-500">
            YouTube Video
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          Ask questions. Get instant answers.
        </p>

        <div className="mt-10 flex gap-3 justify-center">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube URL..."
            className="w-[500px] px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none"
            disabled={loading}
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className={`px-6 rounded-xl font-semibold transition ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading ? "⏳ Analyzing..." : "Analyze Video"}
          </button>
        </div>

        {loading && (
          <p className="mt-5 text-gray-400 animate-pulse">
            ⏳ Analyzing video... This may take a few seconds.
          </p>
        )}

        {error && (
          <p className="mt-5 text-red-400 font-medium">
            ❌ {error}
          </p>
        )}

      </div>
    </div>
  );
};

export default Hero;