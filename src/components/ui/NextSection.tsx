"use client";
import smoothFn from "@/lib/smoothFn";
import ArrowIcon from "./icon/ArrowIcon";

const NextSection = () => {
  const handleNextSectionClick = () => {
    const nextSection = document.getElementById("hero")?.nextElementSibling;
    if (nextSection?.id) {
      smoothFn(nextSection.id);
    } else {
      console.error("Следующий раздел или его ID не найдены.");
    }
  };

  return (
    <button
      className="next-section-btn flex items-center gap-xs xl:gap-xxs md:hidden
   text-TextLight absolute bottom-sm xl:bottom-xs"
      onClick={handleNextSectionClick}
    >
      <div className="bg-BgLight w-12 h-12 rounded-full flex items-center justify-center xl:w-10 xl:h-10">
        <ArrowIcon className="text-TextDark bounce" />
      </div>
      Далее
    </button>
  );
};

export default NextSection;