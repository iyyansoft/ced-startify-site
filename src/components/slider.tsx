import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img12.jpg",
  "/images/img13.jpg",
  "/images/img14.jpg",
  "/images/img15.jpg",
  "/images/img16.jpg",
  "/images/img17.jpg",
  "/images/img18.jpg",
  "/images/img19.jpg",
  "/images/img20.jpg",
  "/images/img21.jpg",
  "/images/img22.jpg",
  "/images/img23.jpg",
  "/images/img24.jpg",
  "/images/img7.jpg",

];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // 🔁 auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 🖱️ mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setPos({
      x: (clientX - window.innerWidth / 2) / 40,
      y: (clientY - window.innerHeight / 2) / 40,
    });
  };

  return (
    <div
      className="relative w-full h-[350px] overflow-hidden rounded-2xl"
      onMouseMove={handleMouseMove}
    >

      {/* 🔥 BACKGROUND IMAGE */}
<>
  {/* 🔥 BLUR BACKGROUND */}
  <motion.img
    key={index + "bg"}
    src={images[index]}
    className="absolute w-full h-full object-cover object-center"
  />

  {/* 🔥 MAIN IMAGE */}
 <motion.img
  key={index}
  src={images[index]}
  className="absolute w-full h-full object-contain"
  animate={{
    x: pos.x,
    y: pos.y,
    scale: 1.1,
  }}
    transition={{
    duration: 0.2, // smaller = faster
    ease: "easeOut",
  }}
/>
</>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 🔥 CONTENT */}
      <div className="absolute bottom-6 left-6 text-white">
        <h2 className="text-2xl font-bold">Startify 3.0</h2>
  
      </div>

    </div>
  );
}