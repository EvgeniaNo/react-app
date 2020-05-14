export async function CallFetch() {
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/artists?limit=1",
    {
      method: "GET",
      withCredentials: true,
      headers: {
        Authorization:
          "Bearer BQABujBLUw-OmVBc5gueFo9fIwmbLJRczgktcQv_nSfX5Zv6CasUjLie_zrIblIkvJ6-qSzywWq0DoG0QYyoJaOQ9yuM4gTpluZe-TLosvCnNv9I7Enq8Fk4gWmZScXFJI4-wq0ne731gn3CIpuiZTmGR9jikfbGOWU7zDwQUn6SOkiY5ZdyS19B2-0hhX_ZYm7iXoGrKHEeQgU7P5a_YiJQIfGdjiTI_8pWO0fdYQZ2fOBcMu0wKyMNg1pdERwSJ_csLY5omzw",
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
  return json;
}
