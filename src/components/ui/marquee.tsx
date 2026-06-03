"use client";

import { useState } from "react";
import { Sparkles, ArrowUpRight, X } from "lucide-react";

const eligibilityData = [
  {
    event: "Startup Cafe Prototyping Hackathon",
    eligible:
      "Students and alumni who graduated within the last 2 years with innovative tech based Ideas",
  },
  {
    event: "Pitch-X",
    eligible:
      "Open to anyone with an innovative business model idea (No technology required).",
  },
  {
    event: "Faculty Pitch",
    eligible: "Faculty with innovative tech based Ideas",
  },
  {
    event: "Social X – Innovation for Impact",
    eligible:
      "Open to anyone developing solutions for social challenges and community impact",
  },
  {
    event: "IP to IPO",
    eligible:
      "Individuals holding patents and aspiring to commercialize their IP through a startup venture",
  },
  {
    event: "Startup Mugavari",
    eligible:
      "Aspiring entrepreneurs who have initiated their startup journey but have not yet incorporated their venture as a Private Limited Company, Partnership Firm, or LLP",
  },
  {
    event: "Research-to-Startup",
    eligible: "Research scholars and Researchers",
  },
  {
    event: "Lab2Launch",
    eligible:
      "Faculty members and students with research, technology, or innovation-based ideas (Concepts that have been proven and tested in a laboratory environment)",
  },
  {
    event: "Kadai",
    eligible:
      "Students and faculty members with AI-enabled grassroots venture ideas",
  },
  {
    event: "Kutti Story",
    eligible:
      "Students aspiring to develop and showcase their storytelling abilities",
  },
  {
    event: "Industry Grand Challenge",
    eligible:
      "Startup aspirants and innovators without an existing startup idea; industry-defined problem statements will be provided",
  },
];

const MarqueeCard = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setOpen(true)}
      className="group flex items-center gap-6 px-10 py-2 shrink-0"
    >
      {/* Icon */}
      <div className="relative">

        <div className="absolute inset-0 bg-white/40 blur-xl rounded-full"></div>

        <div className="relative bg-white/15 border border-white/20 backdrop-blur-xl p-3 rounded-2xl">
          <Sparkles className="text-yellow-300 w-7 h-7 animate-pulse" />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-start">

        <h1
          className="text-xl md:text-4xl font-black uppercase tracking-[4px] text-white whitespace-nowrap"
          style={{
            textShadow: "0px 0px 20px rgba(255,255,255,0.5)",
          }}
        >
          ELIGIBILITY CRITERIA
        </h1>

        <p className="text-pink-100 tracking-[5px] text-sm font-semibold mt-1 whitespace-nowrap">
          STARTIFY 4.0 EVENTS
        </p>
      </div>

      {/* Explore */}
      <div className="flex items-center gap-2 bg-white text-[#7C3AED] px-6 py-3 rounded-full font-black shadow-2xl whitespace-nowrap group-hover:scale-110 transition duration-300">

        <span>Explore</span>

        <ArrowUpRight className="w-5 h-5" />
      </div>
    </button>
  );
};

const Marquee = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MARQUEE */}
      <div className="relative overflow-hidden rounded-[32px] mb-12 shadow-2xl">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#A855F7]" />

        {/* Glow */}
        <div className="absolute -top-20 left-10 w-72 h-72 bg-pink-400/30 blur-3xl rounded-full animate-pulse"></div>

        {/* MARQUEE TRACK */}
        <div className="flex w-max animate-marquee">

          <MarqueeCard setOpen={setOpen} />
          <MarqueeCard setOpen={setOpen} />
          <MarqueeCard setOpen={setOpen} />

        </div>
      </div>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">

          <div className="relative w-full max-w-7xl max-h-[92vh] overflow-y-auto rounded-[35px] bg-white shadow-[0_0_60px_rgba(168,85,247,0.45)] border-[3px] border-[#7C3AED]">

            {/* HEADER */}
            <div className="relative bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#A855F7] px-8 py-8 rounded-t-[32px]">

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 bg-white text-[#7C3AED] p-3 rounded-full hover:scale-110 transition"
              >
                <X className="w-6 h-6" />
              </button>

              {/* TITLE */}
              <div className="text-center">

                <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-[5px]">
                  Eligibility Criteria
                </h1>

                <p className="text-pink-100 mt-3 tracking-[3px]">
                  STARTIFY 4.0 EVENT DETAILS
                </p>
              </div>
            </div>

            {/* TABLE */}
            <div className="p-6 bg-[#f8f5ff] overflow-x-auto">

              <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-xl">

                <thead>

                  <tr className="bg-gradient-to-r from-[#5B21B6] to-[#A855F7] text-white">

                    <th className="border border-purple-300 px-6 py-5 text-left text-xl font-black">
                      Event Name
                    </th>

                    <th className="border border-purple-300 px-6 py-5 text-left text-xl font-black">
                      Who is Eligible?
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {eligibilityData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-purple-100 transition duration-300"
                    >

                      <td className="border border-purple-300 px-6 py-5 font-black text-[#5B21B6] text-lg bg-white">
                        {item.event}
                      </td>

                      <td className="border border-purple-300 px-6 py-5 text-gray-700 text-lg leading-relaxed bg-white">
                        {item.eligible}
                      </td>

                    </tr>
                  ))}

                </tbody>
              </table>

            </div>
          </div>
        </div>
      )}

      {/* STYLE */}
      <style>
        {`
          .animate-marquee {
            animation: marquee 10s linear infinite;
          }

          @keyframes marquee {

            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-33.33%);
            }

          }
        `}
      </style>
    </>
  );
};

export default Marquee;