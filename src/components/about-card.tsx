import { useState } from "react";
import { ExternalLink, ShoppingCart } from "lucide-react";
import Grid from "@/components/grid-bg";

interface AboutCardProps {
  id: string;
  title: string;
  description: string;
  eventzgoUrl?: string;
  buttonText?: string;
  onView: (id: string) => void;
}

const cardBase: React.CSSProperties = {
  background: "#7C3AED",
  backdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.18)",
  boxShadow:
    "0 4px 32px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
  transition:
    "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
};

const cardHovered: React.CSSProperties = {
  transform: "translateY(-8px) scale(1.025)",
  boxShadow:
    "0 0 40px rgba(124,58,237,0.5), 0 12px 40px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
  borderColor: "rgba(255,255,255,0.4)",
};

export default function AboutCard({
  id,
  title,
  description,
  eventzgoUrl,
  buttonText,
  onView,
}: AboutCardProps) {
  const [hovered, setHovered] = useState(false);
  const [showCompanyPopup, setShowCompanyPopup] = useState(false);
const [message, setMessage] = useState("");
const [isRejected, setIsRejected] = useState(false);

  return (
    <>
      <div
        className="relative flex flex-col text-left p-6 rounded-3xl h-full overflow-visible"
        style={{ ...cardBase, ...(hovered ? cardHovered : {}) }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Grid size={24} />

        <div
          className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          }}
        />

        <h3 className="text-xl font-bold text-white mb-3 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-white/85 leading-relaxed flex-1 mb-5">
          {description}
        </p>

        <div className="flex gap-3 w-full">
          {eventzgoUrl ? (
            <button
              onClick={() => {
                if (id === "startup-mughavari") {
  setMessage("");
  setIsRejected(false);
  setShowCompanyPopup(true);
} else {
                  window.open(eventzgoUrl, "_blank");
                }
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-[#7C3AED] bg-white"
            >
              <ShoppingCart className="size-4" />
              {buttonText || "Register"}
              <ExternalLink className="size-3" />
            </button>
          ) : (
            <span className="flex-1 flex items-center justify-center py-2.5 px-4 rounded-xl text-sm font-semibold text-white border border-white/20 bg-white/5">
              {buttonText || "Stay Tuned"}
            </span>
          )}

          <button
            className="flex-1 py-2.5 px-4 rounded-xl text-sm font-bold text-white border border-white/40 hover:bg-white/10 transition"
            onClick={() => onView(id)}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Popup */}
      {showCompanyPopup && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="relative bg-white rounded-[30px] shadow-2xl w-[90%] max-w-xl p-8">

            <button
             onClick={() => {
  setShowCompanyPopup(false);
  setMessage("");
  setIsRejected(false);
}}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
            >
              ✕
            </button>

            <div className="flex justify-center mb-5">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-4xl">
                🏢
              </div>
            </div>

            <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
              Incorporated Company?
            </h2>

            <p className="text-center text-lg text-gray-600 mb-8">
              Is your startup already incorporated?
            </p>

            <div className="flex justify-center gap-4">
              <button
                className="px-8 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold"
onClick={() => {
  setMessage(
    "This event is only for new companies yet to be incorporated."
  );
  setIsRejected(true);
}}
              >
                Yes
              </button>

<button
  disabled={isRejected}
  className={`px-8 py-3 rounded-xl text-white font-semibold transition ${
    isRejected
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-purple-600 hover:bg-purple-700"
  }`}
  onClick={() => {
    if (isRejected) return;

    window.open(
      "https://www.eventzgo.com/events/j57bq65wzwcb1gpaj9tfzvfbw5826wqt",
      "_blank"
    );

    setShowCompanyPopup(false);
    setMessage("");
    setIsRejected(false);
  }}
>
  No
</button>
            </div>

            {message && (
              <div className="mt-6 rounded-xl bg-yellow-50 border border-yellow-300 p-4">
                <p className="text-center text-yellow-800 font-medium">
                  {message}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}