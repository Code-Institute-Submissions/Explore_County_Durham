//Code taken from Google Maps lesson in Code Institute Interactive Front End Module//
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 54.7817348, lng: -1.6222762}
    });


var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [
    { lat: 54.8849314, lng: -1.6673812 },
    { lat: 54.5420335, lng: -1.9175423 },
    { lat: 54.7732329, lng: -1.5785808 },
    { lat: 54.6506813, lng: -2.1889541 },
    { lat: 54.8014524, lng: -1.6782121 },
    { lat: 54.5915822, lng: -1.8041618 }
];

   var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

        var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
};