export const GetWeather = () => {
  const USER_AGENT = "Mikko's portfolio (rockster852@gmail.com)";
  const ORIGIN = { lat: 59.3293, lon: 18.0686 }; // Stockholm

  async function fetchWeather(lat, lon) {
    const res = await fetch(
      `https://weatherproxy.mikkoatirronen.workers.dev?lat=${lat}&lon=${lon}`
    );

    if (!res.ok) throw new Error("Weather fetch failed");
    return res.json();
  }

  function extractTodayRange(timeseries) {
    const today = new Date().toISOString().split("T")[0];

    const temps = timeseries
      .filter((entry) => entry.time.startsWith(today))
      .map((entry) => entry.data.instant.details.air_temperature);
    const min = Math.round(Math.min(...temps));
    const max = Math.round(Math.max(...temps));
    console.log({ min: min, max: max });
    return {
      min: min,
      max: max,
    };
  }

  function extractCondition(timeseries) {
    return (
      timeseries[0].data.next_1_hours?.summary?.symbol_code || "clearsky_day"
    );
  }

  const sunSVG = `
      <svg viewBox="0 0 64 64" class="weather-svg sun">
        <g class="sun-rays">
          <circle cx="32" cy="32" r="14"/>
          <g>
            ${Array.from({ length: 8 }, (_, i) => {
              const a = (i * Math.PI) / 4;
              return `<line x1="${32 + Math.cos(a) * 22}" y1="${
                32 + Math.sin(a) * 22
              }"
                          x2="${32 + Math.cos(a) * 28}" y2="${
                32 + Math.sin(a) * 28
              }"/>`;
            }).join("")}
          </g>
        </g>
      </svg>`;

  const cloudSVG = `
      <svg viewBox="0 0 64 64" class="weather-svg">
        <path class="cloud"
              d="M18 42h30a10 10 0 0 0 0-20
                16 16 0 0 0-31-4
                A9 9 0 0 0 18 42z"/>
      </svg>`;

  const rainSVG = `
      <svg viewBox="0 0 64 64" class="weather-svg rain">
        <path class="cloud" d="M18 36h30a10 10 0 0 0 0-20 16 16 0 0 0-31-4A9 9 0 0 0 18 36z"/>
        <g class="rain-drops">
          <line x1="26" y1="40" x2="26" y2="52"/>
          <line x1="32" y1="42" x2="32" y2="54"/>
          <line x1="38" y1="40" x2="38" y2="52"/>
        </g>
      </svg>`;

  const snowSVG = `
      <svg viewBox="0 0 64 64" class="weather-svg snow">
        <path class="cloud"
          d="M18 36h30a10 10 0 0 0 0-20
            16 16 0 0 0-31-4
            A9 9 0 0 0 18 36z"/>

        <g class="snowflakes">
          <circle class="snowflake" cx="26" cy="46" r="2"/>
          <circle class="snowflake" cx="32" cy="50" r="2"/>
          <circle class="snowflake" cx="38" cy="46" r="2"/>
        </g>
      </svg>`;

  const stormSVG = `
      <svg viewBox="0 0 64 64" class="weather-svg storm">
        <path class="cloud" d="M18 36h30a10 10 0 0 0 0-20 16 16 0 0 0-31-4A9 9 0 0 0 18 36z"/>
        <polygon class="bolt"
          points="32 38 26 54 34 54 30 64 44 44 34 44 38 38"/>
      </svg>`;

  const fogSVG = `
      <svg viewBox="0 0 64 64" class="weather-svg fog">
        <!-- Cloud -->
        <path class="cloud"
          d="M18 32h30a10 10 0 0 0 0-20
            16 16 0 0 0-31-4
            A9 9 0 0 0 18 32z"/>

        <!-- Fog layers -->
        <rect class="fog-layer" x="8" y="45" width="48" height="4" rx="2"/>
        <rect class="fog-layer" x="4" y="53" width="56" height="4" rx="2"/>
      </svg>`;

  function renderIcon(symbol) {
    const icon = document.getElementById("weatherIcon");
    icon.replaceChildren();

    const s = symbol.toLowerCase();

    if (s.includes("thunder") || s.includes("storm")) {
      icon.innerHTML = stormSVG;
      return;
    }

    if (s.includes("snow")) {
      icon.innerHTML = snowSVG;
      return;
    }

    if (s.includes("rain") || s.includes("drizzle")) {
      icon.innerHTML = rainSVG;
      return;
    }

    if (s.includes("cloud")) {
      icon.innerHTML = cloudSVG;
      return;
    }

    if (s.includes("fog") || s.includes("mist") || s.includes("haze")) {
      icon.innerHTML = fogSVG;
      return;
    }
    icon.innerHTML = sunSVG;
  }

  async function loadWeather() {
    try {
      const data = await fetchWeather(ORIGIN.lat, ORIGIN.lon);
      console.log(data);
      const timeseries = data.properties.timeseries;
      console.log(timeseries);
      const { min, max } = extractTodayRange(timeseries);
      const condition = "" || extractCondition(timeseries);
      console.log(min, max);
      console.log(condition);
      document.getElementById("weatherTemp").textContent = `${min}° / ${max}°`;
      document.getElementById("weatherDesc").textContent = condition.replace(
        /_/g,
        " "
      );
      renderIcon(condition);
    } catch (error) {
      console.log(error);
      document.getElementById("weatherDesc").textContent =
        "Weather unavailable";
    }
  }

  loadWeather();
};
