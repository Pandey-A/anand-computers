import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, Monitor, Scale, TrendingUp } from "lucide-react";

const rules = [
  "Use authorized organizations for e-waste disposal.",
  "Meet applicable Extended Producer Responsibility targets.",
  "Maintain documentation for compliant handling and transport.",
  "Follow current state and central regulatory requirements.",
];

const EWasteChallenge = () => (
  <section id="challenge" className="py-[clamp(72px,9vw,124px)]">
    <div className="mx-auto w-[min(100%-48px,1200px)] max-[700px]:w-[min(100%-36px,560px)]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-[13px] py-[7px] text-xs font-normal tracking-[0.01em] text-muted-foreground">Why responsible recycling matters</span>
        <h2 className="mt-[18px] max-w-[700px] text-[clamp(32px,5vw,58px)] font-light leading-[1.08] tracking-[-0.045em] text-foreground">
          Better outcomes start with a better end-of-life plan.
        </h2>
      </motion.div>

      <div className="mt-[38px] grid grid-cols-2 gap-[18px] max-[700px]:grid-cols-1">
        <motion.article
          className="rounded-3xl border border-border/75 bg-card p-[30px] shadow-[0_16px_44px_hsl(215_32%_20%/.045)]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="grid h-12 w-12 flex-[0_0_auto] place-items-center rounded-[15px] bg-primary/10 text-primary"><TrendingUp size={22} /></span>
          <h3 className="mb-[14px] mt-[18px] text-[22px] font-normal">A growing responsibility</h3>
          <ul className="m-0 grid list-none gap-3 p-0 text-sm leading-[1.55] text-muted-foreground">
            <li className="flex items-start gap-[10px]"><ArrowRight className="mt-0.5 w-[17px] shrink-0 text-primary" /> India is among the world's largest generators of e-waste.</li>
            <li className="flex items-start gap-[10px]"><ArrowRight className="mt-0.5 w-[17px] shrink-0 text-primary" /> Businesses retire devices continuously as technology changes.</li>
            <li className="flex items-start gap-[10px]"><ArrowRight className="mt-0.5 w-[17px] shrink-0 text-primary" /> Responsible recycling protects resources and reduces landfill.</li>
          </ul>
        </motion.article>
        <motion.article
          className="rounded-3xl border border-border/75 bg-card p-[30px] shadow-[0_16px_44px_hsl(215_32%_20%/.045)]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          <span className="grid h-12 w-12 flex-[0_0_auto] place-items-center rounded-[15px] bg-primary/10 text-primary"><Monitor size={22} /></span>
          <h3 className="mb-[14px] mt-[18px] text-[22px] font-normal">Common sources of e-waste</h3>
          <ul className="m-0 grid list-none gap-3 p-0 text-sm leading-[1.55] text-muted-foreground">
            <li className="flex items-start gap-[10px]"><ArrowRight className="mt-0.5 w-[17px] shrink-0 text-primary" /> Laptops, desktops, servers and networking equipment.</li>
            <li className="flex items-start gap-[10px]"><ArrowRight className="mt-0.5 w-[17px] shrink-0 text-primary" /> Mobile devices, displays and office peripherals.</li>
            <li className="flex items-start gap-[10px]"><ArrowRight className="mt-0.5 w-[17px] shrink-0 text-primary" /> Equipment refreshes, relocations and business closures.</li>
          </ul>
        </motion.article>
      </div>

      <motion.article
        className="mt-[18px] rounded-3xl border border-border/75 bg-card p-[30px] shadow-[0_16px_44px_hsl(215_32%_20%/.045)]"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start gap-[14px]">
          <span className="grid h-12 w-12 flex-[0_0_auto] place-items-center rounded-[15px] bg-primary/10 text-primary"><Scale size={22} /></span>
          <div>
            <h3 className="mb-2 mt-0 text-[22px] font-normal">Compliance, made clearer</h3>
            <p className="mb-[22px] mt-0 leading-[1.6] text-muted-foreground">Our team helps you navigate the documentation and handling requirements for responsible e-waste management.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[10px] max-[700px]:grid-cols-1">
          {rules.map((rule) => (
            <div className="flex items-start gap-[10px] rounded-[14px] bg-secondary/80 p-[14px] text-[13px] leading-[1.5] text-muted-foreground" key={rule}>
              <AlertCircle size={17} className="shrink-0 text-primary" />
              <span>{rule}</span>
            </div>
          ))}
        </div>
      </motion.article>
    </div>
  </section>
);

export default EWasteChallenge;
