import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">404 · Page not found</p>
        <h1>That page isn't here.</h1>
        <p>
          The link may be outdated, or the page may have moved. Return to the
          homepage or explore the learning section.
        </p>
        <div className="home-hero__actions" style={{ justifyContent: "center" }}>
          <Link className="button" href="/">
            Back to home <span aria-hidden="true">→</span>
          </Link>
          <Link className="button button--secondary" href="/learning">
            Explore learning
          </Link>
        </div>
      </div>
    </section>
  );
}