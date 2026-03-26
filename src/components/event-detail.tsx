import { DialogContent } from "@/components/ui/dialog";


interface EventDetailsProps {
  id: string;
  title: string;
  description: string;
  prizeAmount: string;
  regFee: string;
  imageSrc: string;
  onApply: () => void;
  eventzgoUrl?: string;
  fullDetails: string;
}

export default function EventDetailsDialog({
  id,
  title,

  prizeAmount,
  regFee,

  eventzgoUrl,
  fullDetails,
}: EventDetailsProps) {
  return (
    <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-0 border-0 bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]">

      {/* HEADER */}
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-3xl font-extrabold mb-1">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>

        <p className="text-sm text-gray-500 tracking-wide">
          ✨ Startup Event Details
        </p>
      </div>

      {/* IMAGE (ONLY FIRST CARD) */}
      {id === "startup-cafe" && (
        <div className="px-6 pt-4">
          <img
            src="/images/startifyposter.jpeg"
            alt={title}
            className="w-screen h-[1000px] object-cover rounded-xl"
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6">

        {/* ✅ CONDITION START */}
        {fullDetails && fullDetails.trim().length > 0 ? (

          <div className="space-y-6 max-h-[320px] overflow-y-auto pr-2">

            {(fullDetails || "").split("\n").map((line, index) => {

              const cleanLine = line.trim();

              // STEP CARD
              if (cleanLine.startsWith("🔹")) {
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 px-5 py-3 rounded-xl shadow-sm"
                  >
                    <h4 className="text-purple-700 font-semibold flex items-center gap-2">
                      <span className="text-lg">🚀</span>
                      {cleanLine.replace("🔹", "")}
                    </h4>
                  </div>
                );
              }

              // SECTION TITLE
              if (
                cleanLine.toLowerCase().includes("process") ||
                cleanLine.toLowerCase().includes("startup cafe")
              ) {
                return (
                  <h3
                    key={index}
                    className="text-base font-bold text-gray-800 border-l-4 border-purple-500 pl-3"
                  >
                    {cleanLine}
                  </h3>
                );
              }

              // BULLET LIST (UPGRADED)
              if (cleanLine.startsWith("•")) {
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                    <p className="text-gray-700">{cleanLine.replace("•", "")}</p>
                  </div>
                );
              }

              // NOTE BOX
              if (cleanLine.toLowerCase().startsWith("note")) {
                return (
                  <div
                    key={index}
                    className="bg-yellow-50 border-l-4 border-yellow-400 px-4 py-3 rounded-md text-yellow-800"
                  >
                    ⚠️ {cleanLine}
                  </div>
                );
              }

              if (!cleanLine) return null;

              // NORMAL TEXT
              return (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {cleanLine}
                </p>
              );
            })}

          </div>

        ) : (

          /* 🚧 COMING SOON */
          <div className="flex flex-col items-center justify-center py-10 text-center bg-gray-50 border border-gray-200 rounded-xl">
            <div className="text-4xl mb-3">🚧</div>
            <h3 className="text-lg font-semibold text-gray-800">
              Coming Soon
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Details for "{title}" will be updated soon.
            </p>
          </div>

        )}
        {/* ✅ CONDITION END */}

        {/* INFO */}
        <div className="mt-6 flex items-center justify-between relative">

          {/* LINE */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-purple-300 to-pink-300 -z-10"></div>

          {/* FEE */}
          <div className="flex flex-col items-center bg-white px-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 font-bold shadow">
              💰
            </div>
            <p className="text-xs text-gray-500 mt-2">Fee</p>
            <p className="font-semibold text-pink-600">₹{regFee}</p>
          </div>

          {/* PRIZE */}
          <div className="flex flex-col items-center bg-white px-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold shadow">
              🏆
            </div>
            <p className="text-xs text-gray-500 mt-2">Prize</p>
            <p className="font-semibold text-purple-700">{prizeAmount}</p>
          </div>



        </div>

        {/* BUTTON */}
        {eventzgoUrl && id === "startup-cafe" && (
          <button
            className="w-full mt-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #7c3aed, #a855f7)",
            }}
            onClick={() => window.open(eventzgoUrl, "_blank")}
          >
            Register Now
          </button>
        )}

      </div>

    </DialogContent>
  );
}
