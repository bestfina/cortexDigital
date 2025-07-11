"use client";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  big?: boolean;
  atTop?: boolean;
  isOpen?: boolean;
  light?: boolean;
}

const Logo = ({ big = false, atTop, isOpen, light = false }: LogoProps) => {
  return (
    <Link href="/#hero" className={twMerge("flex flex-col items-center w-fit gap-[2px]")}>
      <Image
        src="/assets/images/logo.webp"
        alt="logo"
        width={50}
        height={50}
        priority
        className={twMerge("mb-px xxl:w-12 xl:w-10 lg:w-9", big ? "[&&]:w-14 xl:[&&]:w-12" : null)}
      />
      <div className="w-full">
        <div
          className={twMerge(
            "font-semibold xl:leading-4 xl:mt-[2px] xs:mt-1 xs:text-[15px] xs:leading-3",
            atTop ? "text-TextLight" : "text-TextDark",
            isOpen && "sm:text-TextDark duration-500",
            big
              ? "text-TextDark text-2xl [&&]:leading-5 [&&]:mt-2 xl:[&&]:text-xl xl:[&&]:mt-1 xl:[&&]:leading-4"
              : null,
            light && "text-white"
          )}
        >
          CortexDigital
        </div>
        <div
          className={twMerge(
            "text-TextLight text-sm tracking-[4px] text-center leading-[10px] xl:text-xs xs:text-[11px]",
            atTop ? "text-TextLight" : "text-TextDark",
            isOpen && "sm:text-TextDark duration-500",
            big ? "text-TextDark [&&]:text-lg xl:[&&]:text-base" : null,
            light && "text-white"
          )}
        >
          agency
        </div>
      </div>
    </Link>
  );
};

export default Logo;
