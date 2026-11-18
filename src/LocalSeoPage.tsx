import React, { useEffect } from "react";

const SERVICE_PAGE_CSS = `
.rwart {
  --rw-bone: #EEEEE8;
  --rw-ink: #0D0E10;
  --rw-brass: #D4FF3A;
  --rw-pine: #16181B;
  --rw-fog: #DCDCD3;
  --rw-stone: #75766F;
  --rw-cloud: #FFFFFF;
  --rw-night: #08090A;
  --rw-mut: color-mix(in srgb, var(--rw-stone) 60%, var(--rw-ink));
  background: var(--rw-bone);
  color: var(--rw-ink);
  font-family: "Funnel Sans", "Inter", system-ui, -apple-system, sans-serif;
  padding: clamp(120px, 12vw, 160px) 20px clamp(88px, 10vw, 140px);
  width: 100%;
}
.rwart-col {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}
.rwart-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: "Geist Mono", "Fragment Mono", ui-monospace, monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--rw-mut);
  text-decoration: none;
  margin-bottom: 28px;
  transition: color 0.25s ease;
}
.rwart-back:hover {
  color: var(--rw-ink);
}
.rwart-h1 {
  font-family: "Funnel Display", "Inter", -apple-system, sans-serif;
  font-weight: 700;
  font-size: clamp(34px, 4.4vw, 52px);
  line-height: 1.06;
  letter-spacing: -0.04em;
  margin: 0 0 28px;
  color: var(--rw-ink);
  text-wrap: balance;
}
.rwart-short {
  background: var(--rw-cloud);
  border-radius: 16px;
  box-shadow: inset 0 0 0 1px var(--rw-fog);
  padding: 20px 22px;
  margin: 0 0 32px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--rw-ink);
}
.rwart-body {
  font-size: 18px;
  line-height: 1.7;
  color: var(--rw-ink);
}
@media (max-width: 767px) {
  .rwart-body {
    font-size: 17px;
  }
  .rwart-short {
    font-size: 16.5px;
    padding: 18px 18px;
  }
}
.rwart-body p {
  margin: 0 0 22px;
}
.rwart-body h2 {
  font-family: "Funnel Display", "Inter", -apple-system, sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 2.6vw, 32px);
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 44px 0 16px;
  color: var(--rw-ink);
  scroll-margin-top: 96px;
}
.rwart-body ul {
  margin: 0 0 26px;
  padding-left: 24px;
  list-style-type: disc;
}
.rwart-body ol {
  margin: 0 0 22px;
  padding-left: 24px;
  list-style-type: decimal;
}
.rwart-body li {
  margin-bottom: 10px;
}
.rwart-faq-q {
  display: block;
  font-weight: 700;
  margin-bottom: 4px;
}
.rwart-hr {
  border: 0;
  border-top: 1px solid var(--rw-fog);
  margin: 44px 0 32px;
}
.rwart-cta-wrap {
  margin-top: 24px;
}
.rwart-btn.rw-btn {
  --face: var(--rw-brass);
  --rim: transparent;
  --fill: var(--rw-ink);
  --fg: var(--rw-ink);
  --fg2: var(--rw-bone);
  --chip: var(--rw-ink);
  --chipfg: var(--rw-brass);
  --chip2: var(--rw-brass);
  --chipfg2: var(--rw-ink);
  --ring: var(--rw-bone);
}
`;

export default function LocalSeoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      (window as any).__ltLenis?.scrollTo?.(0, { immediate: true, force: true });
    } catch {}
  }, []);

  return (
    <article className="rw rwart">
      <style dangerouslySetInnerHTML={{ __html: SERVICE_PAGE_CSS }} />
      <div className="rwart-col">
        <a href="/#services" className="rwart-back">
          ← All services
        </a>

        <h1 className="rwart-h1">
          Local SEO for small businesses in Perth and across Australia
        </h1>

        <div className="rwart-short">
          We help small businesses show up when people nearby search on Google. We fix your website and Google profile, find the words your customers search, and build trusted links. From $900 a month, no lock-in.
        </div>

        <div className="rwart-body">
          <h2 id="who-is-this-for">Who is this for?</h2>
          <p>
            Cafes, trades, salons, clinics, farm stalls and shops that get customers from Google, but don't show up on page one.
          </p>

          <h2 id="what-do-you-get-each-month">What do you get each month? (from $900 a month)</h2>
          <ul>
            <li>A full check of your website (speed, mobile, errors)</li>
            <li>A keyword map: the exact words your customers type</li>
            <li>Google Business Profile updates</li>
            <li>Link building from real, trusted Australian sites</li>
            <li>A simple monthly ranking report</li>
          </ul>

          <h2 id="what-results-have-we-seen">What results have we seen?</h2>
          <p>
            West Road Farm, a farm stall in Western Australia: Google profile views went from 49 to 2,209 a month in 4 months. Between May and October 2026 the profile got 4,843 views, 295 direction requests and 189 website clicks.
          </p>

          <h2 id="how-we-work">How we work</h2>
          <ol>
            <li>Free audit</li>
            <li>Written plan</li>
            <li>Monthly work</li>
            <li>Monthly report</li>
          </ol>
          <p>Everything is done by email or WhatsApp.</p>

          <h2 id="questions-people-ask">Questions people ask</h2>

          <p>
            <strong className="rwart-faq-q">How long does SEO take?</strong>
            Usually 3 to 6 months.
          </p>

          <p>
            <strong className="rwart-faq-q">Can you guarantee first place on Google?</strong>
            No. Nobody can promise that honestly.
          </p>

          <p>
            <strong className="rwart-faq-q">Do I need a website?</strong>
            It helps a lot. We can build one from $999.
          </p>

          <p>
            <strong className="rwart-faq-q">What happens if I stop?</strong>
            Your website and Google profile stay yours.
          </p>

          <p>All prices in AUD.</p>

          <hr className="rwart-hr" />

          <div className="rwart-cta-wrap">
            <a href="/#free-audit" className="rw-btn rw-solid rwart-btn">
              <span className="rw-face">
                <span className="rw-fill" aria-hidden="true" />
                <span className="rw-lbl">
                  <span className="rw-roll">
                    <span className="rw-l1">Get a free audit</span>
                    <span className="rw-l2" aria-hidden="true">
                      Get a free audit
                    </span>
                  </span>
                </span>
                <span className="rw-arr" aria-hidden="true">
                  <span className="rw-a1">
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                  <span className="rw-a2">
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                </span>
              </span>
              <span className="rw-ping" aria-hidden="true">
                <i className="rw-ping-r" />
                <b>
                  <span>1</span>
                  <span>+1</span>
                </b>
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
