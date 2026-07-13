import Image from "next/image";
import logo from "@/public/logo.png";

type LogoProps = {
  className?: string;
};

/**
 * FunnelMcQueen logo (exported from Canva). White wordmark + red/gold bolt on
 * a transparent background — designed for dark surfaces like the site's
 * charcoal base.
 */
export default function Logo({ className = "h-7 w-auto" }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="FunnelMcQueen"
      className={`inline-block ${className}`}
      priority
    />
  );
}
