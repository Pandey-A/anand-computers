import { motion } from "framer-motion";
import { HardDrive, Laptop, Server, type LucideIcon } from "lucide-react";

const categories: { icon: LucideIcon; title: string; items: string[] }[] = [
  { icon: Laptop, title: "IT hardware", items: ["Laptops", "Desktops", "Monitors"] },
  {
    icon: Server,
    title: "Network infrastructure",
    items: ["Servers", "Routers", "Switches", "UPS systems"],
  },
  { icon: HardDrive, title: "Peripherals and storage", items: ["Peripherals", "Storage media"] },
];

const CollectSection = () => (
  <section id="collect" className="panel mt-3 bg-panel">
    <div className="panel-inner">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">What we collect</span>
          <h2 className="section-title mt-4">From laptops to servers</h2>
          <p className="mb-0 mt-5 max-w-[420px] text-base leading-[1.6] text-muted-foreground">
            From a single office refresh to a full data centre move, we handle
            the equipment businesses retire most.
          </p>
        </motion.div>

        <ul className="m-0 grid list-none gap-3 p-0">
          {categories.map((category, index) => (
            <motion.li
              key={category.title}
              className="flex flex-col gap-4 rounded-2xl bg-white p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-night text-brand-lime">
                <category.icon size={26} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="m-0 font-display text-2xl font-normal tracking-[-0.015em] text-black">
                  {category.title}
                </h3>
                <ul className="m-0 mt-3 flex list-none flex-wrap gap-2 p-0">
                  {category.items.map((item) => (
                    <li key={item} className="rounded-md bg-panel px-2.5 py-1 text-sm text-black/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default CollectSection;
