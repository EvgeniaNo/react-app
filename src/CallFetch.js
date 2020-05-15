export async function CallFetch() {
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/artists?limit=1",
    {
      method: "GET",
      withCredentials: true,
      headers: {
        Authorization:
          "Bearer BQCKJ1Omf83QEGz8cKSGr-eNpAaghkDrmTvtn1f3oFgeuVHMexV_pifU9S6v__YfI6kSYVVqza1fgIJCUAsk4bS2Ji-DKdq180g3sCs1Xq3S4N0T_Dba9QipAFb2F9WQ0Bf7BQ7mDLBeET3bbttugbNYcQ6eXdEsC2ruPNXyQfKtLslHi0g9EpZqoNdUxWUDy5jYxMYgxQt1VR9li4tNf0UGV59YHr4JphlGA6kpr9Ln2liqNl5HEgoahaLl76Ld2AQD-TWUk5M",
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
  return json;
}
