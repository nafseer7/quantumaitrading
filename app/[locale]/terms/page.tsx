'use client';

import LegalPageLayout from "@/app/components/LegalPageLayout";
import { useTranslations } from 'next-intl';

export default function TermsOfServicePage() {
  const t = useTranslations('terms');

  return (
    <LegalPageLayout
      title={t('meta.title')}
      lastUpdated={t('meta.lastUpdated')}
    >
      <div className="text-white space-y-8">
        {/* Welcome Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sections.welcome.title')}</h2>
          <div className="space-y-4">
            <p>{t('sections.welcome.content.greeting')}</p>
            <p>{t('sections.welcome.content.services')}</p>
            <p>{t('sections.welcome.content.agreement')}</p>
            <p>{t('sections.welcome.content.privacy')}</p>
          </div>
        </section>

        {/* User Eligibility */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sections.eligibility.title')}</h2>
          <p className="mb-4">{t('sections.eligibility.intro')}</p>
          <ul className="list-none space-y-2 pl-6">
            <li>{t('sections.eligibility.requirements.age')}</li>
            <li>{t('sections.eligibility.requirements.legal')}</li>
            <li>{t('sections.eligibility.requirements.restrictions')}</li>
          </ul>
        </section>

        {/* Access Restrictions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sections.access.title')}</h2>
          <div className="space-y-4">
            <p>{t('sections.access.content.restrictions')}</p>
            <p>{t('sections.access.content.territories')}</p>
          </div>
        </section>

        {/* Use Restrictions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sections.useRestrictions.title')}</h2>
          <p className="mb-4">{t('sections.useRestrictions.intro')}</p>
          <ul className="list-none space-y-2 pl-6">
            <li>{t('sections.useRestrictions.items.rights')}</li>
            <li>{t('sections.useRestrictions.items.content')}</li>
            <li>{t('sections.useRestrictions.items.malware')}</li>
            <li>{t('sections.useRestrictions.items.laws')}</li>
            <li>{t('sections.useRestrictions.items.interference')}</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sections.intellectualProperty.title')}</h2>
          <div className="space-y-4">
            <p>{t('sections.intellectualProperty.content.ownership')}</p>
            <p>{t('sections.intellectualProperty.content.rights')}</p>
          </div>
        </section>

        {/* Liability Limitation */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sections.liability.title')}</h2>
          <div className="space-y-4">
            <p>{t('sections.liability.content.disclaimer')}</p>
            <p>{t('sections.liability.content.limitation')}</p>
          </div>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sections.thirdParty.title')}</h2>
          <p>{t('sections.thirdParty.content')}</p>
        </section>

        {/* External Links */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sections.externalLinks.title')}</h2>
          <p>{t('sections.externalLinks.content')}</p>
        </section>

        {/* Terms Updates */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sections.updates.title')}</h2>
          <div className="space-y-4">
            <p>{t('sections.updates.content.changes')}</p>
            <p>{t('sections.updates.content.review')}</p>
          </div>
        </section>

        {/* Service Termination */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sections.termination.title')}</h2>
          <p>{t('sections.termination.content')}</p>
        </section>

        {/* Legal Governance */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sections.legal.title')}</h2>
          <div className="space-y-4">
            <p>{t('sections.legal.content.jurisdiction')}</p>
            <p>{t('sections.legal.content.consent')}</p>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sections.contact.title')}</h2>
          <p>{t('sections.contact.content')}</p>
        </section>
      </div>
    </LegalPageLayout>
  );
} 