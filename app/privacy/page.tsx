import type { Metadata } from "next";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy and data-handling notes for the fictional Alder Grove Schools website demonstration."
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        description="This page explains the current demonstration's limitations. It is not a substitute for a privacy notice reviewed for a real school's operations."
        eyebrow="Privacy"
        title="Clarity about what this demo does."
      />

      <section className="section">
        <div className="container content-narrow prose-section">
          <h2>About this website</h2>
          <p>
            Alder Grove Schools is a fictional website concept created to
            demonstrate a possible school website experience. It is not an
            operating school, and the sample information on this site should
            not be treated as official school information.
          </p>

          <h2>Enquiry form demonstration</h2>
          <p>
            The enquiry form is a client-side demonstration. When it is
            submitted, the browser displays a confirmation message. The form
            data is not sent to a server, placed in a database or saved by this
            application.
          </p>
          <p>
            Do not enter real personal information into this fictional demo.
            Browser extensions, screenshots, or other software on a visitor's
            device are outside this application's control.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            This version does not implement its own analytics service, account
            system or cookie-consent workflow. Any hosting-platform or
            infrastructure processing must be considered separately before a
            real deployment.
          </p>

          <h2>Before a real school launch</h2>
          <p>
            The institution would need to review this page against its actual
            data practices and applicable requirements. A production version
            with working contact forms, analytics, third-party embeds or user
            accounts may require additional disclosures, safeguards and
            consent mechanisms.
          </p>

          <div className="privacy-note">
            <p>
              This page is demo documentation, not legal advice or a claim of
              compliance with any particular privacy law.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}