import { BrainCircuit, FileText, SearchCheck, Trophy, Sparkles, MessageSquareText } from "lucide-react";

const features = [
  { title: "AI Resume Review", desc: "Get instant recommendations tuned for recruiter expectations.", icon: BrainCircuit },
  { title: "ATS Scoring", desc: "Measure how well your resume aligns with your target role.", icon: Trophy },
  { title: "Resume Parsing", desc: "Extract experience, skills, and achievements automatically.", icon: FileText },
  { title: "Keyword Insights", desc: "Match your resume to the language most hiring teams look for.", icon: SearchCheck },
  { title: "Role Optimization", desc: "Tailor every section for a specific job title and industry.", icon: Sparkles },
  { title: "Interview Ready", desc: "Turn feedback into concrete improvements across your profile.", icon: MessageSquareText },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Core Features</p>
          <h2 className="section-heading mt-3 text-white">Everything you need to upgrade your resume</h2>
          <p className="mt-4 text-lg text-slate-400">A polished workflow for applicants who want stronger results with less effort.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card-hover rounded-3xl border border-slate-700/70 bg-slate-900/70 p-8">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-slate-400">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
