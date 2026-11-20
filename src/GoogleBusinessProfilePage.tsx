import React, { useEffect } from "react";
import { GBP_FAQ_ITEMS } from "./gbpFaq";

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
.rwart-body ol {
  margin: 0 0 26px;
  padding-left: 24px;
  list-style-type: decimal;
}
.rwart-table-wrap {
  width: 100%;
  overflow-x: auto;
  margin: 0 0 26px;
  border-radius: 16px;
  box-shadow: inset 0 0 0 1px var(--rw-fog);
  background: var(--rw-cloud);
}
.rwart-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  line-height: 1.5;
}
.rwart-table th,
.rwart-table td {
  text-align: left;
  vertical-align: top;
  padding: 14px 16px;
  border-bottom: 1px solid var(--rw-fog);
}
.rwart-table tr:last-child th,
.rwart-table tr:last-child td {
  border-bottom: 0;
}
.rwart-table thead th {
  font-family: "Geist Mono", "Fragment Mono", ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rw-mut);
  font-weight: 500;
}
.rwart-table tbody th {
  font-weight: 700;
  width: 28%;
}
@media (max-width: 767px) {
  .rwart-table {
    font-size: 15px;
  }
  .rwart-table th,
  .rwart-table td {
    padding: 12px 12px;
  }
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
          Google Business Profile Setup and Management in Australia
        </h1>

        <div className="rwart-short">
          Short answer: We set up or fix your Google Business Profile for A$299, then look after it for A$199 a month. You get the right category, full details, fresh photos, weekly posts and a reply to every review, so more local customers find you on Google Maps. No lock-in contract.
        </div>

        <div className="rwart-body">
          <h2 id="who-is-this-for">Who is this for?</h2>
          <p>
            Small businesses that want more local customers from Google Maps: farm stalls, cafes, bakeries, home food businesses, salons and tradies. We work with businesses in Perth and across Australia.
          </p>

          <h2 id="what-does-it-include">What does Google Business Profile management include?</h2>
          <ul>
            <li><strong>Setup and verification help:</strong> we set up or fix your profile and help you through Google's verification steps.</li>
            <li><strong>Categories and services:</strong> we pick the right main category and list every service you offer.</li>
            <li><strong>Details that match everywhere:</strong> name, phone, website, service area and opening hours, the same as your website and Facebook.</li>
            <li><strong>Photos and posts:</strong> new photos each month (you send them) and one Google post every week.</li>
            <li><strong>Reviews:</strong> we reply to every review within 2 working days. We always check with you before replying to a bad one.</li>
            <li><strong>Monthly report:</strong> a simple report with your profile views, calls, direction requests and website clicks.</li>
          </ul>

          <h2 id="what-do-you-get-with-the-setup">What do you get with the setup? (A$299, one time)</h2>
          <ul>
            <li>The right primary and extra categories</li>
            <li>Full business details, opening hours and service area</li>
            <li>Your services and products listed with short descriptions</li>
            <li>A clear description in plain words</li>
            <li>Photos added and sorted</li>
            <li>A review link and QR code for your customers</li>
            <li>Done within 5 working days once we have your details, photos and access</li>
          </ul>

          <h2 id="what-do-you-get-each-month">What do you get each month? (A$199 a month)</h2>
          <ul>
            <li>One Google post every week</li>
            <li>A reply to every review, good or bad, within 2 working days</li>
            <li>New photos added every month (you send them, we upload them)</li>
            <li>Opening hours and holiday hours kept up to date</li>
            <li>A list of the work we did that month</li>
            <li>A simple monthly report: how many people viewed your profile, called you, asked for directions and clicked to your website</li>
            <li>Help by email or WhatsApp</li>
          </ul>

          <h2 id="setup-or-monthly">Setup or monthly care: which do I need?</h2>
          <div className="rwart-table-wrap">
            <table className="rwart-table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Setup</th>
                  <th scope="col">Monthly care</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Price</th>
                  <td>A$299, one time</td>
                  <td>A$199 a month</td>
                </tr>
                <tr>
                  <th scope="row">What you get</th>
                  <td>Category, services, details, hours, description, photos, review link and QR code</td>
                  <td>4 Google posts, review replies, new photos, hours updates, monthly report</td>
                </tr>
                <tr>
                  <th scope="row">Time</th>
                  <td>Within 5 working days</td>
                  <td>Ongoing, cancel with 30 days notice</td>
                </tr>
                <tr>
                  <th scope="row">Good for</th>
                  <td>A profile that is missing or messy</td>
                  <td>Owners who want it kept fresh without doing it themselves</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>You can buy setup on its own. Monthly care is optional.</p>

          <h2 id="how-it-works">How it works</h2>
          <ol>
            <li><strong>Free audit:</strong> we check your profile and tell you what is missing.</li>
            <li><strong>Access:</strong> you add us as a Manager. You stay the owner.</li>
            <li><strong>Setup:</strong> done within 5 working days once we have your details, photos and access.</li>
            <li><strong>Every month:</strong> weekly posts, review replies, photo and hours updates.</li>
            <li><strong>Report:</strong> a plain report at the end of each month.</li>
          </ol>
          <p>Everything happens by email or WhatsApp.</p>

          <h2 id="who-can-have-a-profile">Who can have a Google Business Profile?</h2>
          <p>
            Businesses that meet customers face to face: at a shop, office or farm stall, or by visiting customers (like plumbers, cleaners or mobile dog walkers). Businesses that only sell online, with no in-person contact, are not allowed a profile by Google.
          </p>

          <h2 id="what-results-have-we-seen">What results have we seen?</h2>
          <p>
            We look after the Google Business Profile for West Road Farm, a farm stall in Western Australia. In 4 months, profile views grew from 49 to 2,209 a month. Between May and October 2026, 4,843 people viewed the profile, 295 asked Google for directions and 189 clicked through to the website.
          </p>
          <p>
            Profile views are not the same as sales, but they show more people are finding the business.
          </p>

          <h2 id="our-promises">Our promises to you</h2>
          <ul>
            <li><strong>You own your profile. Always.</strong> You stay the owner. We are added as a Manager, never the owner.</li>
            <li><strong>Leaving is easy.</strong> Cancel with 30 days notice. No lock-in and no auto-renew traps. When you leave, we remove ourselves from your profile and you keep everything.</li>
            <li><strong>You see exactly what we did.</strong> Every month you get a list of the work done and a plain report with views, calls, directions and website clicks. Not just likes.</li>
            <li><strong>You deal with the person doing the work.</strong> Sharanpreet, the founder, does your work himself.</li>
            <li><strong>No fake promises.</strong> Nobody can guarantee first place on Google, so we never will.</li>
            <li><strong>Real reviews only.</strong> We never buy reviews or offer discounts for reviews. It is against the law in Australia.</li>
            <li>Prices are in Australian dollars.</li>
          </ul>

          <h2 id="questions-people-ask">Questions people ask</h2>

          {GBP_FAQ_ITEMS.map((item) => (
            <p key={item.question}>
              <strong className="rwart-faq-q">{item.question}</strong>
              {item.answer}
            </p>
          ))}

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
