import { motion } from "framer-motion";


export default function Beneficiaries() {
  const data = [
    { img: "/images/Curio Clothing.jpeg", company: "Curio Clothing", amount: "₹2,72,700" },
    { img: "/images/EdgeSphere.jpeg", company: "EdgeSphere", amount: "₹3,00,000" },
    { img: "/images/Learnsphere.jpeg", company: "Learnsphere", amount: "₹2,97,000" },
    { img: "/images/UPI_DIRECT.jpeg", company: "UPI.DIRECT", amount: "₹3,00,000" },
    { img: "/images/SafeSTride.jpeg", company: "SafeSTride", amount: "₹2,65,500" },
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
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

  {data.map((item, index) => (
    <motion.div
      key={index}
      className="relative w-full h-[300px] rounded-2xl p-[2px] bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 group"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.05 }}
      style={{ transformStyle: "preserve-3d" }}
    >

      {/* Card Inner */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">

        {/* Image */}
        <img
          src={item.img}
          alt={item.company}
          className="w-full h-full object-contain p-3 transition duration-500 group-hover:scale-110"
        />

        {/* Slide-up Content */}
        <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-md p-4 translate-y-full group-hover:translate-y-0 transition duration-300">

          <p className="text-xs text-white">Company</p>
          <h2 className="text-lg font-bold text-white">
            {item.company}
          </h2>

          <p className="text-xs text-gray-400 mt-2">Amount</p>
          <p className="text-lg font-semibold text-green-400">
            {item.amount}
          </p>

        </div>

      </div>

    </motion.div>
  ))}

</div>



    </div>

  );


}