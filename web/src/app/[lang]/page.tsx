import { getDictionary } from './dictionaries';
import LanguageSwitcher from './LanguageSwitcher';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>; // 非同期で受け取る
}) {
  const { lang } = await params; // 明示的に await で解決
  const dict = await getDictionary(lang as 'en' | 'ja');

  return (
    <main style={{ textAlign: 'center', margin: '50px' }}>
      <LanguageSwitcher currentLang={lang} />
      <h1>{dict.message}</h1>
    </main>
  );
}
