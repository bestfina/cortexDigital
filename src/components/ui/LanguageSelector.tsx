import { useState, useEffect, FC, SVGProps } from "react";
import { TLocales } from "@/types";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales } from "@/constants";
import EnglishIcon from "public/assets/icons/uk_rounded_icon.svg?svg";
import RussiaIcon from "public/assets/icons/russia_rounded_icon.svg?svg";
import clsx from "clsx";

type Props = {
  className?: string;
  locale: TLocales;
  fullWidth?: boolean;
};

const LOCALES_MAP = {
  en: "English",
  ru: "Русский",
};

const LanguageSelector: FC<Props> = ({ className, locale, fullWidth }) => {
  // const [currentLanguage, setCurrentLanguage] = useState(LOCALES_MAP[locale]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: TLocales) => {
    if (!LOCALES_MAP[lang]) return;

    // setCurrentLanguage(LOCALES_MAP[lang]);
    setIsOpen(false);

    router.replace({ pathname }, { locale: lang });
  };

  const languageProps: SVGProps<SVGElement> = { width: 30, height: 30 };

  return (
    <div className={clsx("relative inline-block text-left", className, fullWidth ? "w-full" : "w-auto")}>
      <button
        onClick={toggleDropdown}
        className={clsx(
          "flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 rounded-full shadow-[0_0_8px_3px_rgb(0_0_0_/_0.2);] transition-all duration-300",
          fullWidth ? "w-full" : "w-auto"
        )}
      >
        {locale === "ru" ? (
          <RussiaIcon className="xl:w-6 xl:h-6" {...languageProps} />
        ) : (
          <EnglishIcon className="xl:w-6 xl:h-6" {...languageProps} />
        )}
        {/* <span>{currentLanguage}</span> */}
      </button>

      {isOpen && (
        <div className="absolute mt-4 rounded-md shadow-lg bg-white border border-black origin-top-right -right-8 z-10 animate-fadeIn">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {locales.map(lang => {
              return (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  disabled={locale === lang}
                  className={`${"text-gray-700"} flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-300 transition-colors duration-200`}
                  role="menuitem"
                >
                  {LOCALES_MAP[lang]}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector;
