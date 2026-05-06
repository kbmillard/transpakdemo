import Image from "next/image";

type TransPakLogoProps = {
  variant?: "full" | "mark";
  className?: string;
  priority?: boolean;
};

export function TransPakLogo({ variant = "full", className = "", priority }: TransPakLogoProps) {
  if (variant === "mark") {
    return (
      <Image
        src="/brand/mark.png"
        alt="TransPak"
        width={1024}
        height={1024}
        className={className || "h-10 w-auto object-contain"}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src="/brand/logo.png"
      alt="TransPak"
      width={2048}
      height={749}
      className={
        className || "h-8 w-auto max-w-[180px] object-contain sm:h-9 sm:max-w-[220px]"
      }
      priority={priority}
    />
  );
}
