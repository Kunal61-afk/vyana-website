"use client";
import { ArrowUp, MessageCircle } from "lucide-react"; import { useEffect, useState } from "react";
export function FloatingActions() { const [visible, setVisible] = useState(false); useEffect(() => { const listener = () => setVisible(window.scrollY > 500); window.addEventListener("scroll", listener); return () => window.removeEventListener("scroll", listener); }, []); return <div className="fixed bottom-28 right-4 z-50 flex flex-col gap-4 md:bottom-6 md:right-4"><a href="https://wa.me/918630471168" target="_blank" aria-label="Chat on WhatsApp" className="rounded-full bg-[#25D366] p-3 text-white shadow-lg transition hover:scale-105 md:p-3.5">
  <MessageCircle size={20}/>
</a>

{visible &&

<button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  aria-label="Scroll to top"
  className="rounded-full bg-ink p-3 text-white shadow-lg transition hover:scale-105 md:p-3.5"
>
  <ArrowUp size={18}/>
</button>
}</div>; }
