import React, {
  useState,
  useRef,
  useEffect,
  FormEvent,
  ChangeEvent,
} from "react";
import ReactMarkdown from "react-markdown";
import "./ChatWidget.css";

type Message = {
  role: "user" | "bot";
  content: string;
};

const BotIcon: React.FC = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Welcome to Startify 4.0! How can I help you with registration or event details?",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = (): void => setIsOpen((prev) => !prev);

  const handleSendMessage = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://ganeshsprofessional-austartify-rag-backend.hf.space/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage }),
        },
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data: { reply: string } = await response.json();

      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Sorry, I encountered an error connecting to the server.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <div className={`chat-widget-container ${isOpen ? "open" : ""}`}>
      <button
        className="chat-bot-icon"
        onClick={toggleChat}
        aria-label="Open Chat"
      >
        <BotIcon />
      </button>

      <div className="chat-widget">
        <header className="chat-header">
          <div className="header-pill">
            <div className="logo-placeholder">
              <span className="logo-icon">🌿</span>
              <span className="logo-text">
                <span className="logo-text-p1">Startify</span>
                <span className="logo-text-p2">4.0</span>
              </span>
            </div>
            <button className="close-button" onClick={toggleChat}>
              Close
            </button>
          </div>
        </header>

        <div className="messages-window">
          {messages.map((msg, index) => (
            <div key={index} className={`message-bubble ${msg.role}`}>
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          ))}

          {isLoading && (
            <div className="message-bubble bot typing-indicator">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form className="input-area" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !input.trim()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWidget;