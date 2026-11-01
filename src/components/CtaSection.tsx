import { motion } from "framer-motion";

const CtaSection = () => (
  <section className="panel relative mt-3 isolate min-h-[clamp(480px,48vw,680px)] bg-night">
    <img
      className="absolute inset-0 -z-10 h-full w-full object-cover"
      src="/photos/expo-process-wall.webp"
      alt=""
      loading="lazy"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/25" aria-hidden="true" />

    <motion.div
      className="flex min-h-[inherit] max-w-[640px] flex-col justify-center px-5 py-16 sm:px-12"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="m-0 font-display text-[clamp(36px,4.6vw,60px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
        Ready to retire your IT equipment responsibly?
      </h2>
      <p className="mb-0 mt-5 max-w-[460px] text-base leading-[1.6] text-white/75 sm:text-lg">
        Share your list of equipment and locations. Our team will assess it
        onsite and send a competitive quote.
      </p>
      <a
        className="btn-primary mt-9 w-fit"
        href="mailto:info@anandcs.com?subject=E-waste%20pickup%20request"
      >
        Request a pickup
      </a>
    </motion.div>
  </section>
);

export default CtaSection;
