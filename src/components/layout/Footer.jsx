import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Upload", to: "/upload" },
  { label: "Dashboard", to: "/dashboard" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="brand">Resume<span className="brand__accent">AI</span></div>
      <div className="footer__links">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
      <div>© 2026 ResumeAI</div>
    </footer>
  );
}
