"use client";
import Image from "next/image";
import { ADVANTAGES } from "@/constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutAdvantages = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev === ADVANTAGES.length - 1 ? 0 : (prev ?? -1) + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-md xl:gap-sm md:gap-xs justify-between">
      {ADVANTAGES.map(({ id, icon, title, description }, index) => (
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={`border-2 border-AccentDark rounded-3xl p-sm sm:p-xxs w-[30.9%] lg:w-[48%] sm:w-full flex flex-col justify-between items-start
            ${activeIndex === index ? "bg-AccentDark text-TextLight" : ""} duration-500`}
          key={id}
        >
          <h5 className="mb-xxxxs">{title}</h5>
          <p>{description}</p>
          <Image src={icon} width={80} height={80} alt="Иконка преимущества" className="w-auto h-16 mt-xxxs" />
        </motion.div>
      ))}
    </div>
  );
};

export default AboutAdvantages;