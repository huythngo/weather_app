class UI {
    constructor() {
        this.location = document.querySelector('#w-location');
        this.description = document.querySelector('#w-desc');
        this.temperature = document.querySelector('#w-temperature');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.pressure = document.querySelector('#w-pressure');
        this.cloud = document.querySelector('#w-cloud');
        this.wind = document.querySelector('#w-wind');
    }

    displayWeather(data) {
        this.location.textContent = data.name; //document.querySelector('#location-input').value
        this.description.textContent = data.weather.description;
        this.temperature.textContent = `Temperture: ${data.main.temp} C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${data.main.humidity}%`;
        this.pressure.textContent = `Pressure: ${data.main.pressure} hPA`;
        this.cloud.textContent = `Cloudiness: ${data.clouds.all}%`;
        this.wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        // clear the input field
        document.querySelector('#location-input').value = '';
    }
}