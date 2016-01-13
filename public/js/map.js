var markers = [
  ['Boulder,CO', 40.018228, -105.2864265 ],
];


var map;
//1. Initialize Map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.018228, lng: -105.2864265},
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.HYBRID //SATELLITE ROADS TERRAIN
  })

  // // 2. Adding an infoWindow to the marker

  var infoWindow = new google.maps.InfoWindow()
  // 3. Adding multiple markers to the map


  var pinIcon = new google.maps.MarkerImage(
    "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Azure.png",
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new google.maps.Size(90, 100)
  );

  for (var i = 0; i < markers.length; i++) {

    var position = {lat: markers[i][1], lng: markers[i][2]}

    marker = new google.maps.Marker({
      position: position,
      map: map,
      title: markers[i][0],
      icon: pinIcon
    })

    marker.addListener('click', function() {
      infoWindow.setContent(this.title);
      infoWindow.open(map, this)
    })

  }
}
