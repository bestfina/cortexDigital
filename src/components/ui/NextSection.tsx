"use client";
import ArrowIcon from "./icon/ArrowIcon";

const NextSection = () => {
  const handleNextSectionClick = () => {
    const nextSection = document.getElementById("hero")?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="next-section-btn flex items-center gap-xs xl:gap-xxs md:hidden
   text-TextLight absolute bottom-sm xl:bottom-xs"
      onClick={handleNextSectionClick}
    >
      <span className="bg-BgLight w-12 h-12 rounded-full flex items-center justify-center xl:w-10 xl:h-10">
        <ArrowIcon className="text-TextDark bounce" />
      </span>
      Далее
    </button>
  );
};

export default NextSection;
