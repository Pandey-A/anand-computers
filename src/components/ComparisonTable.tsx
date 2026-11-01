import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";

type Answer = "Yes" | "No" | "Varies";

// Criteria from the "Comparison Factors" slide of the ACS corporate profile.
const rows: { label: string; acs: Answer; other: Answer }[] = [
  { label: "Authorized by Maharashtra Pollution Control Board", acs: "Yes", other: "No" },
  { label: "ISO 14001:2015 certified", acs: "Yes", other: "No" },
  { label: "SEZ empaneled", acs: "Yes", other: "Varies" },
  { label: "Pan-India reach", acs: "Yes", other: "Varies" },
  { label: "One stop from customs de-bonding to recycling", acs: "Yes", other: "Varies" },
  { label: "Capacity to handle large volumes", acs: "Yes", other: "Varies" },
  { label: "Best value for e-waste", acs: "Yes", other: "No" },
];

const answerStyles: Record<Answer, { icon: typeof Check; badge: string }> = {
  Yes: { icon: Check, badge: "bg-brand-lime text-black" },
  No: { icon: X, badge: "bg-[#fde3e1] text-[#b42318]" },
  Varies: { icon: Minus, badge: "bg-black/5 text-black/55" },
};

const AnswerCell = ({ answer }: { answer: Answer }) => {
  const { icon: Icon, badge } = answerStyles[answer];
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`grid size-6 shrink-0 place-items-center rounded-full ${badge}`} aria-hidden="true">
        <Icon size={14} strokeWidth={3} />
      </span>
      {answer}
    </span>
  );
};

const ComparisonTable = () => (
  <section id="comparison" className="panel mt-3 bg-panel">
    <div className="panel-inner">
      <motion.div
        className="mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">Why ACS</span>
        <h2 className="section-title mt-4">
          Certified at every step,
          <br className="hidden sm:block" /> not just some of them
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <table className="w-full table-fixed border-separate border-spacing-0 text-left text-base max-[520px]:text-sm">
          <caption className="sr-only">
            Anand Computer Systems compared with typical e-waste providers
          </caption>
          <colgroup>
            <col className="w-[46%] sm:w-auto" />
            <col className="w-[27%] sm:w-[26%]" />
            <col className="w-[27%] sm:w-[26%]" />
          </colgroup>
          <thead>
            <tr>
              <td className="pb-4" />
              <th scope="col" className="rounded-t-2xl bg-white px-3 pb-4 pt-5 font-medium sm:px-6">
                <img
                  src="/weblogo.png"
                  alt="Anand Computer Systems"
                  className="h-7 w-full max-w-[150px] object-contain object-left"
                />
              </th>
              <th scope="col" className="px-3 pb-4 pt-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground sm:px-6">
                Typical providers
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              const last = index === rows.length - 1;
              return (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className={`py-5 pr-3 font-normal text-black sm:pr-6 ${last ? "" : "border-b border-black/10"}`}
                  >
                    {row.label}
                  </th>
                  <td className={`bg-white px-3 py-5 text-black sm:px-6 ${last ? "rounded-b-2xl" : "border-b border-black/5"}`}>
                    <AnswerCell answer={row.acs} />
                  </td>
                  <td className={`px-3 py-5 text-black/70 sm:px-6 ${last ? "" : "border-b border-black/10"}`}>
                    <AnswerCell answer={row.other} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>
    </div>
  </section>
);

export default ComparisonTable;
