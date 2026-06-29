import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Upload", to: "/upload" },
  { label: "Dashboard", to: "/dashboard" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <div className="header__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          Resume<span className="brand__accent">AI</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="button button--ghost">
            Login
          </Link>
          <Link to="/upload" className="button button--primary">
            Get Started
            <span className="button__icon">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        <button className="button button--ghost menu-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <div className="mobile-nav__links">
            {links.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="button button--ghost">
              Login
            </Link>
            <Link to="/upload" onClick={() => setOpen(false)} className="button button--primary">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
