import { useState } from "react";
import { BrainCircuit, ChevronDown, ChevronRight, FileText, Sparkles, Star, Upload } from "lucide-react";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/Footer";

const faqs = [
  { question: "What formats are supported?", answer: "PDF, DOCX, and DOC files up to 5MB." },
  { question: "How is the ATS score calculated?", answer: "We check keywords, formatting, structure, and experience sections against ATS patterns." },
  { question: "Is my resume stored?", answer: "No. Files are analyzed in memory and discarded immediately." },
  { question: "How accurate is the score?", answer: "94% accuracy compared to real ATS systems in our testing." },
  { question: "Can I analyze multiple resumes?", answer: "Yes, each upload creates a fresh analysis." },
  { question: "What is a good ATS score?", answer: "75+ is good. 85+ is excellent. 90+ is top tier." },
  { question: "Do I need an account?", answer: "No account is needed for basic analysis." },
  { question: "How do I improve my score?", answer: "Add missing keywords, fix bullet formatting, and expand your summary." },
];

export default function About() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <section className="about-stack">
          <div className="about-intro">
            <h1>About ResumeAI</h1>
            <p>We help job seekers get more interviews with AI-powered resume feedback.</p>
            <div className="about-stats">
              {['50K+ Resumes', '95% Accuracy', '10K Users', '4.9★ Rating'].map((item) => (
                <div key={item} className="pill">{item}</div>
              ))}
            </div>
          </div>

          <div className="about-steps">
            {[
              { title: "Upload", text: "Drop your PDF or DOCX", icon: Upload },
              { title: "Analyze", text: "AI checks ATS compatibility", icon: BrainCircuit },
              { title: "Improve", text: "Apply targeted suggestions", icon: Star },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="about-step">
                  <div className="about-step__icon">
                    <Icon size={18} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="card">
            <h2 className="section-heading" style={{ textAlign: "left", marginBottom: 20 }}>Common questions</h2>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <div key={item.question} className="faq-item">
                  <button className="faq-question" onClick={() => setOpenFaq(index === openFaq ? -1 : index)}>
                    <span>{item.question}</span>
                    {index === openFaq ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                  <div className={`faq-answer${index === openFaq ? " faq-answer--open" : ""}`}>
                    {item.answer}
                  </div>
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
