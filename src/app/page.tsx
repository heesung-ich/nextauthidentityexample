import { signOut } from '@/auth';

export default function Home() {
  const login = async () => {

  };

  const api = async () => {

  };

  const logout = async () => {
    'use server';
    await signOut();
  };

  return (
    <main className="flex min-h-screen items-center justify-between p-10">
      <div className="flex justify-between space-x-2">
        <button id="login" className="bg-gray-100 p-4" onClick={login}>Login</button>
        <button id="api" className="bg-gray-100 p-4" onClick={api}>Call API</button>
        <button id="logout" className="bg-gray-100 p-4" onClick={logout}>Logout</button>

        <pre id="results"></pre>
      </div>
    </main>
  );
}
