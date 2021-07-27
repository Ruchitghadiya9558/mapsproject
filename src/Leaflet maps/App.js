const map = L.map('map').setView([22.9074872, 79.07306671], 5);

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder\'s gyan with ❤️';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(map);

var myIcon = L.icon({
    iconUrl: 'red.png',
    iconSize: [30, 40]
});

const marker = L.marker([23.0393,72.6627],{
    myIcon
});

marker.bindPopup('<h2>Qmamu</h2>');
marker.addTo(map);



// default map layer

// let map = L.map('map', {
//     layers: MQ.mapLayer(),
//     center: [23.0393, 72.6627],
//     zoom: 12
// });
    

//     function runDirection(start, end) {
        
//         // recreating new map layer after removal
//         map = L.map('map', {
//             layers: MQ.mapLayer(),
//             center: [35.791188, -78.636755],
//             zoom: 12
//         });
        
//         var dir = MQ.routing.directions();

//         dir.route({
//             locations: [
//                 start,
//                 end
//             ]
//         });
    

//         CustomRouteLayer = MQ.Routing.RouteLayer.extend({
//             createStartMarker: (location) => {
//                 var custom_icon;
//                 var marker;

//                 custom_icon = L.icon({
//                     iconUrl: 'red.png',
//                     iconSize: [20, 29],
//                     iconAnchor: [10, 29],
//                     popupAnchor: [0, -29]
//                 });

//                 marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

//                 return marker;
//             },

//             createEndMarker: (location) => {
//                 var custom_icon;
//                 var marker;

//                 custom_icon = L.icon({
//                     iconUrl: 'blue.png',
//                     iconSize: [20, 29],
//                     iconAnchor: [10, 29],
//                     popupAnchor: [0, -29]
//                 });

//                 marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

//                 return marker;
//             }
//         });
        
//         map.addLayer(new CustomRouteLayer({
//             directions: dir,
//             fitBounds: true
//         })); 
//     }


// // function that runs when form submitted
// function submitForm(event) {
//     event.preventDefault();

//     // delete current map layer
//     map.remove();

//     // getting form data
//     start = document.getElementById("start").value;
//     end = document.getElementById("destination").value;

//     // run directions function
//     runDirection(start, end);

//     // reset form
//     document.getElementById("form").reset();
// }

// // asign the form to form variable
// const form = document.getElementById('form');

// // call the submitForm() function when submitting the form
// form.addEventListener('submit', submitForm);
