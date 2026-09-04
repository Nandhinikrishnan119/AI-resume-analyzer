import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, FileText, Upload, X } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { API_BASE, authHeaders } from "../services/api";
import { useAppContext } from "../context/AppContext";

const steps = ["Parsing resume...", "Checking ATS...", "Finding keywords...", "Done!"];

export default function UploadPage() {
  const navigate = useNavigate();
  const { token } = useAppContext();
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [progress, setProgress] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setFileName(file.name);
    setFileSize(`${Math.round(file.size / 1024)} KB`);
    setError("");
  };

  const runAnalysis = async () => {
    if (!fileName || !selectedFile) return;
    if (!token) {
      setError("Please sign in before uploading your resume.");
      return;
    }

    setLoading(true);
    setError("");
    setProgress(steps[0]);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      if (jobDescription.trim()) formData.append("jobDescription", jobDescription.trim());

      const response = await fetch(`${API_BASE}/resume/upload`, {
        method: "POST",
        headers: authHeaders(),
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Upload failed");
      }

      window.setTimeout(() => setProgress(steps[1]), 800);
      window.setTimeout(() => setProgress(steps[2]), 1600);
      window.setTimeout(() => {
        setProgress(steps[3]);
        localStorage.setItem("resumeai_report", JSON.stringify(data));
        window.setTimeout(() => navigate("/dashboard"), 400);
      }, 2400);
    } catch (err) {
      setProgress("");
      setError(err.message || "Unable to analyze the resume.");
      setLoading(false);
    }
  };

  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <section className="card upload-card" style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Analyze Your Resume</h1>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>Get your ATS score in seconds.</p>
          </div>

          <div className={`upload-zone${fileName ? " upload-zone--active" : ""}`}>
            {!fileName ? (
              <>
                <Upload size={38} color="var(--accent)" />
                <h2>Drop your resume here</h2>
                <p>or</p>
                <label className="button button--ghost">
                  Browse Files
                  <input type="file" accept=".pdf,.doc,.docx,.txt" style={{ display: "none" }} onChange={handleFile} />
                </label>
                <p>PDF · DOCX · DOC · TXT — Max 5MB</p>
              </>
            ) : (
              <>
                <FileText size={36} color="var(--accent)" />
                <h2>{fileName}</h2>
                <p>{fileSize}</p>
                <div className="upload-actions">
                  <button className="button button--ghost" type="button" onClick={() => { setFileName(""); setFileSize(""); setProgress(""); setSelectedFile(null); setError(""); }}>
                    <X size={14} />
                    Remove
                  </button>
                </div>
              </>
            )}
          </div>

          <div>
            <label className="form__label">Paste job description (optional)</label>
            <textarea
              className="input input--textarea"
              value={jobDescription}
              onChange={(event) => setJobDescription(event.target.value)}
              placeholder="Paste the job posting here to improve keyword matching..."
            />
          </div>

          {error && <div className="error-text">{error}</div>}

          <button className="button button--primary button--full" onClick={runAnalysis} disabled={!fileName || loading}>
            {loading ? "Analyzing..." : "Analyze Resume"}
            <ArrowRight size={16} />
          </button>

          {progress && (
            <div className="progress-list">
              {steps.map((step) => (
                <div key={step} className={`progress-step${step === progress ? " progress-step--active" : ""}`}>
                  <span>{step === progress ? "•" : "○"}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
