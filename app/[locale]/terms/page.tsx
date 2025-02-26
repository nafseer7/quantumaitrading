'use client';

import LegalPageLayout
 from "@/app/components/LegalPageLayout";
export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="March 15, 2024"
    >
      <div className="text-white space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
          <p className="mb-4">
            By accessing or using Quantum AI's trading platform and services, you agree to be bound
            by these Terms of Service. If you disagree with any part of these terms, you may not
            access our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
          <p className="mb-4">To use our services, you must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be at least 18 years old</li>
            <li>Have the legal capacity to enter into a binding contract</li>
            <li>Not be prohibited from using trading services under applicable laws</li>
            <li>Provide accurate and complete registration information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Account Registration</h2>
          <p className="mb-4">
            You are responsible for maintaining the confidentiality of your account credentials
            and for all activities that occur under your account. You must immediately notify us
            of any unauthorized use of your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Trading Services</h2>
          <h3 className="text-xl font-semibold mb-2">Platform Access</h3>
          <p className="mb-4">
            We grant you a limited, non-exclusive, non-transferable right to access and use our
            trading platform for your personal use, subject to these terms.
          </p>

          <h3 className="text-xl font-semibold mb-2">Trading Risks</h3>
          <p className="mb-4">
            Trading involves substantial risk of loss. You acknowledge that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Past performance is not indicative of future results</li>
            <li>You may lose some or all of your invested capital</li>
            <li>Trading decisions are your sole responsibility</li>
            <li>Our AI predictions and analysis are not guaranteed</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">User Obligations</h2>
          <p className="mb-4">You agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comply with all applicable laws and regulations</li>
            <li>Provide accurate and truthful information</li>
            <li>Not engage in market manipulation or fraudulent activities</li>
            <li>Not attempt to circumvent platform security measures</li>
            <li>Not use the platform for illegal purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fees and Payments</h2>
          <p className="mb-4">
            You agree to pay all applicable fees and charges associated with your account. We
            reserve the right to modify our fee structure with prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p className="mb-4">
            All content, features, and functionality of our platform are owned by Quantum AI
            and are protected by international copyright, trademark, and other intellectual
            property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, Quantum AI shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages resulting from
            your use or inability to use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p className="mb-4">
            We reserve the right to suspend or terminate your account at our sole discretion,
            without notice, for any violation of these terms or for any other reason we deem
            appropriate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p className="mb-4">
            We may modify these terms at any time. Continued use of our services after such
            changes constitutes your acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="mb-4">
            These terms shall be governed by and construed in accordance with the laws of
            [Jurisdiction], without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">
            For questions about these Terms of Service, please contact us at legal@quantumai.com
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
} 