export default {
  async fetch(request) {
    const url = new URL(request.url);

    const lat = url.searchParams.get("lat");
    const lon = url.searchParams.get("lon");

    if (!lat || !lon) {
      return new Response("Missing lat/lon", { status: 400 });
    }

    const metUrl = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;

    const res = await fetch(metUrl, {
      headers: {
        "User-Agent": "MyWeatherWidget/1.0 myemail@example.com",
      },
    });

    const data = await res.text();

    return new Response(data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://mikkotirronen.github.io/",
      },
    });
  },
};
