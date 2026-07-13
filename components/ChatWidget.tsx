"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TowTruckIcon from "./TowTruckIcon";
import BoltIcon from "./BoltIcon";
import { CALENDLY_URL } from "./CTAButton";
import { EASE_SNAP } from "./motion";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  cta?: boolean;
};

const GREETING =
  "Hey — Hitch here, FunnelMcQueen roadside crew. If your HVAC business feels stuck in the mud, you're in the right garage. What's got your wheels spinning?";

const FREETEXT_REPLY =
  "Good question — that one's above my pay grade (I'm a truck). The crew covers it all on the free 20-minute call, or write hello@funnelmcqueen.com and they'll get back fast.";

const TOPICS = [
  {
    label: "My phone isn't ringing",
    reply:
      "Nine times out of ten that's the website. Homeowners judge in seconds — a slow, dated site loses their trust before anyone calls. Pole Position is a fast, custom-built HVAC site made to turn visitors into calls. Hook on — the free call takes 20 minutes.",
  },
  {
    label: "My ads burn money",
    reply:
      "Clicks with no system behind them is fuel out the tailpipe. Full Throttle aims your budget at the jobs you want — installs, repairs, maintenance plans — and stops the burn. Book the free call and we'll show you the leak.",
  },
  {
    label: "Leads slip through",
    reply:
      "78% of jobs go to whoever answers first — and you can't pick up mid-install. Victory Lap adds instant follow-up and missed-call text-back so no homeowner is left on the shoulder. Let's get you hooked up.",
  },
  {
    label: "Just looking",
    reply:
      "Take a lap, no pressure. Short version: website, ads, and follow-up for HVAC companies — one connected system, one crew. When you want a tow out of the mud, the free call's the hitch.",
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [showTip, setShowTip] = useState(false);
  const idRef = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // nudge bubble if the chat hasn't been opened yet
  useEffect(() => {
    if (open || started) {
      setShowTip(false);
      return;
    }
    const t = setTimeout(() => setShowTip(true), 6000);
    return () => clearTimeout(t);
  }, [open, started]);

  // greet on first open
  useEffect(() => {
    if (open && !started) {
      setStarted(true);
      pushBot(GREETING);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // keep newest message in view
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 99999, behavior: "smooth" });
  }, [messages, typing]);

  const push = (m: Omit<Message, "id">) =>
    setMessages((prev) => [...prev, { ...m, id: idRef.current++ }]);

  const pushBot = (text: string, cta = false) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      push({ from: "bot", text, cta });
    }, 750);
  };

  const choose = (topic: (typeof TOPICS)[number]) => {
    if (typing) return;
    push({ from: "user", text: topic.label });
    pushBot(topic.reply, true);
  };

  const send = () => {
    const text = input.trim();
    if (!text || typing) return;
    setInput("");
    push({ from: "user", text });
    pushBot(FREETEXT_REPLY, true);
  };

  return (
    <>
      {/* chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: EASE_SNAP }}
            role="dialog"
            aria-label="Chat with Hitch, the FunnelMcQueen roadside crew bot"
            className="fixed bottom-24 right-5 z-[55] flex h-[min(540px,72vh)] w-[360px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden border border-white/10 bg-[#131313]/95 shadow-[0_24px_60px_rgba(0,0,0,0.65)] backdrop-blur-md"
          >
            {/* header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-charcoal">
                <TowTruckIcon className="h-9 w-9" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-clash text-lg font-semibold leading-tight">Hitch</p>
                <p className="truncate font-barlow text-[11px] font-semibold uppercase tracking-[0.2em] text-silver/70">
                  Roadside crew · pit-stop bot
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center text-silver transition-colors duration-100 [transition-timing-function:var(--ease-snap)] hover:text-offwhite"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                  <path d="M3 3 L13 13 M13 3 L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m) =>
                m.from === "bot" ? (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: EASE_SNAP }}
                    className="max-w-[88%] rounded-lg rounded-bl-none border border-white/10 bg-white/[0.05] p-3"
                  >
                    <p className="text-sm leading-relaxed text-offwhite/90">{m.text}</p>
                    {m.cta && (
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sharp btn-shine mt-3 inline-flex items-center gap-1.5 bg-red px-4 py-2 font-grotesk text-xs font-bold uppercase tracking-wide text-offwhite transition-colors duration-100 [transition-timing-function:var(--ease-snap)] hover:bg-[#ff1a10]"
                      >
                        <BoltIcon className="h-3 w-3" />
                        Book a Free Call
                      </a>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: EASE_SNAP }}
                    className="ml-auto max-w-[88%] rounded-lg rounded-br-none bg-red p-3"
                  >
                    <p className="text-sm leading-relaxed text-offwhite">{m.text}</p>
                  </motion.div>
                )
              )}

              {typing && (
                <div className="flex w-14 items-center justify-center gap-1 rounded-lg rounded-bl-none border border-white/10 bg-white/[0.05] py-3">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0.25, 1, 0.25] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                      className="h-1.5 w-1.5 rounded-full bg-silver"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* quick replies */}
            <div className="flex flex-wrap gap-2 border-t border-white/5 px-4 py-3">
              {TOPICS.map((topic) => (
                <button
                  key={topic.label}
                  onClick={() => choose(topic)}
                  className="border border-gold/50 px-3 py-1.5 font-barlow text-[11px] font-semibold uppercase tracking-[0.15em] text-gold transition-colors duration-100 [transition-timing-function:var(--ease-snap)] hover:bg-gold hover:text-charcoal"
                >
                  {topic.label}
                </button>
              ))}
            </div>

            {/* input */}
            <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message…"
                aria-label="Chat message"
                className="min-w-0 flex-1 bg-transparent text-sm text-offwhite placeholder:text-silver/50 focus:outline-none"
              />
              <button
                onClick={send}
                aria-label="Send message"
                className="btn-sharp flex h-9 items-center bg-red px-4 transition-colors duration-100 [transition-timing-function:var(--ease-snap)] hover:bg-[#ff1a10]"
              >
                <BoltIcon className="h-4 w-4 text-offwhite" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* nudge bubble */}
      <AnimatePresence>
        {showTip && (
          <motion.button
            key="chat-tip"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: EASE_SNAP }}
            onClick={() => setOpen(true)}
            className="fixed bottom-[5.5rem] right-5 z-[55] border border-gold/40 bg-[#131313]/95 px-4 py-2.5 text-left shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-md"
          >
            <span className="block font-clash text-sm font-semibold text-offwhite">
              Stuck in the mud?
            </span>
            <span className="block font-barlow text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Get a free tow
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* floating action button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.35, delay: 1.2, ease: EASE_SNAP }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with the FunnelMcQueen crew"}
        className="fixed bottom-5 right-5 z-[55] flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-[#131313] shadow-[0_0_30px_rgba(225,6,0,0.4)]"
      >
        {open ? (
          <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none">
            <path d="M3 3 L13 13 M13 3 L3 13" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <TowTruckIcon className="h-10 w-10" />
        )}
      </motion.button>
    </>
  );
}
