import { AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const breakdown = [
  { label: "Keywords", score: "82%" },
  { label: "Format", score: "91%" },
  { label: "Experience", score: "78%" },
  { label: "Skills", score: "88%" },
  { label: "Education", score: "85%" },
];

const matched = ["React", "Node.js", "TypeScript", "REST API", "Git"];
const missing = ["Docker", "AWS", "CI/CD"];
const strengths = ["Clear structure", "Strong summary", "Good keyword fit"];
const improve = ["Add metrics", "Expand skills", "Use better bullets"];
const history = [
  { file: "alex-resume.pdf", score: "87", date: "Jun 29", action: "View" },
  { file: "frontend-v2.docx", score: "84", date: "Jun 24", action: "View" },
  { file: "product-design.docx", score: "81", date: "Jun 20", action: "View" },
];

export default function Dashboard() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <section className="dashboard-grid">
          <div className="topbar">
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 700 }}>Your Analysis</h1>
              <div className="topbar__meta">alex@email.com · Just now</div>
            </div>
            <div className="nav-actions">
              <button className="button button--ghost">Re-analyze</button>
              <button className="button button--primary">Download Report</button>
            </div>
          </div>

          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-card__value">87</div>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>ATS Score</div>
              <div className="pill pill--success" style={{ marginTop: 12 }}>↑ from 61%</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value">6 / 10</div>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>Keywords</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value">7 found</div>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>Skills</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value">5 items</div>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>Suggestions</div>
            </div>
          </div>

          <div className="split-grid">
            <div className="breakdown-card">
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>ATS Breakdown</h3>
              <div className="score-list">
                {breakdown.map((item) => (
                  <div key={item.label} className="score-list__row">
                    <span>{item.label}</span>
                    <div className="score-bar"><span style={{ width: item.score }} /></div>
                    <span>{item.score}</span>
                  </div>
                ))}
              </div>
              <div className="tag-group">
                <div style={{ width: "100%" }}>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 8 }}>Matched Keywords</div>
                  <div className="tag-group">
                    {matched.map((item) => (
                      <span key={item} className="pill pill--success">{item}</span>
                    ))}
                  </div>
                </div>
                <div style={{ width: "100%", marginTop: 12 }}>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 8 }}>Missing</div>
                  <div className="tag-group">
                    {missing.map((item) => (
                      <span key={item} className="pill pill--danger">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="suggestion-card">
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>AI Suggestions</h3>
              <div className="suggestion-list">
                {[
                  { type: "HIGH", text: "Add Docker and AWS to skills section" },
                  { type: "HIGH", text: "Expand professional summary to 3 sentences" },
                  { type: "MED", text: "Quantify impact in experience bullets" },
                  { type: "MED", text: "Add a certifications section" },
                  { type: "LOW", text: "Include GitHub link in header" },
                ].map((item) => (
                  <div key={item.text} className="suggestion-row">
                    <span className={`pill${item.type === "HIGH" ? " pill--danger" : item.type === "MED" ? " pill--warning" : ""}`} style={{ fontSize: 9 }}>
                      {item.type}
                    </span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="split-grid">
            <div className="strength-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <CheckCircle2 size={16} color="var(--green)" />
                <h3 style={{ fontSize: 16, fontWeight: 700 }}>Strengths</h3>
              </div>
              <ul className="strength-list">
                {strengths.map((item) => (
                  <li key={item}><CheckCircle2 size={14} color="var(--green)" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="improve-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <AlertTriangle size={16} color="var(--amber)" />
                <h3 style={{ fontSize: 16, fontWeight: 700 }}>Improve</h3>
              </div>
              <ul className="improve-list">
                {improve.map((item) => (
                  <li key={item}><AlertTriangle size={14} color="var(--amber)" />{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card">
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Analysis History</h3>
            <div className="history-table">
              <div className="history-row" style={{ fontWeight: 600, color: "var(--text)" }}>
                <span>File</span>
                <span>Score</span>
                <span>Date</span>
                <span>Action</span>
              </div>
              {history.map((row) => (
                <div key={row.file} className="history-row">
                  <span>{row.file}</span>
                  <span>{row.score}</span>
                  <span>{row.date}</span>
                  <button className="text-link" type="button">{row.action}</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
