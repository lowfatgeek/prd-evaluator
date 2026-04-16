import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | PRDmetrix',
  description: 'Read the Terms of Service for PRDmetrix — AI-powered PRD evaluation platform.',
};

const quickFacts = [
  { label: 'Ownership', fact: 'You retain full ownership of all PRDs and documents you upload.' },
  { label: 'Processing', fact: 'The platform requires limited processing rights solely to analyze your document and deliver the report.' },
  { label: 'AI Output', fact: 'AI-generated results are informational and advisory only — not guaranteed or authoritative.' },
  { label: 'Conduct', fact: 'Unauthorized, illegal, or harmful uploads are strictly prohibited.' },
];

const termSections = [
  {
    id: 'acceptance',
    eyebrow: '01',
    title: 'Acceptance of Terms',
    body: [
      'By accessing PRDmetrix, uploading a document, requesting an AI evaluation, or downloading an exported report, you agree to these Terms of Service.',
      'If you do not agree to these terms, you must not use the service.',
    ],
  },
  {
    id: 'service',
    eyebrow: '02',
    title: 'What the Service Does',
    body: [
      'PRDmetrix is a web-based PRD evaluation tool that accepts PDF, TXT, and Markdown documents, analyzes them with automated systems and third-party AI models, and returns scores, findings, recommendations, and downloadable reports.',
      'The service is provided as a workflow aid for product and engineering teams. It is not a substitute for product judgment, legal review, security review, or architectural due diligence.',
    ],
  },
  {
    id: 'eligibility',
    eyebrow: '03',
    title: 'Eligibility and Authority',
    body: [
      'You may use the service only if you are legally permitted to do so and have authority to upload the material you submit.',
      'If you upload a document on behalf of a company, client, or team, you represent that you are authorized to act for that party.',
    ],
  },
  {
    id: 'content',
    eyebrow: '04',
    title: 'Your Documents and Ownership',
    body: [
      'You retain ownership of the PRDs and related material you upload.',
      'You grant PRDmetrix a limited right to store, process, transmit, and analyze your uploaded content solely for operating the service connected to your specific request.',
      'You must not upload content that you do not have the right to share or process.',
    ],
  },
  {
    id: 'ai',
    eyebrow: '05',
    title: 'AI Output Disclaimer',
    body: [
      'Evaluation results are generated with automated models and may be incomplete, inaccurate, inconsistent, or unsuitable for your specific context.',
      'Scores, verdicts, strengths, weaknesses, and recommendations are informational only and should be reviewed by a qualified human before being used for roadmap, delivery, budget, compliance, or technical decisions.',
    ],
  },
  {
    id: 'usage',
    eyebrow: '06',
    title: 'Acceptable Use',
    body: [
      'You may not use the service to upload unlawful material, confidential material without authorization, malware, abusive content, or content that infringes intellectual property or privacy rights.',
      'You may not probe, reverse engineer, interfere with, overload, scrape, or attempt unauthorized access to any part of the platform or its supporting infrastructure.',
    ],
  },
  {
    id: 'processing',
    eyebrow: '07',
    title: 'Storage and Processing',
    body: [
      'To operate the service, uploaded files, extracted text, metadata, evaluation outputs, and exported reports may be processed and stored by PRDmetrix and its infrastructure providers, including storage, database, and AI processing vendors.',
      'Retention periods, deletion practices, and privacy commitments should be read together with the Privacy Policy when that document is published.',
    ],
  },
  {
    id: 'availability',
    eyebrow: '08',
    title: 'Availability and Changes',
    body: [
      'The service is provided on an "as is" and "as available" basis. We do not guarantee uninterrupted access, error-free output, or permanent availability of any feature, report, or stored file.',
      'We may add, remove, suspend, or modify features, model providers, limits, file support, or workflows at any time.',
    ],
  },
  {
    id: 'liability',
    eyebrow: '09',
    title: 'Limitation of Liability',
    body: [
      'To the maximum extent allowed by law, PRDmetrix is not liable for indirect, incidental, special, consequential, or business losses arising from use of the service or reliance on AI-generated output.',
      'That includes missed deadlines, product defects, delivery delays, revenue loss, customer impact, or internal decisions made from evaluated reports.',
    ],
  },
  {
    id: 'termination',
    eyebrow: '10',
    title: 'Suspension and Termination',
    body: [
      'We may suspend or terminate access if we reasonably believe you violated these terms, created security risk, abused the service, or exposed the platform or other users to legal or operational harm.',
      'We may also remove content where required for legal, safety, or infrastructure reasons.',
    ],
  },
  {
    id: 'updates',
    eyebrow: '11',
    title: 'Updates to These Terms',
    body: [
      'We may revise these Terms of Service from time to time. Updated terms become effective when posted on the site unless a later effective date is stated.',
      'Continued use of the service after an update means you accept the revised terms.',
    ],
  },
  {
    id: 'contact',
    eyebrow: '12',
    title: 'Contact and Governing Law',
    body: [
      'If you have any questions about these Terms of Service, please contact us at hello@prdmetrix.com.',
      'These Terms are governed by applicable law in the jurisdiction where PRDmetrix operates. Any disputes arising from your use of the service shall be resolved in accordance with that jurisdiction\'s legal framework.',
    ],
  },
];

const EFFECTIVE_DATE = 'April 15, 2025';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e7e5e5] font-sans selection:bg-primary selection:text-on-primary">
      <nav className="bg-[#131313]/80 backdrop-blur-md flex justify-center items-center px-12 max-w-[1920px] mx-auto w-full sticky top-0 z-50 h-16 border-none">
        <Link href="/" className="text-xl font-bold text-[#e7e5e5] tracking-tight hover:text-[#e7e5e5]">
          PRDmetrix
        </Link>
      </nav>

      <main className="relative overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-[-8%] top-[15%] h-[340px] w-[340px] rounded-full bg-white/5 blur-[100px]" />

        {/* Hero Section */}
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container-high px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-on-surface-variant">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Legal
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-on-surface md:text-7xl">
              Terms of Service
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-on-surface-variant md:text-lg">
              Please read these terms carefully before using PRDmetrix. By accessing or using the service, you agree to be bound by the conditions described below.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {quickFacts.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-outline-variant/20 bg-surface-container p-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
                >
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-primary">{item.label}</div>
                  <p className="text-sm leading-7 text-on-surface-variant">{item.fact}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-2xl" />
            <div className="relative rounded-[28px] border border-outline-variant/20 bg-surface-container-low p-8 shadow-[0_30px_120px_rgba(0,0,0,0.4)]">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">Document Info</p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-on-surface">Legal Reference</h2>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-right">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Version</div>
                  <div className="mt-1 text-2xl font-black tracking-tight text-on-surface">1.0</div>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  ['Effective Date', EFFECTIVE_DATE],
                  ['Last Updated', EFFECTIVE_DATE],
                  ['Applies To', 'All users of PRDmetrix — individuals and organizations.'],
                  ['Contact', 'hello@prdmetrix.com'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface-variant">{label}</div>
                    <p className="mt-3 text-sm leading-7 text-on-surface">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="border-t border-outline-variant/10" />
        </div>

        {/* Body Section */}
        <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 pt-12 lg:grid-cols-[260px_1fr]">

          {/* Section Index — hidden on mobile */}
          <div className="hidden lg:block h-fit rounded-[24px] border border-outline-variant/15 bg-surface-container-low p-6 lg:sticky lg:top-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">Section Index</p>
            <div className="mt-6 space-y-3">
              {termSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-on-surface-variant transition-all hover:border-outline-variant/20 hover:bg-white/[0.03] hover:text-on-surface"
                >
                  {section.eyebrow}. {section.title}
                </a>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div className="space-y-6">
            {termSections.map((section) => (
              <article
                id={section.id}
                key={section.id}
                className="rounded-[28px] border border-outline-variant/15 bg-surface-container p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:p-10"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">{section.eyebrow}</p>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-on-surface md:text-3xl">{section.title}</h2>

                <div className="mt-8 space-y-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="max-w-3xl text-sm leading-8 text-on-surface-variant md:text-[15px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#131313] border-none w-full py-20 px-12 mt-auto">
        <div className="flex flex-col items-center text-center w-full max-w-[1920px] mx-auto">
          <div className="mb-6">
            <div className="text-2xl font-bold text-[#e7e5e5]">
              PRDmetrix
            </div>
          </div>
          
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-[#acabaa] mb-8">
            © {new Date().getFullYear()} PRDmetrix. All rights reserved. Built upon the Architectural Void.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <Link className="text-xs font-medium uppercase tracking-[0.05em] text-[#acabaa] hover:text-[#e7e5e5] transition-colors active:scale-[0.98]" href="/privacy">Privacy Policy</Link>
            <Link className="text-xs font-medium uppercase tracking-[0.05em] text-[#acabaa] hover:text-[#e7e5e5] transition-colors active:scale-[0.98]" href="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
