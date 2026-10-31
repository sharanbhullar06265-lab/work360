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
  margin: 0 0 40px;
  background: color-mix(in srgb, var(--rw-stone) 22%, transparent);
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

export default function FacebookAdsArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      (window as any).__ltLenis?.scrollTo?.(0, { immediate: true, force: true });
    } catch {}

    const prevTitle = document.title;
    document.title = "Facebook ads for small business in Australia: ROAS vs profit";

    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") || "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "A 6x return on ad spend can still lose money. How Australian small businesses can check if their Facebook and Instagram ads really make a profit."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const createdCanonical = !canonical;
    const prevCanonicalHref = canonical?.getAttribute("href") || "";
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "/blog/facebook-ads-small-business");

    return () => {
      document.title = prevTitle;
      if (descMeta) {
        descMeta.setAttribute("content", prevDesc);
      }
      if (canonical) {
        if (createdCanonical) {
          canonical.remove();
        } else {
          canonical.setAttribute("href", prevCanonicalHref);
        }
      }
    };
  }, []);

  return (
    <article className="rw rwart">
      <style dangerouslySetInnerHTML={{ __html: ARTICLE_CSS }} />
      <div className="rwart-col">
        <a href="/#blog" className="rwart-back">
          ← All articles
        </a>

        <p className="rwart-meta">
          <span className="rwart-kick">PAID ADS</span>
          <span>OCT 31, 2026</span>
          <span className="rwart-read">4 MIN READ</span>
        </p>

        <h1 className="rwart-h1">
          ROAS is not profit: what to check in your Facebook ads
        </h1>

        <img
          src="https://framerusercontent.com/images/NtmyAnUBIcfQXkgdgwQGB2dIVY.webp?width=2000&height=1333"
          alt="ROAS is not profit: what to check in your Facebook ads"
          className="rwart-hero"
        />

        <div className="rwart-body">
          <p>
            Many small business owners judge their Facebook ads by one number: ROAS, or return on ad spend. If you spend $500 on ads and the ads bring in $3,000 of sales, your ROAS is 6x. It sounds great, and sometimes it is. But ROAS only measures sales. It says nothing about what you kept after paying for the products, the GST and the ads themselves.
          </p>

          <h2>How can a 6x ROAS lose money?</h2>

          <p>
            Take two shops. Each one spends $500 on Facebook ads and makes $3,000 of sales from them, GST included. Both have a ROAS of 6x.
          </p>

          <p>
            First, take out the GST. $3,000 including GST is about $2,727 before GST.
          </p>

          <p>
            Shop A makes its own products and keeps 50% of each sale after the cost of making it. That leaves about $1,364 of profit before ads. Take away the $500 ad spend and Shop A has about $864 left.
          </p>

          <p>
            Shop B resells products from a supplier and keeps only 15% of each sale. That leaves about $409 before ads. After the $500 ad spend, Shop B is about $91 behind.
          </p>

          <p>Both shops have the same ROAS, so the gap comes from their profit margin.</p>

          <h2>What ROAS do I need to break even?</h2>

          <p>
            Here is a quick way to work it out. Divide 1 by your profit margin (as a decimal, before ad costs):
          </p>

          <ul>
            <li>50% margin: 1 ÷ 0.5 = you need at least 2x ROAS</li>
            <li>25% margin: 1 ÷ 0.25 = you need at least 4x ROAS</li>
            <li>15% margin: 1 ÷ 0.15 = you need at least 6.7x ROAS</li>
          </ul>

          <p>
            Work this out using sales before GST. Anything below your break-even number costs you money, even if the ads look busy.
          </p>

          <h2>What number should I watch instead?</h2>

          <p>
            For shops that sell online, watch profit after ad spend. Take your sales before GST, subtract the cost of the products, then subtract the ad spend. That is the money the ads actually made you.
          </p>

          <p>
            For service businesses like plumbers, cleaners or builders, sales don't happen on the website. Watch cost per new customer instead. If you spend $600 on ads, get 30 enquiries and 6 of them become paying jobs, each new customer cost you $100. Compare that with what you earn from one job.
          </p>

          <p>
            This is the number we put at the top of every ads report we send. It answers the question owners actually ask: did the ads make me money this month?
          </p>

          <h2>How do I know which sales came from my ads?</h2>

          <p>
            If you sell online, install the Meta Pixel and the Conversions API on your website. They tell Meta which visitors bought something after seeing your ad, so Ads Manager can show you real sales.
          </p>

          <p>
            If customers call or walk in, ask every new customer how they found you, and write it down. A simple note in a spreadsheet each day is enough. After a month you will know roughly how many customers came from ads.
          </p>

          <h2>Is the Boost button good enough?</h2>

          <p>
            Boost is quick, but it often aims for likes and comments, which don't pay the bills. If you use Boost or Ads Manager, check these settings:
          </p>

          <ul>
            <li>Goal: pick messages, leads or sales. Engagement brings likes from people who may never buy.</li>
            <li>Location: set the suburbs or areas you actually serve. A cafe in Fremantle doesn't need clicks from Darwin.</li>
            <li>Budget: set a daily budget and an account spending limit, so you never get a surprise bill.</li>
            <li>Ad account: make sure the ads run from your business ad account, not a personal one.</li>
          </ul>

          <h2>How long before I can judge my ads?</h2>

          <p>
            Give a new campaign at least two weeks before you decide. Meta needs time to learn who responds to your ad, and the first few days often look worse than the rest. Change one thing at a time, like the image or the headline, so you can see what made the difference.
          </p>

          <h2>A quick checklist for your Facebook ads</h2>

          <ul>
            <li>You know your profit margin on each sale</li>
            <li>You know your break-even ROAS</li>
            <li>You track profit after ad spend, or cost per new customer</li>
            <li>The Meta Pixel is installed if you sell online</li>
            <li>You ask every new customer how they found you</li>
            <li>The ad goal is messages, leads or sales</li>
            <li>Location is set to the areas you serve</li>
            <li>A spending limit is on</li>
          </ul>

          <h2>Questions people ask</h2>

          <p>
            <strong className="rwart-faq-q">How much should a small business spend on Facebook ads?</strong>
            Start with an amount you are happy to test for a month, often $10 to $20 a day for a local business. Increase it only when the cost per customer is below what a customer is worth to you.
          </p>

          <p>
            <strong className="rwart-faq-q">Is ad spend paid to the agency?</strong>
            With us, no. Ad spend is paid straight to Meta or Google from your own account, and you always own the ad account and its data.
          </p>

          <p>
            <strong className="rwart-faq-q">Are Facebook ads or Google ads better?</strong>
            They do different jobs. Google ads reach people who are already searching for what you sell. Facebook and Instagram ads reach people who might want it but aren't searching yet. Many local businesses use both.
          </p>

          <hr className="rwart-hr" />

          <p>
            Want us to check your ads? Fill in the free audit form and we'll send you a written plan on email or WhatsApp.
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
        </div>
      </div>
    </article>
  );
}
