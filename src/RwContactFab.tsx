import React, { useEffect, useRef, useState } from "react";

// Floating "Message us" button (bottom right, every page).
// Opens 2 choices: Facebook Messenger (first, more used in Australia) and WhatsApp.
// Also sends GA4 events: messenger_click, whatsapp_click, audit_click.

const MESSENGER_URL = "https://m.me/work360agency";
const WHATSAPP_URL =
  "https://wa.me/918872717771?text=" +
  encodeURIComponent("Hi Work360Agency, I'd like a free audit for my business.");

// Send the event first, then open the app (iPhone can stop the page before the event is sent).
function trackThenGo(e: React.MouseEvent<HTMLAnchorElement>, name: string, url: string) {
  try {
    const g = (window as any).gtag;
    if (typeof g !== "function") return;
    e.preventDefault();
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      window.location.href = url;
    };
    g("event", name, { page_path: window.location.pathname, transport_type: "beacon", event_callback: go, event_timeout: 700 });
    window.setTimeout(go, 800);
  } catch {}
}

function track(name: string, params: Record<string, string> = {}) {
  try {
    const g = (window as any).gtag;
    if (typeof g === "function") {
      g("event", name, { page_path: window.location.pathname, ...params });
    }
  } catch {}
}

const CSS = `
.rwfab{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:990;display:flex;flex-direction:column;align-items:flex-end;gap:10px;font-family:inherit}
.rwfab-btn{display:inline-flex;align-items:center;gap:8px;height:52px;padding:0 20px 0 16px;border:0;border-radius:999px;background:#D4FF3A;color:#08090A;font-family:inherit;font-weight:600;font-size:15px;line-height:1;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.35)}
.rwfab-btn:focus-visible,.rwfab-opt:focus-visible{outline:2px solid #fff;outline-offset:3px}
.rwfab-btn svg{width:22px;height:22px;flex:none}
.rwfab-menu{display:flex;flex-direction:column;gap:8px;padding:10px;border-radius:20px;background:#16181B;border:1px solid rgba(255,255,255,.12);box-shadow:0 12px 32px rgba(0,0,0,.45);min-width:220px}
.rwfab-opt{display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:14px;background:rgba(255,255,255,.06);color:#fff;text-decoration:none;font-family:inherit;font-weight:500;font-size:15px;line-height:1.2}
.rwfab-opt:hover{background:rgba(255,255,255,.12)}
.rwfab-opt svg{width:22px;height:22px;flex:none}
.rwfab-opt small{display:block;opacity:.65;font-size:12px;margin-top:2px}
@media (max-width:767px){.rwfab{right:12px}.rwfab-btn{height:48px;padding:0 16px 0 14px;font-size:14px}}
@media print{.rwfab{display:none}}
`;

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
  </svg>
);

const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#0A7CFF" d="M12 2C6.5 2 2 6.1 2 11.2c0 2.9 1.4 5.5 3.7 7.2V22l3.4-1.9c.9.3 1.9.4 2.9.4 5.5 0 10-4.1 10-9.2S17.5 2 12 2Z" />
    <path fill="#fff" d="m6.4 14.2 3-4.7 2.6 2 3.4-2.2-3 4.7-2.6-2-3.4 2.2Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#25D366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" />
    <path fill="#fff" d="M16.9 14.3c-.3-.1-1.6-.8-1.8-.9-.3-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.6.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
  </svg>
);

export default function RwContactFab() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close when tapping outside or pressing Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: Event) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Count clicks on any "free audit" link or button across the site.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("a,button");
      if (!el) return;
      const href = el.getAttribute("href") || "";
      const text = (el.textContent || "").toLowerCase();
      if (href.includes("free-audit") || (text.includes("free audit") && !el.closest(".rwfab"))) {
        track("audit_click", { link_text: text.trim().slice(0, 60) });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <div className="rwfab" ref={wrapRef}>
      <style>{CSS}</style>
      {open && (
        <div className="rwfab-menu" id="rwfab-menu" role="menu" aria-label="Message us">
          <a
            className="rwfab-opt"
            role="menuitem"
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => trackThenGo(e, "messenger_click", MESSENGER_URL)}
          >
            <MessengerIcon />
            <span>
              Messenger
              <small>Facebook chat</small>
            </span>
          </a>
          <a
            className="rwfab-opt"
            role="menuitem"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => trackThenGo(e, "whatsapp_click", WHATSAPP_URL)}
          >
            <WhatsAppIcon />
            <span>
              WhatsApp
              <small>Free to message</small>
            </span>
          </a>
        </div>
      )}
      <button
        type="button"
        className="rwfab-btn"
        aria-expanded={open}
        aria-controls="rwfab-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <ChatIcon />
        {open ? "Close" : "Message us"}
      </button>
    </div>
  );
}
