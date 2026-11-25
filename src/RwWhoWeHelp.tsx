import React from "react";

type Props = {
  bone?: string;
  ink?: string;
  brass?: string;
  fog?: string;
  stone?: string;
  cloud?: string;
  [key: string]: unknown;
};

const ITEMS: { title: string; text: string; link?: { href: string; label: string } }[] = [
  { title: "Cafes & Restaurants", text: "Show up when people search “cafe near me”." },
  { title: "Bakeries & Food Businesses", text: "Turn your photos and products into orders." },
  {
    title: "Farm Stalls",
    text: "Help locals find you on Google Maps.",
    link: { href: "/case-studies/west-road-farm", label: "See our West Road Farm case study" },
  },
  { title: "Tradies", text: "Get calls from people searching for your trade in their area." },
  { title: "Salons", text: "Fill your booking calendar with local clients." },
  { title: "Professional Services", text: "Build trust before the first call." },
];

const CSS = `
.rwwh{background:var(--rw-bone);color:var(--rw-ink);padding:clamp(72px,8vw,120px) 0}
.rwwh-in{width:min(1240px,calc(100% - 40px));margin:0 auto;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,5vw,90px);align-items:start}
.rwwh-eb{display:inline-flex;align-items:center;gap:9px;margin:0 0 20px;padding:7px 13px;border-radius:999px;background:color-mix(in srgb,var(--rw-ink) 6%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--rw-ink) 12%,transparent);font-family:var(--rw-font-m,'Geist Mono'),ui-monospace,Menlo,monospace;font-size:12px;letter-spacing:.06em;text-transform:uppercase}
.rwwh-h{margin:0 0 18px;font-weight:var(--rw-font-dw,700);letter-spacing:-.045em;line-height:1.02;font-size:clamp(36px,5vw,64px)}
.rwwh-p{margin:0 0 14px;font-size:18px;line-height:1.5;color:var(--rw-mut,var(--rw-stone));max-width:46ch}
.rwwh-list{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:14px}
.rwwh-card{padding:22px 22px 20px;border-radius:18px;background:var(--rw-cloud);box-shadow:inset 0 0 0 1px var(--rw-fog)}
.rwwh-t{margin:0 0 6px;font-size:19px;font-weight:700;letter-spacing:-.02em}
.rwwh-x{margin:0;font-size:16px;line-height:1.45;color:var(--rw-mut,var(--rw-stone))}
.rwwh-card a,.rwwh-foot a{color:var(--rw-ink);font-weight:700;text-decoration:underline;text-underline-offset:3px}
.rwwh-card a{display:inline-block;margin-top:8px;font-size:15px}
.rwwh-foot{grid-column:1/-1;margin:6px 0 0;font-size:17px;line-height:1.5}
@media (max-width:900px){.rwwh-in{grid-template-columns:1fr;gap:28px}}
@media (max-width:600px){.rwwh-list{grid-template-columns:1fr}.rwwh-p{font-size:17px}}
`;

export default function RwWhoWeHelp(props: Props) {
  const vars = {
    "--rw-bone": props.bone,
    "--rw-ink": props.ink,
    "--rw-brass": props.brass,
    "--rw-fog": props.fog,
    "--rw-stone": props.stone,
    "--rw-cloud": props.cloud,
  } as React.CSSProperties;
  return (
    <section className="rw rwwh" style={vars} aria-labelledby="rwwh-h">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="rwwh-in">
        <div>
          <p className="rwwh-eb">Who we help</p>
          <h2 className="rwwh-h" id="rwwh-h">
            Built for local small businesses
          </h2>
          <p className="rwwh-p">
            Many local businesses face the same problem: people can't buy from you if they can't find you.
          </p>
          <p className="rwwh-p">
            We help Australian small businesses show up on Google, look trustworthy and get more enquiries.
          </p>
        </div>
        <ul className="rwwh-list">
          {ITEMS.map((it) => (
            <li className="rwwh-card" key={it.title}>
              <h3 className="rwwh-t">{it.title}</h3>
              <p className="rwwh-x">{it.text}</p>
              {it.link ? <a href={it.link.href}>{it.link.label} &rarr;</a> : null}
            </li>
          ))}
        </ul>
        <p className="rwwh-foot">
          <strong>Not on the list?</strong> If you serve local customers, we can probably help.{" "}
          <a href="/#free-audit">Ask for a free audit</a>.
        </p>
      </div>
    </section>
  );
}
