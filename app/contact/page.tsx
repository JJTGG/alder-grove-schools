import type { Metadata } from "next";
import EnquiryForm from "@/components/enquiry-form";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact page concept with a clearly labelled, non-submitting demonstration form."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="A useful contact page should make the right next step easy to find. This concept demonstrates the page structure without inventing a school address, telephone number or email."
        eyebrow="Contact"
        title="Start with the right question."
      />

      <section className="section">
        <div className="container contact-layout">
          <div>
            <p className="eyebrow">School enquiries</p>
            <h2>Clear information. A straightforward next step.</h2>
            <p>
              A real version of this page would display the school's verified
              contact channels and explain which team handles each type of
              enquiry.
            </p>

            <div className="contact-note">
              <p className="eyebrow">Demo information</p>
              <h2>No real contact details are published.</h2>
              <p>
                Alder Grove Schools is fictional. An actual address, telephone
                number, email address, office hours and contact person would
                need to be supplied and approved before launch.
              </p>
            </div>
          </div>

          <EnquiryForm />
        </div>
      </section>
    </>
  );
}