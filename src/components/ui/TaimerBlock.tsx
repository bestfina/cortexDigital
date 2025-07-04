"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Image from "next/image";

const SECONDS_IN_A_DAY = 86400;
const SECONDS_IN_AN_HOUR = 3600;
const SECONDS_IN_A_MINUTE = 60;

interface TaimerBlockProps {
  className?: string;
  title?: string;
  textBtn?: string;
}

const TaimerBlock = ({ className, title, textBtn }: TaimerBlockProps) => {
  const t = useTranslations("main.forma.timer");

  const calculateTimeLeft = () => {
    const now = new Date();
    const nextYear = now.getFullYear();
    const newYear = new Date(`February 23, ${nextYear} 00:00:00`).getTime();
    const currentTime = now.getTime();
    return Math.max(0, Math.floor((newYear - currentTime) / 1000));
  };

  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const days = Math.floor(totalSeconds / SECONDS_IN_A_DAY);
    const hours = Math.floor((totalSeconds % SECONDS_IN_A_DAY) / SECONDS_IN_AN_HOUR);
    const minutes = Math.floor((totalSeconds % SECONDS_IN_AN_HOUR) / SECONDS_IN_A_MINUTE);
    const seconds = totalSeconds % SECONDS_IN_A_MINUTE;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } =
    timeLeft !== null ? formatTime(timeLeft) : { days: "--", hours: "--", minutes: "--", seconds: "--" };

  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={twMerge(
        `flex flex-col px-xs w-2/5 lg:w-[45%] md:w-full h-fit gap-sm xl:gap-xs lg:gap-xxs md:gap-xxs
         items-center py-12 xl:py-[18px] xl:px-10 md:p-3 text-TextLight bg-white/25 backdrop-blur-sm rounded-3xl`,
        className
      )}
    >
      <div className="flex flex-col items-center gap-3 xxl:gap-2 xs:gap-xxxxs">
        <Image
          src="/assets/icons/snowflake.svg"
          alt={t("snowflake_alt")}
          width={50}
          height={50}
          loading="eager"
          className="sm:w-10 sm:h-10"
        />
        <h6 className="font-semibold text-center text-3xl xl:text-2xl md:text-xl x:text-lg">
          {title || t("title")}
        </h6>
      </div>
      <div
        className="flex items-center gap-sm xl:gap-xs md:gap-xxs sm:gap-3 text-center text-TextLight timer-text"
        style={{ minHeight: "40px" }}
      >
        <div className="timer-text">
          {days} <div>{t("days")}</div>
        </div>
        :
        <div className="timer-text">
          {hours} <div>{t("hours")}</div>
        </div>
        :
        <div className="timer-text">
          {minutes} <div>{t("minutes")}</div>
        </div>
        :
        <div className="timer-text">
          {seconds} <div>{t("seconds")}</div>
        </div>
      </div>
      <Button type="blue" className="x:w-full btn-grow">
        {textBtn || t("button")}
      </Button>
    </motion.div>
  );
};

export default TaimerBlock;