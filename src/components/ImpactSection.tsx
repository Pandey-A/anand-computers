import { motion } from "framer-motion";

const benefits = [
  {
    label: "Social",
    title: "Computers people can afford",
    description:
      "Refurbished hardware lets students and low-income families own a computer at a fraction of the cost, for example around ₹10,000 instead of ₹40,000.",
    tone: "bg-lavender",
  },
  {
    label: "Economic",
    title: "Value kept in India",
    description:
      "Reusing equipment and recovering materials reduces the need for imports, saving foreign exchange and contributing to national GDP.",
    tone: "bg-[#f3f6a3]",
  },
  {
    label: "Environmental",
    title: "Toxins out, materials back",
    description:
      "Proper disposal keeps toxins out of the soil and returns plastic, glass and metal to industry as raw material.",
    tone: "bg-panel",
  },
];

const ImpactSection = () => (
  <section id="impact" className="panel mt-3 bg-night">
    <div className="panel-inner">
      <motion.header
        className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[640px]">
          <span className="eyebrow text-white/55">Why it matters</span>
          <h2 className="section-title mt-4 text-white">Reduce, reuse, recycle</h2>
          <p className="mb-0 mt-5 max-w-[520px] text-base leading-[1.6] text-white/70">
            Responsible e-waste management creates three kinds of value, and
            every device we handle contributes to all of them.
          </p>
        </div>
        <img
          className="h-auto w-[180px] flex-[0_0_auto] rounded-2xl bg-white p-3 sm:w-[220px]"
          src="/photos/three-r.webp"
          width={443}
          height={244}
          alt="The 3R mark: reduce, reuse, recycle"
          loading="lazy"
        />
      </motion.header>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.article
            key={benefit.label}
            className={`flex min-h-[280px] flex-col rounded-2xl p-6 sm:p-8 ${benefit.tone}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-black/60">
              {benefit.label}
            </span>
            <h3 className="m-0 mt-8 font-display text-[clamp(24px,2.2vw,30px)] font-normal leading-[1.2] tracking-[-0.015em] text-black">
              {benefit.title}
            </h3>
            <p className="mb-0 mt-4 text-base leading-[1.6] text-black/70">
              {benefit.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
