export async function getPlayer(username: string) {
  const res = await fetch(`https://api.chess.com/pub/player/${username}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;
  return res.json();
}

export async function getPlayerStats(username: string) {
  const res = await fetch(
    `https://api.chess.com/pub/player/${username}/stats`,
    { next: { revalidate: 3600 } },
  );

  if (!res.ok) return null;
  return res.json();
}
