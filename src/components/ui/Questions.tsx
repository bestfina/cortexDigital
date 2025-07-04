"use client";
import { useTranslations } from "next-intl";
import { FAQ } from "@/constants";
import { useState } from "react";
import InnerIcon from "../ui/InnerIcon";
import { twMerge } from "tailwind-merge";

const Questions = () => {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-xs md:gap-xxs">
      {FAQ.map(({ id, title, description }) => (
        <div key={id} className="border border-black rounded-3xl shadow-sm">
          <div
            onClick={() => toggleAccordion(id)}
            className="w-full cursor-pointer flex gap-xxxxs justify-between items-center p-4 md:p-3 text-left text-TextLight font-medium"
          >
            <h5 className="w-fit text-TextDark">{t(title)}</h5>
            <InnerIcon className={activeIndex === id ? "bg-black pb-[2px]" : "bg-black/80 hover:bg-black"}>
              {activeIndex === id ? "-" : "+"}
            </InnerIcon>
          </div>
          <div
            className={`overflow-x-hidden faq-rewiew rounded-b-[22px] duration-500 ${
              activeIndex === id ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className={twMerge("border-t border-black", activeIndex !== id ? "border-0 duration-100" : null)}>
              {description.map(({ subject, text }, index) => (
                <p key={index} className="px-4 py-2 first:pt-4 last:pb-4 text-TextDark">
                  {subject && <b>{t(subject)}</b>}
                  {t(text)}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;