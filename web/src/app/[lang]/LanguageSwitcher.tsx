'use client';

import { useRouter } from 'next/navigation';

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();

  const switchLanguage = (lang: string) => {
    router.push(`/${lang}`);
  };

  return (
    <div style={{ margin: '20px' }}>
      <button onClick={() => switchLanguage('en')} disabled={currentLang === 'en'}>
        English
      </button>
      <button onClick={() => switchLanguage('ja')} disabled={currentLang === 'ja'}>
        日本語
      </button>
    </div>
  );
}
