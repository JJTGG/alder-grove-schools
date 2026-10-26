import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { schoolLifeTopics } from "@/data/site-content";

export const metadata: Metadata = {
  title: "School Life",
  description:
    "Explore sample ideas for creative expression, wellbeing, teamwork and responsibility."
};

export default function SchoolLifePage() {
  return (
    <>
      <PageHero
        description="Learning is shaped by more than formal lessons. This concept page explores the activities, routines and relationships that can help a school community feel connected."
        eyebrow="School life"
        title="Room for discovery, connection and growth."
      />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">Beyond the lesson</p>
              <h2>Everyday experiences can become opportunities to grow.</h2>
              <p>
                These themes illustrate how a school might communicate the
                broader learning experience to families.
              </p>
            </div>
          </div>

          <div className="life-grid">
            {schoolLifeTopics.map((topic) => (
              <article
                className="life-card life-card--media"
                key={topic.number}
              >
                <div className="life-card__media">
                  <Image
                    alt={topic.imageAlt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 860px) 50vw, 45vw"
                    src={topic.imageUrl}
                    unoptimized
                  />
                </div>
                <div className="life-card__body">
                  <span className="life-card__number">{topic.number}</span>
                  <div>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split-layout">
          <div className="split-layout__intro">
            <p className="eyebrow">Community matters</p>
            <h2>Learning grows through relationships.</h2>
          </div>

          <div className="prose-section">
            <p>
              A school community includes learners, families and the people
              responsible for teaching and supporting them. Clear
              communication and shared expectations can help these
              relationships work well.
            </p>
            <p>
              A real school would use this space to publish its actual
              activities, clubs, calendar, facilities and safeguarding
              information. No specific events or facilities are claimed by
              this fictional demo.
            </p>
            <Link className="text-link" href="/news">
              Read learning insights <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}