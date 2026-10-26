import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/learning", label: "Learning" },
  { href: "/school-life", label: "School life" },
  { href: "/news", label: "News" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" }
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__identity">
            <Link className="brand brand--footer" href="/">
              <span aria-hidden="true" className="brand__mark">
                AG
              </span>
              <span className="brand__name">
                Alder Grove
                <span>Schools</span>
              </span>
            </Link>
            <p>
              A concept for a thoughtful school community where learning,
              confidence and curiosity grow together.
            </p>
          </div>

          <div className="site-footer__navigation">
            <p className="eyebrow">Explore</p>
            <nav aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Alder Grove Schools concept.</p>
          <p>
            Website concept by <span className="footer-credit">TGG HUB</span>
          </p>
          <p className="site-footer__disclaimer">
            Fictional demo. Not an operating school.
          </p>
        </div>
      </div>
    </footer>
  );
}