import { motion } from "framer-motion";
import { testimonials } from "@/content/testimonials";

const tones = ["bg-lavender", "bg-[#f3f6a3]", "bg-panel"];

const TestimonialsSection = () => {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="panel mt-3">
      <div className="panel-inner">
        <motion.header
          className="mx-auto flex max-w-[760px] flex-col items-center text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title mt-4">What our customers say</h2>
        </motion.header>

        <ul className="m-0 mt-12 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.li
              key={`${testimonial.name}-${testimonial.company}`}
              className={`flex flex-col justify-between gap-10 rounded-2xl p-6 sm:p-8 ${tones[index % tones.length]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 2) * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="m-0 font-display text-[clamp(20px,1.8vw,24px)] font-normal leading-[1.4] text-black">
                “{testimonial.quote}”
              </blockquote>
              <div className="flex items-center gap-4">
                {testimonial.photo && (
                  <img className="size-12 rounded-full object-cover" src={testimonial.photo} alt="" loading="lazy" />
                )}
                <div>
                  <p className="m-0 font-medium text-black">{testimonial.name}</p>
                  <p className="m-0 text-sm text-black/60">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
