"use client";
import { LINK } from "@/constants";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface NavbarProps {
  className?: string;
  atTop?: boolean;
  classNameList?: string;
  classNameItem?: string;
  onClick?: () => void;
}

const Navbar = ({ className, classNameList, atTop, onClick, classNameItem }: NavbarProps) => {
  return (
    <nav className={className}>
      <ul className={twMerge("flex gap-md lg:gap-sm", classNameList)}>
        {LINK.map(({ title, id, url }) => (
          <li key={id} className="hover:-translate-y-[6px] md:hover:translate-y-0 duration-500">
            <Link
              href={url}
              className={twMerge(classNameItem, atTop ? "text-TextLight" : "text-TextDark")}
              onClick={() => {
                if (onClick) {
                  onClick();
                }
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
