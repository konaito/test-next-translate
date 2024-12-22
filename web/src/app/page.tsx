import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>こちらは，NextjsのApprouterで構築された多言語対応のデモです．</p>
      <h2>採用ライブラリ</h2>
      <ul>
        <li>@formatjs/intl-localematcher</li>
        <li>negotiator</li>
      </ul>
      <h2>以下から確認してください</h2>
      <ul>
        <li>
          <Link href={"/ja"}>日本語</Link>
        </li>
        <li>
          <Link href={"/en"}>英語</Link>
        </li>
      </ul>
    </>
  );
}
