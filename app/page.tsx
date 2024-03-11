import Link from 'next/link';

export default function Home() {

  return (
    <main>
      <hr />
      <br />
      <div>Home</div>
      <br />
      <div>
        <li><Link href="/blog/1">Blog 1</Link></li>
        <li><Link href="/blog/2">Blog 2</Link></li>
        <li><Link href="/blog/3">Blog 3</Link></li>
      </div>
      <br />
      <hr />
    </main>
  );
}
