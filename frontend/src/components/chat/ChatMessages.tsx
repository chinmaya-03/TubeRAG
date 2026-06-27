import MessageBubble from "./MessageBubble";

type Message = {
  sender: "ai" | "user";
  message: string;
};

type ChatMessagesProps = {
  messages: Message[];
};

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  return (
    <div className="flex-1 max-w-5xl mx-auto w-full p-6">
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          sender={msg.sender}
          message={msg.message}
        />
      ))}
    </div>
  );
};

export default ChatMessages;