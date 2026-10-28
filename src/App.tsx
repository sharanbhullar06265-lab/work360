/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { CmsBridge } from "./cmsData";
import RwLoader from "./rw/RwLoader.jsx";
import RwHeader from "./rw/RwHeader.jsx";
import RwSmooth from "./rw/RwSmooth.jsx";
import RwHero from "./rw/RwHero.jsx";
import RwClients from "./rw/RwClients.jsx";
import RwIntro from "./rw/RwIntro.jsx";
import RwServices from "./rw/RwServices.jsx";
import RwWork from "./rw/RwWork.jsx";
import RwFunnel from "./rw/RwFunnel.jsx";
import RwNumbers from "./rw/RwNumbers.jsx";
import RwFeed from "./rw/RwFeed.jsx";
import RwTeam from "./rw/RwTeam.jsx";
import RwReviews from "./rw/RwReviews.jsx";
import RwPricing from "./rw/RwPricing.jsx";
import RwFaq from "./rw/RwFaq.jsx";
import RwJournal from "./rw/RwJournal.jsx";
import RwCta from "./rw/RwCta.jsx";
import RwFooter from "./rw/RwFooter.jsx";

const THEME_TOKENS = {
  bone: "var(--token-9237d7aa-ae04-4663-8b83-ee7cccdc8605)",
  ink: "var(--token-45f6f621-43e5-4692-9e92-8cdf32153d42)",
  brass: "var(--token-c7a2760e-f616-4352-83dc-0c94bfe303e8)",
  pine: "var(--token-a7e52844-8ba1-418e-b1e2-04e4f47f2238)",
  fog: "var(--token-a86eb914-2cdf-4002-b215-1058b133418e)",
  stone: "var(--token-51259b5f-7a5c-47ce-a1f8-c0bff67d9863)",
  cloud: "var(--token-162a8ed2-d9cc-4e63-b409-eec78655849b)",
  night: "var(--token-23acf9e9-1a5b-4e7c-909d-51fc1ee8c0c1)",
  customFonts: false,
  displayFont: {
    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
    fontStyle: "normal",
    fontWeight: 400,
  },
  bodyFont: {
    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
    fontStyle: "normal",
    fontWeight: 400,
  },
  monoFont: {
    fontFamily: '"Fragment Mono", "Fragment Mono Placeholder", monospace',
    fontStyle: "normal",
    fontWeight: 400,
  },
};

export default function App() {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href") || "";
      if (!rawHref || /^(mailto|tel|sms|javascript):/i.test(rawHref)) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      const path = url.pathname.replace(/\/+$/, "") || "/";
      const hash = url.hash.replace(/^#/, "");

      let sectionId = "";
      if (hash) {
        sectionId = hash;
      } else if (path === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      } else if (path.startsWith("/services")) {
        sectionId = "services";
      } else if (path.startsWith("/work")) {
        sectionId = "work";
      } else if (path.startsWith("/pricing")) {
        sectionId = "pricing";
      } else if (path.startsWith("/team")) {
        sectionId = "team";
      } else if (path.startsWith("/about")) {
        sectionId = "about";
      } else if (path.startsWith("/blog")) {
        sectionId = "blog";
      } else if (path.startsWith("/contact") || path.startsWith("/careers")) {
        sectionId = "contact";
      } else if (path.startsWith("/privacy") || path.startsWith("/terms") || path.startsWith("/cookies")) {
        sectionId = "footer";
      }

      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          e.preventDefault();
          try {
            document.documentElement.style.overflow = "";
            (window as any).__ltLenis?.start?.();
          } catch {}
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", position: "relative" }}>
      {/* Hidden CMS Bridge rows powering all sections */}
      <CmsBridge />

      {/* Initial Brand Loader & Smooth Wheel Controller */}
      <RwLoader
        {...THEME_TOKENS}
        bpHint="auto"
        duration={1.15}
        enabled={true}
        oncePerSession={true}
        respectRm={true}
        tag=""
        word=""
      />
      <RwSmooth enabled={true} strength={1} />

      {/* Floating 3-Zone Top Bar */}
      <RwHeader
        {...THEME_TOKENS}
        bpHint="auto"
        closeLabel="Close"
        contactLabel="Say hello"
        ctaLabel="Book a call"
        followLabel="Follow"
        links="Services:/#services, Work:/#work, Pricing:/#pricing, About:/#about, Blog:/#blog"
        menuLabel="Menu"
        timeLabel="Local time"
        style={{ width: "100%" }}
      />

      {/* Main 12-Section Homepage Flow */}
      <main style={{ width: "100%", position: "relative", zIndex: 1 }}>
        {/* Hero */}
        <div id="hero">
          <RwHero
            {...THEME_TOKENS}
            bpHint="auto"
            chips="❤|1.2k likes on one reel;+|86 new followers;★|New 5-star review;#1|“dentist near me”;●|12 leads today;↗|CTR up to 4.8%;✓|Call booked · Tue 10:30;◎|+318 profile visits;▶|48k video views;$|ROAS 6.2×"
            counterLabel="People reached for clients this month"
            counterStart={1284300}
            eyebrow=""
            focusX={50}
            focusY={50}
            heading="Get seen by|the *right crowd.*"
            hint="Move to reach · click to launch a campaign"
            navCta="Book a call"
            navLinks="Services:/#services, Work:/#work, Pricing:/#pricing, About:/#about, Blog:/#blog"
            primary="Book a strategy call"
            secondary="See our work"
            secondaryLink="/#work"
            services="SEO, Social media, Paid ads, Content"
            showNav={false}
            subCopy="Reachwise is a digital marketing agency. We run SEO, social media and paid ads that put your brand in front of the people who buy, and we report every result in plain numbers."
            style={{ width: "100%" }}
          />
        </div>

        {/* (00) Clients — Radar */}
        <div id="clients">
          <RwClients
            {...THEME_TOKENS}
            bpHint="auto"
            clients="Northside Dental, Kettlebrook Coffee, Fitloop, Haven Realty, Lumen Skin, Orbit Legal, Parcel & Co, Verde Studio, Tallow, Brightline"
            badges="+212%;+96k;6.2×;+122;$142k;57 consults;+88%;+3.1×;+64%;+41k"
            clientsCount=""
            eyebrow="(00) Clients"
            heading="{n} brands|*on our radar*."
            line="Local clinics, cafés and online shops to national brands. Every one of them came to us to be found by more of the right people."
            ratingLine=""
            readout="Last ping"
            rings="Local;Regional;National;Global"
            style={{ width: "100%" }}
          />
        </div>

        {/* (01) Why Reachwise — 1,200 People Crowd */}
        <div id="about">
          <RwIntro
            {...THEME_TOKENS}
            bpHint="auto"
            button="About us"
            buttonLink="/#team"
            buyersShare={12}
            clusters="Search|312|searching “dentist near me”;Feeds|1,204|following #coffee;Audiences|88|lookalikes"
            crowdLabel="people in the crowd"
            eyebrow="(01) Why Reachwise"
            facts="Founded 2016;38 people;New York + remote"
            heading="Everyone is a crowd.|We find *your buyers*."
            ratioLabel="1 in"
            ratioTail="is your buyer"
            subCopy="Most brands aren't invisible. They're talking to the wrong people. We find the searches, feeds and audiences where your buyers already are — and put you there."
            style={{ width: "100%" }}
          />
        </div>

        {/* (02) Services — 6-Channel Horizontal Accordion */}
        <div id="services">
          <RwServices
            {...THEME_TOKENS}
            adsHeadline="Free whitening with every new-patient visit"
            articleTitle="How to rank #1 for “near me” searches"
            bpHint="auto"
            brandName="Kettlebrook"
            button="All services"
            buttonLink="/#pricing"
            exploreLabel="Explore"
            eyebrow="(02) Services"
            fromLabel="From"
            heading="Six channels.|*One* growth plan."
            hint="Scroll to switch channels, or pick one"
            includesLabel="What's included"
            intro="SEO, social, ads, content, web and brand under one retainer, one team and one monthly report."
            seoQuery="dentist near me"
            socialHandle="@kettlebrook.coffee"
            webUrl="yoursite.com/offer"
            style={{ width: "100%" }}
          />
        </div>

        {/* (03) Case Studies — Before / After Slider */}
        <div id="work">
          <RwWork
            {...THEME_TOKENS}
            afterLabel="After"
            autoplay={true}
            beforeLabel="Before"
            bpHint="auto"
            button="All case studies"
            buttonLink="/#reviews"
            dragLabel="Drag"
            eyebrow="(03) Case studies"
            heading="Results you can|*count*."
            intro="Six clients, six channels, one habit: we report the number that pays the bills, before and after."
            readLabel="Read the case"
            sliderLabel="Compare before and after"
            style={{ width: "100%" }}
          />
        </div>

        {/* (04) How We Work — Trapezoid Funnel */}
        <div id="process">
          <RwFunnel
            {...THEME_TOKENS}
            bpHint="auto"
            eyebrow="(04) How we work"
            foot="A typical client funnel · last 90 days"
            heading="From attention|to *clients*."
            intro="Every retainer runs the same four steps. You see the funnel fill in your report every week."
            stages="Reach:1,284,300;Clicks:48,120;Leads:2,940;Clients:312"
            steps="Audit · Week 1: We study your site, ads and competitors and find the fastest wins.;Launch · Week 2–3: Campaigns, content and fixes go live.;Optimise · Month 2: We test creatives, keywords and pages every week.;Scale · Month 3+: We put more budget and content behind what works."
            style={{ width: "100%" }}
          />
        </div>

        {/* (05) The Numbers — Full-Bleed Lime Dashboard */}
        <div id="numbers">
          <RwNumbers
            {...THEME_TOKENS}
            bpHint="auto"
            deltaLabel="vs last year"
            events="New lead · Haven Realty · 2 min ago;Call booked · Northside Dental · 6 min ago;Reel passed 48k views · Kettlebrook Coffee · 11 min ago;ROAS 6.4× today · Fitloop · 18 min ago;#1 for “skin clinic near me” · Lumen Skin · 26 min ago;5-star review · Orbit Legal · 34 min ago;New lead · Northside Dental · 41 min ago;212 new followers · Lumen Skin · 1 h ago"
            eyebrow="(05) The numbers"
            heading="What our clients|*got* last year."
            intro="Every client gets this report each month. These are the averages across all of them."
            kpis="212%:average organic growth:up;6.2×:return on ad spend:up;38M:people reached in 2025:up;140+:brands grown since 2016:up"
            liveLabel="Live"
            months="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
            range="Last 12 months"
            reportLabel="Client report · 2025"
            tabs="Overview, SEO, Social, Ads"
            style={{ width: "100%" }}
          />
        </div>

        {/* (06) Content — Masonry Social Feed */}
        <div id="content">
          <RwFeed
            {...THEME_TOKENS}
            bpHint="auto"
            button="Social media service"
            buttonLink="/#services"
            eyebrow="(06) Content"
            heading="Content that|*stops the scroll.*"
            posts="https://framerusercontent.com/images/xbfdpTvZzzafiJOwtXCs0luyp2I.webp|@kettlebrook.coffee|2418|post;https://framerusercontent.com/images/1DPklcMWo4iq1F5uWVjcytvrsc.webp|@lumenskin|8114|carousel|5;https://framerusercontent.com/images/yOk3vEq9TQ9CWpwuFmZY86mAVY.webp|@fitloop|3912|reel|48k;https://framerusercontent.com/images/s0jwUqVTFxGplLAwU0WLa8rbdw.webp|@parcel.co|5630|post;https://framerusercontent.com/images/YpYjh1duUyRdFMaCaQZ6JVDbmko.webp|@tallow.kitchen|1204|post;https://framerusercontent.com/images/HeKFyo7MfYy7GEQSGOPGXvhVHvo.webp|@brightline.run|9870|reel|112k;https://framerusercontent.com/images/oSWgZWTjPoakKUa7CvtJ6TXueP0.webp|@lumenskin|3307|carousel|3;https://framerusercontent.com/images/3nqFQlS1bXsh1PS74cijri0AhSM.webp|@verde.studio|1786|post;https://framerusercontent.com/images/yg9StsTkn2mS5VxfA3YnyrJNM1Q.webp|@haven.realty|2205|reel|21k;https://framerusercontent.com/images/mnE5eA5CunHm89doTbOt2H7pHdE.webp|@verde.studio|2874|carousel|4;https://framerusercontent.com/images/uYN9bcKFZFsqzLzQWUSswf4QIs.webp|@tallow.kitchen|2951|carousel|6;https://framerusercontent.com/images/eMqxq3byjv5ceZYESvRLuMWVug.webp|@parcel.co|3690|post;https://framerusercontent.com/images/xbfdpTvZzzafiJOwtXCs0luyp2I.webp|@kettlebrook.coffee|1932|post;https://framerusercontent.com/images/yOk3vEq9TQ9CWpwuFmZY86mAVY.webp|@fitloop|4480|reel|64k;https://framerusercontent.com/images/1DPklcMWo4iq1F5uWVjcytvrsc.webp|@lumenskin|2660|carousel|3;https://framerusercontent.com/images/3nqFQlS1bXsh1PS74cijri0AhSM.webp|@verde.studio|1540|post;https://framerusercontent.com/images/HeKFyo7MfYy7GEQSGOPGXvhVHvo.webp|@brightline.run|7120|reel|84k;https://framerusercontent.com/images/uYN9bcKFZFsqzLzQWUSswf4QIs.webp|@tallow.kitchen|2074|carousel|4"
            reelLabel="views"
            stats="4.1M views last month;38k saves;+212% reach"
            subCopy="We plan, shoot, edit and post for our clients every week. Reels, carousels and stories made for how each platform actually works."
            style={{ width: "100%" }}
          />
        </div>

        {/* (07) Team — Staggered Specialists Radar */}
        <div id="team">
          <RwTeam
            {...THEME_TOKENS}
            bpHint="auto"
            button="Meet the team"
            buttonLink="/#contact"
            eyebrow="(07) Team"
            heading="Specialists,|not *generalists*."
            linkedinLabel="LinkedIn"
            signalLabel="Specialists reached"
            subCopy="Every account gets a senior lead for each channel you buy. No juniors learning on your budget, no hand-offs."
            style={{ width: "100%" }}
          />
        </div>

        {/* Client Reviews — iPhone Lockscreen Notifications */}
        <div id="reviews">
          <RwReviews
            {...THEME_TOKENS}
            appName="Reachwise"
            badges="Google 4.9;Clutch 5.0;G2 4.8"
            bpHint="auto"
            button="Read case studies"
            buttonLink="/#work"
            clock="09:41"
            date="Tuesday, 29 September"
            eyebrow="Client reviews"
            heading="Clients who|*stayed*."
            rating=""
            reviewsLabel="client reviews"
            subCopy="Our average client has been with us for 3.4 years. These are the messages that land in our inbox when the numbers move."
            times="now;2m ago;9m ago;26m ago;1h ago;3h ago"
            style={{ width: "100%" }}
          />
        </div>

        {/* (08) Pricing — Monthly / Quarterly Retainers */}
        <div id="pricing">
          <RwPricing
            {...THEME_TOKENS}
            billedM="Billed monthly · cancel anytime"
            billedQ="Billed every 3 months"
            bpHint="auto"
            compare="Compare plans"
            compareLink="/#faq"
            currency="$"
            eyebrow="(08) Pricing"
            featuredChip="Most picked"
            heading="Simple monthly|*retainers*."
            monthly="Monthly"
            note="No long contracts · 30 days notice · ad spend paid to the platforms directly"
            perMonth="/mo"
            quarterly="Quarterly"
            saveTag="−10%"
            sub="Pick the channels you need. Every plan comes with a strategist, a live dashboard and plain-number reports."
            style={{ width: "100%" }}
          />
        </div>

        {/* (09) FAQ — Accordion with Vertical Progress Track */}
        <div id="faq">
          <RwFaq
            {...THEME_TOKENS}
            bpHint="auto"
            button="Book a call"
            cardBody="We look at your site, socials and ads live, and you keep the plan either way."
            cardLabel="Still unsure?"
            cardTitle="Ask us on a free 30-minute call."
            emailLabel="Or write to"
            eyebrow="(09) FAQ"
            firstOpen={true}
            heading="Questions,|*answered*."
            replyNote="We reply within 2 hours"
            style={{ width: "100%" }}
          />
        </div>

        {/* (10) Insights — Featured + 2 Editorial Rows */}
        <div id="blog">
          <RwJournal
            {...THEME_TOKENS}
            bpHint="auto"
            button="All articles"
            buttonLink="/#contact"
            chip="▲|2.4k reads this week"
            count={3}
            eyebrow="(10) Insights"
            heading="Ideas we|*test* first."
            readSuffix="read"
            sub="What we learn running campaigns every week, written up so you can use it too."
            style={{ width: "100%" }}
          />
        </div>

        {/* (11) Free Audit — Ready to be seen? */}
        <div id="contact">
          <RwCta
            {...THEME_TOKENS}
            bpHint="auto"
            budgetLabel="Monthly budget"
            budgets="Under $2k/mo, $2k–$5k/mo, $5k–$10k/mo, $10k+/mo"
            button="Get my free audit"
            cardLabel="Availability"
            clockLabel="Our time"
            emailPlaceholder="Work email"
            eyebrow="(11) Free audit"
            heading="Ready to be|*seen?*"
            privacy="No spam. We reply within 2 hours."
            spotsLeft={3}
            spotsNote="New clients start on the 1st of each month"
            spotsTitle="3 spots left for Q4"
            spotsTotal={8}
            sub="Get a free 30-minute audit of your site, socials and ads. You keep the plan, whether we work together or not."
            teamNote="38 specialists on the team"
            style={{ width: "100%" }}
          />
        </div>
      </main>

      {/* Footer — Giant Interactive Reachwise Wordmark */}
      <div id="footer">
        <RwFooter
          {...THEME_TOKENS}
          blurb=""
          bpHint="auto"
          button="Book a strategy call"
          clockLabel="Local time"
          company="About:/#about, Work:/#work, Team:/#team, Careers:/#contact, Contact:/#contact"
          companyTitle="Company"
          contactTitle="Contact"
          hint="Move over the name"
          layer={9}
          legal="Privacy:/#footer, Terms:/#footer, Cookies:/#footer"
          madeWith="Made with Framer"
          madeWithLink="https://www.framer.com"
          resources="Blog:/#blog, Pricing:/#pricing, FAQ:/#faq"
          resourcesTitle="Resources"
          reveal={false}
          servicesTitle="Services"
          wordmark=""
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
