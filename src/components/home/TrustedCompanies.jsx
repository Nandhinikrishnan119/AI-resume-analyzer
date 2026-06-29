import { motion } from "framer-motion";

const companies = ["Google", "Microsoft", "Amazon", "Meta", "Netflix", "Adobe"];

export default function TrustedCompanies() {
  return (
    <section className="py-12">
      <div className="section-container">
        <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
          Trusted by candidates applying to
        </h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between gap-6 overflow-x-auto px-2"
        >
          {companies.map((c) => (
            <div
              key={c}
              className="flex-shrink-0 rounded-2xl border border-slate-800/60 bg-slate-950/60 px-8 py-6 text-center"
            >
              <span className="text-lg font-bold text-white">{c}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
