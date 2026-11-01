import { motion } from "framer-motion";
import { ClipboardCheck, FileText, Recycle, ShieldCheck, Stamp, Truck, type LucideIcon } from "lucide-react";

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Truck,
    title: "Secure collection",
    description:
      "Efficient, safe pickup anywhere in India using our own authorized hazardous transport vehicles.",
  },
  {
    icon: ShieldCheck,
    title: "Data security",
    description:
      "Complete data sanitization, degaussing and liability transfer, so retired devices never become a privacy risk.",
  },
  {
    icon: Stamp,
    title: "Customs and STPI support",
    description:
      "Specialist guidance and documentation for customs de-bonding, STPI and SEZ clearances.",
  },
  {
    icon: FileText,
    title: "Compliance reporting",
    description:
      "Logistics documentation and the statutory reports the law requires for every e-waste disposal.",
  },
  {
    icon: ClipboardCheck,
    title: "Retirement planning",
    description:
      "Advice on planning end-of-life equipment, including scheduled disposals spread over long periods.",
  },
  {
    icon: Recycle,
    title: "Certified processing",
    description:
      "Safe, secure processing from collection to recycling, with the best value returned for retired assets.",
  },
];

const ServicesSection = () => (
  <section id="services" className="panel mt-3">
    <div className="panel-inner">
      <motion.div
        className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[640px]">
          <span className="eyebrow">Key offerings</span>
          <h2 className="section-title mt-4">End-to-end e-waste and compliance</h2>
          <p className="mb-0 mt-5 max-w-[520px] text-base leading-[1.6] text-muted-foreground">
            One partner from customs de-bonding to final recycling, with nothing
            left for your team to chase.
          </p>
        </div>
        <a className="btn-primary w-fit flex-[0_0_auto]" href="#contact">
          Get started
        </a>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="group flex min-h-[240px] flex-col rounded-2xl bg-panel p-6 sm:p-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 3) * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="grid size-12 place-items-center rounded-xl bg-white text-black transition-colors duration-300 group-hover:bg-brand-lime">
              <service.icon size={22} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="m-0 mt-8 text-lg font-medium uppercase leading-[1.35] tracking-[0.1em] text-black">
              {service.title}
            </h3>
            <p className="mb-0 mt-3 text-base leading-[1.6] text-muted-foreground">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
