const apiKey = '49af408d45ac60871ed3800ea5fbea40';
const locationInput = document.getElementById('locationInput');
const searchBtn = document.getElementById('searchBtn');
const locationName = document.getElementById('locationName');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const weatherInfo = document.querySelector('.weather-info');

searchBtn.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        fetchWeatherData(location);
    }
});

async function fetchWeatherData(location) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(location)}`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c09b74bd9bmshc6f13ac1a9a4d90p16b292jsn837769cc0a7a',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Parse the JSON response
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherData(data) {
    locationName.textContent = data.location.name;
    temperature.innerHTML = `<strong style="color:#4a90e2; font-size: 28px;">${data.current.temp_c}°C</strong>`;
    condition.innerHTML = `<span style="color:#d0021b; font-size: 22px;">Condition: ${data.current.condition.text}</span>`;
    humidity.innerHTML = `<span style="color:#7ed321; font-size: 20px;">Humidity: ${data.current.humidity}%</span>`;
    wind.innerHTML = `<span style="color:#f5a623; font-size: 18px;">Wind Speed: ${data.current.wind_kph} kph</span>`;

    weatherInfo.style.backgroundColor = '#f9f9f9';
    weatherInfo.style.border = '2px solid #e6e6e6';
    weatherInfo.style.padding = '20px';
    weatherInfo.style.borderRadius = '15px';
    weatherInfo.style.transition = 'background-color 0.5s ease, border 0.5s ease';

    weatherInfo.classList.add('visible');
}

// Optional: Fetch weather data based on user's current location
async function fetchWeatherByLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${lon}`;

            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'c09b74bd9bmshc6f13ac1a9a4d90p16b292jsn837769cc0a7a',
                    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(url, options);
                const data = await response.json(); // Parse the JSON response
                displayWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}

// Uncomment this line to automatically fetch weather data on page load based on user's location
// fetchWeatherByLocation();
















// const apiKey = 'YOUR_API_KEY';
// const locationInput = document.getElementById('locationInput');
// const searchBtn = document.getElementById('searchBtn');
// const locationName = document.getElementById('locationName');
// const temperature = document.getElementById('temperature');
// const condition = document.getElementById('condition');
// const humidity = document.getElementById('humidity');
// const wind = document.getElementById('wind');
// const weatherInfo = document.querySelector('.weather-info');

// searchBtn.addEventListener('click', () => {
//     const location = locationInput.value.trim();
//     if (location) {
//         fetchWeatherData(location);
//     }
// });

// function fetchWeatherData(location) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => displayWeatherData(data))
//         .catch(error => console.error('Error fetching weather data:', error));
// }

// function displayWeatherData(data) {
//     locationName.textContent = data.name;
//     temperature.innerHTML = `<strong style="color:#4a90e2; font-size: 28px;">${data.main.temp}°C</strong>`;
//     condition.innerHTML = `<span style="color:#d0021b; font-size: 22px;">Condition: ${data.weather[0].description}</span>`;
//     humidity.innerHTML = `<span style="color:#7ed321; font-size: 20px;">Humidity: ${data.main.humidity}%</span>`;
//     wind.innerHTML = `<span style="color:#f5a623; font-size: 18px;">Wind Speed: ${data.wind.speed} m/s</span>`;

//     weatherInfo.style.backgroundColor = '#f9f9f9';
//     weatherInfo.style.border = '2px solid #e6e6e6';
//     weatherInfo.style.padding = '20px';
//     weatherInfo.style.borderRadius = '15px';
//     weatherInfo.style.transition = 'background-color 0.5s ease, border 0.5s ease';

//     weatherInfo.classList.add('visible');
// }

// // Optional: Fetch weather data based on user's current location
// function fetchWeatherByLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             const lat = position.coords.latitude;
//             const lon = position.coords.longitude;
//             const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => displayWeatherData(data))
//                 .catch(error => console.error('Error fetching weather data:', error));
//         });
//     } else {
//         console.error('Geolocation is not supported by this browser.');
//     }
// }

// // Uncomment this line to automatically fetch weather data on page load based on user's location
// // fetchWeatherByLocation();
