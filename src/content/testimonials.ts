export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Optional path under /public, for example "/photos/clients/jane.webp" */
  photo?: string;
};

/**
 * Real customer testimonials only. The Testimonials section stays hidden
 * while this list is empty, so nothing invented ever reaches the live site.
 *
 * Example entry:
 * {
 *   quote: "ACS handled our data centre move end to end, including customs de-bonding.",
 *   name: "Full name",
 *   role: "IT Infrastructure Head",
 *   company: "Company name",
 * },
 */
export const testimonials: Testimonial[] = [];
