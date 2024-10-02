"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fontHeading } from "@/config/myFont";
import { cn } from "@/lib/utils";

const FlipNumber = ({ number }: { number: number }) => {
  return (
    <div className="relative h-14 w-10 sm:h-16 sm:w-12 md:h-20 md:w-16 lg:h-24 lg:w-20 bg-stone-200 text-stone-800 rounded-md overflow-hidden ">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={number}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"
          style={{ fontVariant: "small-caps" }}
        >
          {number}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function AncientWinterArcTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const startDate = new Date(now.getFullYear(), 9, 1);
      const endDate = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);

      const start = now < startDate ? startDate : now;

      const difference = endDate.getTime() - start.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={cn(
        fontHeading.className,
        "-tracking-tighter w-full max-w-5xl mx-auto px-4 py-8"
      )}
    >
      <div className="relative text-center p-4 sm:p-6 md:p-8 rounded-lg ">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div
                className="flex gap-1 sm:gap-2"
                aria-label={`${value} ${unit}`}
              >
                {String(value)
                  .padStart(2, "0")
                  .split("")
                  .map((digit, index) => (
                    <FlipNumber
                      key={`${unit}-${index}`}
                      number={parseInt(digit)}
                    />
                  ))}
              </div>
              <span
                className="text-sm sm:text-base md:text-lg capitalize mt-4 "
                style={{ fontVariant: "small-caps" }}
              >
                {unit}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <motion.p
            className="text-base sm:text-lg md:text-xl  pt-6 sm:pt-8 max-w-[400px] md:pt-10 text-center "
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Time to Change and get started for real
          </motion.p>
        </div>
      </div>
    </div>
  );
}
