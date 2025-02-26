'use client';

import LegalPageLayout from "@/app/components/LegalPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="March 15, 2024"
    >
      <div className="text-white space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            At Quantum AI, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our trading platform and services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
          <p className="mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact information</li>
            <li>Date of birth and government-issued identification</li>
            <li>Financial information and trading history</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 mt-6">Automatically Collected Information</h3>
          <p className="mb-4">When you use our platform, we automatically collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device and browser information</li>
            <li>IP address and location data</li>
            <li>Usage patterns and preferences</li>
            <li>Trading activity and performance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our trading services</li>
            <li>Process your transactions</li>
            <li>Comply with regulatory requirements</li>
            <li>Detect and prevent fraud</li>
            <li>Send you important updates and communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-4">
            We implement robust security measures to protect your information, including encryption,
            firewalls, and secure server infrastructure. However, no method of transmission over the
            Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Financial institutions and trading partners</li>
            <li>Regulatory authorities</li>
            <li>Service providers and contractors</li>
            <li>Legal and compliance consultants</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to enhance your experience. You can
            control cookie preferences through your browser settings. For more information, please
            see our Cookie Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
          <p className="mb-4">
            Your information may be transferred to and processed in countries other than your own.
            We ensure appropriate safeguards are in place for such transfers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p className="mb-4">
            Our services are not intended for individuals under 18. We do not knowingly collect
            information from minors.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy periodically. We will notify you of any material
            changes through our platform or via email.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or our privacy practices, please
            contact our Data Protection Officer at privacy@quantumai.com
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
} 