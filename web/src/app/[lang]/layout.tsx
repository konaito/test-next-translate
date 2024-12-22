export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ja' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // 非同期で受け取る
}) {
  const { lang } = await params; // 明示的に await で解決
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
