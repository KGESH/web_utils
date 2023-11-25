import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="navbar bg-base-300">
      <Link href="/" className="btn btn-ghost text-xl">
        Base64 Encode & Decode
      </Link>
    </nav>
  );
}
