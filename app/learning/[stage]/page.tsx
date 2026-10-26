import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";
import { learningStages } from "@/data/site-content";

type LearningStagePageProps = {
  params: Promise<{ stage: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return learningStages.map((stage) => ({
    stage: stage.slug
  }));
}

export async function generateMetadata({
  params
}: LearningStagePageProps): Promise<Metadata> {
  const { stage: stageSlug } = await params;
  const stage = learningStages.find((item) => item.slug === stageSlug);

  if (!stage) {
    return {
      title: "Learning stage not found"
    };
  }

  return {
    title: stage.title,
    description: stage.summary
  };
}

export default async function LearningStagePage({
  params
}: LearningStagePageProps) {
  const { stage: stageSlug } = await params;
  const stage = learningStages.find((item) => item.slug === stageSlug);

  if (!stage) {
    notFound();
  }

  return (
    <>
      <PageHero
        description={stage.summary}
        eyebrow="Learning stages"
        title={stage.title}
      />

      <section className="section">
        <div className="container split-layout">
          <div className="split-layout__intro">
            <p className="eyebrow">Stage overview</p>
            <h2>Build confidence through meaningful learning.</h2>
            <p>{stage.introduction}</p>
          </div>

          <div>
            <div className="detail-heading">
              <h2>Focus areas</h2>
              <p>
                These sample areas illustrate the breadth of learning a real
                school could describe for this stage.
              </p>
            </div>

            <ul className="tag-list">
              {stage.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split-layout">
          <div className="split-layout__intro">
            <p className="eyebrow">Learning approach</p>
            <h2>Make room for questions and progress.</h2>
            <p>
              The following points are illustrative ideas, not an approved
              school policy or a statement about a real institution.
            </p>
          </div>

          <div className="content-list">
            {stage.learningApproach.map((item, index) => (
              <article className="content-list__item" key={item}>
                <span className="detail-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </article>
            ))}
            <div className="privacy-note">
              <p>{stage.closingNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="callout">
            <div>
              <p className="eyebrow">Continue exploring</p>
              <h2>See how the wider learning journey fits together.</h2>
              <p>
                Visit the learning overview to compare all sample stages.
              </p>
            </div>
            <div className="callout__action">
              <Link className="button button--light" href="/learning">
                Back to learning <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}