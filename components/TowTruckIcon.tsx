type TowTruckIconProps = {
  className?: string;
};

/**
 * Hitch — the FunnelMcQueen tow-truck mascot, drawn as a front-facing
 * portrait smiling at the visitor. Big sincere eyes (on the hood — NOT in
 * the windshield, that look belongs to Pixar), open grin, blush cheeks,
 * blinking via SMIL, swinging gold hook over the shoulder, pinging beacon.
 * Original artwork in brand colors.
 */
export default function TowTruckIcon({ className = "h-8 w-8" }: TowTruckIconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      className={className}
      role="img"
      aria-label="Hitch the tow truck smiling"
    >
      {/* ground shadow */}
      <ellipse cx="48" cy="90" rx="32" ry="3.5" fill="#000" opacity="0.35" />

      {/* everything above idles with a soft bob */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -1.4; 0 0"
          dur="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
        />

        {/* tow boom over the shoulder */}
        <path d="M70 32 C76 24 80 19 85 14" stroke="#F4B400" strokeWidth="5" strokeLinecap="round" />
        {/* swinging cable + hook */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-8 85 14; 8 85 14; -8 85 14"
            dur="2.8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
          />
          <path d="M85 14 v7" stroke="#F4B400" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M85 21 a5 5 0 1 1 -8.6 3.4"
            stroke="#F4B400"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* side mirrors */}
        <path d="M18 40 L11 37" stroke="#E10600" strokeWidth="3" strokeLinecap="round" />
        <path d="M78 40 L85 37" stroke="#E10600" strokeWidth="3" strokeLinecap="round" />
        <rect x="6" y="31" width="7" height="9" rx="2.5" fill="#B8BCC2" />
        <rect x="83" y="31" width="7" height="9" rx="2.5" fill="#B8BCC2" />

        {/* cab body */}
        <rect x="16" y="28" width="64" height="48" rx="12" fill="#E10600" />
        {/* roof highlight + lower shade for depth */}
        <path
          d="M22 30.5 h52 a6 6 0 0 1 6 6 v1 h-64 v-1 a6 6 0 0 1 6 -6 z"
          fill="#F5F5F5"
          opacity="0.14"
        />
        <path
          d="M16 64 h64 v2 a10 10 0 0 1 -10 10 h-44 a10 10 0 0 1 -10 -10 z"
          fill="#000"
          opacity="0.14"
        />

        {/* windshield (no face here) */}
        <rect x="24" y="33" width="48" height="12" rx="6" fill="#B8BCC2" />
        <path d="M31 43 L38 34.5" stroke="#F5F5F5" strokeWidth="2.2" strokeLinecap="round" opacity="0.75" />
        <path d="M42 43 L47 37" stroke="#F5F5F5" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />

        {/* roof beacon: dome blink + ping ring */}
        <rect x="40" y="24" width="16" height="5" rx="2.5" fill="#B8BCC2" />
        <rect x="43" y="18.5" width="10" height="8" rx="4" fill="#F4B400">
          <animate attributeName="opacity" values="1;0.35;1" dur="1.4s" repeatCount="indefinite" />
        </rect>
        <circle cx="48" cy="22" r="6" stroke="#F4B400" strokeWidth="1.2" fill="none">
          <animate attributeName="r" values="6;13" dur="1.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0" dur="1.4s" repeatCount="indefinite" />
        </circle>

        {/* ——— the face ——— */}
        {/* open eyes (blink swaps with the happy closed lids below) */}
        <g>
          <animate
            attributeName="opacity"
            values="1;1;0;0;1"
            keyTimes="0;0.88;0.9;0.97;1"
            dur="3.8s"
            repeatCount="indefinite"
          />
          <ellipse cx="36" cy="54" rx="8" ry="9" fill="#F5F5F5" />
          <ellipse cx="60" cy="54" rx="8" ry="9" fill="#F5F5F5" />
          <circle cx="37.5" cy="56" r="3.5" fill="#1A1A1A" />
          <circle cx="58.5" cy="56" r="3.5" fill="#1A1A1A" />
          <circle cx="38.8" cy="54.6" r="1.3" fill="#F5F5F5" />
          <circle cx="59.8" cy="54.6" r="1.3" fill="#F5F5F5" />
          <circle cx="36.4" cy="57.6" r="0.6" fill="#F5F5F5" opacity="0.8" />
          <circle cx="57.4" cy="57.6" r="0.6" fill="#F5F5F5" opacity="0.8" />
        </g>
        {/* happy closed lids (visible only mid-blink) */}
        <g opacity="0">
          <animate
            attributeName="opacity"
            values="0;0;1;1;0"
            keyTimes="0;0.88;0.9;0.97;1"
            dur="3.8s"
            repeatCount="indefinite"
          />
          <path d="M28.5 54.5 q7.5 5 15 0" stroke="#1A1A1A" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <path d="M52.5 54.5 q7.5 5 15 0" stroke="#1A1A1A" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </g>

        {/* blush cheeks */}
        <circle cx="24.5" cy="60" r="4" fill="#F4B400" opacity="0.32" />
        <circle cx="71.5" cy="60" r="4" fill="#F4B400" opacity="0.32" />

        {/* big sincere grin with teeth */}
        <path d="M32 62.5 Q48 77 64 62.5 Q48 69.5 32 62.5 Z" fill="#1A1A1A" />
        <rect x="41" y="63.6" width="14" height="4.2" rx="2.1" fill="#F5F5F5" />

        {/* bumper with headlights + bolt plate */}
        <rect x="13" y="74" width="70" height="9" rx="4.5" fill="#B8BCC2" />
        <rect x="18" y="76" width="7" height="5" rx="2" fill="#F4B400" />
        <rect x="71" y="76" width="7" height="5" rx="2" fill="#F4B400" />
        <rect x="42.5" y="75.5" width="11" height="6" rx="1.5" fill="#1A1A1A" />
        <path d="M49.4 76.3 47 79.4h1.6l-.9 2.6 2.5-3.4h-1.6l.8-2.3z" fill="#F4B400" />

        {/* wheels peeking under the bumper */}
        <circle cx="28" cy="85" r="6" fill="#131313" stroke="#B8BCC2" strokeWidth="1.5" />
        <circle cx="28" cy="85" r="2" fill="#F4B400" />
        <circle cx="68" cy="85" r="6" fill="#131313" stroke="#B8BCC2" strokeWidth="1.5" />
        <circle cx="68" cy="85" r="2" fill="#F4B400" />
      </g>
    </svg>
  );
}
