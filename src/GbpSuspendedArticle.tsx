import React, { useEffect } from "react";
import { GBP_SUSPENDED_FAQ } from "./gbpSuspendedFaq";

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
`;

export default function GbpSuspendedArticle() {
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
        <a href="/#blog" className="rwart-back">
          ← All articles
        </a>

        <p className="rwart-meta">
          <span className="rwart-kick">GOOGLE PROFILE</span>
          <span>NOV 22, 2026</span>
          <span className="rwart-read">6 MIN READ</span>
        </p>

        <h1 className="rwart-h1">
          Google Business Profile Suspended? How to Get It Back
        </h1>

        <div className="rwart-body">
          <div className="rwart-short">
            Short answer: If your Google Business Profile is suspended, don't make a new one. Find out the reason in Google's Appeals Tool, fix only what breaks Google's rules, gather papers that show your business name and address, then send one careful appeal. Nobody can promise Google will say yes.
          </div>

          <nav className="rwart-toc" aria-label="In this article">
            <p className="rwart-toc-label">In this article</p>
            <ul>
              <li>
                <a href="#is-my-profile-suspended-disabled-or-restricted">Is my profile suspended, disabled or restricted?</a>
              </li>
              <li>
                <a href="#why-do-profiles-get-suspended">Why do Google Business Profiles get suspended?</a>
              </li>
              <li>
                <a href="#what-should-i-check-before-i-appeal">What should I check before I appeal?</a>
              </li>
              <li>
                <a href="#how-do-i-send-the-appeal">How do I send the appeal?</a>
              </li>
              <li>
                <a href="#what-papers-should-i-send">What papers should I send?</a>
              </li>
              <li>
                <a href="#how-long-does-reinstatement-take">How long does reinstatement take?</a>
              </li>
              <li>
                <a href="#what-if-google-says-no">What if Google says no?</a>
              </li>
              <li>
                <a href="#should-i-delete-my-profile">Should I delete my profile and create a new one?</a>
              </li>
              <li>
                <a href="#what-if-an-old-agency-owns-my-profile">What if an old agency or web person owns my profile?</a>
              </li>
              <li>
                <a href="#questions-people-ask">Questions people ask</a>
              </li>
            </ul>
          </nav>

          <p>
            Your profile was there yesterday. Today it's gone, or it shows a red warning. Calls slow down. It feels urgent.
          </p>

          <p>
            Take a breath. Many suspensions come from a rule problem on the profile that you can fix, but not every case ends well. The worst thing you can do right now is rush.
          </p>

          <h2 id="is-my-profile-suspended-disabled-or-restricted">Is my profile suspended, disabled or restricted?</h2>

          <p>
            These words mean different things, and the fix starts in a different place.
          </p>

          <p>
            A <strong>suspended or disabled profile</strong> means Google has taken action on that one listing. You appeal it in Google's Appeals Tool.
          </p>

          <p>
            An <strong>account restriction</strong> means Google has acted on your Google account, not just the profile. Every profile you manage can be affected, and you can't add new ones. Google says to lift the account restriction first, on your Google "My accounts" page, and only then appeal the profile.
          </p>

          <p>
            To see what happened, open the Google Business Profile Appeals Tool while logged in to the Google account that owns the profile. It shows the decision, the date, the reason, the rule Google says was broken, and whether you can appeal. You can read more on <a href="https://support.google.com/business/answer/13597551" target="_blank" rel="noopener noreferrer">Google's appeals help page</a>.
          </p>

          <h2 id="why-do-profiles-get-suspended">Why do Google Business Profiles get suspended?</h2>

          <p>
            Google says it may suspend or disable profiles that don't follow its guidelines. These are common reasons for small businesses:
          </p>

          <ul>
            <li><strong>Extra words in the business name.</strong> "Joe's Plumbing Perth Cheap 24/7" instead of "Joe's Plumbing". Your profile name should match your real-world business name.</li>
            <li><strong>Showing a home address.</strong> If customers don't visit you (a mobile tradie, a home baker who delivers), you should hide your address and set a service area instead.</li>
            <li><strong>Two profiles for one business.</strong> Often made by accident, or by an old agency.</li>
            <li><strong>Lots of big changes at once.</strong> Changing the name, phone, address and category in one day can look suspicious to Google.</li>
            <li><strong>An address that isn't a real staffed place</strong>, such as a PO box or a virtual office.</li>
            <li><strong>"Suspicious activity" or "no reason".</strong> Sometimes Google's system flags a real business by mistake. It happens, and it is very frustrating. You still go through the same appeal.</li>
          </ul>

          <p>
            If your warning says "suspicious activity", look at recent changes to the profile and at who has access to it. A manager you don't recognise is a red flag.
          </p>

          <aside className="rwart-mid" aria-label="Free check">
            <p className="rwart-mid-h">Not sure why yours was suspended?</p>
            <p>Send us your business name and we'll tell you the likely reason, free.</p>
            <p><a href="/#free-audit">Get a free check &rarr;</a></p>
          </aside>

          <h2 id="what-should-i-check-before-i-appeal">What should I check before I appeal?</h2>

          <p>
            This is the most important part. Google says an appeal can be submitted only once, and you shouldn't send more appeals for the same issue while you wait for a decision. If it is refused, Google may look again, but only if you send new evidence that wasn't in your first appeal. So get it right the first time.
          </p>

          <p>
            Go through this list slowly:
          </p>

          <ol>
            <li><strong>Read <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener noreferrer">Google's guidelines for business profiles</a>.</strong> Then compare your profile to them line by line.</li>
            <li><strong>Fix only what breaks a rule.</strong> Take extra words out of the name. Hide your address if customers don't visit you. Remove a duplicate profile if you own it. Don't make random changes just because you're worried.</li>
            <li><strong>Make your details match everywhere.</strong> Your business name, address and phone number should be the same on your profile, your website, your ABN record and your signage.</li>
            <li><strong>Check who has access.</strong> Remove anyone who shouldn't be there.</li>
            <li><strong>Get your papers ready</strong> before you start the appeal (see the list below).</li>
            <li><strong>Write a short, calm explanation.</strong> Two or three sentences: what your business is, what you fixed, and what you're attaching. No anger, no long story.</li>
          </ol>

          <aside className="rwart-mid" aria-label="Free check">
            <p className="rwart-mid-h">Only one appeal. Make it count.</p>
            <p>We check your profile against Google's rules and list the papers you need before you send anything.</p>
            <p><a href="/#free-audit">Check my profile first &rarr;</a></p>
          </aside>

          <h2 id="how-do-i-send-the-appeal">How do I send the appeal?</h2>

          <p>
            Here's how Google's Appeals Tool works:
          </p>

          <ol>
            <li>Open the Appeals Tool and confirm you're in the right Google account, or switch to it.</li>
            <li>Choose the business profile.</li>
            <li>Choose the decision you want to appeal.</li>
            <li>Upload your evidence.</li>
            <li>Type your short explanation of why the profile should come back.</li>
            <li>Tick the box to say you're ready, then press <strong>Submit appeal</strong>.</li>
          </ol>

          <p>
            After that, the status will show as Submitted. Google emails you when it decides. The steps are on <a href="https://support.google.com/business/answer/4569145" target="_blank" rel="noopener noreferrer">Google's help page on suspended profiles</a>.
          </p>

          <p>
            Send it once. Sending several appeals for the same problem before you hear back does not speed things up, and Google asks you not to.
          </p>

          <h2 id="what-papers-should-i-send">What papers should I send?</h2>

          <p>
            Google accepts things like business registration, a business licence, tax certificates and utility bills (electricity, phone, water, internet). The business name and address on each paper should match your profile.
          </p>

          <p>
            Google doesn't name Australian papers. These are common examples that usually fit its list:
          </p>

          <ul>
            <li>Your <strong>ABN record</strong> (from the ABN Lookup website) showing your business name</li>
            <li>Your <strong>business name registration</strong> from ASIC, if you trade under a business name</li>
            <li>A recent <strong>utility bill</strong> in the business name, at the profile address</li>
            <li>A <strong>licence</strong> for your trade, if your industry needs one</li>
            <li>Photos of your <strong>signage</strong> or a <strong>branded vehicle</strong>, if you have them</li>
          </ul>

          <p>
            If your papers show a different name or address from your profile, fix the profile first (if the papers are right), or wait until your papers are updated.
          </p>

          <h2 id="how-long-does-reinstatement-take">How long does reinstatement take?</h2>

          <p>
            Google says appeal reviews can take up to 5 business days. Some take longer. You'll get the decision by email, and the Appeals Tool shows the status.
          </p>

          <p>
            While you wait, don't make new big changes to the profile.
          </p>

          <h2 id="what-if-google-says-no">What if Google says no?</h2>

          <p>
            If the status shows Not Approved, you can ask for another review. But Google will only look again if you send new evidence that wasn't in your first appeal.
          </p>

          <p>
            So before you try again, find stronger proof. A utility bill you didn't send. A photo of your signage. Your ASIC business name record. Then explain clearly what's new.
          </p>

          <h2 id="should-i-delete-my-profile">Should I delete my profile and create a new one?</h2>

          <p>
            No. Google says directly: do not create a new Business Profile for the same business.
          </p>

          <p>
            A new profile for the same business can look like a duplicate, and that can make your problem bigger. You also lose your old reviews, which are often the most valuable part of the profile.
          </p>

          <h2 id="what-if-an-old-agency-owns-my-profile">What if an old agency or web person owns my profile?</h2>

          <p>
            Only an owner or manager on the profile can appeal. If someone else set up your profile and still owns it, you may not be able to fix anything yourself.
          </p>

          <p>
            Ask them, in writing, to make you the <strong>primary owner</strong>. Your business should always own its own Google profile. An agency should only ever be a manager.
          </p>

          <p>
            This is one of our firm rules at Work360Agency: you stay the owner, we're added as a manager, and when you leave, we remove ourselves. See how our <a href="/google-business-profile">Google Business Profile setup and management</a> works.
          </p>

          <h2 id="questions-people-ask">Questions people ask</h2>

          {GBP_SUSPENDED_FAQ.map((item) => (
            <p key={item.question}>
              <strong className="rwart-faq-q">{item.question}</strong>
              {item.answer}
            </p>
          ))}

          <h2 id="need-a-hand">Need a hand?</h2>

          <p>
            If your profile is suspended and you're not sure why, we'll take a free look and tell you the likely reason and whether you can appeal.
          </p>

          <p>
            If you'd like help preparing the appeal, it's A$199, one time. That covers a full rules check, a list of the papers you need, and a written appeal ready for you to send. If you're on our monthly Google profile care, it's included free.
          </p>

          <p>
            We can't promise Google will say yes. Nobody can. But we'll help you send the strongest appeal you can.
          </p>

          <hr className="rwart-hr" />

          <p className="rwart-author">
            Written by Sharanpreet Singh, founder of Work360Agency. Completed Google and Meta digital marketing courses.
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
                <a href="/blog/local-seo-perth">
                  Local SEO in Perth: what still moves the Google map pack
                </a>
              </li>
              <li>
                <a href="/google-business-profile">
                  Google Business Profile setup and management
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
