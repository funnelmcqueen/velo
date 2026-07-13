type IconProps = {
  className?: string;
};

/** Heating — minimal flame in the site's icon style. */
export function FlameIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} role="img" aria-label="Heating">
      <path d="M12 2c.5 3.4-1.2 5.2-2.8 7C7.6 10.8 6 12.7 6 15.5 6 19.1 8.7 22 12 22s6-2.9 6-6.5c0-1.9-.8-3.4-1.7-4.9-.3-.5-1-.5-1.3 0-.3.6-.7 1.1-1.2 1.4.2-2.6-.6-5.2-1.8-7.2-.3-.6-.9-1.9-.9-2.8Zm1.5 13.1c.9 1 1.1 3.2-.6 4.3-1 .6-2.4.4-3.1-.5-1-1.3-.6-3 .4-3.9.6-.5 1.1-1.2 1.4-2 .7.7 1.3 1.4 1.9 2.1Z" />
    </svg>
  );
}

/** Cooling — six-point snowflake with ticks. */
export function SnowflakeIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className={className}
      role="img"
      aria-label="Cooling"
    >
      <path d="M12 3v18M12 3l-2.5 2.5M12 3l2.5 2.5M12 21l-2.5-2.5M12 21l2.5-2.5" />
      <path d="M4.2 7.5l15.6 9M4.2 7.5l3.4-.6M4.2 7.5l.6 3.4M19.8 16.5l-3.4.6M19.8 16.5l-.6-3.4" />
      <path d="M4.2 16.5l15.6-9M4.2 16.5l.6-3.4M4.2 16.5l3.4.6M19.8 7.5l-.6 3.4M19.8 7.5l-3.4-.6" />
    </svg>
  );
}
