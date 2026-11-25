import React, { useEffect } from "react";

const ARTICLE_CSS = `
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
  margin: 0 0 32px;
  color: var(--rw-ink);
  text-wrap: balance;
}
.rwart-hero {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
  border-radius: 20px;
  margin: 0 0 32px;
  background: color-mix(in srgb, var(--rw-stone) 22%, transparent);
}
.rwart-short {
  background: var(--rw-cloud);
  border-radius: 16px;
  box-shadow: inset 0 0 0 1px var(--rw-fog);
  padding: 20px 22px;
  margin: 0 0 20px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--rw-ink);
}
.rwart-toc {
  background: color-mix(in srgb, var(--rw-cloud) 55%, var(--rw-bone));
  border-radius: 16px;
  box-shadow: inset 0 0 0 1px var(--rw-fog);
  padding: 18px 22px;
  margin: 0 0 36px;
}
.rwart-toc-label {
  margin: 0 0 10px !important;
  font-family: "Geist Mono", "Fragment Mono", ui-monospace, monospace;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rw-mut);
}
.rwart-toc ul {
  margin: 0 !important;
  padding-left: 18px !important;
  list-style-type: disc;
}
.rwart-toc li {
  margin-bottom: 6px !important;
  font-size: 15.5px;
  line-height: 1.45;
}
.rwart-toc li:last-child {
  margin-bottom: 0 !important;
}
.rwart-toc a {
  color: var(--rw-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.rwart-toc a:hover {
  opacity: 0.75;
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
  .rwart-toc {
    padding: 16px 18px;
  }
}
.rwart-body p {
  margin: 0 0 22px;
}
.rwart-body a:not(.rw-btn) {
  color: var(--rw-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.rwart-body a:not(.rw-btn):hover {
  opacity: 0.75;
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
  margin: 0 0 26px;
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
.rwart-author {
  font-size: 16px;
  color: var(--rw-mut);
  margin: 0 0 20px !important;
}
.rwart-mid {
  margin: 28px 0 !important;
  padding: 20px 22px;
  border: 1px solid var(--rw-fog);
  border-left: 4px solid #FF7A1A;
  border-radius: 14px;
}
.rwart-mid p {
  margin: 0 0 6px !important;
}
.rwart-mid-h {
  font-weight: 700;
}
.rwart-mid a {
  font-weight: 700;
}
.rwart-cta-wrap {
  margin-top: 24px;
}
.rwart-next {
  margin-top: 44px;
  padding-top: 28px;
  border-top: 1px solid var(--rw-fog);
}
.rwart-next-label {
  margin: 0 0 12px !important;
  font-family: "Geist Mono", "Fragment Mono", ui-monospace, monospace;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rw-mut);
}
.rwart-next ul {
  margin: 0 !important;
  padding-left: 20px !important;
}
.rwart-next li {
  margin-bottom: 8px !important;
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

.rwart-fig {
  margin: 24px 0 28px !important;
}
.rwart-fig img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid var(--rw-fog);
}
.rwart-fig figcaption {
  margin-top: 8px;
  font-size: 14px;
  color: var(--rw-mut);
}
.rwart-tbl {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0 28px;
  font-size: 16px;
}
.rwart-tbl th,
.rwart-tbl td {
  text-align: left;
  padding: 10px 8px;
  border-bottom: 1px solid var(--rw-fog);
}
.rwart-tbl th {
  font-weight: 700;
}
.rwart-note {
  font-size: 15px;
  color: var(--rw-mut);
}
`;

export default function WestRoadFarmCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      (window as any).__ltLenis?.scrollTo?.(0, { immediate: true, force: true });
    } catch {}
  }, []);

  return (
    <article className="rw rwart">
      <style dangerouslySetInnerHTML={{ __html: ARTICLE_CSS }} />
      <div className="rwart-col">
        <a href="/#real-results" className="rwart-back">
          ← Back to results
        </a>

        <p className="rwart-meta">
          <span className="rwart-kick">CASE STUDY</span>
          <span>SWAN VALLEY, WA</span>
          <span className="rwart-read">4 MIN READ</span>
        </p>

        <h1 className="rwart-h1">West Road Farm: More Local People Discovering the Farm</h1>

        <div className="rwart-body">
          <div className="rwart-short">
            <p>
              <strong>Short version:</strong> West Road Farm is a farm stall in Swan Valley, Western Australia. In September 2026, our first full month of work, 1,653 people viewed its Google Business Profile, up from 49 in June when the profile was new. All of our work was organic. No paid ads.
            </p>
          </div>

          <p>
            West Road Farm is a local farm stall run by the Khehra family in Swan Valley, Western Australia. Work360Agency helped improve the farm's online visibility through Google Business Profile optimisation and organic social media marketing.
          </p>

          <h2 id="what-we-did">What Work360Agency did</h2>

          <h3>Google Business Profile</h3>
          <ul>
            <li>Updated business information and profile details.</li>
            <li>Improved categories and description.</li>
            <li>Updated opening hours and products.</li>
            <li>Added real farm photos.</li>
            <li>Published weekly Google Business Profile posts.</li>
          </ul>

          <h3>Facebook and Instagram</h3>
          <ul>
            <li>Created about four posts or Reels per month.</li>
            <li>Shared farm products, photos and business updates.</li>
            <li>Helped customers discover products through organic content.</li>
          </ul>

          <h3>Local community visibility</h3>
          <ul>
            <li>Shared farm content in local Perth community Facebook groups.</li>
          </ul>

          <p>
            <strong>No paid advertising was used. All marketing work was organic.</strong>
          </p>

          <h2 id="results">Google Business Profile results</h2>

          <p>
            These numbers come straight from the farm's Google Business Profile Performance reports. Each number is shown with its own report period. We don't mix periods.
          </p>

          <table className="rwart-tbl">
            <thead>
              <tr>
                <th>Report period</th>
                <th>Profile views</th>
                <th>Interactions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>June 2026 (profile was new, data from late June)</td>
                <td>49</td>
                <td>15</td>
              </tr>
              <tr>
                <td>September 2026 (our first full month)</td>
                <td>1,653</td>
                <td>98</td>
              </tr>
              <tr>
                <td>August to September 2026</td>
                <td>2,209</td>
                <td>132</td>
              </tr>
            </tbody>
          </table>

          <p>In September 2026:</p>
          <ul>
            <li>267 searches showed the profile in Google results.</li>
            <li>83% of profile views came from phones.</li>
            <li>Google Maps was the biggest source of views.</li>
            <li>People found the farm by searching words like "grocery store" and "farm".</li>
          </ul>

          <p className="rwart-note">Interactions are calls, direction requests, website clicks and messages from the Google profile.</p>

          <figure className="rwart-fig">
            <img src="/assets/case-wrf/gbp-views-jun-2026.webp" alt="Google Business Profile report for June 2026 showing 49 profile views" loading="lazy" decoding="async" />
            <figcaption>June 2026: 49 people viewed the profile.</figcaption>
          </figure>
          <figure className="rwart-fig">
            <img src="/assets/case-wrf/gbp-views-sep-2026.webp" alt="Google Business Profile report for September 2026 showing 1,653 profile views and 267 searches" loading="lazy" decoding="async" />
            <figcaption>September 2026: 1,653 profile views and 267 searches.</figcaption>
          </figure>
          <figure className="rwart-fig">
            <img src="/assets/case-wrf/gbp-interactions-sep-2026.webp" alt="Google Business Profile report for September 2026 showing 98 profile interactions" loading="lazy" decoding="async" />
            <figcaption>September 2026: 98 profile interactions.</figcaption>
          </figure>
          <figure className="rwart-fig">
            <img src="/assets/case-wrf/gbp-views-aug-sep-2026.webp" alt="Google Business Profile report for August to September 2026 showing 2,209 profile views" loading="lazy" decoding="async" />
            <figcaption>August to September 2026: 2,209 profile views.</figcaption>
          </figure>

          <h2 id="owner-feedback">What the Khehra family reported</h2>
          <p>The Khehra family told Work360Agency that:</p>
          <ul>
            <li>Sales doubled in November compared with the previous month.</li>
            <li>More customers were finding the farm through Google Search and Google Maps.</li>
            <li>Customers were also discovering and buying products through Facebook and Instagram.</li>
            <li>On many Saturday and Sunday openings, stock sold out within the first hour.</li>
            <li>On one Sunday, extra stock had to be arranged for customers.</li>
          </ul>
          <p>
            The family was happy with the overall growth and referred another potential client to Work360Agency.
          </p>
          <p className="rwart-note">
            Sales and customer feedback were shared verbally by the business owner. Sales figures have not been independently verified.
          </p>

          <h2 id="honest-note">An honest note about results</h2>
          <p>
            Google Business Profile views are not the same as customers or sales. Seasonal demand and news about the upcoming Bakehouse may also have helped. Our focus was steady organic marketing, better online visibility and helping local customers find the farm.
          </p>

          <hr className="rwart-hr" />

          <p className="rwart-author">
            Shared with permission from West Road Farm. Written by Sharanpreet Singh, founder of Work360Agency.
          </p>

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

          <div className="rwart-next">
            <p className="rwart-next-label">Read next</p>
            <ul>
              <li>
                <a href="/google-business-profile">Google Business Profile setup and management</a>
              </li>
              <li>
                <a href="/blog/google-business-profile-suspended">Google Business Profile suspended? How to get it back</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
