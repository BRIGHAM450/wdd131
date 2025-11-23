// =============================
// 1. Static weather values from HTML
// =============================
const temperature = parseFloat(document.getElementById("temp").textContent);  // °C
const windSpeed = parseFloat(document.getElementById("wind").textContent);    // km/h

// =============================
// 2. Wind Chill Function (Canada formula - metric)
// =============================
function calculateWindChill(temp, wind) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(wind, 0.16)) +
        (0.3965 * temp * Math.pow(wind, 0.16))
    ).toFixed(1);
}

// =============================
// 3. Check conditions for valid wind chill calculation
// =============================
// Conditions (metric):
// temp <= 10 °C AND wind > 4.8 km/h

let result;

if (temperature <= 10 && windSpeed > 4.8) {
    result = calculateWindChill(temperature, windSpeed) + " °C";
} else {
    result = "N/A";
}

// =============================
// 4. Display result on the page
// =============================
document.getElementById("windChill").textContent = result;

// Mostrar el año actual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Mostrar la última fecha de modificación del documento
document.getElementById("lastModified").textContent = document.lastModified;

