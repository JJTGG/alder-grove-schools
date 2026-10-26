import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { learningStages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Learning",
  description:
    "Explore the illustrative Early Years, Primary and Secondary learning stages in the Alder Grove Schools concept."
};

export default function LearningPage() {
  return (
    <>
      <PageHero
        description="Explore a sample learning structure designed to show how a school website can guide families through different stages without overwhelming them with information."
        eyebrow="Learning"
        title="A thoughtful journey through every stage."
      />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">Explore each stage</p>
              <h2>Start with the stage that matters to you.</h2>
              <p>
                Each overview introduces the purpose, focus areas and sample
                learning approach for that stage.
              </p>
            </div>
          </div>

          <div className="card-grid">
            {learningStages.map((stage, index) => (
              <article className="learning-card" key={stage.slug}>
                <div className="learning-card__media">
                  <Image
                    alt={stage.imageAlt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 860px) 50vw, 33vw"
                    src={stage.imageUrl}
                  />
                </div>
                <span className="learning-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{stage.title}</h3>
                <p>{stage.summary}</p>
                <Link className="text-link" href={`/learning/${stage.slug}`}>
                  View stage overview <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split-layout">
          <div className="split-layout__intro">
            <p className="eyebrow">A connected approach</p>
            <h2>More than a list of subjects.</h2>
          </div>

          <div className="prose-section">
            <p>
              The sample learning approach combines foundational skills with
              questions, practical exploration, discussion and reflection. The
              balance would be adapted by a real school to suit its curriculum,
              learners and local requirements.
            </p>
            <p>
              These pages are illustrative. They do not claim that Alder Grove
              Schools operates, employs staff or delivers a verified
              curriculum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}