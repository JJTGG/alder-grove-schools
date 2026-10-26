import type { Metadata } from "next";
import EnquiryForm from "@/components/enquiry-form";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Explore the illustrative admissions journey and preview the non-submitting enquiry form."
};

const admissionsSteps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Review the sample learning stages and consider which information you would need before making an enquiry."
  },
  {
    number: "02",
    title: "Ask questions",
    description:
      "A real school would provide approved contact channels so families could ask about availability, requirements and next steps."
  },
  {
    number: "03",
    title: "Confirm the process",
    description:
      "The real admissions team would explain the current procedure, required documents, relevant timelines and any applicable fees."
  }
];

const admissionsQuestions = [
  {
    question: "How do I enquire about admission?",
    answer:
      "This demo provides a non-submitting enquiry form to demonstrate the interface. A real school would need to publish its official contact details and connect a secure submission process."
  },
  {
    question: "What documents are required?",
    answer:
      "Requirements vary by institution, learning stage and applicable rules. This fictional concept does not define or claim a real document checklist."
  },
  {
    question: "Can I confirm available places or school fees here?",
    answer:
      "No. There are no live admissions records or fee schedules in this demo. A real school would need to publish approved information or provide a reliable official contact channel."
  },
  {
    question: "Does submitting the form contact the school?",
    answer:
      "No. The form runs locally in the browser, sends nothing to a server and stores no submitted information."
  }
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        description="This page demonstrates how a school website can explain an admissions journey and give families a clear place to start. It is not a live application service."
        eyebrow="Admissions"
        title="Take the next step with clarity."
      />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="section-heading__copy">
              <p className="eyebrow">A sample journey</p>
              <h2>From an initial question to an informed decision.</h2>
              <p>
                These steps illustrate a possible admissions information
                structure. They are not Alder Grove Schools' operating
                procedure.
              </p>
            </div>
          </div>

          <div className="admissions-steps">
            {admissionsSteps.map((step) => (
              <article className="admissions-step" key={step.number}>
                <span className="admissions-step__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container contact-layout">
          <div>
            <p className="eyebrow">Common questions</p>
            <h2>Know what you need to ask.</h2>
            <p>
              A real admissions page should provide specific, current
              information approved by the school. This demo deliberately avoids
              inventing fees, dates, vacancies or application requirements.
            </p>

            <div className="faq-list">
              {admissionsQuestions.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <EnquiryForm />
        </div>
      </section>
    </>
  );
}