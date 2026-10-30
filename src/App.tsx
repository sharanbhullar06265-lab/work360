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
            counterLabel="VIEWS FOR OUR CLIENTS"
            counterStart={270461}
            eyebrow="Now booking · Free audit for Aussie businesses"
            focusX={50}
            focusY={50}
            heading="Get seen by|the *right crowd.*"
            hint="Move to reach · click to launch a campaign"
            navCta="Book a call"
            navLinks="Services:/#services, Work:/#work, Pricing:/#pricing, About:/#about, Blog:/#blog"
            primary="Book a strategy call"
            primaryLink="/#contact"
            secondary="Get a free audit"
            secondaryLink="/#contact"
            services="SEO, Social media, Paid ads, Content"
            showNav={false}
            subCopy="We get Australian small businesses seen on Google, social media and ads, and report every result in plain numbers."
            style={{ width: "100%" }}
          />
        </div>

        {/* (00) Clients — Radar */}
        <div id="clients">
          <RwClients
            {...THEME_TOKENS}
            bpHint="auto"
            clients="Facebook views, Engagement, New followers, Comments, Messages, Group post reach, Reel views, Shares, Google Profile views, Instagram reach"
            badges="390k;41k;1,500+;150+;70+;30k+;8k+;18+;507;1,500"
            clientsCount=""
            eyebrow="(00) Real results"
            heading="Real numbers from a|*Perth farm stall*."
            line="One local business, 28 days of Google, Facebook and Instagram work. Every number below is real."
            ratingLine="GOOGLE · FACEBOOK · INSTAGRAM"
            readout="Last ping"
            rings="Local;Regional;National;Global"
            style={{ width: "100%" }}
          />
        </div>

        {/* (01) Why Work360 — 1,200 People Crowd */}
        <div id="about">
          <RwIntro
            {...THEME_TOKENS}
            bpHint="auto"
            button="About us"
            buttonLink="/#team"
            buyersShare={12}
            clusters="Search|312|searching “café near me”;Feeds|1,204|following #perthfood;Audiences|88|lookalikes"
            crowdLabel="locals near you"
            eyebrow="(01) Why Work360"
            facts="Founded 2026;Remote team;Serving Australia"
            heading="Everyone is a|crowd. We find|*your brand*."
            ratioLabel="1 in"
            ratioTail="is your buyer"
            subCopy="Most local businesses aren't invisible. They're just showing up in the wrong places. We find where your customers search, scroll and ask, and put you there."
            style={{ width: "100%" }}
          />
        </div>

        {/* (02) Services — 6-Channel Horizontal Accordion */}
        <div id="services">
          <RwServices
            {...THEME_TOKENS}
            adsHeadline="Free coffee with your first breakfast"
            articleTitle="How to rank #1 for “near me” searches"
            bpHint="auto"
            brandName="yourcafe"
            button="All services"
            buttonLink="/#pricing"
            exploreLabel="Explore"
            eyebrow="(02) Services"
            fromLabel="From"
            heading="Six channels.|*One* growth plan."
            hint="Scroll to switch channels, or pick one"
            includesLabel="What's included"
            intro="SEO, social, ads, content, web and brand under one retainer, one team and one monthly report."
            seoQuery="cafe near me"
            socialHandle="@yourcafe"
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
            foot="A real client funnel · Perth farm stall · 28 days"
            heading="From attention|to *clients*."
            intro="Every retainer runs the same four steps. You see the funnel fill in your report every month."
            stages="Reach:390,229;Clicks:17,000;Leads:1,940;Clients:370"
            steps="Audit · Week 1: We study your site, ads and competitors and find the fastest wins.;Launch · Week 2–3: Campaigns, content and fixes go live.;Optimise · Month 2: We test creatives, keywords and pages every week.;Scale · Month 3+: We put more budget and content behind what works."
            style={{ width: "100%" }}
          />
        </div>

        {/* (05) The Numbers — Full-Bleed Lime Dashboard */}
        <div id="numbers">
          <RwNumbers
            {...THEME_TOKENS}
            bpHint="auto"
            deltaLabel="Still growing"
            events="GOOGLE BUSINESS PROFILE;WEBSITES;SOCIAL MEDIA;ADS;BRANDING;PERTH, WA"
            eyebrow="(05) The numbers"
            heading="Real results we *got*."
            intro="Real Google numbers from a Perth client."
            kpis="4,843+:people who viewed the profile:up;509+:profile interactions:up;295+:direction requests:up;189+:website clicks:up"
            liveLabel="Live"
            months="Start,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Now"
            range="Last 12 months"
            reportLabel="Client report · 2026"
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
            posts="https://framerusercontent.com/images/xbfdpTvZzzafiJOwtXCs0luyp2I.webp|@yourcafe|2418|post;https://framerusercontent.com/images/1DPklcMWo4iq1F5uWVjcytvrsc.webp|@yourbeauty|8114|carousel|5;https://framerusercontent.com/images/yOk3vEq9TQ9CWpwuFmZY86mAVY.webp|@yourgym|3912|reel|48k;https://framerusercontent.com/images/s0jwUqVTFxGplLAwU0WLa8rbdw.webp|@yourbeachshop|5630|post;https://framerusercontent.com/images/YpYjh1duUyRdFMaCaQZ6JVDbmko.webp|@yourbakery|1204|post;https://framerusercontent.com/images/HeKFyo7MfYy7GEQSGOPGXvhVHvo.webp|@yourstore|9870|reel|112k;https://framerusercontent.com/images/oSWgZWTjPoakKUa7CvtJ6TXueP0.webp|@yourbeauty|3307|carousel|3;https://framerusercontent.com/images/3nqFQlS1bXsh1PS74cijri0AhSM.webp|@yourflorist|1786|post;https://framerusercontent.com/images/yg9StsTkn2mS5VxfA3YnyrJNM1Q.webp|@yourpetshop|2205|reel|21k;https://framerusercontent.com/images/mnE5eA5CunHm89doTbOt2H7pHdE.webp|@yourflorist|2874|carousel|4;https://framerusercontent.com/images/uYN9bcKFZFsqzLzQWUSswf4QIs.webp|@yourbakery|2951|carousel|6;https://framerusercontent.com/images/eMqxq3byjv5ceZYESvRLuMWVug.webp|@yourbeachshop|3690|post;https://framerusercontent.com/images/xbfdpTvZzzafiJOwtXCs0luyp2I.webp|@yourcafe|1932|post;https://framerusercontent.com/images/yOk3vEq9TQ9CWpwuFmZY86mAVY.webp|@yourgym|4480|reel|64k;https://framerusercontent.com/images/1DPklcMWo4iq1F5uWVjcytvrsc.webp|@yourbeauty|2660|carousel|3;https://framerusercontent.com/images/3nqFQlS1bXsh1PS74cijri0AhSM.webp|@yourflorist|1540|post;https://framerusercontent.com/images/HeKFyo7MfYy7GEQSGOPGXvhVHvo.webp|@yourstore|7120|reel|84k;https://framerusercontent.com/images/uYN9bcKFZFsqzLzQWUSswf4QIs.webp|@yourbakery|2074|carousel|4"
            reelLabel="views"
            stats="Reels;Carousels;Stories"
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
            subCopy="One team for every channel you buy. One plan, one report, no hand-offs."
            style={{ width: "100%" }}
          />
        </div>

        {/* Client Reviews — iPhone Lockscreen Notifications */}
        <div id="reviews">
          <RwReviews
            {...THEME_TOKENS}
            appName="Work360"
            badges="Facebook;34 in 1 hour;Perth, WA"
            bpHint="auto"
            button="Read case studies"
            buttonLink="/#work"
            clock="09:41"
            date="Tuesday, 29 September"
            eyebrow="Client reviews"
            heading="Real messages.|Real *growth*."
            rating="1,499"
            reviewsLabel="Followers for one client"
            subCopy="These are real messages from our client when the numbers moved."
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
            sub="Pick the channels you need. Every plan comes with a strategist and a plain-number monthly report."
            style={{ width: "100%" }}
          />
        </div>

        {/* (09) FAQ — Accordion with Vertical Progress Track */}
        <div id="faq">
          <RwFaq
            {...THEME_TOKENS}
            bpHint="auto"
            button="Get a free audit"
            buttonLink="/#contact"
            cardBody="We check your site, socials and ads, and send you a written plan. You keep it either way."
            cardLabel="Still unsure?"
            cardTitle="Get a free audit."
            emailLabel="Or write to"
            eyebrow="(09) FAQ"
            firstOpen={true}
            heading="Questions,|*answered*."
            replyNote="We reply within 24 hours"
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
            teamNote="A focused remote team"
            style={{ width: "100%" }}
          />
        </div>
      </main>

      {/* Footer — Giant Interactive Work360 Wordmark */}
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
          madeWith="Built by Work360"
          madeWithLink=""
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
