type ChatInputProps = {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
  loading: boolean;
};

const ChatInput = ({
  question,
  setQuestion,
  handleSend,
  loading,
}: ChatInputProps) => {
  return (
    <div className="border-t border-slate-800 p-5">
      <div className="max-w-5xl mx-auto flex gap-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything about this video..."
          disabled={loading}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              handleSend();
            }
          }}
          className="flex-1 bg-slate-800 rounded-xl px-5 py-4 outline-none text-white disabled:opacity-50"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className={`px-8 rounded-xl font-semibold transition ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;