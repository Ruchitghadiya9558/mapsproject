// const map = new mapboxgl.map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-vll',
//     center: [78.96 , 20.56],
//     zoom: 5
// });

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FtZTEyMyIsImEiOiJja3Fzem9wdjMwZ3U3Mm9xbWg0cnYzOGF3In0.DIWHOu1o2eHn4-TOdETiYg';


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [78.96 , 20.56],
    zoom: 5
});

map.addControl(new mapboxgl.FullscreenControl());

map.addControl(new mapboxgl.NavigationControl());

// Add geolocate control to the map.
map.addControl( new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
},
    trackUserLocation: true
}));

map.addControl(new MapboxDirections({accessToken: mapboxgl.accessToken}),'top-left');

document.getElementById('fly').addEventListener('click', function () {
    // Fly to a random location by offsetting the point -74.50, 40
    // by up to 5 degrees.
    map.flyTo({
    center: [
    -74.5 + (Math.random() - 0.5) * 10,
    40 + (Math.random() - 0.5) * 10
    ],
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
});
});


// const geocoder = new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl
// });
     
// document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
