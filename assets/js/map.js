//The code for the Google maps Api was created with help from - https://www.aspsnippets.com/Articles/Google-Maps-API-V3-Add-multiple-markers-with-InfoWindow-to-Google-Map.aspx//


var map;
var service;
var openInfoWindow;
//infowindow instance
var infowindow = new google.maps.InfoWindow();
var initialMapLocation = {
    lat: 54.774010,
    lng: -1.724413
}; // Durham
var markers = [{
    title: "Beamish Museum",
    lat: 54.8849314,
    lng: -1.6673812,
    description: "Beamish is a living, working museum, set in 300 acres of beautiful Durham countryside. Costumed folk bring to life the Town, Pit Village, Home Farm and Pockerley Old Hall.",
    image: 'assets/images/beamish_museum.jpg',
    placeId: "ChIJGbReleF4fkgRc9FGCn_IVUw",
},
{
    title: "Bowes Museum",
    lat: 54.5420335,
    lng: -1.9175423,
    description: "The Bowes Museum is the jewel in the heart of the historic market town of Barnard Castle in the beautiful Durham countryside.Housing internationally significant collections of fine and decorative arts, the Museum was purpose built in the 19thC by wealthy businessman John Bowes and his French actress wife Josephine.",
    image: 'assets/images/bowes_museum.jpg',
    placeId: "ChIJqfRfxtIkfEgR69y3K7lmqs0",
},
{
    title: "Durham Cathedral",
    lat: 54.7732329,
    lng: -1.5785808,
    description: "Durham Cathedral has been a place of worship, welcome and hospitality for almost a millennium, inspiring all who come. Built in 1093 to house the Shrine of St Cuthbert, Durham Cathedral is renowned for its magnificent Romanesque architecture and spectacular location at the heart of the Durham World Heritage Site. It is also the resting place of the Venerable Bede",
    image: 'assets/images/durham_cathedral_1.jpg',
    placeId: "ChIJFRrlxmGHfkgRy8-a4viXKO0",
},
{
    title: "High Force Waterfall",
    lat: 54.6506813,
    lng: -2.1889541,
    description: "High Force is one of the most impressive waterfalls in England. The River Tees has been plunging into this gorge for thousands of years but the rocks it reveals are far more ancient – with origins dating back over 300 million years!",
    image: 'assets/images/high_force_waterfall.jpg',
    placeId: "ChIJydr0nQg6fEgRDx2CrK6oURU",
},
{
    title: "Diggerland Durham",
    lat: 54.8014524,
    lng: -1.6782121,
    description: "Diggerland is the UK’s most unique construction-themed adventure park where children and adults can drive, ride and operate earth-moving machinery in a safe and family friendly environment.",
    image: 'assets/images/digger_land.jpg',
    placeId: "ChIJ6--NSbF_fkgRc-kFeu4wEtE",
},
{
    title: "Raby Castle",
    lat: 54.5915822,
    lng: -1.8041618,
    description: "Raby Castle offers a brilliant and memorable family day out. It is a jewell in the crown of County Durham and one of England's finest medieval castles.",
    image: 'assets/images/raby_castle.jpg',
    placeId: "ChIJR7YOnAEmfEgRk6PBpBOxBDU",
},
];

// This code was created with help from Stack Overflow https://stackoverflow.com/questions/63131682/adding-opening-hours-to-google-maps-info-window

window.onload = function () {
    loadMap();
};

/* This function queries Google Places API for the passed placeID */
function getPlaceDetails(generalPlaceInfo) {
    var request = {
        placeId: generalPlaceInfo.placeId,
        fields: ['name', 'geometry', 'opening_hours']
    };
    service.getDetails(request, function (googlePlaceInfo, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            let placeInfo = {
                'google': googlePlaceInfo,
                'general': generalPlaceInfo
            };
            createMarker(placeInfo);
        }
    });
}

function getMarkerHTML(placeInfo) {
    // Create ordered list for the location's business hours
    var openingHoursHtml = "<ol style='list-style: none' class='info-window-text'>";
    var placesWeekdayText = placeInfo.google.opening_hours.weekday_text;

    // Loop through array and add list items
    for (var i = 0; i < placesWeekdayText.length; i++) {
        openingHoursHtml += "<li>" + placesWeekdayText[i] + "</li>";
    }
    openingHoursHtml += "</ol>";

    let placeDescriptionHtml = `<p class="info-window-text">${placeInfo.general.description}</p>`;
    let placeImageHtml = `<img class="marker-img" src="${placeInfo.general.image}">`;

    // Create info window content
    var content = `
<div class="text-center">
    <h4 class='info-window-title'>
    ${placeInfo.google.name}
    </h4>
    ${placeDescriptionHtml}
    ${placeImageHtml}
    <h4 class='info-window-title'>Opening hours</h4>
    ${openingHoursHtml}
</div>
`;
    return content;
}

// Create a marker and infowindow for each of the locations
function createMarker(placeInfo) {
    var marker = new google.maps.Marker({
        map: map,
        position: placeInfo.google.geometry.location
    });

    content = getMarkerHTML(placeInfo);

    // Add marker on click listener to open an infowindow
    // with each location's name and opening_hours.weekday_text
    google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
        return function () {
            // To close other infowindows if one is already open
            if (openInfoWindow)
                openInfoWindow.close();

            // Set the contents of the infowindow
            infowindow.setContent(content);
            openInfoWindow = infowindow;
            // Open the infowindow
            infowindow.open(map, marker);
        };
    })(marker, content, infowindow));
}

function loadMap() {
    // Initialize map
    map = new google.maps.Map(document.getElementById("map"), {
        center: initialMapLocation,
        zoom: 9
    });
    // Initialize Places Service
    service = new google.maps.places.PlacesService(map);

    // Send a Place Details request per each location
    // in our markers array above
    markers.forEach(function (place) {
        getPlaceDetails(place);
    });
}
