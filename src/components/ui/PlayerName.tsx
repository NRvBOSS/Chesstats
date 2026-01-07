"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Name() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [username, setUsername] = useState(
    searchParams.get("username") ?? ""
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!username.trim()) return;

    router.push(`/?username=${username}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-3 my-4"
    >
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search player..."
        className="bg-white text-black rounded-2xl py-3 px-4"
        type="text"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-3 rounded-2xl hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}
