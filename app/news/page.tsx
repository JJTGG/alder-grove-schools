import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { schoolArticles } from "@/data/site-content";

export const metadata: Metadata = {
  title: "News and Insights",
  description:
    "Read illustrative articles about learning, family partnerships and student development."
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        description="A sample editorial space for useful ideas, learning reflections and community updates. All articles currently shown are fictional demonstration content."
        eyebrow="News and insights"
        title="Ideas worth sharing."
      />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">From the editorial desk</p>
              <h2>Learning, relationships and personal growth.</h2>
              <p>
                Explore sample stories showing how articles can be organised
                and presented on a school website.
              </p>
            </div>
          </div>

          <div className="news-list">
            {schoolArticles.map((article) => (
              <article className="article-card" key={article.slug}>
                <span className="article-card__category">
                  {article.category}
                </span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <p>{article.readTime}</p>
                <Link className="text-link" href={`/news/${article.slug}`}>
                  Read article <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}