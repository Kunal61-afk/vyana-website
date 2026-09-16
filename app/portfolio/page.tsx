import type { Metadata } from "next"; import Link from "next/link"; import { ArrowUpRight } from "lucide-react"; import { PageHero } from "@/components/page-hero"; import { SectionHeading } from "@/components/section-heading";
export const metadata: Metadata = { title: "Portfolio", description: "Selected Vyana Digital work spanning websites, digital growth and AI-powered operations." };
const projects = [
  [
    "Business Website Development",
    "Website Design",
    "Professional websites built for businesses looking to establish a strong online presence and generate more enquiries.",
    "from-blue-500 to-indigo-800"
  ],
  [
    "Local SEO Growth",
    "Digital Marketing",
    "Helping businesses improve local visibility, attract nearby customers, and increase organic traffic.",
    "from-teal-400 to-emerald-800"
  ],
  [
    "Google Business Optimisation",
    "SEO Strategy",
    "Optimising business profiles to improve search visibility and customer engagement.",
    "from-orange-300 to-rose-600"
  ],
  [
    "AI Chatbot Automation",
    "AI Solutions",
    "Automated customer support and lead qualification systems designed to save time and improve response speed.",
    "from-violet-500 to-fuchsia-800"
  ],
  [
    "Landing Page Design",
    "Conversion Focused",
    "High-converting landing pages created to turn visitors into enquiries and customers.",
    "from-sky-400 to-blue-700"
  ],
  [
    "Workflow Automation",
    "Business Automation",
    "Streamlined business processes using AI and automation tools to improve efficiency.",
    "from-amber-300 to-orange-600"
  ]
];
export default function Portfolio() { return <><PageHero label="Selected work" title="Digital experiences with a job to do." copy="A sample of the thoughtful brands, systems, and growth stories we&apos;re proud to help shape."/><section className="section bg-white"><div className="container-page"><SectionHeading eyebrow="Our portfolio" title="Made with intent, not just aesthetics."/><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map(([name,type,copy,gradient]) => <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-soft" key={name}><div className={`flex aspect-[1.25] items-end bg-gradient-to-br p-6 ${gradient}`}><div className="w-full rounded-xl bg-white/15 p-4 backdrop-blur-sm"><p className="text-xs font-semibold uppercase tracking-wider text-white/70">{type}</p><p className="mt-1 font-display text-xl font-semibold text-white">{name}</p></div></div><div className="p-6"><p className="leading-7 text-slate-600">{copy}</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 font-semibold text-brand">Discuss Similar Project <ArrowUpRight size={16}/></Link></div></article>)}</div></div></section></>; }
