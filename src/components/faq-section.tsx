import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { faqs } from "@/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-16 px-4 overflow-hidden bg-white">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,243,255,0) 0%, rgba(233,213,255,0.15) 50%, rgba(245,243,255,0) 100%)",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full -z-10 pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold pb-2 leading-tight font-spaceGrotesk"
          >
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #7c3aed, #a855f7, #c026d3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Questions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 mt-2 text-base font-normal max-w-2xl mx-auto"
          >
            Got questions about Startify 4.0? Find answers to the most common queries below.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`w-full rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? "border-[#7C3AED]/40 shadow-lg"
                    : "border-gray-200 hover:border-[#7C3AED]/30 shadow-sm"
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-all duration-300 select-none ${
                    isOpen ? "bg-[#7C3AED] text-white" : "bg-white text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Left Icon (Question Mark) */}
                    <div
                      className={`flex items-center justify-center p-2 rounded-full border shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "border-white/40 text-white"
                          : "border-[#7C3AED]/20 text-[#7C3AED] bg-[#7C3AED]/5"
                      }`}
                    >
                      <HelpCircle className="size-5" />
                    </div>

                    {/* Question Text */}
                    <span className="font-spaceGrotesk font-bold text-base sm:text-lg leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* Right Icon (Plus/Minus) */}
                  <div className="ml-4 shrink-0">
                    {isOpen ? (
                      <Minus className="size-5 text-white" />
                    ) : (
                      <Plus className="size-5 text-gray-400 group-hover:text-[#7C3AED] transition-colors" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="bg-white"
                    >
                      <div className="p-6 border-t border-gray-100 text-gray-600 font-spaceGrotesk text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
