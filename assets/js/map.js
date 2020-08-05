var map;
var service;
var openInfoWindow;
var markers = [
    {
        title: "Beamish Museum",
        lat: 54.8849314,
        lng: -1.6673812,
        header: 'Beamish Museum',
        description: "Beamish is a living, working museum, set in 300 acres of beautiful Durham countryside. Costumed folk bring to life the Town, Pit Village, Home Farm and Pockerley Old Hall.",
        image: 'assets/images/beamish_museum.jpg',
    },
    {
        title: "Bowes Museum",
        lat: 54.5420335,
        lng: -1.9175423,
        header: 'Bowes Museum',
        description:
            "The Bowes Museum is the jewel in the heart of the historic market town of Barnard Castle in the beautiful Durham countryside.Housing internationally significant collections of fine and decorative arts, the Museum was purpose built in the 19thC by wealthy businessman John Bowes and his French actress wife Josephine.",
        image: 'assets/images/bowes_museum.jpg',
    },
    {
        title: "Durham Cathedral",
        lat: 54.7732329,
        lng: -1.5785808,
        header: 'Durham Cathedral',
        description:
            "Durham Cathedral has been a place of worship, welcome and hospitality for almost a millennium, inspiring all who come. Built in 1093 to house the Shrine of St Cuthbert, Durham Cathedral is renowned for its magnificent Romanesque architecture and spectacular location at the heart of the Durham World Heritage Site. It is also the resting place of the Venerable Bede",
        image: 'assets/images/durham_cathedral_1.jpg',
    },
    {
        title: "High Force Waterfall",
        lat: 54.6506813,
        lng: -2.1889541,
        header: 'High Force Waterfall',
        description:
            "High Force is one of the most impressive waterfalls in England. The River Tees has been plunging into this gorge for thousands of years but the rocks it reveals are far more ancient – with origins dating back over 300 million years!",
        image: 'assets/images/high_force_waterfall.jpg',

    },
    {
        title: "Diggerland Durham",
        lat: 54.8014524,
        lng: -1.6782121,
        header: 'Diggerland Durham',
        description: "Diggerland is the UK’s most unique construction-themed adventure park where children and adults can drive, ride and operate earth-moving machinery in a safe and family friendly environment.",
        image: 'assets/images/digger_land.jpg',
    },
    {
        title: "Raby Castle",
        lat: 54.5915822,
        lng: -1.8041618,
        header: 'Raby Castle',
        description: "Raby Castle offers a brilliant and memorable family day out. It is a jewell in the crown of County Durham and one of England's finest medieval castles.",
        image: 'assets/images/raby_castle.jpg',
    },
];


// An array of the locations to put a marker on
var locations = ["ChIJGbReleF4fkgRc9FGCn_IVUw", //Beamish Museum
    "ChIJqfRfxtIkfEgR69y3K7lmqs0", //Bowes Museum
    "ChIJFRrlxmGHfkgRy8-a4viXKO0", // Durham Cathedral
    "ChIJydr0nQg6fEgRDx2CrK6oURU", //High Force Waterfall
    "ChIJ6--NSbF_fkgRc-kFeu4wEtE", //Diggerland Durham
    "ChIJR7YOnAEmfEgRk6PBpBOxBDU"] //Raby Castle

window.onload = function () {
    loadMap();
};

function loadMap() {
   //infowindow instance
    var infowindow = new google.maps.InfoWindow();

  
    //Initialize map
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 54.774010, lng: -1.724413 },
      zoom: 9
    });
    //initialize Places Service
    service = new google.maps.places.PlacesService(map);
    
      //send a Place Details request per each locations
      //in our locations[] array above
    locations.forEach(function(placeIds){
        var request = {
            placeId: placeIds,
            fields: ['name', 'geometry', 'opening_hours']
          };
      getPlaceDetails(request);
    });
    
    
    function getPlaceDetails(request){
        service.getDetails(request, function (place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMarker(place);
            } else {
        alert('Place Details request failed due to: ' + status);
        }
          });
      }
    
    // create a marker and infowindow for each of the locations
    function createMarker(place){
        var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
      });
      
      // create ordered list for the location's business hours
      var html = "<ol>";
      var placesWeekdayText = place.opening_hours.weekday_text;
     
         // Loop through array and add list items
        for (var i=0; i<placesWeekdayText.length; i++) {
          html += "<li>" + placesWeekdayText[i] + "</li>";
      }
        html += "</ol>";
    
      //create info window content
      var content = "<h3>" + place.name + "</h3> <h4>Business hours:</h4>" + html;
          
      //add marker on click listener to open an infowindow
      //with each location's name and opening_hours.weekday_text
          google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
          return function() {
              // To close other infowindows if one is already open
            if (openInfoWindow)
                   openInfoWindow.close();
           
           //set the contents of the infowindow
            infowindow.setContent(content);
            openInfoWindow = infowindow;
            //open the infowindow
            infowindow.open(map,marker);
          };
      })(marker,content,infowindow)); 
    }
  }