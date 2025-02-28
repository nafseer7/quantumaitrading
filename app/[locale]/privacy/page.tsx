'use client';

import LegalPageLayout from "@/app/components/LegalPageLayout";
import { useTranslations } from 'next-intl';

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacy');

  // Helper function to safely get array translations
  const getArrayTranslation = (key: string): string[] => {
    try {
      const value = t.raw(key);
      return Array.isArray(value) ? value : [];
    } catch (e) {
      console.error(`Error getting translation array for key: ${key}`, e);
      return [];
    }
  };

  const dataTypes = getArrayTranslation('dataTypes.types');
  const legalBases = getArrayTranslation('legalBasis.bases');
  const recipients = getArrayTranslation('sharing.recipients');
  const rights = getArrayTranslation('userRights.rights');

  return (
    <LegalPageLayout
      title={t('title')}
      lastUpdated={t('lastUpdated')}
    >
      <div className="text-white space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('introduction.title')}</h2>
          <p className="mb-4">
            {t('introduction.content')}
            <br /><br />
            {t('introduction.policyPurpose')}
            <br /><br />
            {t('introduction.principles')}
            <br /><br />
            {t('introduction.communication.title')}
            <br /><br />
            {t('introduction.communication.content')}
            <br /><br />
            {t('introduction.communication.additionalInfo')}
            <br /><br />
            {t('introduction.communication.contact')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('dataProcessing.title')}</h2>
          <p className="mb-4">{t('dataProcessing.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('rights.title')}</h2>
          <p className="mb-4">
            {t('rights.content')}
            <br /><br />
            {t('rights.security')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('scope.title')}</h2>
          <p className="mb-4">
            {t('scope.content')}
            <br /><br />
            {t('scope.personalData')}
            <br /><br />
            {t('scope.processing')}
            <br /><br />
            {t('scope.children')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('collection.title')}</h2>
          <p className="mb-4">
            {t('collection.content')}
            <br /><br />
            {t('collection.voluntary')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('dataTypes.title')}</h2>
          <p className="mb-4">{t('dataTypes.intro')}</p>
          <ul className="list-disc pl-6 space-y-2">
            {dataTypes.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('legalBasis.title')}</h2>
          <p className="mb-4">{t('legalBasis.intro')}</p>
          <ul className="list-disc pl-6 space-y-2">
            {legalBases.map((basis, index) => (
              <li key={index}>{basis}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sharing.title')}</h2>
          <p className="mb-4">{t('sharing.intro')}</p>
          <ul className="list-disc pl-6 space-y-2">
            {recipients.map((recipient, index) => (
              <li key={index}>{recipient}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('cookies.title')}</h2>
          <p className="mb-4">{t('cookies.intro')}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t('cookies.types.essential')}</li>
            <li>{t('cookies.types.functional')}</li>
            <li>{t('cookies.types.performance')}</li>
          </ul>
          <p className="mt-4">{t('cookies.control')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('international.title')}</h2>
          <p className="mb-4">{t('international.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('userRights.title')}</h2>
          <p className="mb-4">{t('userRights.intro')}</p>
          <ul className="list-disc pl-6 space-y-2">
            {rights.map((right, index) => (
              <li key={index}>{right}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('contact.title')}</h2>
          <p className="mb-4">{t('contact.content')}</p>
        </section>
      </div>
    </LegalPageLayout>
  );
} 