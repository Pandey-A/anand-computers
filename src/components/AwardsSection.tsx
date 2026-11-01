import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";

const awards = [
  { year: "2015", title: "Best Pavilion & Design", event: "IT Expo" },
  { year: "2017", title: "Best Pavilion & Design", event: "IT Expo" },
];

const AwardsSection = () => (
  <section id="awards" className="bg-secondary/60 py-[clamp(72px,9vw,124px)]">
    <div className="mx-auto w-[min(100%-48px,1200px)] max-[700px]:w-[min(100%-36px,560px)]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-[13px] py-[7px] text-xs font-normal tracking-[0.01em] text-muted-foreground">Recognition</span>
        <h2 className="mb-0 mt-[18px] text-[clamp(32px,5vw,58px)] font-light leading-[1.08] tracking-[-0.045em] text-foreground">Celebrating the work behind the work.</h2>
      </motion.div>

      <div className="mt-[38px] grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
        {awards.map((award, index) => (
          <motion.article
            className="flex items-center gap-5 rounded-3xl border border-border/75 bg-card p-[25px] shadow-[0_16px_44px_hsl(215_32%_20%/.045)]"
            key={award.year}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="grid h-12 w-12 flex-[0_0_auto] place-items-center rounded-[15px] bg-primary/10 text-primary"><Award size={23} /></span>
            <div>
              <h3 className="mb-[5px] mt-0 text-lg font-normal">{award.title}</h3>
              <p className="m-0 text-[13px] text-muted-foreground">{award.event} · {award.year}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <motion.div
        className="mt-4 rounded-3xl border border-border/75 bg-card px-[25px] py-[22px] text-sm leading-[1.65] text-muted-foreground shadow-[0_16px_44px_hsl(215_32%_20%/.045)]"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Sparkles size={17} className="mr-2 inline-block align-middle text-primary" />
        ACS has presented its e-waste management solutions at CMDA IT Expo, connecting with technology leaders and decision-makers.
      </motion.div>
    </div>
  </section>
);

export default AwardsSection;
