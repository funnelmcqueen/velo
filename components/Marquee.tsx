import BoltIcon from "./BoltIcon";
import { FlameIcon, SnowflakeIcon } from "./HvacIcons";

const items = [
  { text: "HVAC Websites", Icon: FlameIcon, iconClass: "text-red/70" },
  { text: "Seasonal Ad Campaigns", Icon: BoltIcon, iconClass: "text-red/70" },
  { text: "Missed-Call Text-Back", Icon: SnowflakeIcon, iconClass: "text-silver/60" },
  { text: "Install · Repair · Maintenance", Icon: BoltIcon, iconClass: "text-red/70" },
  { text: "Built for Speed", Icon: FlameIcon, iconClass: "text-red/70" },
  { text: "Wired to Convert", Icon: SnowflakeIcon, iconClass: "text-silver/60" },
];

/** Infinite racing-ticker strip. Track holds two identical rows for a seamless loop. */
export default function Marquee() {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map(({ text, Icon, iconClass }) => (
        <span key={text} className="flex items-center">
          <span className="px-8 font-barlow text-sm font-semibold uppercase tracking-[0.3em] text-silver/70 sm:px-10">
            {text}
          </span>
          <Icon className={`h-3 w-3 shrink-0 ${iconClass}`} />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 bg-white/[0.015] py-3.5">
      <div className="marquee-track flex w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
