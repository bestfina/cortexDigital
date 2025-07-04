"use client";

import { ABOUT_IN_NUMBERS, ADVANTAGES } from "@/constants";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";

const AboutInCount = () => {
  const t = useTranslations();
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex sm:flex-col justify-between gap-md xl:gap-sm w-full lg:gap-xxs">
      <div className="flex justify-between gap-md xl:gap-sm flex-wrap w-2/4 lg:w-3/12 sm:w-full sm:gap-xxs sm:gap-y-sm">
        {ABOUT_IN_NUMBERS.map(({ id, count, text, title }) => (
          <div
            key={id}
            className={twMerge(
              "flex flex-col justify-center font-bold w-[46%] lg:w-full sm:w-[47.5%]",
              id % 2 === 0 ? "items-end lg:items-start" : null
            )}
          >
            {id === 1 || id === 2 ? (
              <div className="text-6xl xxl:text-5xl lg:text-4xl md:text-3xl xs:text-2xl">
                {startCount ? (
                  <CountUp
                    className={twMerge("text-6xl xxl:text-5xl lg:text-4xl md:text-3xl xs:text-2xl")}
                    end={count}
                    duration={2}
                  />
                ) : (
                  "0"
                )}
                {t(title)}
              </div>
            ) : (
              <div className="text-6xl xxl:text-5xl lg:text-4xl md:text-3xl xs:text-2xl">
                {t(title)}
                {startCount ? (
                  <CountUp
                    className="text-6xl xxl:text-5xl lg:text-4xl md:text-3xl xs:text-2xl"
                    end={count}
                    duration={2}
                  />
                ) : (
                  "0"
                )}
              </div>
            )}
            <div className="xxl:text-base lg:text-sm md:text-xs xs:text-[10.9px]">{t(text)}</div>
          </div>
        ))}
      </div>
      <div className="bg-black w-px flex sm:w-full sm:h-px"></div>
      <div className="flex justify-between flex-wrap gap-sm xl:gap-xs w-2/4 lg:w-9/12 sm:w-full">
        {ADVANTAGES.map(({ id, title, description, icon }) => (
          <div key={id} className="w-[48%] xxl:w-[47.8%] sm:w-[47%] x:w-full xl:text-base md:text-sm">
            <div className="lg:flex lg:items-center lg:gap-xxxs md:gap-xxxxs lg:mb-xxxxs x:gap-xxxs">
              <Image
                src={icon}
                alt=""
                width={60}
                height={60}
                loading="lazy"
                className="xxl:w-12 xxl:h-12 lg:w-9 lg:h-9"
              />
              <h5 className="my-xxxs lg:m-0">{t(title)}</h5>
            </div>
            <p>{t(description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutInCount;