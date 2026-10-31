import React, { useEffect } from "react";

const HOME_TITLE = "Work360 Agency — Digital Marketing Agency";
const HOME_DESC =
  "Your Brand. Our 360° Approach. We help small businesses in Australia get found on Google, look great online and get more customers.";

const LEGAL_CSS = `
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
  margin: 0 0 16px;
  color: var(--rw-ink);
  text-wrap: balance;
}
.rwart-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  margin: 0 0 36px;
  font-family: "Geist Mono", "Fragment Mono", ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rw-mut);
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
.rwart-body a {
  color: var(--rw-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.rwart-body a:hover {
  opacity: 0.75;
}
`;

function usePageMeta(title: string, description: string, canonicalPath: string) {
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      (window as any).__ltLenis?.scrollTo?.(0, { immediate: true, force: true });
    } catch {}

    document.title = title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", description);
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const createdCanonical = !canonical;
    const prevCanonicalHref = canonical?.getAttribute("href") || "";
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalPath);

    return () => {
      document.title = HOME_TITLE;
      if (descMeta) {
        descMeta.setAttribute("content", HOME_DESC);
      }
      if (canonical) {
        if (createdCanonical) {
          canonical.remove();
        } else {
          canonical.setAttribute("href", prevCanonicalHref);
        }
      }
    };
  }, [title, description, canonicalPath]);
}

export function PrivacyPolicyPage() {
  usePageMeta(
    "Privacy Policy | Work360 Agency",
    "How Work360 Agency collects, uses and protects your information.",
    "/privacy"
  );

  return (
    <article className="rw rwart">
      <style dangerouslySetInnerHTML={{ __html: LEGAL_CSS }} />
      <div className="rwart-col">
        <a href="/" className="rwart-back">
          ← Back to home
        </a>

        <h1 className="rwart-h1">Privacy Policy</h1>

        <p className="rwart-meta">
          <span>LAST UPDATED: 31 OCTOBER 2026</span>
        </p>

        <div className="rwart-body">
          <p>
            This page explains what information Work360 Agency ("Work360", "we", "us") collects, why we collect it and how we look after it.
          </p>

          <h2>What we collect</h2>
          <p>
            When you fill in our free audit form, we collect your name, email address, WhatsApp number, business name, the services you are interested in and your monthly budget.
          </p>
          <p>
            When you become a client, we may also collect the details we need to do the work and send invoices, such as your business address and the logins or access you choose to share with us.
          </p>
          <p>
            Our website host may keep basic technical logs, such as your IP address and browser type, to keep the website secure.
          </p>

          <h2>Why we collect it</h2>
          <p>We use your information to:</p>
          <ul>
            <li>prepare and send your free audit</li>
            <li>reply to your questions by email or WhatsApp</li>
            <li>provide the services you buy from us</li>
            <li>send invoices and keep our business records</li>
          </ul>
          <p>
            We do not use your information for anything else without asking you first.
          </p>

          <h2>Where we keep it</h2>
          <p>
            Form answers are stored in Google Forms and Google Sheets in our Work360 Google account. Only Work360 can see them. Payments are handled by your bank or by Razorpay. We never see or store your card details.
          </p>

          <h2>We do not sell your information</h2>
          <p>
            We do not sell, rent or share your information with anyone for their marketing. We only share it with the tools we use to run the business (such as Google, Razorpay and our website host), and only as much as they need to do their job.
          </p>

          <h2>Keeping your information safe</h2>
          <p>
            We take reasonable steps to protect your information, such as keeping it in password-protected accounts that only Work360 can open. No online system is completely secure, so we cannot promise that a problem will never happen, but we will tell you if your information is affected.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep your information for as long as we need it for the reasons above, or as long as the law requires us to keep business records. After that we delete it.
          </p>

          <h2>Your rights</h2>
          <p>You can ask us at any time to:</p>
          <ul>
            <li>show you the information we hold about you</li>
            <li>correct anything that is wrong</li>
            <li>delete your information</li>
            <li>stop sending you messages</li>
          </ul>
          <p>
            We handle these requests in line with the law that applies, including India's Digital Personal Data Protection Act, 2023. Email{" "}
            <a href="mailto:work360agency@gmail.com">work360agency@gmail.com</a>{" "}
            and we will reply within 24 hours and act on your request within 7 working days.
          </p>

          <h2>Complaints about your data</h2>
          <p>
            If you have a concern about how we handle your information, contact:
            <br />
            Work360 support
            <br />
            Email:{" "}
            <a href="mailto:work360agency@gmail.com">work360agency@gmail.com</a>
          </p>

          <h2>Changes to this page</h2>
          <p>
            We may update this page from time to time. The date at the top shows when it was last changed.
          </p>
        </div>
      </div>
    </article>
  );
}

export function TermsConditionsPage() {
  usePageMeta(
    "Terms & Conditions | Work360 Agency",
    "The terms for using the Work360 Agency website and services.",
    "/terms"
  );

  return (
    <article className="rw rwart">
      <style dangerouslySetInnerHTML={{ __html: LEGAL_CSS }} />
      <div className="rwart-col">
        <a href="/" className="rwart-back">
          ← Back to home
        </a>

        <h1 className="rwart-h1">Terms &amp; Conditions</h1>

        <p className="rwart-meta">
          <span>LAST UPDATED: 31 OCTOBER 2026</span>
        </p>

        <div className="rwart-body">
          <p>
            These terms apply when you use the Work360 Agency website or work with Work360 Agency ("Work360", "we", "us"). By using our website or our services, you agree to these terms.
          </p>

          <h2>Our services</h2>
          <p>
            Work360 provides Google Business Profile management, SEO, social media management, paid ads (Meta and Google), content, website design and branding. The exact work, timeline and fees for each client are written in the proposal or invoice we send you.
          </p>

          <h2>Who can use our services</h2>
          <p>
            Our services are for people aged 18 or over and for registered businesses.
          </p>

          <h2>Payments</h2>
          <ul>
            <li>Payments follow the terms in your invoice.</li>
            <li>Monthly services are paid in advance at the start of each month.</li>
            <li>You can pay by bank transfer or through Razorpay. We do not store your card details.</li>
            <li>If a payment is late, we may pause or stop the work until it is paid.</li>
          </ul>

          <h2>Ad spend</h2>
          <p>
            Money spent on ads is not part of our fees. You pay Meta or Google directly from your own ad account, and the ad account stays yours.
          </p>

          <h2>Refunds</h2>
          <p>
            Refunds are covered in our <a href="/refunds">Refund Policy</a>.
          </p>

          <h2>Cancellation</h2>
          <p>
            Services run month to month. To stop, email{" "}
            <a href="mailto:work360agency@gmail.com">work360agency@gmail.com</a>{" "}
            at least 30 days before. We finish the work already paid for, and then the service ends.
          </p>

          <h2>Your part</h2>
          <p>
            You agree to give us correct information, give us the access we need, and approve content on time. Delays in approval can delay results.
          </p>

          <h2>No guarantee of results</h2>
          <p>
            Results depend on things outside our control, such as Google and Meta, your budget, your market and your competitors. We work hard to grow your numbers, but we cannot guarantee a specific ranking, number of leads, sales or followers.
          </p>

          <h2>General information only</h2>
          <p>
            Our website and articles are general information only. They are not financial, legal or tax advice. Please speak to a qualified adviser before making those decisions.
          </p>

          <h2>Who owns the work</h2>
          <ul>
            <li>Once you have paid in full, the final work we make for you (logos, designs, posts, website content) is yours.</li>
            <li>Your Facebook, Instagram, Google and ad accounts always stay yours.</li>
            <li>We will only show your work in our portfolio if you say we can.</li>
          </ul>

          <h2>Our responsibility</h2>
          <p>
            We are not responsible for indirect losses, such as lost profit. If something goes wrong because of our work, our total responsibility is limited to the fees you paid for that service.
          </p>

          <h2>Support and complaints</h2>
          <p>
            Email <a href="mailto:work360agency@gmail.com">work360agency@gmail.com</a>. We reply within 24 hours and aim to resolve complaints within 7 working days.
          </p>

          <h2>Law and disputes</h2>
          <p>
            These terms are governed by the laws of India. Any dispute will be handled by the courts of Punjab, India.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The date at the top shows when they were last changed. If you keep using our website or services after a change, you accept the new terms.
          </p>
        </div>
      </div>
    </article>
  );
}

export function RefundPolicyPage() {
  usePageMeta(
    "Refund Policy | Work360 Agency",
    "When Work360 Agency gives refunds for monthly services and projects.",
    "/refunds"
  );

  return (
    <article className="rw rwart">
      <style dangerouslySetInnerHTML={{ __html: LEGAL_CSS }} />
      <div className="rwart-col">
        <a href="/" className="rwart-back">
          ← Back to home
        </a>

        <h1 className="rwart-h1">Refund Policy</h1>

        <p className="rwart-meta">
          <span>LAST UPDATED: 31 OCTOBER 2026</span>
        </p>

        <div className="rwart-body">
          <p>
            This page explains when Work360 Agency ("Work360", "we", "us") gives refunds.
          </p>

          <h2>Monthly services</h2>
          <p>
            This covers Google Business Profile, SEO, social media, paid ads and content.
          </p>
          <ul>
            <li>Monthly fees are paid in advance.</li>
            <li>Once work for that month has started, the fee for that month is not refundable.</li>
            <li>To stop the service, email us at least 30 days before. We finish the work already paid for, and then the service ends.</li>
          </ul>

          <h2>One-time projects</h2>
          <p>This covers website design and branding.</p>
          <ul>
            <li>Once work on the project has started, payments are not refundable.</li>
            <li>If you cancel before any work starts, contact us and we will look at a refund case by case.</li>
          </ul>

          <h2>Ad spend</h2>
          <p>
            Ad spend is paid by you directly to Meta or Google, so it is never paid to Work360 and we cannot refund it. Any ad spend refund is between you and Meta or Google.
          </p>

          <h2>Free audit</h2>
          <p>
            The free audit is free. There is nothing to pay and nothing to refund.
          </p>

          <h2>How to ask for a refund</h2>
          <p>
            Email <a href="mailto:work360agency@gmail.com">work360agency@gmail.com</a> with your name, business name and invoice number. We reply within 24 hours. If a refund is approved, we send it back to the same payment method within 7 to 14 working days.
          </p>

          <h2>Changes to this page</h2>
          <p>
            We may update this page from time to time. The date at the top shows when it was last changed.
          </p>
        </div>
      </div>
    </article>
  );
}
