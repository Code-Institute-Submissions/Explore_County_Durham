//Code taken from Stack Overflow, https://stackoverflow.com/questions/30012913/google-map-api-v3-add-multiple-infowindows //

  var locations = [
    { lat: 54.8849314, lng: -1.6673812, name: "Beamish Museum" },
    { lat: 54.5420335, lng: -1.9175423, name: "Bowes Museum" },
    { lat: 54.7732329, lng: -1.5785808, name: "Durham Cathedral" },
    { lat: 54.6506813, lng: -2.1889541, name: "High Force Waterfall" },
    { lat: 54.8014524, lng: -1.6782121, name: "Diggerland Durham" },
    { lat: 54.5915822, lng: -1.8041618, name: "Raby Castle" }
  ];
  
  function initMap() {
     var infowindow = new google.maps.InfoWindow(); 
      var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 54.7817348, lng: -1.6222762 },
  });

    function placeMarker( loc ) {
    const marker = new google.maps.Marker({
      position : new google.maps.LatLng( loc.lat, loc.lng ),
      map : map
    });
    google.maps.event.addListener(marker, 'click', function(){
        infowindow.close(); 
            infowindow.setContent(`<div id="infowindow">${loc.name}</div>`);
        infowindow.open(map, marker);
    });
  }

  locations.forEach( placeMarker );

}
