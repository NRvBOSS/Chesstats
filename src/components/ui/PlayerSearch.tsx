"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Name() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [username, setUsername] = useState(searchParams.get("username") ?? "");
  const [isFocused, setIsFocused] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!username.trim()) return;

    router.push(`/?username=${username}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-3 my-6"
    >
      <div className="relative">
        {/* Search icon */}
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search player..."
          className={`bg-zinc-900 text-white rounded-xl py-3 pl-12 pr-4 w-80 
            border-2 transition-all duration-200 outline-none
            placeholder:text-zinc-500
            ${
              isFocused
                ? "border-amber-400 shadow-lg shadow-amber-500/20"
                : "border-zinc-700 hover:border-zinc-600"
            }`}
          type="text"
        />
      </div>

      <button
        type="submit"
        className="bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold
          hover:bg-amber-400 active:scale-95 transition-all duration-200
          shadow-lg shadow-amber-600/30 hover:shadow-amber-400/40
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-amber-500"
        disabled={!username.trim()}
      >
        Search
      </button>
    </form>
  );
}
