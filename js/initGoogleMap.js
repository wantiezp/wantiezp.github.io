function initialize() {
var mapCanvas = document.getElementById('map');
var mapOptions = {
  center: new google.maps.LatLng(51.019746, 3.655284),
  zoom: 16,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(mapCanvas, mapOptions)

  var marker = new google.maps.Marker({
	    position: new google.maps.LatLng(51.019746, 3.655284),
	    map: map,
	    title: 'Hello World!'
		});
}
google.maps.event.addDomListener(window, 'load', initialize);
