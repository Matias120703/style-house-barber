import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export function StyleHouseLogo({ size = 80, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Style House Barber Shop"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

export function StyleHouseLogoHorizontal({ height = 40, className = "" }: { height?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <StyleHouseLogo size={height} />
      <div className="flex flex-col leading-none">
        <span className="font-display text-white font-700 tracking-[0.18em] uppercase text-sm">
          Style House
        </span>
        <span className="text-white/40 text-[9px] tracking-[0.35em] uppercase mt-0.5">
          Barber Shop
        </span>
      </div>
    </div>
  );
}
