import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ContactProps {
  className?: string;
  size?: string;
  atTop?: boolean;
}

const Contact = ({ className, size, atTop }: ContactProps) => {
  return (
    <div
      className={twMerge(
        "flex gap-xxs w-fit sm:flex-col sm:gap-xxxxs text-TextLight",
        atTop ? "text-TextLight" : "text-TextDark",
        className
      )}
    >
      <Link
        href="mailto:info@cortexdigital.net"
        className={twMerge("text-2xl lg:text-xl sm:text-lg xs:text-base", size)}
      >
        info@cortexdigital.net
      </Link>
      <Link href="tel:+7(995)020-33-85" className={twMerge("text-2xl lg:text-xl sm:text-lg xs:text-base", size)}>
        +7 (995) 020-33-85
      </Link>
    </div>
  );
};

export default Contact;
