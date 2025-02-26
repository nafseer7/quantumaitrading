'use client';

import LegalPageLayout from "@/app/components/LegalPageLayout";

export default function LicensesPage() {
  return (
    <LegalPageLayout
      title="Licenses & Compliance"
      lastUpdated="March 15, 2024"
    >
      <div className="text-white space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Regulatory Compliance</h2>
          <p className="mb-4">
            Quantum AI maintains all necessary licenses and registrations to operate as a
            trading platform. We are committed to maintaining the highest standards of
            regulatory compliance and transparency.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Trading Licenses</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Financial Services License</h3>
              <p className="text-gray-200 mb-4">
                License Number: FSL-2024-0123<br />
                Issuing Authority: Financial Services Commission<br />
                Status: Active<br />
                Scope: Trading Platform Operation, Financial Services
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Investment Dealer License</h3>
              <p className="text-gray-200 mb-4">
                License Number: IDL-2024-0456<br />
                Issuing Authority: Securities and Exchange Commission<br />
                Status: Active<br />
                Scope: Investment Products, Trading Services
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Digital Asset Service Provider</h3>
              <p className="text-gray-200 mb-4">
                License Number: DASP-2024-0789<br />
                Issuing Authority: Digital Asset Regulatory Authority<br />
                Status: Active<br />
                Scope: Cryptocurrency Trading, Digital Asset Services
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Regulatory Framework</h2>
          <p className="mb-4">
            Our operations comply with various regulatory frameworks, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Anti-Money Laundering (AML) regulations</li>
            <li>Know Your Customer (KYC) requirements</li>
            <li>Market conduct rules and regulations</li>
            <li>Consumer protection laws</li>
            <li>Data protection and privacy regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Software Licenses</h2>
          <p className="mb-4">
            Our platform incorporates various third-party software components, each
            governed by their respective licenses:
          </p>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Open Source Components</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>React - MIT License</li>
                <li>Next.js - MIT License</li>
                <li>TailwindCSS - MIT License</li>
                <li>Framer Motion - MIT License</li>
                <li>Chart.js - MIT License</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Commercial Software</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trading Engine - Proprietary License</li>
                <li>Market Data Feeds - Commercial License</li>
                <li>Risk Management System - Enterprise License</li>
                <li>Payment Processing - Commercial License</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Compliance Contacts</h2>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Compliance Officer</h3>
              <p className="text-gray-200">compliance@quantumai.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Legal Department</h3>
              <p className="text-gray-200">legal@quantumai.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Regulatory Reporting</h3>
              <p className="text-gray-200">reporting@quantumai.com</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Updates and Amendments</h2>
          <p className="mb-4">
            We regularly review and update our licenses and compliance documentation to
            ensure alignment with current regulations and best practices. Any material
            changes will be communicated to our users and updated on this page.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
} 