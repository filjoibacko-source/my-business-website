"use client";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
};

export default function Button({ children, onClick, href, className = "" }: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-md font-semibold transition-colors duration-300 ease-in-out";
  const defaultStyles =
    "bg-yellow-500 text-black hover:bg-yellow-400";

  const finalClass = `${baseStyles} ${defaultStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={finalClass}>
      {children}
    </button>
  );
}