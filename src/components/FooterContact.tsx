import { Mail, MapPin } from "lucide-react";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "#home" },
      { label: "About us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Our process", href: "#process" },
      { label: "Why ACS", href: "#comparison" },
      { label: "Recognition", href: "#recognition" },
      { label: "Getting started", href: "#getting-started" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Secure collection", href: "#services" },
      { label: "Data security", href: "#services" },
      { label: "Customs and STPI support", href: "#services" },
      { label: "Compliance reporting", href: "#services" },
      { label: "What we collect", href: "#collect" },
    ],
  },
];

const FooterContact = () => (
  <footer id="contact" className="panel mb-3 mt-3 bg-night text-white sm:mb-6">
    <div className="mx-auto w-full max-w-[1240px] px-5 pt-[clamp(48px,6vw,80px)] sm:px-10">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="max-w-[420px]">
          <p className="m-0 text-base leading-[1.6] text-white/70">
            End-to-end e-waste management and compliance for businesses across
            India, backed by over 20 years of experience.
          </p>
          <div className="mt-8 grid gap-3 text-[15px]">
            <a
              className="inline-flex w-fit items-center gap-3 text-white no-underline hover:underline"
              href="mailto:info@anandcs.com"
            >
              <Mail size={18} className="shrink-0 text-brand-lime" />
              info@anandcs.com
            </a>
            <p className="m-0 inline-flex items-center gap-3 text-white/70">
              <MapPin size={18} className="shrink-0 text-brand-lime" />
              Maharashtra, India
            </p>
          </div>
          <a
            className="btn-primary mt-8"
            href="mailto:info@anandcs.com?subject=E-waste%20pickup%20request"
          >
            Request a pickup
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="m-0 text-xs font-medium uppercase tracking-[0.14em] text-white/50">
                {column.heading}
              </h3>
              <ul className="m-0 mt-5 grid list-none gap-3 p-0">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="text-[15px] text-white/85 no-underline transition-colors duration-300 hover:text-white"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </div>

    <p
      className="m-0 mt-6 select-none overflow-hidden whitespace-nowrap px-3 text-center font-display text-[42vw] font-normal leading-[0.8] tracking-[-0.06em] text-brand-lime xl:text-[560px]"
      aria-hidden="true"
    >
      ACS
    </p>

    <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-3 border-t border-white/10 px-5 py-6 text-[13px] text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <p className="m-0">MPCB authorized · CPCB approved · ISO 14001:2015 certified</p>
      <p className="m-0">© {new Date().getFullYear()} Anand Computer Systems</p>
    </div>
  </footer>
);

export default FooterContact;
