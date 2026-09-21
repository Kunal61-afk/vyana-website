import type { Metadata } from "next"; import { PageHero } from "@/components/page-hero"; import { SectionHeading } from "@/components/section-heading"; import { values } from "@/lib/content";
export const metadata: Metadata = { title: "About us", description: "Learn how Vyana Digital brings strategy, creativity and technology together for sustainable growth." };
export default function About() { return <><PageHero label="About Vyana" title="Helping businesses grow through websites, marketing, and automation." copy="Vyana Digital helps businesses build a stronger online presence with modern websites, local SEO, digital marketing, and AI-powered automation."/><section className="py-20"><div className="container-page grid gap-12 lg:grid-cols-2"><div><SectionHeading eyebrow="Our story" title="Born from a belief that good digital work should feel simpler."/><p className="prose-copy mt-6"> Vyana Digital was created to help businesses build a stronger online presence without the complexity of dealing with multiple agencies and tools.</p><p className="prose-copy mt-5"> We combine website development, local SEO, digital marketing, and business automation into one streamlined solution that helps businesses attract, convert, and retain customers.</p><p className="prose-copy mt-5">Our goal is simple: help businesses generate more enquiries, save time through automation, and grow sustainably.</p></div><div className="rounded-3xl bg-ink p-8 sm:p-10"><p className="eyebrow text-teal">What guides us</p><h2 className="font-display text-3xl font-semibold text-white">Human partnership. Intelligent systems. Sustainable momentum.</h2><div className="mt-10 grid gap-6 sm:grid-cols-2"><div><p className="font-display text-lg font-semibold text-white">Our mission</p><p className="mt-2 leading-7 text-slate-400">Help businesses grow through strategic websites, local search visibility, digital marketing, and intelligent automation.</p></div><div><p className="font-display text-lg font-semibold text-white">Our vision</p><p className="mt-2 leading-7 text-slate-400">Become the trusted digital growth partner for businesses looking to scale online.</p></div></div></div></div></section><section className="section"><div className="container-page"><SectionHeading align="center" eyebrow="Our values" title="The standards behind every decision."/><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map(v => {const Icon=v.icon; return <article className="rounded-2xl bg-white p-6 shadow-sm" key={v.title}><Icon className="text-brand"/><h3 className="heading mt-5 text-xl">{v.title}</h3><p className="mt-3 text-sm leading-7">{v.text}</p></article>})}</div></div></section> <section className="section bg-white">
  <div className="container-page grid gap-12 lg:grid-cols-2 items-center">
    <div>
  <img
    src="/founder.jpg"
    alt="Shrey Bharadwaj"
    className="w-full max-w-xl mx-auto rounded-3xl shadow-2xl border border-slate-200" 
  />
</div>
<div>
    <div className="max-w-xl">
    <p className="eyebrow">
      Meet The Founder
    </p>

    <h2 className="mt-4 font-display text-4xl font-semibold text-slate-900">
       Shrey Bharadwaj 
    </h2>
    <p className="mt-2 text-brand font-medium">
        Founder & Digital Growth Strategist
      </p>
    <div className="mt-4 flex flex-wrap gap-3">
  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-brand">
    7+ Years Experience
  </span>

   <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-brand">
    Web • SEO • Automation
  </span>
</div>
    <p className="mt-6 text-lg leading-8 text-slate-600">
      Shrey Bharadwaj is the founder of Vyana Digital, a digital growth agency focused on helping businesses build a stronger online presence through websites, marketing, and automation.
    </p>
    <p className="mt-5 text-lg leading-8 text-slate-600">
  With over 7 years of experience in web design, graphic design, digital marketing, and brand development, he has worked with businesses and creators to transform ideas into professional digital experiences that drive real results.
</p>

<p className="mt-5 text-lg leading-8 text-slate-600">
  His approach combines modern website development, search visibility, lead generation strategies, and business automation to help companies attract more customers, improve efficiency, and grow sustainably.
</p>

<p className="mt-5 text-lg leading-8 text-slate-600">
  Through Vyana Digital, his mission is simple: make high-quality digital solutions accessible, transparent, and results-driven for businesses of all sizes.
</p>
<div className="mt-8 border-l-4 border-brand pl-6 italic text-slate-600">
  "Technology should simplify business growth, not complicate it. Our goal is to build digital systems that create real business results."
</div>
</div>
</div>
  </div>
</section> <section className="section bg-brand text-white">
  <div className="container-page text-center">

    <h2 className="font-display text-4xl font-semibold">
      Ready to grow your business online?
    </h2>

    <p className="mt-4 text-lg text-white/80">
      Let's discuss your website, SEO, digital marketing, or automation project.
    </p>

    <a
      href="/contact"
      className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-brand transition hover:opacity-90"
    >
      Book Free Consultation
    </a>

  </div>
</section></>; }
