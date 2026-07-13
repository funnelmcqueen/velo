type BoltIconProps = {
  className?: string;
};

export default function BoltIcon({ className = "h-5 w-5" }: BoltIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role="img"
      aria-label="Lightning bolt"
    >
      <path d="M13.5 1 4 14h6l-1.5 9L20 10h-6l-.5-9z" />
    </svg>
  );
}
