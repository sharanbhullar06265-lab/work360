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
  object-position: center;
  display: block;
  border-radius: 20px;
  margin: 0 0 40px;
  background: color-mix(in srgb, var(--rw-stone) 22%, transparent);
  filter: none;
  -webkit-filter: none;
  mix-blend-mode: normal;
  image-rendering: auto;
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

export default function LocalSeoPerthArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      (window as any).__ltLenis?.scrollTo?.(0, { immediate: true, force: true });
    } catch {}

    const prevTitle = document.title;
    document.title = "Local SEO in Perth: how to show up on Google Maps";

    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") || "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "A simple guide for Perth small businesses: what Google looks at for the map pack, with real profile numbers from a Perth farm stall."
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
    canonical.setAttribute("href", "/blog/local-seo-perth");

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
          <span className="rwart-kick">SEO</span>
          <span>OCT 31, 2026</span>
          <span className="rwart-read">4 MIN READ</span>
        </p>

        <h1 className="rwart-h1">
          Local SEO in Perth: what still moves the Google map pack
        </h1>

        <img
          src="/assets/urlaubstracker-ZXgGLpUF8cg-unsplash.jpg"
          alt="Perth city skyline and Elizabeth Quay"
          className="rwart-hero"
        />

        <div className="rwart-body">
          <p>
            When someone in Perth searches "cafe near me" or "plumber Joondalup", Google shows a small map with three businesses under it. This box is called the map pack. Most people pick from those three and never scroll further, so getting into it is the main job of local SEO.
          </p>

          <p>
            Google says it picks map results using three things: how well your profile matches the search (relevance), how far you are from the person searching (distance), and how well known your business is (prominence). You can't move your shop closer to every customer, so the work goes into relevance and prominence.
          </p>

          <h2>What did a real Perth business profile show us?</h2>

          <p>
            We look after the Google Business Profile for a farm stall in Perth. Between May and October 2026, 4,843 people viewed the profile, 295 asked Google for directions, and 189 clicked through to the website.
          </p>

          <p>
            The search terms surprised us. Very few people searched for the farm's name. The biggest searches were "farm" (251 times), "grocery store" (130 times) and "animal farm" (71 times). People were looking for a type of place. That makes the category and description on the profile the parts that count most.
          </p>

          <p>
            Most views came from phones: 48% from Google Maps on mobile and 38% from Google Search on mobile. Your customers usually see your profile on a small screen, often while they are already out and about.
          </p>

          <h2>How do I tell Google what my business is?</h2>

          <p>
            Start with your primary category. It has a big effect on which searches you show up for. Pick the one that matches what customers type into Google, then add secondary categories for anything else you do. A bakery that also serves coffee can add "Cafe" as a second category.
          </p>

          <p>
            Then fill in everything Google asks for: opening hours, phone number, website, service area and a description in plain words. Say what you sell and where you are. "Fresh bread and coffee in Midland, open from 7am" tells Google much more than "We are passionate about quality".
          </p>

          <p>
            Set your holiday hours before every long weekend. Customers who drive to a closed shop often leave a bad review.
          </p>

          <h2>Do reviews really matter for the map pack?</h2>

          <p>
            Yes. Google says the number of reviews and your rating are part of how it judges prominence. Reviews also help the person reading your profile decide whether to visit.
          </p>

          <p>
            The easiest way to get more reviews is to ask at the right moment. When a customer says they liked something, ask them then. A small sign at the counter with a QR code to your review link works well for shops and stalls.
          </p>

          <p>
            Reply to every review, good or bad. Keep replies short and real. Every future customer can read your reply to a bad review, so stay calm and offer to fix the problem.
          </p>

          <h2>What should I post on my Google profile?</h2>

          <p>
            Your Google Business Profile lets you post updates, and most small businesses never use it. Post once a week about a new product, a special, an event or your hours for a long weekend. Add a real photo to each post.
          </p>

          <p>
            Photos of your shop front, your products and your team help customers recognise you when they arrive. Stock photos don't do that.
          </p>

          <h2>Does my website affect where I show up on the map?</h2>

          <p>
            It does. Google reads your website to understand your business, so the name, address and phone number on your site should match your Google profile exactly. The same goes for Facebook, Apple Maps, Bing and any directory listings.
          </p>

          <p>
            If you serve different suburbs or offer different services, give each one its own page on your website. A page called "Bathroom renovations in Joondalup" has a much better chance of showing up for that search than one page that lists everything you do.
          </p>

          <h2>How long does local SEO take?</h2>

          <p>
            Fixing your profile can change things within a few weeks. Reviews and website pages take longer, usually three to six months before results are steady. On the farm stall's profile, website clicks were close to zero until August and started climbing in September and October.
          </p>

          <h2>A quick checklist for Perth businesses</h2>

          <ul>
            <li>Your primary category matches what customers search for</li>
            <li>Hours, phone, website and description are filled in</li>
            <li>Holiday hours are set before every long weekend</li>
            <li>New photos go up every month</li>
            <li>You post one update a week</li>
            <li>Every review gets a reply</li>
            <li>Your name, address and phone are the same everywhere online</li>
            <li>Each main service or suburb has its own page on your website</li>
          </ul>

          <h2>Questions people ask</h2>

          <p>
            <strong className="rwart-faq-q">Is local SEO different from normal SEO?</strong>
            Normal SEO is about ranking your website in the list of results. Local SEO is about showing up on Google Maps and in the map pack for people near you. For local SEO, your Google Business Profile matters most.
          </p>

          <p>
            <strong className="rwart-faq-q">Do I need a website for local SEO?</strong>
            You can show up on Google Maps without one. A website helps Google understand your business and gives customers somewhere to go after they find you.
          </p>

          <p>
            <strong className="rwart-faq-q">Can I pay Google to rank higher on the map?</strong>
            You can run Google Ads that appear above the map, marked as sponsored. The normal map results can't be bought.
          </p>

          <hr className="rwart-hr" />

          <p>
            Want us to check your Google profile? Fill in the free audit form and we'll send you a written plan on email or WhatsApp.
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
