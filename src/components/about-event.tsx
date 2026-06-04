import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AboutCard from "@/components/about-card";
import { events } from "@/data";
import { X, Sparkles, Route } from "lucide-react";

import { Dialog } from "@/components/ui/dialog";
import EventDetailsDialog from "@/components/event-detail";

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

const roadmapSteps = [
  "Click the Register Now button.",
  "You will be redirected to the EventzGo registration page.",
  "Click the + icon and select the required number of tickets.",
  "Click Proceed to Checkout.",
  "Fill in the contact details and all additional form fields.",
  "Click Proceed to Pay.",
  "Complete the payment process.",
  "Click Submit to finish your registration.",
];

const listedEvents = events;

export default function AboutEvent() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showEligibility, setShowEligibility] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);

  return (
    <section
      id="about"
      className="relative py-16 px-4 overflow-hidden"
    >
      {/* Subtle aurora background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,243,255,0) 0%, rgba(233,213,255,0.25) 40%, rgba(245,243,255,0) 100%)",
        }}
      />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full -z-10 pointer-events-none"
        animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168,85,247,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto flex flex-col items-center">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold pb-2 leading-tight">
            About{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #7c3aed, #a855f7, #c026d3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Startify 4.0
            </span>
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base font-semibold underline underline-offset-4 text-purple-700 border-none mb-2"
        >
          Why Startify 4.0?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="italic mt-1 lg:max-w-4xl mb-6 w-full text-center text-base font-normal text-gray-500"
        >
          Welcome to the Startify 4.0, where the future unfolds! Whether
          you&apos;re a seasoned entrepreneur, a curious newcomer, or a business
          leader looking to harness the power of networking, this event is
          designed to inspire, learn, and connect.
        </motion.p>

        {/* Action Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <button
            onClick={() => setShowEligibility(true)}
            className="group flex items-center justify-center gap-3 bg-white text-[#7C3AED] border border-[#7C3AED] hover:bg-[#7C3AED]/5 px-8 py-3 rounded-2xl font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full sm:w-auto"
          >
            <Sparkles className="size-5 text-[#7C3AED] transition-transform duration-300 group-hover:scale-110 shrink-0" />
            <span className="font-spaceGrotesk text-base font-semibold">View Eligibility Criteria</span>
          </button>

          <button
            onClick={() => setShowRoadmap(true)}
            className="group flex items-center justify-center gap-3 bg-white text-[#7C3AED] border border-[#7C3AED] hover:bg-[#7C3AED]/5 px-8 py-3 rounded-2xl font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full sm:w-auto"
          >
            <Route className="size-5 text-[#7C3AED] transition-transform duration-300 group-hover:scale-110 shrink-0" />
            <span className="font-spaceGrotesk text-base font-semibold">Registration Roadmap</span>
          </button>
        </motion.div>

        {/* Cards grid — showing all events */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl md:mx-auto gap-5 w-full">
          {listedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="h-full"
            >
              <AboutCard
                {...event}
                onView={(id) => {
                  const found = listedEvents.find((e) => e.id === id);
                  setSelectedEvent(found);
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        {selectedEvent && (
          <EventDetailsDialog
            {...selectedEvent}
            fullDetails={selectedEvent.fullDetails}
            prizeAmount="₹10 Lakhs"
            regFee="500"
            imageSrc="/startup.jpg"
            onApply={() => alert("Applied")}
          />
        )}
      </Dialog>

      {/* Eligibility Modal */}
      <AnimatePresence>
        {showEligibility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl border border-purple-100 flex flex-col"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#A855F7] px-8 py-6 flex-shrink-0">
                <button
                  onClick={() => setShowEligibility(false)}
                  className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-center">
                  <h2 className="text-3xl font-black text-white uppercase tracking-wider font-spaceGrotesk">
                    Eligibility Criteria
                  </h2>
                  <p className="text-pink-100 mt-1 text-sm tracking-widest font-spaceGrotesk uppercase">
                    Startify 4.0 Event Details
                  </p>
                </div>
              </div>

              {/* Table Body (Scrollable) */}
              <div className="p-6 bg-gray-50/50 overflow-y-auto flex-grow">
                <div className="border border-purple-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                  <table className="w-full border-collapse text-left text-sm font-spaceGrotesk">
                    <thead>
                      <tr className="bg-purple-50 text-[#5B21B6] border-b border-purple-100">
                        <th className="px-6 py-4 font-bold text-base w-1/3">
                          Event Name
                        </th>
                        <th className="px-6 py-4 font-bold text-base">
                          Who is Eligible?
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-50">
                      {eligibilityData.map((item, index) => (
                        <tr
                          key={index}
                          className="hover:bg-purple-50/30 transition-colors duration-200"
                        >
                          <td className="px-6 py-4 font-bold text-[#7C3AED] text-sm sm:text-base">
                            {item.event}
                          </td>
                          <td className="px-6 py-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            {item.eligible}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Registration Roadmap Modal */}
      <AnimatePresence>
        {showRoadmap && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl border border-purple-100 flex flex-col"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#A855F7] px-8 py-6 flex-shrink-0">
                <button
                  onClick={() => setShowRoadmap(false)}
                  className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-center">
                  <h2 className="text-3xl font-black text-white uppercase tracking-wider font-spaceGrotesk">
                    Registration Roadmap
                  </h2>
                  <p className="text-pink-100 mt-1 text-sm tracking-widest font-spaceGrotesk uppercase">
                    Step-by-Step Guidelines
                  </p>
                </div>
              </div>

              {/* Roadmap Content (Timeline style) */}
              <div className="p-8 bg-gray-50/50 overflow-y-auto flex-grow font-spaceGrotesk animate-popup">
                <div className="relative border-l-2 border-[#7C3AED]/20 ml-4 md:ml-6 pl-6 md:pl-8 space-y-6 py-2">
                  {roadmapSteps.map((stepText, index) => {
                    const boldStepText = stepText
                      .replace("Register Now", "<strong>Register Now</strong>")
                      .replace("EventzGo", "<strong>EventzGo</strong>")
                      .replace("+ icon", "<strong>+ icon</strong>")
                      .replace("Proceed to Checkout", "<strong>Proceed to Checkout</strong>")
                      .replace("Proceed to Pay", "<strong>Proceed to Pay</strong>")
                      .replace("Submit", "<strong>Submit</strong>");

                    return (
                      <div key={index} className="relative group">
                        {/* Timeline Circle Marker */}
                        <div className="absolute -left-[39px] md:-left-[47px] top-0.5 size-7 md:size-8 bg-white border-2 border-[#7C3AED] rounded-full flex items-center justify-center font-bold text-sm md:text-base text-[#7C3AED] shadow-sm transition-colors duration-300 group-hover:bg-[#7C3AED] group-hover:text-white">
                          {index + 1}
                        </div>

                        {/* Step content */}
                        <div className="bg-white p-4 rounded-xl border border-purple-100/50 shadow-sm hover:border-[#7C3AED]/30 transition-all duration-300">
                          <p
                            className="text-gray-700 text-sm md:text-base leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: boldStepText }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
