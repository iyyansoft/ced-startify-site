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
        <h2 className="text-2xl font-semibold text-gray-900">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Startup Event Details
        </p>
      </div>

      {/* IMAGE */}
      {id === "startup-cafe" && (
        <div className="px-6 pt-4">
          <img
            src="/images/startifyposter.jpeg"
            alt={title}
            className="w-full h-124 object-cover rounded-xl"
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6">

        {/* DESCRIPTION */}
        <div className="space-y-4 text-sm leading-relaxed max-h-[320px] overflow-y-auto pr-2">

          {(fullDetails || "").split("\n").map((line, index) => {

            const cleanLine = line.trim();

            // STEP (🔹 Step)
            if (cleanLine.startsWith("🔹")) {
              return (
                <div
                  key={index}
                  className="bg-purple-50 border border-purple-200 px-4 py-2 rounded-lg text-purple-700 font-semibold shadow-sm"
                >
                  {cleanLine}
                </div>
              );
            }

            // SECTION TITLE (Process Flow / Startup cafe)
            if (
              cleanLine.toLowerCase().includes("process") ||
              cleanLine.toLowerCase().includes("startup cafe")
            ) {
              return (
                <h3
                  key={index}
                  className="text-base font-bold text-gray-800 mt-4 border-l-4 border-purple-500 pl-2"
                >
                  {cleanLine}
                </h3>
              );
            }

            // BULLET POINTS
            if (cleanLine.startsWith("•")) {
              return (
                <div key={index} className="flex items-start gap-2 ml-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <p className="text-gray-600">
                    {cleanLine.replace("•", "")}
                  </p>
                </div>
              );
            }

            // NOTE highlight
            if (cleanLine.toLowerCase().startsWith("note")) {
              return (
                <p
                  key={index}
                  className="bg-yellow-50 border border-yellow-200 px-3 py-2 rounded-md text-yellow-700 text-sm"
                >
                  ⚠️ {cleanLine}
                </p>
              );
            }

            // EMPTY LINE skip
            if (!cleanLine) return null;

            // NORMAL TEXT
            return (
              <p key={index} className="text-gray-700">
                {cleanLine}
              </p>
            );
          })}

        </div>


        <div className="flex flex-col items-center justify-center py-10 text-center">

          {/* ICON */}
          <div className="text-4xl mb-3">🚧</div>

          {/* HEADING */}
          <h3 className="text-lg font-semibold text-gray-800">
            Coming Soon
          </h3>

          {/* SUBTEXT */}
          <p className="text-gray-500 text-sm mt-1">
            Details for "{title}" will be updated soon.
          </p>

        </div>

        
        {/* INFO */}
        <div className="flex justify-between mt-5 text-sm text-gray-700">

          <p>
            <span className="font-medium">Prize:</span> {prizeAmount}
          </p>
          <p>
            <span className="font-medium">Fee:</span> ₹{regFee}
          </p>
        </div>

        {/* BUTTON */}
        {eventzgoUrl && (
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
