import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | PRDmetrix',
  description: 'Learn how PRDmetrix collects, uses, and protects your data when you use our AI-powered PRD evaluation service.',
};

const quickFacts = [
  { label: 'No Account Required', fact: 'PRDmetrix does not require you to register or create an account to use the service.' },
  { label: 'Your Data', fact: 'Uploaded documents are processed solely to deliver your evaluation — not sold or shared for marketing.' },
  { label: 'Third Parties', fact: 'We use trusted infrastructure and AI providers. They process data only to operate the service.' },
  { label: 'Your Rights', fact: 'You may request deletion of your uploaded documents and evaluation data at any time.' },
];

const privacySections = [
  {
    id: 'overview',
    eyebrow: '01',
    title: 'Overview',
    body: [
      'This Privacy Policy describes how PRDmetrix ("we", "our", or "the service") collects, uses, stores, and protects information when you use our web-based PRD evaluation platform.',
      'By using PRDmetrix, you acknowledge that you have read and understood this policy. If you do not agree with any part of it, please do not use the service.',
    ],
  },
  {
    id: 'information-collected',
    eyebrow: '02',
    title: 'Information We Collect',
    body: [
      'We collect the content of documents you upload (PDF, TXT, or Markdown files) for the purpose of performing the requested evaluation.',
      'We automatically collect limited technical information including your browser type, device type, approximate geographic region, referral URL, and page interaction data to monitor service health and usage patterns.',
      'We do not collect your name, email address, or any personally identifying information unless you voluntarily contact us.',
    ],
  },
  {
    id: 'how-we-use',
    eyebrow: '03',
    title: 'How We Use Your Information',
    body: [
      'Uploaded document content is used exclusively to perform text extraction, run automated quality checks, generate AI-based evaluation scores and findings, and produce downloadable PDF reports.',
      'Technical usage data is used to monitor platform availability, diagnose errors, and understand aggregate usage trends. This data is never used to build individual user profiles.',
      'We do not use your uploaded documents to train AI models, advertise to you, or share your content with third parties for commercial purposes.',
    ],
  },
  {
    id: 'storage',
    eyebrow: '04',
    title: 'Data Storage and Retention',
    body: [
      'Uploaded files, extracted text, evaluation results, and exported reports are stored in secure cloud infrastructure. Storage providers are bound by data processing agreements.',
      'Evaluation results are retained to allow you to access your report via a unique result URL for a reasonable period after evaluation. We do not guarantee indefinite availability of stored results.',
      'You may request deletion of your uploaded content and associated evaluation data by contacting us at hello@prdmetrix.com. We will process deletion requests within a reasonable timeframe.',
    ],
  },
  {
    id: 'third-parties',
    eyebrow: '05',
    title: 'Third-Party Service Providers',
    body: [
      'PRDmetrix relies on third-party infrastructure providers for cloud storage, database hosting, and AI model processing. These providers only access your data to the extent necessary to operate the service on our behalf.',
      'Our core infrastructure partners include cloud storage and database services (such as Supabase) and AI model providers (such as Google Gemini). We select providers with strong data protection commitments.',
      'We do not sell, rent, or trade your data to any third party for advertising, marketing, or profiling purposes.',
    ],
  },
  {
    id: 'ai-processing',
    eyebrow: '06',
    title: 'AI and Automated Processing',
    body: [
      'The text extracted from your uploaded PRD is submitted to third-party large language model APIs to generate evaluation outputs. These models process your content in transit and, depending on the provider\'s policies, may retain it for a limited period for abuse prevention and safety purposes.',
      'PRDmetrix does not use your document content to fine-tune, train, or improve any AI model — including those operated by third-party providers — beyond what those providers disclose in their own privacy policies.',
      'We recommend you review the privacy policies of our AI providers if you have concerns about how your document content is handled during model inference.',
    ],
  },
  {
    id: 'cookies',
    eyebrow: '07',
    title: 'Cookies and Tracking',
    body: [
      'PRDmetrix uses minimal, functional browser storage (such as session state) necessary to operate the evaluation workflow. We do not use advertising cookies, cross-site tracking pixels, or behavioral profiling technologies.',
      'We may use privacy-respecting analytics tools that collect anonymized aggregate data (such as page views and device types) without identifying individual users.',
    ],
  },
  {
    id: 'security',
    eyebrow: '08',
    title: 'Data Security',
    body: [
      'We apply industry-standard security practices to protect data in transit and at rest, including encrypted connections (HTTPS/TLS) and access controls on our infrastructure.',
      'While we take reasonable precautions, no system is completely secure. We cannot guarantee absolute protection against unauthorized access, data loss, or security incidents. In the event of a material breach, we will take appropriate steps to investigate and notify affected parties as required by law.',
    ],
  },
  {
    id: 'your-rights',
    eyebrow: '09',
    title: 'Your Rights',
    body: [
      'You have the right to request access to the data we hold about your evaluation sessions, to request correction of inaccurate data, and to request deletion of your uploaded content and associated results.',
      'Because PRDmetrix does not require account registration, we identify data by evaluation session ID or document identifiers. Please include this information in any data request sent to hello@prdmetrix.com.',
      'Depending on your jurisdiction, you may have additional rights under applicable data protection laws (such as GDPR or PDPA). We are committed to honoring those rights to the extent they apply.',
    ],
  },
  {
    id: 'children',
    eyebrow: '10',
    title: "Children's Privacy",
    body: [
      'PRDmetrix is not directed at individuals under the age of 16. We do not knowingly collect personal information from children.',
      'If you believe a child has submitted personal information through our service, please contact us immediately at hello@prdmetrix.com and we will take steps to remove it.',
    ],
  },
  {
    id: 'changes',
    eyebrow: '11',
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date shown on this page.',
      'Continued use of PRDmetrix after a policy update constitutes your acceptance of the revised policy. We encourage you to review this page periodically.',
    ],
  },
  {
    id: 'contact',
    eyebrow: '12',
    title: 'Contact',
    body: [
      'If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at hello@prdmetrix.com.',
      'We aim to respond to all privacy-related inquiries within a reasonable timeframe.',
    ],
  },
];

const EFFECTIVE_DATE = 'April 15, 2025';

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-on-surface-variant md:text-lg">
              Your privacy matters. This policy explains what data PRDmetrix collects when you use the service, how it is used, who it is shared with, and what rights you have over it.
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
              {privacySections.map((section) => (
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
            {privacySections.map((section) => (
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
