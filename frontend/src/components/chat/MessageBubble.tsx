type MessageBubbleProps = {
  sender: "ai" | "user";
  message: string;
};

const MessageBubble = ({ sender, message }: MessageBubbleProps) => {
  const isUser = sender === "user";

  return (
    <div
      className={`flex mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`w-fit max-w-[70%] px-5 py-3 rounded-2xl break-words ${
          isUser
            ? "bg-red-600 text-white"
            : "bg-slate-800 text-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default MessageBubble;