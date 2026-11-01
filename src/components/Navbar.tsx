import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why ACS", href: "#comparison" },
  { label: "Recognition", href: "#recognition" },
];

const getActiveHref = () =>
  navItems.find((item) => item.href === window.location.hash)?.href ?? "#home";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(getActiveHref);
  const closeMenu = () => setMobileOpen(false);

  // Highlight the section currently in view, not just the last link clicked.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-page/90 backdrop-blur-md">
      <nav
        className="relative mx-3 flex min-h-[76px] items-center justify-between gap-6 sm:mx-6 sm:min-h-[88px]"
        aria-label="Main navigation"
      >
        <a
          className="inline-flex w-[190px] flex-[0_0_auto] items-center rounded-lg bg-white px-3 py-2 no-underline max-[700px]:w-[min(180px,calc(100%-64px))]"
          href="#home"
          aria-label="Anand Computer Systems home"
        >
          <img className="block h-auto w-full" src="/weblogo.png" alt="Anand Computer Systems" />
        </a>

        <div className="flex flex-1 items-center justify-center gap-[clamp(4px,1.6vw,24px)] max-[1199px]:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative inline-flex min-h-[40px] items-center whitespace-nowrap px-3 text-sm font-medium uppercase tracking-[0.1em] no-underline transition-colors duration-300 hover:text-black ${activeHref === item.href ? "text-black" : "text-black/60"}`}
              aria-current={activeHref === item.href ? "location" : undefined}
              onClick={() => setActiveHref(item.href)}
            >
              {item.label}
              {activeHref === item.href && (
                <motion.span
                  className="pointer-events-none absolute inset-x-3 bottom-1 h-px bg-black"
                  layoutId="nav-active-indicator"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
            </a>
          ))}
        </div>

        <a className="btn-primary flex-[0_0_auto] max-[1199px]:hidden" href="#contact">
          Request a pickup
        </a>

        <button
          className="hidden h-11 w-11 place-items-center rounded-lg bg-white text-black max-[1199px]:grid"
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="grid place-items-center"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              className="absolute inset-x-0 top-full z-50 grid content-start gap-1 rounded-[20px] bg-white p-4 shadow-[0_24px_48px_rgb(0_0_0/0.12)]"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-4 text-sm font-medium uppercase tracking-[0.1em] text-black no-underline ${activeHref === item.href ? "bg-panel" : ""}`}
                  aria-current={activeHref === item.href ? "location" : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.06, 0.4), duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => {
                    setActiveHref(item.href);
                    closeMenu();
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              <a className="btn-primary mt-3" href="#contact" onClick={closeMenu}>
                Request a pickup
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
