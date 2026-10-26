import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { schoolArticles } from "@/data/site-content";

type NewsArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return schoolArticles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({
  params
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = schoolArticles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article not found"
    };
  }

  return {
    title: article.title,
    description: article.excerpt
  };
}

export default async function NewsArticlePage({
  params
}: NewsArticlePageProps) {
  const { slug } = await params;
  const article = schoolArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="article-page">
      <div className="container">
        <header className="article-page__header">
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="article-page__excerpt">{article.excerpt}</p>
          <p>{article.readTime} · Sample article</p>
        </header>

        <div className="article-page__body">
          {article.paragraphs.map((paragraph, index) => (
            <p key={`${article.slug}-${index}`}>{paragraph}</p>
          ))}
        </div>

        <div className="article-page__back">
          <Link className="text-link" href="/news">
            <span aria-hidden="true">←</span> Back to news and insights
          </Link>
        </div>
      </div>
    </article>
  );
}