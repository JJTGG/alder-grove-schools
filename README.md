# Alder Grove Schools

**A standalone fictional school website concept built by TGG HUB.**

Alder Grove Schools is a portfolio demonstration designed to showcase how a school website can present its educational approach, learning stages, school life, admissions information and editorial content through a clear, responsive multi-page experience.

**Alder Grove Schools is fictional. It is not an operating school.** The content is illustrative and must not be interpreted as verified information about a real institution.

## Project Overview

The website is designed to give prospective school communities a straightforward way to explore educational information and understand the next steps they might take.

The experience focuses on:

- Clear navigation and page structure.
- A restrained, education-focused visual identity.
- Responsive layouts for mobile, tablet and desktop screens.
- Dedicated pages for different learning stages.
- Reusable components and centralised typed content.
- Accessible navigation, visible focus states and reduced-motion support.
- Clear disclosure of fictional content and demonstration-only functionality.

The project is a public-facing website demonstration, not a school management system.

## Technology Stack

- **Framework:** Next.js App Router
- **UI library:** React
- **Language:** TypeScript
- **Styling:** CSS
- **Content:** Typed static data
- **Deployment target:** Vercel

The application is structured around Next.js pages, shared components and static content. No database, authentication service or external image service is required by the current implementation.

## Website Routes

| Route | Purpose |
|---|---|
| `/` | Homepage introducing the concept and its learning stages |
| `/about` | Educational ideas and guiding principles |
| `/learning` | Overview of the learning stages |
| `/learning/early-years` | Early Years overview |
| `/learning/primary` | Primary Learning overview |
| `/learning/secondary` | Secondary Learning overview |
| `/school-life` | Sample themes covering community, activities and student development |
| `/news` | News and insights index |
| `/news/learning-beyond-the-classroom` | Sample article about learning beyond formal lessons |
| `/news/working-with-families` | Sample article about family partnerships |
| `/news/helping-learners-discover-strengths` | Sample article about learner strengths and progress |
| `/admissions` | Illustrative admissions journey, frequently asked questions and demo enquiry form |
| `/contact` | Contact page concept and demo enquiry form |
| `/privacy` | Explanation of the current demo's privacy and data-handling limitations |

The learning-stage and article detail pages use dynamic route segments with statically defined entries. Unsupported stages and article slugs return the branded not-found page.

## Project Structure

The main application files are organised as follows:

```text
alder-grove-schools/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── admissions/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── learning/
│   │   ├── [stage]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── news/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── school-life/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── robots.ts
├── components/
│   ├── enquiry-form.tsx
│   ├── page-hero.tsx
│   ├── site-footer.tsx
│   └── site-header.tsx
├── data/
│   └── site-content.ts
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## Getting Started

### Requirements

- Node.js `20.9.0` or later.
- npm.
- Git, if cloning the repository.

### Installation

Clone the repository and enter the project directory:

```bash
git clone https://github.com/JJTGG/alder-grove-schools.git
cd alder-grove-schools
```

Install the dependencies:

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### TypeScript Check

```bash
npm run typecheck
```

This runs TypeScript without emitting compiled output.

### Production Build

```bash
npm run build
```

The build script runs the TypeScript check before invoking the Next.js production build.

### Run the Production Build Locally

After a successful production build:

```bash
npm run start
```

The production server is available at `http://localhost:3000`.

## Design and Content Principles

### Fictional Content

All school descriptions, educational principles, learning-stage details, articles and admissions guidance are illustrative.

The project does not claim that Alder Grove Schools has real students, staff, facilities, school results, accreditation, operational policies or an established curriculum.

No real school address, telephone number, email address, fees, vacancies or admissions dates are invented for this demonstration.

### Visual Design

The visual direction uses:

- A restrained green, cream and neutral colour palette.
- Clear typographic hierarchy.
- Rounded but practical interface elements.
- A responsive navigation system.
- A CSS-built decorative campus illustration.
- Reusable cards, page headers, callouts and content sections.

The current version does not depend on external photography or remote image URLs.

### Accessibility

The implementation includes several accessibility-oriented features:

- A skip-to-content link.
- Semantic page landmarks and headings.
- Labels for form fields.
- An accessible mobile-navigation toggle.
- Visible keyboard focus indicators.
- Appropriate status messaging for the demo form.
- Reduced-motion styling for visitors who request reduced animation.

These features do not constitute a complete accessibility audit. The website should be tested across target browsers, devices and assistive technologies before a real launch.

## Enquiry Form Limitations

The admissions and contact pages contain a demonstration-only enquiry form.

Submitting the form:

1. Prevents the browser's normal form submission.
2. Resets the displayed form fields.
3. Shows a local confirmation message.

The form does **not** send information to an API, email address or external service. It does not write submissions to a database or intentionally persist the entered values.

The interface warns visitors not to enter real personal or contact information.

A production implementation would require an approved submission workflow, server-side validation, suitable spam protection, secure handling of submitted information and an appropriate privacy notice.

## Privacy and Search Indexing

The current application does not implement:

- User accounts or authentication.
- A database.
- Analytics configured by this application.
- A content management system.
- A working contact or admissions submission backend.
- Student, parent or staff records.

The page metadata discourages search engines from indexing the fictional demo. The robots configuration allows crawlers to access pages so they can discover the `noindex` instruction.

This configuration is intended for the demonstration stage. Search engines may take time to process indexing directives, and the configuration alone does not guarantee that URLs will never appear in search results.

Hosting platforms, deployment infrastructure, browser extensions and other external services may process data independently of this application's form logic. Those systems must be reviewed separately before a production deployment.

The privacy page is project documentation, not legal advice or a claim of compliance with any specific law.

## Scope Boundaries

The current project is intentionally limited to a public-facing school website.

It does not include:

- School management or administration dashboards.
- Student or staff portals.
- Attendance tracking or grading.
- Online fee payment.
- Admissions applications or application-status tracking.
- Live school availability, calendars or events.
- A database-backed content management system.
- A production contact-form backend.
- Live chat or messaging integrations.

Those capabilities would require separate requirements, design decisions and implementation work. They are not implied by the current website.

## Before Production Use

Before adapting this demonstration for a real school, the responsible institution would need to:

1. Supply and approve its actual institutional information.
2. Confirm the curriculum, learning-stage descriptions and admissions procedures.
3. Provide verified contact details, office hours and relevant fees or dates.
4. Supply properly licensed photography and other media, where required.
5. Approve its privacy, safeguarding, accessibility and legal information.
6. Implement and test any required form submission, data storage or third-party integration.
7. Test responsive behaviour, navigation, broken routes, metadata and production builds.
8. Review the completed website with the school's authorised representatives.

Do not present this fictional concept as an existing institution or publish its sample content as verified school information.

## Project Status

The repository is the source of truth for implementation.

The existence of a file in this README's structure does not replace checking the actual repository, running its validation scripts or verifying the deployed website. A successful build and working deployment should only be claimed after those checks have actually been completed.

## Creator

**TGG HUB**

A standalone website portfolio demonstration.

Repository: https://github.com/JJTGG/alder-grove-schools