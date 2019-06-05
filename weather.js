class Weather {
    constructor() {
        this.API_key = "845b300ae0330460051acd9f9642f229";
    }

    async getWeather(latitude, longtitude) {
        const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${this.API_key}&units=metric`);
        const weatherData = await weatherResponse.json();
        return weatherData;
    }
}