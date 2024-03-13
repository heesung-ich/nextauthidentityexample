'use client';

import Link from 'next/link';

export default function Home() {
  const api = async () => {

  };

  return (
    <main className="flex min-h-screen items-center justify-between p-10">
      <div className="flex justify-between space-x-2">
        <Link href="/login" className="bg-gray-100 p-4">Login</Link>
        <button id="api" className="bg-gray-100 p-4" onClick={api}>Call API</button>
        <Link href="/logout" className="bg-gray-100 p-4">Logout</Link>

        <pre id="results"></pre>
      </div>
    </main>
  );
}
