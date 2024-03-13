"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const login = async () => {
    try {
      await signIn("cloudhospital");
    } catch (error) {
      console.log(error);
    }
  };

  const api = async () => {};

  const logout = async () => {
    try {
      await signOut();
    } catch (error) {}
  };

  useEffect(() => {
    if (session) console.log("🚀 ~ useEffect ~ session:", session);
  }, [session]);

  return (
    <main className="flex  min-h-screen items-center justify-between p-10">
      <div className="flex flex-col gap-4 ">
        <button
          id="login"
          className="bg-gray-100 p-4"
          onClick={login}
          disabled={!!session}
        >
          Login
        </button>
        <button id="api" className="bg-gray-100 p-4" onClick={api}>
          Call API
        </button>
        <button id="logout" className="bg-gray-100 p-4" onClick={logout}>
          Logout
        </button>
        <pre id="results">
          {session ? <p>Session is exist</p> : <p>Session isn't exist</p>}
        </pre>
      </div>
    </main>
  );
}
