import { useState } from "react";

import ChatHeader from "../../components/chat/ChatHeader";
import ChatMessages from "../../components/chat/ChatMessages";
import ChatInput from "../../components/chat/ChatInput";

import { askQuestion } from "../../services/api";

type Message = {
  sender: "ai" | "user";
  message: string;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      message:
        "Hello! I'm ready to answer questions about this YouTube video.",
    },
  ]);

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (question.trim() === "" || loading) return;

    const userQuestion = question;

    // Show user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: userQuestion,
      },
      {
        sender: "ai",
        message: "🤖 Thinking...",
      },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const data = await askQuestion(userQuestion);

      setMessages((prev) => {
        const updated = [...prev];
        updated.pop(); // Remove "Thinking..."
        updated.push({
          sender: "ai",
          message: data.answer,
        });
        return updated;
      });
    } catch (error) {
      setMessages((prev) => {
        const updated = [...prev];
        updated.pop(); // Remove "Thinking..."
        updated.push({
          sender: "ai",
          message: "❌ Something went wrong. Please try again.",
        });
        return updated;
      });

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <ChatHeader />

      <ChatMessages messages={messages} />

      <ChatInput
  question={question}
  setQuestion={setQuestion}
  handleSend={handleSend}
  loading={loading}
/>
    </div>
  );
};

export default Chat;