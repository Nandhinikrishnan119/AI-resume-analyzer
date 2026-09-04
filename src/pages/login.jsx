import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Globe2, Eye, EyeOff, Lock, Mail, Sparkles } from "lucide-react";
import { API_BASE } from "../services/api";
import { useAppContext } from "../context/AppContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUser, setToken } = useAppContext();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);

  const storeSession = (payload) => {
    setToken(payload.token);
    setUser(payload.user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields");
      setToast("");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setToast("");
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();
    setLoading(true);
    setError("");

    try {
      let response = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail, password }),
      });

      let text = await response.text();
      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        if (!response.ok) {
          throw new Error(text || "Unable to sign in");
        }
        throw new Error("Invalid server response");
      }

      if (!response.ok) {
        response = await fetch(`${API_BASE}/auth/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: normalizedEmail.split("@")[0] || "User",
            email: normalizedEmail,
            password,
          }),
        });

        text = await response.text();
        try {
          data = text ? JSON.parse(text) : {};
        } catch {
          throw new Error(text || "Unable to sign in");
        }

        if (!response.ok) {
          throw new Error(data.message || "Unable to sign in");
        }
      }

      storeSession(data);
      setToast("Welcome! Redirecting...");
      window.setTimeout(() => navigate("/dashboard"), 800);
    } catch (err) {
      setError(err.message || "Unable to sign in");
      setToast("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-shell--center">
      <div className="auth-card">
        <div className="auth-card__mark">
          <Sparkles size={20} />
        </div>
        <h1>Sign in</h1>
        <p>Continue to your resume dashboard.</p>

        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label">Email</label>
          <div className="input-group">
            <Mail size={16} className="input-group__icon" />
            <input className="input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@email.com" />
          </div>

          <label className="form__label">Password</label>
          <div className="input-group">
            <Lock size={16} className="input-group__icon" />
            <input className="input input--password" type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" />
            <button type="button" className="input-group__toggle" onClick={() => setShowPassword((value) => !value)}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <div className="link-row">
            <a href="#" className="text-link">Forgot password?</a>
          </div>

          {error && <div className="error-text">{error}</div>}
          <button className="button button--primary button--full" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="divider-line">or</div>

        <button className="button button--outline button--full" type="button">
          <Globe2 size={16} />
          Continue with Google
        </button>

        {toast && <div className="toast">{toast}</div>}

        <p style={{ textAlign: "center", marginTop: 16, fontSize: 13 }}>
          New here? <Link to="/upload" className="text-link">Create account</Link>
        </p>
      </div>
    </div>
  );
}
