import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const certifications = [
  { src: "/mpcb.png", alt: "MPCB Authorized", width: "w-[92px]" },
  { src: "/iso.png", alt: "ISO 14001", width: "w-[46px]" },
  { src: "/cpcb.png", alt: "CPCB Registered", width: "w-[46px]" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

// Stacked below 1280px, where the wide diagram and a two-line headline no longer fit side by side.
const HeroSection = () => (
  <section id="home" className="panel">
    <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 pb-8 pt-10 sm:px-10 sm:pb-10 sm:pt-14 xl:min-h-[calc(100svh-112px)] xl:grid-cols-[minmax(0,500px)_minmax(0,1fr)] xl:gap-10 xl:py-10 2xl:grid-cols-[minmax(0,560px)_minmax(0,1fr)]">
      <motion.div
        className="flex max-w-[680px] flex-col items-start"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <span className="eyebrow">E-waste partner for 20+ years</span>
        <h1 className="m-0 mt-5 font-display text-[clamp(40px,3.7vw,52px)] font-normal leading-[1.06] 2xl:text-[58px] tracking-[-0.03em] text-black">
          Give your technology <br className="hidden sm:inline" />a responsible next life.
        </h1>
        <p className="mb-0 mt-6 max-w-[520px] text-base leading-[1.6] text-muted-foreground sm:text-lg">
          End-to-end e-waste management for businesses across India: secure pickup, data sanitization, customs de-bonding support and certified recycling, with every statutory document handled for you.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a className="btn-primary" href="#contact">
            Request a pickup
          </a>
          <a
            className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-black underline decoration-black/25 underline-offset-[6px] transition-colors duration-300 hover:decoration-black"
            href="#process"
          >
            See how it works
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 border-t border-black/10 pt-6">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Authorized and certified
          </span>
          <div className="mt-3 flex items-center gap-5" role="list" aria-label="Certifications">
            {certifications.map((cert) => (
              <span role="listitem" key={cert.src} className={`block h-12 ${cert.width} flex-[0_0_auto]`}>
                <img className="block h-full w-full object-contain [mix-blend-mode:multiply]" src={cert.src} alt={cert.alt} />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mx-auto w-full max-w-[420px] sm:max-w-[1100px]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
      >
        {/* Art direction: a portrait arrangement on phones keeps the stage labels readable. */}
        <picture>
          <source media="(max-width: 639px)" srcSet="/ewaste-process-flow-portrait.webp" width={929} height={1558} />
          <img
            className="block h-auto w-full xl:scale-[1.06]"
            src="/ewaste-process-flow-hero.webp"
            width={1528}
            height={733}
            alt="ACS e-waste process: collection and transport in government authorized vehicles, sorting and dismantling, then material recovery into safe disposal, refurbished electronics for reuse, and recovered materials for different industries"
          />
        </picture>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
