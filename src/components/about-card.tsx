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
  boxShadow: "0 4px 32px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
  transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
};

const cardHovered: React.CSSProperties = {
  transform: "translateY(-8px) scale(1.025)",
  boxShadow: "0 0 40px rgba(124,58,237,0.5), 0 12px 40px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
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

  return (
    <div
      className="relative flex flex-col text-left p-6 rounded-3xl overflow-hidden h-full"
      style={{ ...cardBase, ...(hovered ? cardHovered : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Subtle grid overlay */}
      <Grid size={24} />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" }}
      />

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-white/85 leading-relaxed flex-1 mb-5">
        {description}
      </p>

      {/* Button */}
{/* Buttons */}
<div className="flex gap-3 w-full">

  {/* REGISTER or STAY TUNED */}
  {eventzgoUrl ? (
    <a
      href={eventzgoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-[#7C3AED] bg-white"
    >
      <ShoppingCart className="size-4" />
      {buttonText || "Register"}
      <ExternalLink className="size-3" />
    </a>
  ) : (
    <span className="flex-1 flex items-center justify-center py-2.5 px-4 rounded-xl text-sm font-semibold text-white border border-white/20 bg-white/5">
      {buttonText || "Stay Tuned"}
    </span>
  )}

  {/* VIEW BUTTON (ALL CARDS) */}
  <button
    className="flex-1 py-2.5 px-4 rounded-xl text-sm font-bold text-white border border-white/40 hover:bg-white/10 transition"
    onClick={() => onView(id)}   // 🔥 popup trigger
  >
    View Details
  </button>

</div>
    </div>
  );
}
