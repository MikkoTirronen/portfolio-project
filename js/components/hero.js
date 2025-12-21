import { GetWeather } from "../animations/weather.js";

export function Hero() {
  requestAnimationFrame(GetWeather);

  return `
    <div id="weather-widget" class="weather-widget" aria-label="Weather in Stockholm">
      <div class="weather-icon-wrapper">
        <div id="weatherIcon"></div>
      </div>

      <div class="weather-text">
        <span class="weather-temp">Stockholm</span>
        <span class="weather-temp" id="weatherTemp">25°C</span>
        <span class="weather-desc" id="weatherDesc">Sunny</span>
      </div>
    </div>
    <div class="hero-content">
      <h1 id="hero-heading" class="hero-title">Mikko Tirronen</h1>
      <p class="hero-subtitle">Junior Software Developer</p>
    </div>
  `;
}
{/* 
 */}