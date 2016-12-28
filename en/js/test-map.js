// 	var map = L.map('map', {
// 		crs: L.CRS.Simple,
// 		minZoom: -1
// 	});

// 	var yx = L.latLng;

// 	var xy = function(x, y) {
// 		if (L.Util.isArray(x)) {    // When doing xy([x, y]);
// 			return yx(x[1], x[0]);
// 		}
// 		return yx(y, x);  // When doing xy(x, y);
// 	};

// 	var bounds = [xy(0, 0), xy(2021, 1010)];
// 	var image = L.imageOverlay('map-test.png', bounds).addTo(map);

// 	var sol      = xy(175.2, 145.0);
// 	var mizar    = xy( 41.6, 130.1);
// 	var kruegerZ = xy( 13.4,  56.5);
// 	var deneb    = xy(218.7,   8.3);

// 	L.marker(     sol).addTo(map).bindPopup(      'Sol');
// 	L.marker(   mizar).addTo(map).bindPopup(    'Mizar');
// 	L.marker(kruegerZ).addTo(map).bindPopup('Krueger-Z');
// 	L.marker(   deneb).addTo(map).bindPopup(    'Deneb');


// L.marker([500,400]).addTo(map)
// 	.bindPopup("<img  width='200px' src='img/photo1.jpg'><br><strong>КАРО ФИЛЬМ Шоколад</strong><br />Адрес: ул. Белинского, 124<br> <a href='link.html'>link</a>").openPopup();


// 	var travel = L.polyline([sol, deneb]).addTo(map);

// 	map.setView(xy(1000, 500), -7);



	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// function onEachFeature(feature, layer) {
	// 	var popupContent = "<p>I started out as a GeoJSON " +
	// 	feature.geometry.type + ", but now I'm a Leaflet vector!</p>";
 
	// 		if (feature.properties && feature.properties.popupContent) {
	// 			popupContent += feature.properties.popupContent;
	// 		}
 
	// 		layer.bindPopup(popupContent);
	// 	}
 
	// 	var testLayer = L.geoJson(test, {
 
	// 		pointToLayer: function (feature, latlng) {
	// 			return L.marker(latlng, {icon: baseballIcon});
	// 		},
 
	// 		onEachFeature: onEachFeature
	// 	}).addTo(map);
 
	// 	L.control.scale().addTo(map);


///////////////////////////////////////////////////////////////////////////////////////////////

// var mapboxAccessToken = {your access token here};
// var map = L.map('map').setView([37.8, -96], 4);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
//     id: 'mapbox.light',
//     attribution: ...
// }).addTo(map);

// L.geoJson(statesData).addTo(map);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	var map = L.map('map').setView([42,44], 8);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.light'
	}).addTo(map);

	var geojson = L.geoJson(statesData).addTo(map);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// use svg

// // create the map
// var map = L.map('map', {
//     center: [40.75, -74.2],
//     zoom: 13
// });

// // create the image
// // var imageUrl = 'http://blackicemedia.com/presentations/2013-02-hires/img/awesome_tiger.svg',
// var imageUrl = 'map.svg',
//     imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];

// L.imageOverlay(imageUrl, imageBounds).addTo(map);