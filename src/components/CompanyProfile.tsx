import { motion } from "framer-motion";

// Figures come from the ACS corporate profile; update them here if they change.
const stats = [
  { value: "20+", label: "Years of e-waste operations" },
  { value: "500 t", label: "E-waste we are permitted to handle" },
  { value: "10,000", label: "Sq. ft. of works operations" },
  { value: "Pan-India", label: "Pickup and service for every location" },
];

const credentials = ["MPCB authorized", "CPCB approved", "ISO 14001:2015 certified"];

const CompanyProfile = () => (
  <section id="about" className="panel mt-3 bg-panel">
    <div className="panel-inner">
      <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">About Anand Computer Systems</span>
          <p className="mb-0 mt-5 max-w-[560px] font-display text-[clamp(28px,2.8vw,38px)] font-normal leading-[1.2] tracking-[-0.015em] text-black">
            Small enough to be responsive, large enough to be resourceful.
          </p>
          <div className="mt-6 max-w-[540px] space-y-4 text-base leading-[1.65] text-muted-foreground">
            <p className="m-0">
              For over two decades we have helped organizations retire their IT
              equipment safely and legally. Our customers include many
              multinational organizations in the services industry, and much of
              our work is repeat business from relationships that are more than
              a decade old.
            </p>
            <p className="m-0">
              We follow the 3R philosophy: reduce pollution by maximizing reuse,
              and recycle the rest.
            </p>
          </div>
          <ul className="m-0 mt-7 flex list-none flex-wrap gap-2 p-0">
            {credentials.map((credential) => (
              <li
                key={credential}
                className="rounded-lg bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-black"
              >
                {credential}
              </li>
            ))}
          </ul>
        </motion.div>

        <dl className="m-0 grid grid-cols-2 gap-3 sm:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex min-h-[150px] flex-col justify-between rounded-2xl bg-white p-5 sm:min-h-[190px] sm:p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <dt className="text-xs font-medium uppercase leading-[1.5] tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="m-0 mt-6 break-words font-display text-[clamp(28px,3.4vw,48px)] font-normal leading-none tracking-[-0.02em] text-black">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>

      <motion.div
        className="relative mt-12 aspect-video w-full overflow-hidden rounded-2xl bg-white"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          poster="/ewaste-process.png"
          aria-label="Anand Computer Systems e-waste recycling process"
        >
          <source src="/ACS%20Edit00-1.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  </section>
);

export default CompanyProfile;
