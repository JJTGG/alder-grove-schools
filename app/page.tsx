import Link from "next/link";
import { learningStages, schoolArticles, schoolPrinciples } from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">A place to learn and grow</p>
            <h1>
              Building bright beginnings. <em>Opening new possibilities.</em>
            </h1>
            <p className="home-hero__description">
              A thoughtful school community concept centred on curiosity,
              confident learning and the people who help every learner grow.
            </p>
            <div className="home-hero__actions">
              <Link className="button" href="/learning">
                Explore learning <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button--secondary" href="/admissions">
                Admissions overview
              </Link>
            </div>
            <p className="home-hero__note">
              A fictional school website concept created by TGG HUB.
            </p>
          </div>

          <div className="home-hero__visual">
            <div
              aria-label="Decorative illustration of a school building, trees and open grounds"
              className="campus-art"
              role="img"
            >
              <div className="campus-art__sun" />
              <div className="campus-art__cloud" />
              <div className="campus-art__hill campus-art__hill--back" />
              <div className="campus-art__hill" />

              <div className="campus-art__building">
                <div className="campus-art__roof" />
                <span className="campus-art__window" />
                <span className="campus-art__window" />
                <span className="campus-art__window" />
                <span className="campus-art__window" />
                <span className="campus-art__window" />
                <span className="campus-art__window" />
                <div className="campus-art__door" />
              </div>

              <div className="campus-art__tree" />
              <div className="campus-art__tree campus-art__tree--right" />

              <div className="campus-art__label">
                <div>
                  <span>Our guiding idea</span>
                  <strong>Room to grow.</strong>
                </div>
                <div aria-hidden="true" className="campus-art__label-mark">
                  ↗
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">Learning at every stage</p>
              <h2>Different stages. A shared love of learning.</h2>
              <p>
                From first discoveries to deeper subject exploration, this
                concept brings together clear learning foundations and
                opportunities to develop individual strengths.
              </p>
            </div>
            <div className="section-heading__action">
              <Link className="text-link" href="/learning">
                View learning overview <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="card-grid">
            {learningStages.map((stage, index) => (
              <article className="learning-card" key={stage.slug}>
                <span className="learning-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{stage.title}</h3>
                <p>{stage.summary}</p>
                <Link className="text-link" href={`/learning/${stage.slug}`}>
                  Explore this stage <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">What guides the concept</p>
              <h2>Learning with purpose. Growing with care.</h2>
              <p>
                The school concept is shaped around a few clear principles
                rather than promises about unverified facilities, results or
                credentials.
              </p>
            </div>
            <div className="section-heading__action">
              <Link className="button button--light" href="/about">
                Meet the concept <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="principle-grid">
            {schoolPrinciples.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span className="principle-card__number">
                  {principle.number}
                </span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">Ideas for families and learners</p>
              <h2>Thoughts on learning and growing.</h2>
              <p>
                Sample editorial content shows how a school website could share
                useful reflections with its wider community.
              </p>
            </div>
            <div className="section-heading__action">
              <Link className="text-link" href="/news">
                Visit the news and insights page{" "}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="article-grid">
            {schoolArticles.map((article) => (
              <article className="article-card" key={article.slug}>
                <span className="article-card__category">
                  {article.category}
                </span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <Link className="text-link" href={`/news/${article.slug}`}>
                  Read article <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="callout">
            <div>
              <p className="eyebrow">Discover the next step</p>
              <h2>A clear path begins with a good conversation.</h2>
              <p>
                Explore the admissions information and preview the kind of
                enquiry experience a real school website could provide.
              </p>
            </div>
            <div className="callout__action">
              <Link className="button button--light" href="/admissions">
                Explore admissions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}