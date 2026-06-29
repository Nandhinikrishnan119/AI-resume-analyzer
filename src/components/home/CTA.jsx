import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-16">
      <div className="section-container">
        <div className="glass rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white">Ready to improve your resume?</h3>
          <p className="mt-3 text-slate-300">Upload your resume and get an AI-powered ATS analysis in seconds.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link to="/upload" className="btn-primary">Get Started</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
