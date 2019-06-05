const weather = new Weather();
const ui = new UI();
const locationInput = document.querySelector('#location-input');
const searchBox = new google.maps.places.SearchBox(locationInput);

document.addEventListener('DOMContentLoaded', () => {
    getLocation();
});

searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0];
    if (place === null) return;
    const latitude = place.geometry.location.lat();
    const longtitude = place.geometry.location.lng();
    weather.getWeather(latitude, longtitude).
        then( (data) => {ui.displayWeather(data)});
})

// Get the current position
function getLocation() {
    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(showCurrentWeather));
    }
}

function showCurrentWeather(position) {
    weather.getWeather(position.coords.latitude, position.coords.longitude).
        then( (data) => {ui.displayWeather(data)});
}
