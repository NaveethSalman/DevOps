function getLocation() {
navigator.geolocation.getCurrentPosition(
function (position) {
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
document.getElementById('location').innerHTML =
`Latitude: ${latitude} <br> Longitude: ${longitude}`;
showMap(latitude, longitude);
},
function (error) {
alert('Error: ' + error.message);
},
{ enableHighAccuracy: true }
);
}
function showMap(lat, lng) {
const mapDiv = document.getElementById('map');
mapDiv.innerHTML = `<iframe
width="100%"
height="400"
frameborder="0"
style="border:0"
src="https://www.google.com/maps?q=${lat},${lng}&output=embed">
</iframe>`
}