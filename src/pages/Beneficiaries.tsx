import { motion } from "framer-motion";


export default function Beneficiaries() {
  const data = [
    { img: "/images/Curio Clothing.jpeg", company: "Curio Clothing", amount: "₹2,72,700" },
    { img: "/images/EdgeSphere.jpeg", company: "EdgeSphere", amount: "₹3,00,000" },
    { img: "/images/Learnsphere.jpeg", company: "Learnsphere", amount: "₹2,97,000" },
    { img: "/images/Grainforge.jpeg", company: "Grainforge Technologies", amount: "₹3,00,000" },
    { img: "/images/Niya Therapy.jpeg", company: "Niya Therapy", amount: "₹3,00,000" },
    { img: "/images/CEG Motorsports.jpeg", company: "CEG Motorsports", amount: "₹2,97,000" },
    { img: "/images/Neurotronix.jpeg", company: "Neurotronix", amount: "₹3,00,000" },
    { img: "/images/Vision Solve.jpeg", company: "Vision Solve", amount: "₹3,00,000" },
    { img: "/images/AQUAHOLICS.jpeg", company: "Aquaholics", amount: "₹3,00,000" },
    { img: "/images/Indyarn.jpeg", company: "Indyarn", amount: "₹3,00,000" },
    { img: "/images/8 bix 2.jpeg", company: "8 Bix 2", amount: "₹2,97,000" },
    { img: "/images/AnimalTradeX.jpeg", company: "AnimalTradeX", amount: "₹3,00,000" },
    { img: "/images/VitaSafe.jpg", company: "VitaSafe", amount: "₹3,00,000" },
    { img: "/images/SafeSTride.jpeg", company: "SafeSTride", amount: "₹2,65,500" },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black px-6 py-12 pb-32 text-white">

      {/* Heading */}
      <motion.div
        className="text-center mt-32 mb-20"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Word 1 */}
        <motion.span
          className="text-4xl md:text-5xl font-extrabold text-purple-400 inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          3.0
        </motion.span>

        {/* Word 2 */}
        <motion.span
          className="text-4xl md:text-5xl font-extrabold text-white inline-block"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Beneficiaries
        </motion.span>

        {/* Glow Line */}
        <motion.div
          className="h-1 w-28 mx-auto mt-4 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7]"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {data.map((item, index) => (
          <div key={index} className="relative w-full h-[350px] group">

            {/* Back Layer 1 */}
            <div className="absolute inset-0 bg-purple-500 rounded-xl rotate-6 scale-95 opacity-40 group-hover:rotate-3 transition duration-300"></div>

            {/* Back Layer 2 */}
            <div className="absolute inset-0 bg-pink-500 rounded-xl -rotate-6 scale-95 opacity-40 group-hover:-rotate-3 transition duration-300"></div>

            {/* Main Card */}
            <motion.div
              className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.08, y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >

              {/* Image */}
              <img
                src={item.img}
                alt={item.company}
                className="w-full h-full object-cover"
              />

              {/* Hover Content */}
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition duration-300">

                <p className="text-sm text-gray-300">Company:</p>
                <h2 className="text-xl font-bold text-white">
                  {item.company}
                </h2>

                <p className="text-sm text-gray-300 mt-2">Amount:</p>
                <h3 className="text-lg font-semibold text-green-400">
                  {item.amount}
                </h3>

              </div>

            </motion.div>

          </div>
        ))}


      </div>



    </div>

  );


}