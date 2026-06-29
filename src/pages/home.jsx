import { Link } from "react-router-dom";
import { ArrowRight, BrainCircuit, FileText, SearchCheck, Sparkles } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const features = [
  { title: "ATS Score", text: "See how your resume performs in real hiring systems.", icon: FileText },
  { title: "Keyword Match", text: "Spot gaps in job-specific language and phrasing.", icon: SearchCheck },
  { title: "AI Suggestions", text: "Improve summary, bullets, and skills with clear prompts.", icon: BrainCircuit },
];

const stats = ["50K+ Resumes", "95% ATS Match", "24/7 AI Support"];

export default function Home() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero__badge">
            <Sparkles size={14} />
            AI-Powered Resume Analysis
          </div>
          <h1 className="hero__title">Build a Resume That Gets You Hired</h1>
          <p className="hero__subtitle">Instant ATS score, keyword gaps, and AI suggestions.</p>
          <div className="hero__actions">
            <Link to="/upload" className="button button--primary">
              Analyze Resume
              <span className="button__icon">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link to="/about" className="button button--ghost">
              Learn More
            </Link>
          </div>
          <div className="stat-row">
            {stats.map((item) => (
              <div key={item} className="pill">
                <Sparkles size={12} />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="demo-grid">
            <div className="demo-card">
              <div className="demo-card__title">Sample Resume</div>
              <div className="resume-meta">
                <div className="resume-name">Alex Johnson</div>
                <div className="resume-title">Frontend Developer</div>
              </div>
              <div className="divider" />
              <div className="demo-card__title">Experience</div>
              <ul className="resume-list">
                <li>Built product dashboards with React and TypeScript.</li>
                <li>Improved page speed and design consistency.</li>
              </ul>
              <div className="divider" />
              <div className="demo-card__title">Skills</div>
              <div className="tag-row">
                {['React', 'TypeScript', 'CSS', 'Git'].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="demo-card card--accent">
              <div className="demo-card__title">ATS Analysis</div>
              <div className="score-card">
                <div className="score-number">87<span style={{ fontSize: 18, color: "var(--muted)" }}>/100</span></div>
                <div className="score-ring">
                  <div className="score-ring__inner">87</div>
                </div>
                <div className="score-row">
                  <span>Keywords</span>
                  <div className="score-bar"><span style={{ width: "82%" }} /></div>
                  <span>82%</span>
                </div>
                <div className="score-row">
                  <span>Format</span>
                  <div className="score-bar"><span style={{ width: "91%" }} /></div>
                  <span>91%</span>
                </div>
                <div className="score-row">
                  <span>Skills</span>
                  <div className="score-bar"><span style={{ width: "88%" }} /></div>
                  <span>88%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-heading">What ResumeAI does</h2>
          <p className="section-copy">Three things. Done well.</p>
          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="feature-card">
                  <div className="feature-card__icon">
                    <Icon size={18} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div className="cta-card">
            <h3>Ready to improve your resume?</h3>
            <p>Upload now and see your score in seconds.</p>
            <Link to="/upload" className="button button--primary" style={{ marginTop: 24 }}>
              Get Started
              <span className="button__icon">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
