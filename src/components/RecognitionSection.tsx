import { motion } from "framer-motion";

const moments = [
  {
    image: "/photos/expo-awards.webp",
    tag: "Awards",
    title: "Best Pavilion and Design at the CMDA IT Expos 2015 and 2017",
    alt: "Anand Computer Systems award trophies from the CMDA IT Expo",
  },
  {
    image: "/photos/expo-booth.webp",
    tag: "CMDA IT Expo",
    title: "Our pavilion among more than 100 major IT brands",
    alt: "Anand Computer Systems pavilion at the CMDA IT Expo",
  },
  {
    image: "/photos/expo-process-display.webp",
    tag: "Process",
    title: "Walking IT leaders through our e-waste management process",
    alt: "An ACS team member explaining the e-waste management process display to a visitor",
  },
  {
    image: "/photos/expo-3r-wall.webp",
    tag: "3R philosophy",
    title: "Showing how we reduce, reuse and recycle",
    alt: "Visitors at the ACS 3R wall describing reduce, reuse and recycle",
  },
];

const RecognitionSection = () => (
  <section id="recognition" className="panel mt-3">
    <div className="panel-inner">
      <motion.div
        className="max-w-[680px]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">Recognition</span>
        <h2 className="section-title mt-4">Recognized by the IT industry</h2>
        <p className="mb-0 mt-5 max-w-[560px] text-base leading-[1.6] text-muted-foreground">
          Our e-waste management solutions have been very well received at the
          CMDA IT Expo, where key executives and decision makers of the IT
          industry meet every year.
        </p>
      </motion.div>

      <ul className="m-0 mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {moments.map((moment, index) => (
          <motion.li
            key={moment.image}
            className="group overflow-hidden rounded-2xl bg-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                src={moment.image}
                alt={moment.alt}
                loading="lazy"
              />
            </div>
            <div className="p-5 sm:p-6">
              <span className="inline-block rounded-md bg-white px-2.5 py-1 text-xs font-medium uppercase tracking-[0.12em] text-black/70">
                {moment.tag}
              </span>
              <h3 className="m-0 mt-4 text-lg font-medium leading-[1.4] text-black">
                {moment.title}
              </h3>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default RecognitionSection;
