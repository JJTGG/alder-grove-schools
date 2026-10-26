"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/learning", label: "Learning" },
  { href: "/school-life", label: "School life" },
  { href: "/news", label: "News" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="concept-notice">
        Fictional school website concept · Created by TGG HUB
      </div>

      <header className="site-header">
        <div className="site-header__inner container">
          <Link
            aria-label="Alder Grove Schools home"
            className="brand"
            href="/"
            onClick={closeMenu}
          >
            <span aria-hidden="true" className="brand__mark">
              AG
            </span>
            <span className="brand__name">
              Alder Grove
              <span>Schools</span>
            </span>
          </Link>

          <button
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`menu-toggle${menuOpen ? " menu-toggle--open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            aria-label="Primary navigation"
            className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
            id="primary-navigation"
          >
            {navigationItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`site-nav__link${isActive ? " is-active" : ""}`}
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            className="button button--small header-cta"
            href="/admissions"
          >
            Explore admissions <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>
    </>
  );
}