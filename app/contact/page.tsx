import type { Metadata } from "next"; import { FAQ } from "@/components/faq"; import { PageHero } from "@/components/page-hero"; import { SectionHeading } from "@/components/section-heading"; import { ContactForm } from "@/components/contact-form";
export const metadata: Metadata = { title: "Contact", description: "Book a free consultation with Vyana Digital to discuss your website, marketing or AI automation goals." };
export default function Contact() { return <> <div className="pb-8"> <PageHero label="Contact Vyana Digital" title="Ready to grow your business online?" copy="Tell us about your goals and challenges. We'll recommend the right website, marketing, or automation solution for your business."/></div><section className="-mt-8 pb-12">
  <div className="container-page">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">

      <div>
        <h3 className="text-2xl sm:text-3xl font-bold break-words">Professional</h3>
        <p className="text-slate-600">Website Solutions</p>
      </div>

      <div>
        <h3 className="text-2xl sm:text-3xl font-bold break-words">98%</h3>
        <p className="text-slate-600">Client Satisfaction</p>
      </div>

      <div>
        <h3 className="text-2xl sm:text-3xl font-bold break-words">24/7</h3>
        <p className="text-slate-600">Support</p>
      </div>

      <div>
        <h3 className="text-2xl sm:text-3xl font-bold break-words">India</h3>
        <p className="text-slate-600">Working Globally</p>
      </div>

    </div>
  </div>
</section> <section className="pt-0 pb-20 bg-white"><div className="container-page grid gap-12 lg:grid-cols-[1.15fr_.85fr]"><ContactForm/><aside className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-10 shadow-2xl border border-blue-500/20 sticky top-24"><p className="eyebrow text-teal">Contact information</p><h2 className="font-display text-3xl font-bold text-white leading-tight">Let's discuss your next digital project.</h2><p className="mt-4 leading-7 text-slate-300">Whether you need a website, SEO, branding, digital marketing, or AI automation, our team is ready to help you grow faster and smarter.</p> <div className="mt-6 rounded-xl bg-white/5 p-4 border border-white/10">
  <p className="text-sm text-slate-300">
    ✓ Trusted by growing businesses
  </p>
  <p className="text-sm text-slate-300 mt-2">
    ✓ Fast response within 24 hours
  </p>
  <p className="text-sm text-slate-300 mt-2">
    ✓ Free strategy consultation
  </p>
</div><ul className="mt-9 space-y-6 text-base text-white">
  <li>
    <strong>Email:</strong><br />
  <a
    href="mailto:Contactbhardwajshrey@gmail.com"
    className="text-white hover:text-blue-300 transition"
  >
    Contactbhardwajshrey@gmail.com
  </a>
</li>

<li>
   <strong>Phone:</strong><br />
  <a
    href="tel:+918630471168"
    className="text-white hover:text-blue-300 transition"
  >
    +91 86304 71168
  </a>
</li>

<li>
  <strong>Working Hours:</strong><br />
  Monday–Friday, 9:30 AM–6:30 PM IST
</li>

<li>
  <strong>Location:</strong><br />
  India · Working Globally
</li></ul></aside> <div className="mt-8">
  <a
    href="https://wa.me/918630471168?text=Hi%20Vyana%20Digital%2C%20I%20would%20like%20a%20free%20consultation."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600"
  >
    Get Free Consultation on WhatsApp
  </a>
</div> </div></section><section className="section"><div className="container-page grid gap-10 lg:grid-cols-2"><SectionHeading eyebrow="FAQ" title="A few helpful answers before we talk." copy="Still wondering about something? Include it in your message—we&apos;re happy to help."/><FAQ/></div></section></>; }
