import { motion } from "framer-motion";

// Engagement steps from the "What Next?" slide of the ACS corporate profile.
const steps = [
  { title: "Vendor registration", description: "We complete your vendor registration requirements." },
  {
    title: "Onsite assessment",
    description:
      "Our technical team inspects the e-waste, defines a template for listing it and scopes any help needed, such as customs de-bonding.",
  },
  { title: "Material and locations", description: "You share the list of e-waste material and every pickup location." },
  {
    title: "Reporting and logistics",
    description: "You review our statutory reporting, and we plan packing and pickup.",
  },
  { title: "Quote and sign-off", description: "You receive a competitive quote from ACS and sign off." },
  { title: "Execution", description: "We plan and carry out the disposal, on schedule." },
];

const GettingStartedSection = () => (
  <section id="getting-started" className="panel mt-3 bg-panel">
    <div className="panel-inner">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <motion.div
          className="lg:sticky lg:top-28 lg:self-start"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Getting started</span>
          <h2 className="section-title mt-4">Working with ACS, step by step</h2>
          <p className="mb-0 mt-5 max-w-[420px] text-base leading-[1.6] text-muted-foreground">
            A clear path from first conversation to a completed, documented
            disposal.
          </p>
          <a className="btn-primary mt-8" href="#contact">
            Start with step one
          </a>
        </motion.div>

        <ol className="m-0 grid list-none gap-3 p-0">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              className="flex gap-5 rounded-2xl bg-white p-5 sm:p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-lime text-sm font-medium tabular-nums text-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="m-0 text-base font-medium uppercase tracking-[0.1em] text-black">
                  {step.title}
                </h3>
                <p className="mb-0 mt-2 text-base leading-[1.6] text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default GettingStartedSection;
