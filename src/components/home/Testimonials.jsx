const testimonials = [
  { name: "Rahul Sharma", role: "Software Engineer", quote: "The ATS insights were clear, actionable, and helped me land more interviews in a week." },
  { name: "Priya Nair", role: "Product Designer", quote: "The dashboard gave me a confidence boost and made my resume feel much more polished." },
  { name: "David Kim", role: "Data Analyst", quote: "The keyword suggestions were spot on and helped me tailor every application effortlessly." },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Customer Stories</p>
          <h2 className="section-heading mt-3 text-white">Loved by professionals across industries</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="card-hover rounded-3xl border border-slate-700/70 bg-slate-900/70 p-8">
              <p className="text-slate-300">“{item.quote}”</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-sm font-semibold text-blue-300">
                  {item.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
