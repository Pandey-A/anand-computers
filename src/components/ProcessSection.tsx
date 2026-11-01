import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Assess your requirements",
    description:
      "We review your equipment, locations and compliance needs to build the right plan.",
    tone: "bg-lavender",
  },
  {
    title: "Collect securely",
    description:
      "Our authorized vehicles handle packing, documentation and pickup at a time that works for you.",
    tone: "bg-[#f3f6a3]",
  },
  {
    title: "Process responsibly",
    description:
      "Equipment is sorted, dismantled and sent through certified recovery channels.",
    tone: "bg-panel",
  },
];

const ProcessSection = () => (
  <section id="process" className="panel mt-3">
    <div className="panel-inner">
      <motion.header
        className="mx-auto flex max-w-[760px] flex-col items-center text-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">How it works</span>
        <h2 className="section-title mt-4">Three simple steps</h2>
        <p className="mb-0 mt-5 max-w-[480px] text-base leading-[1.6] text-muted-foreground">
          Retiring technology responsibly, without the paperwork headache.
        </p>
        <a className="btn-primary mt-8" href="#contact">
          Request a pickup
        </a>
      </motion.header>

      <ol className="m-0 mt-14 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
        {processSteps.map((step, index) => (
          <motion.li
            key={step.title}
            className={`flex min-h-[280px] flex-col rounded-2xl p-6 sm:p-8 ${step.tone}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="m-0 font-display text-[clamp(24px,2.2vw,28px)] font-normal leading-[1.3] tracking-[-0.015em] text-black">
              {step.title}
            </h3>
            <p className="mb-8 mt-4 text-base leading-[1.6] text-black/70">
              {step.description}
            </p>
            <div className="mt-auto flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-white text-sm font-medium tabular-nums text-black">
                0{index + 1}
              </span>
              <span className="text-sm text-black/60">Step {index + 1} of 3</span>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSection;
