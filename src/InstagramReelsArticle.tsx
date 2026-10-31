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

export default function InstagramReelsArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      (window as any).__ltLenis?.scrollTo?.(0, { immediate: true, force: true });
    } catch {}

    const prevTitle = document.title;
    document.title = "Instagram Reels for small business: the 3-second rule";

    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") || "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "How to start an Instagram Reel so people keep watching. A simple plan for small businesses in Australia that you can film on your phone."
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
    canonical.setAttribute("href", "/blog/instagram-reels-small-business");

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
          <span className="rwart-kick">SOCIAL MEDIA</span>
          <span>OCT 31, 2026</span>
          <span className="rwart-read">4 MIN READ</span>
        </p>

        <h1 className="rwart-h1">
          Reels that sell: the 3-second rule for small businesses
        </h1>

        <img
          src="https://framerusercontent.com/images/87wKn5rFSjsCMUA9My0OUYJ4dM.webp?width=1900&height=1200"
          alt="Reels that sell: the 3-second rule for small businesses"
          className="rwart-hero"
        />

        <div className="rwart-body">
          <p>
            People decide very fast whether to keep watching a Reel. If the first few seconds don't give them a reason to stay, they swipe, and Instagram shows your video to fewer people. That's why we plan every Reel for our clients around the first three seconds before we think about anything else.
          </p>

          <p>
            You don't need a studio or a big budget for this. A phone, good light and a clear first line will do most of the work.
          </p>

          <h2>What should the first 3 seconds of a Reel show?</h2>

          <p>
            Start with the problem your customer has. Don't start with your logo, a slow pan of your shop or "Hi everyone, welcome back".
          </p>

          <p>Compare these two openings for a bakery:</p>

          <ul>
            <li>"Hi everyone, welcome to our bakery. Today we want to show you..."</li>
            <li>"Your sourdough is flat because of this one mistake."</li>
          </ul>

          <p>
            The second one talks about something the viewer cares about, so they stay to hear the answer.
          </p>

          <p>
            A good first line usually does one of these: names a problem ("Your Google profile is losing you customers"), makes a bold but true promise ("Fresh bread every Saturday from 7am"), or shows the result first and then how you got there.
          </p>

          <h2>Should I put text on the screen?</h2>

          <p>
            Yes. Lots of people scroll with the sound off, so put your hook on screen as text from the very first frame. Keep it short, bold and easy to read on a small phone.
          </p>

          <p>
            Watch where you place it. Instagram puts the caption, username and buttons along the bottom and down the right side of the screen. Keep your text in the middle of the screen so those buttons don't cover it. Use the same hook as your cover image too, so your profile grid shows what each video is about.
          </p>

          <h2>How long should a Reel be?</h2>

          <p>
            As long as the idea needs and no longer. For most small business tips, 20 to 45 seconds is enough. Cut every pause, every "um" and anything that repeats.
          </p>

          <p>
            Stick to one idea per Reel. If you have five tips, make five Reels. Each one gets its own hook and its own chance to reach new people.
          </p>

          <h2>What should a small business actually post?</h2>

          <p>
            Write about what your customer gets. "We're excited to announce our new menu" means very little to someone scrolling. "New breakfast menu, and the eggs benedict is $16 until Friday" gives them a reason to visit.
          </p>

          <p>Ideas that work well for local businesses:</p>

          <ul>
            <li>A quick tip your customers often ask you about</li>
            <li>Behind the scenes: how you make, pack or fix something</li>
            <li>A before and after of your work</li>
            <li>A common mistake people make, and how to avoid it</li>
            <li>Your opening hours, specials or events, shown with real footage</li>
          </ul>

          <p>
            Show your real shop, products and people. Customers want to know what they will see when they walk in.
          </p>

          <h2>How do I get people to take the next step?</h2>

          <p>
            End every Reel with one clear action. Ask people to comment a word for a free guide, send you a message, or tap the link in your bio to book. One action is easier to follow than three.
          </p>

          <p>
            If you ask people to comment a word, reply to every comment. A tool like ManyChat can send the guide by DM automatically, or you can send it by hand at the start.
          </p>

          <h2>How often should I post Reels?</h2>

          <p>
            Pick a schedule you can keep. Three good Reels a week will do more for you than daily posts you rush. Post at the same time each day, when your customers are likely to be on their phones. For many Australian small businesses, early evening works well.
          </p>

          <p>
            You can schedule Reels for free in Meta Business Suite, so you can film on the weekend and post during the week.
          </p>

          <h2>A quick Reel checklist</h2>

          <ul>
            <li>The first line names a problem, a promise or a result</li>
            <li>The hook is on screen from the first frame</li>
            <li>Text sits in the middle, away from the bottom and right edge</li>
            <li>One idea per Reel</li>
            <li>20 to 45 seconds, with every pause cut</li>
            <li>Real footage of your business</li>
            <li>One clear action at the end</li>
            <li>The cover image shows the hook</li>
          </ul>

          <h2>Questions people ask</h2>

          <p>
            <strong className="rwart-faq-q">Do I need to show my face in Reels?</strong>
            It helps people trust you, but it's not a must. Hands at work, your products and your shop can carry a Reel well, as long as the hook is strong.
          </p>

          <p>
            <strong className="rwart-faq-q">Should I use trending audio?</strong>
            It can help, but don't build a Reel around a song that has nothing to do with your business. A clear hook and useful content matter more.
          </p>

          <p>
            <strong className="rwart-faq-q">Do Reels work for very small local businesses?</strong>
            Yes. Your audience is the people near you, so you don't need millions of views. A few hundred views from locals can bring real customers through the door.
          </p>

          <hr className="rwart-hr" />

          <p>
            Want us to plan your Reels? Fill in the free audit form and we'll send you a written plan on email or WhatsApp.
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
