import React, { useEffect } from "react";

const GBP_CSS = `
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
.rwart-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  margin: 0 0 20px;
  font-family: "Geist Mono", "Fragment Mono", ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rw-mut);
}
.rwart-kick {
  padding: 5px 10px;
  border-radius: 999px;
  background: var(--rw-ink);
  color: var(--rw-bone);
}
.rwart-read {
  padding: 5px 10px;
  border-radius: 999px;
  box-shadow: inset 0 0 0 1px var(--rw-fog);
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

export default function GoogleBusinessProfilePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      (window as any).__ltLenis?.scrollTo?.(0, { immediate: true, force: true });
    } catch {}
  }, []);

  return (
    <article className="rw rwart">
      <style dangerouslySetInnerHTML={{ __html: GBP_CSS }} />
      <div className="rwart-col">
        <a href="/#services" className="rwart-back">
          ← All services
        </a>

        <p className="rwart-meta">
          <span className="rwart-kick">GOOGLE PROFILE</span>
          <span className="rwart-read">A$299 SETUP · A$199/MO</span>
        </p>

        <h1 className="rwart-h1">
          Google Business Profile setup and management
        </h1>

        <div className="rwart-short">
          Short answer: We set up or fix your Google Business Profile for A$299, then look after it for A$199 a month. You get the right category, full details, fresh photos, weekly posts and a reply to every review, so more local customers find you on Google Maps. No lock-in contract.
        </div>

        <div className="rwart-body">
          <h2 id="who-is-this-for">Who is this for?</h2>
          <p>
            Small businesses that want more local customers from Google Maps: farm stalls, cafes, bakeries, home food businesses, salons and tradies. We work with businesses in Perth and across Australia.
          </p>

          <h2 id="what-do-you-get-with-the-setup">What do you get with the setup? (A$299, one time)</h2>
          <ul>
            <li>The right primary and extra categories</li>
            <li>Full business details, opening hours and service area</li>
            <li>Your services and products listed with short descriptions</li>
            <li>A clear description in plain words</li>
            <li>Photos added and sorted</li>
            <li>A review link and QR code for your customers</li>
          </ul>

          <h2 id="what-do-you-get-each-month">What do you get each month? (A$199 a month)</h2>
          <ul>
            <li>One Google post every week</li>
            <li>A reply to every review, good or bad</li>
            <li>New photos added every month (you send them, we upload them)</li>
            <li>Opening hours and holiday hours kept up to date</li>
            <li>A simple monthly report: how many people viewed your profile, called you and asked for directions</li>
          </ul>

          <h2 id="what-results-have-we-seen">What results have we seen?</h2>
          <p>
            We look after the Google Business Profile for a farm stall in Perth. Between May and October 2026, 4,843 people viewed the profile, 295 asked Google for directions and 189 clicked through to the website.
          </p>

          <h2 id="how-we-work">How we work</h2>
          <ul>
            <li>No lock-in contract. Cancel any time with 30 days notice.</li>
            <li>Your profile stays in your name. You stay the owner, we are added as a manager.</li>
            <li>Plain English reports, no jargon.</li>
            <li>Prices are in Australian dollars.</li>
          </ul>

          <h2 id="questions-people-ask">Questions people ask</h2>

          <p>
            <strong className="rwart-faq-q">Can you guarantee first place on Google Maps?</strong>
            No. Nobody can promise that honestly. Google ranks map results by relevance, distance and how well known a business is. We work on the parts you can change.
          </p>

          <p>
            <strong className="rwart-faq-q">Do I need a website?</strong>
            No. You can show up on Google Maps without one, but a website helps Google understand your business.
          </p>

          <p>
            <strong className="rwart-faq-q">How long until I see results?</strong>
            Profile fixes can show changes within a few weeks. Reviews and steady results usually take 3 to 6 months.
          </p>

          <p>
            <strong className="rwart-faq-q">Do I lose my profile if I stop?</strong>
            No. The profile is always yours.
          </p>

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
