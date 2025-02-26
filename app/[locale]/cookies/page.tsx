'use client';

import LegalPageLayout from "@/app/components/LegalPageLayout";

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      lastUpdated="March 15, 2024"
    >
      <div className="text-white space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your device when you visit our
            website. They help us provide you with a better experience by remembering your
            preferences and enabling certain features.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the website to function properly. They enable core
            functionality such as security, account authentication, and session management.
            You cannot opt out of these cookies.
          </p>

          <h3 className="text-xl font-semibold mb-2">Performance Cookies</h3>
          <p className="mb-4">
            These cookies help us understand how visitors interact with our website by collecting
            and reporting information anonymously. They help us improve our website's performance.
          </p>

          <h3 className="text-xl font-semibold mb-2">Functionality Cookies</h3>
          <p className="mb-4">
            These cookies enable enhanced functionality and personalization. They may be set by
            us or by third-party providers whose services we have added to our pages.
          </p>

          <h3 className="text-xl font-semibold mb-2">Targeting Cookies</h3>
          <p className="mb-4">
            These cookies are used to deliver advertisements more relevant to you and your
            interests. They are also used to limit the number of times you see an advertisement
            and help measure the effectiveness of advertising campaigns.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookie Usage Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse my-6">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 text-white">Cookie Name</th>
                  <th className="text-left py-2 text-white">Purpose</th>
                  <th className="text-left py-2 text-white">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2">session_id</td>
                  <td className="py-2">Authentication and session management</td>
                  <td className="py-2">Session</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2">preferences</td>
                  <td className="py-2">Store user preferences</td>
                  <td className="py-2">1 year</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2">analytics_id</td>
                  <td className="py-2">Analytics and performance tracking</td>
                  <td className="py-2">2 years</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2">marketing_id</td>
                  <td className="py-2">Marketing and advertising</td>
                  <td className="py-2">90 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings preferences.
            However, if you limit the ability of websites to set cookies, you may impact your
            overall user experience.
          </p>

          <h3 className="text-xl font-semibold mb-2">Browser Settings</h3>
          <p className="mb-4">You can manage cookie preferences through your browser settings:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Chrome: Settings → Privacy and Security → Cookies</li>
            <li>Mozilla Firefox: Options → Privacy & Security → Cookies</li>
            <li>Safari: Preferences → Privacy → Cookies</li>
            <li>Microsoft Edge: Settings → Privacy & Security → Cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
          <p className="mb-4">
            We use services from third-party providers who may also set cookies on our behalf.
            These services include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Analytics for website analytics</li>
            <li>Social media platforms for sharing and engagement</li>
            <li>Payment processors for secure transactions</li>
            <li>Marketing and advertising partners</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices
            or for operational, legal, or regulatory reasons. We encourage you to periodically
            review this page for the latest information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have questions about our Cookie Policy or how we use cookies, please contact
            us at privacy@quantumai.com
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
} 