# Alder Grove Schools

**A standalone fictional school website concept built by TGG HUB.**

Alder Grove Schools is a portfolio demonstration showing how a school website can present its educational approach, learning stages, school life, admissions information and editorial content through a responsive multi-page experience.

**Alder Grove Schools is fictional. It is not an operating school.** All school information is illustrative and must not be interpreted as verified information about a real institution.

## Project Overview

The website focuses on:

- Clear navigation and page structure.
- A restrained, education-focused visual identity.
- Responsive layouts for mobile, tablet and desktop screens.
- Dedicated pages for different learning stages.
- Reusable components and centralised typed content.
- Accessibility-oriented navigation, visible keyboard focus and reduced-motion support.
- Cloudinary-hosted photography with responsive image delivery.
- Clear disclosure of fictional content and demonstration-only functionality.

This is a public-facing website demonstration, not a school management system.

## Technology Stack

- **Framework:** Next.js App Router
- **UI library:** React
- **Language:** TypeScript
- **Styling:** CSS
- **Content:** Typed static data
- **Image storage and delivery:** Cloudinary
- **Image rendering and optimization:** Next.js Image
- **Deployment:** Vercel
- **Continuous integration:** GitHub Actions

The application uses static content. It does not require a database, authentication service, CMS or production contact-form backend.

## Live Website and Repository

- **Website:** https://alder-grove-schools.vercel.app
- **Repository:** https://github.com/JJTGG/alder-grove-schools
- **Deployment platform:** Vercel

The project is connected to GitHub. Pushes to `main` trigger the configured validation workflow and Vercel deployment.

## Website Routes

| Route | Purpose |
|---|---|
| `/` | Homepage introducing the concept and learning stages |
| `/about` | Educational ideas and guiding principles |
| `/learning` | Learning-stage overview |
| `/learning/early-years` | Early Years overview |
| `/learning/primary` | Primary Learning overview |
| `/learning/secondary` | Secondary Learning overview |
| `/school-life` | Illustrative themes covering activities, teamwork and development |
| `/news` | News and insights index |
| `/news/learning-beyond-the-classroom` | Sample article about learning beyond lessons |
| `/news/working-with-families` | Sample article about family partnerships |
| `/news/helping-learners-discover-strengths` | Sample article about learner strengths |
| `/admissions` | Illustrative admissions journey, FAQ and demonstration form |
| `/contact` | Contact page concept and demonstration form |
| `/privacy` | Explanation of the demo's privacy and data-handling limitations |

Learning-stage and news-detail routes use statically defined entries. Unsupported slugs return the branded not-found page.

## Project Structure

```text
alder-grove-schools/
├── .github/
│   └── workflows/
│       └── ci.yml
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
│   ├── image-sections.css
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

- Node.js 22.x
- npm
- Git, if cloning the repository

### Installation

```bash
git clone https://github.com/JJTGG/alder-grove-schools.git
cd alder-grove-schools
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Validation

TypeScript check:

```bash
npm run typecheck
```

Production build:

```bash
npm run build
```

The production build runs TypeScript validation before invoking the Next.js build.

Run the production build locally:

```bash
npm run start
```

## Image Pipeline

Photography is stored in the Cloudinary folder:

`alder-grove-schools`

The current set covers:

- Campus exterior and greenery.
- Early learning and paired reading.
- Library reading.
- Classroom science experiments.
- Creative arts.
- Outdoor sport.
- Collaborative classroom learning.

Images are referenced through Cloudinary delivery URLs with transformations for cropping, output format and quality. Next.js Image renders these sources responsively, using generated source sizes and lazy loading for non-critical images. The homepage hero is preloaded because it is the principal above-the-fold image.

The `images.remotePatterns` setting in `next.config.ts` limits remote Next.js image handling to the project's Cloudinary hostname and path.

### Image Attribution and Usage

The photographs are illustrative stock imagery, not evidence of actual Alder Grove Schools students, staff, buildings, facilities or activities.

Source and photographer details are retained in the Cloudinary asset context. Pexels' license permits free personal and commercial use without mandatory attribution, although credit is appreciated. Review Pexels' current license and consider any additional rights that may apply to depicted people, logos, trademarks or property before adapting imagery for another purpose.

- Pexels license: https://www.pexels.com/license/
- Cloudinary: https://cloudinary.com/

## Design Principles

The visual direction uses:

- A restrained green, cream and neutral palette.
- Clear typographic hierarchy.
- Rounded but practical interface elements.
- Responsive navigation and content layouts.
- A photographic homepage hero and learning cards.
- Reusable cards, page headers, callouts and sections.

Photography supports the site's content rather than replacing it. The concept remains intentionally free of invented school addresses, telephone numbers, email addresses, fees, vacancies, admissions dates, accreditation claims or institutional results.

## Accessibility

The implementation includes:

- A skip-to-content link.
- Semantic page landmarks and headings.
- Labels for form fields.
- An accessible mobile-navigation toggle.
- Visible keyboard focus indicators.
- Status messaging for the demonstration form.
- Reduced-motion styling.
- Descriptive alternative text for informative images.

These features do not constitute a complete accessibility audit. Test target browsers, devices and assistive technologies before adapting the concept for a real institution.

## Enquiry Form Limitations

The admissions and contact pages contain a demonstration-only form.

Submitting the form prevents normal submission, resets the fields and displays a local confirmation message. It does not contact an API, email address or external service, and it does not intentionally save submissions to a database.

The fields have no `name` attributes, so a native form fallback cannot serialize their values into a query string. The interface also warns visitors not to enter real personal or contact information.

A production implementation would require an approved submission workflow, server-side validation, spam protection, appropriate privacy disclosures and secure handling of submitted information.

## Privacy and Search Indexing

The current application does not implement:

- User accounts or authentication.
- A database or CMS.
- Application-configured analytics.
- A working contact or admissions submission backend.
- Student, parent or staff records.
- Payment processing or application-status tracking.

The metadata deliberately sets `noindex` and `nofollow`, while `robots.ts` allows crawlers to access pages and discover the indexing directive. This is intended for a fictional portfolio demo, not a guarantee that URLs can never appear in search results.

Hosting platforms, infrastructure, browser extensions and other external services may process data independently of the application's form logic. Review those systems separately before a production launch.

The privacy page is project documentation, not legal advice or a claim of compliance with any particular law.

## Scope Boundaries

This project is intentionally limited to a public-facing school website. It does not include:

- School management dashboards.
- Student or staff portals.
- Attendance tracking or grading.
- Online fee payment.
- Actual admissions applications or application-status tracking.
- Live school calendars or event data.
- Database-backed content management.
- A production contact-form backend.
- Live chat or messaging integrations.

These capabilities require separate requirements and implementation.

## Continuous Integration

GitHub Actions runs the TypeScript check and production build on pushes to `main` and pull requests targeting `main`.

The workflow currently uses Node.js 22 and runs `npm install` before the build. Lockfile generation and automation are intentionally deferred until the project setup is complete.

A successful CI run establishes that the code type-checks and builds. It does not replace live browser testing or an accessibility audit.

## Before Production Use

Before adapting the demonstration for a real school:

1. Supply and approve the institution's actual information.
2. Verify curriculum, learning-stage details and admissions procedures.
3. Provide verified contact details, office hours, fees and dates.
4. Confirm image usage rights, attribution and permissions where needed.
5. Approve privacy, safeguarding, accessibility and legal information.
6. Implement and test any form submission, data storage or third-party integration.
7. Test responsive behaviour, navigation, broken routes, metadata and production builds.
8. Review the final website with the institution's authorised representatives.

Do not present this fictional concept as an existing school or sample content as verified institutional information.

## Creator

**TGG HUB**

A standalone school website portfolio demonstration.

Repository: https://github.com/JJTGG/alder-grove-schools