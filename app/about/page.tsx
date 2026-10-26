import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { schoolPrinciples } from "@/data/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Explore the values and educational ideas behind the fictional Alder Grove Schools website concept."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="Alder Grove Schools is a fictional school concept designed to demonstrate how an education website can communicate purpose, learning and community with clarity."
        eyebrow="About the concept"
        title="Education shaped by curiosity, care and growth."
      />

      <section className="section">
        <div className="container split-layout">
          <div className="split-layout__intro">
            <p className="eyebrow">The idea</p>
            <h2>A clear purpose, thoughtfully expressed.</h2>
            <p>
              A good school website should help families understand what an
              institution values, how its learning stages fit together and
              where to find the next piece of information.
            </p>
          </div>

          <div className="prose-section">
            <h2>A learning community concept</h2>
            <p>
              Alder Grove Schools imagines an environment where learners are
              encouraged to ask questions, practise new skills, listen to one
              another and take increasing responsibility for their learning.
            </p>
            <p>
              The website is structured around the information families often
              need to explore: educational approach, learning stages, school
              life, admissions and ways to make contact.
            </p>

            <h2>What this demo represents</h2>
            <p>
              The pages and writing demonstrate a possible website experience.
              They are not official school policies, operational details,
              statements of accreditation or claims about real outcomes.
            </p>
            <p>
              Before any real institution uses a website like this, its
              leadership would need to supply and approve the actual school
              information, policies, contact details and media.
            </p>

            <Link className="button" href="/learning">
              Explore the learning approach{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">Guiding principles</p>
              <h2>Simple values that can shape everyday learning.</h2>
              <p>
                These principles are illustrative ideas for the concept, not a
                published policy or verified statement from an operating
                school.
              </p>
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
    </>
  );
}