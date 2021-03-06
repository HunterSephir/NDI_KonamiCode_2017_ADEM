function initialize() {

    var myCenter = new google.maps.LatLng(48.579848, 7.763239);

    var mapProp = {
        center: myCenter,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapProp);

    google.maps.event.addListener(map, 'click', function (event) {
        placeMarker(event.latLng);
        saveMarker(event);
    });

    //map.data.setControls(['Point']);
    bindDataLayerListeners(map.data);

    //load saved data
    loadMarkers(map);

}

function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
    });
    	infowindow.open(map, marker);

    map.data.add(new google.maps.Data.Feature({properties:{},geometry:new google.maps.Data.Point(location)}));
}


// Apply listeners to refresh the GeoJson display on a given data layer.
function bindDataLayerListeners(dataLayer) {
    dataLayer.addListener('addfeature', saveMarker);
    dataLayer.addListener('removefeature', saveMarker);
    //dataLayer.addListener('setgeometry', saveMarker);
}



function saveMarker() {
    map.data.toGeoJson(function (json) {
        localStorage.setItem('geoData', JSON.stringify(json));
    });
}


function clearMarkers() {
    map.data.forEach(function (f) {
        map.data.remove(f);
    });
		window.open("alerts.html","_self")
}

function loadMarkers(map) {
    var data = JSON.parse(localStorage.getItem('geoData'));
    map.data.addGeoJson(data);
}
