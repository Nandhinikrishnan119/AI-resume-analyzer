import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, BarChart3, ListChecks } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] pb-24 pt-28">
      <div className="section-container grid gap-14 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            <Sparkles size={16} /> AI-Powered Resume Analysis
          </span>

          <div className="max-w-3xl space-y-6">
            <h1 className="section-heading font-black text-white sm:text-6xl">
              Build an ATS-Friendly Resume with AI
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Unlock your best job application with instant ATS scoring, keyword optimization, and AI suggestions tailored for recruiters and hiring systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/upload" className="btn-primary">
              Analyze Resume
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "50K+ Resumes", value: "Trusted" },
              { label: "95% ATS Match", value: "Accuracy" },
              { label: "24/7 AI Support", value: "Always On" },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-700/70 bg-slate-950/70 p-5 text-center backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="flex justify-center">
          <div className="glass relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 p-8 shadow-2xl shadow-slate-950/20">
            <div className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />
            <div className="relative z-10 space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Resume Analysis</p>
                  <p className="mt-2 text-sm text-slate-300">ATS performance at a glance.</p>
                </div>
                <CheckCircle2 size={32} className="text-blue-400" />
              </div>

              <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-slate-950/80 ring-1 ring-blue-400/20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 via-transparent to-slate-950/10" />
                <div className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full bg-slate-950 text-center">
                  <span className="text-5xl font-bold text-white">92%</span>
                  <span className="block text-sm text-slate-400">ATS Score</span>
                </div>
              </div>

              <div className="grid gap-4 rounded-3xl border border-slate-700/60 bg-slate-950/80 p-5 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/90 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Skills</p>
                  <p className="mt-3 text-3xl font-semibold text-blue-400">18</p>
                </div>
                <div className="rounded-3xl bg-slate-950/90 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Keywords</p>
                  <p className="mt-3 text-3xl font-semibold text-sky-400">12</p>
                </div>
              </div>

              <div className="space-y-3 rounded-3xl border border-slate-700/60 bg-slate-950/85 p-6">
                <div className="flex items-center gap-3 text-slate-300">
                  <ShieldCheck size={18} className="text-blue-400" />
                  <p className="font-semibold text-white">AI Suggestions</p>
                </div>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300"><ListChecks size={16} /></span>
                    Add achievement-oriented keywords and metrics.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300"><BarChart3 size={16} /></span>
                    Boost experience details with measurable results.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
