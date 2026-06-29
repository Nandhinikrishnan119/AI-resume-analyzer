import { Activity, Sparkles, Users, ShieldCheck } from "lucide-react";

const stats = [
  { number: "50K+", title: "Resumes Analyzed", icon: Activity },
  { number: "95%", title: "ATS Accuracy", icon: ShieldCheck },
  { number: "10K+", title: "Active Users", icon: Users },
  { number: "24/7", title: "AI Support", icon: Sparkles },
];

export default function Stats() {
  return (
    <section className="py-16">
      <div className="section-container grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="card-hover rounded-3xl border border-slate-700/70 bg-slate-900/70 p-8">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <Icon size={22} />
              </div>
              <h3 className="text-3xl font-semibold text-white">{item.number}</h3>
              <p className="mt-2 text-slate-400">{item.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
