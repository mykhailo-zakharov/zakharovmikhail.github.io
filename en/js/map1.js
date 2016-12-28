var map = L.map('map').setView([42,44], 8);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.light'
}).addTo(map);

var geojson = L.geoJson(statesData).addTo(map);

L.marker([42,44]).addTo(map).bindPopup("<img  width='200px' src='img/photo1.jpg'><br><strong>КАРО ФИЛЬМ Шоколад</strong><br />Адрес: ул. Белинского, 124<br> <a href='link.html'>link</a>").openPopup();
L.marker([43,45]).addTo(map).bindPopup("<img  width='200px' src='img/photo1.jpg'><br><strong>КАРО ФИЛЬМ Шоколад</strong><br />Адрес: ул. Белинского, 124<br> <a href='link.html'>link</a>").openPopup();
L.marker([42.5,44.3]).addTo(map).bindPopup("<img  width='200px' src='img/photo1.jpg'><br><strong>КАРО ФИЛЬМ Шоколад</strong><br />Адрес: ул. Белинского, 124<br> <a href='link.html'>link</a>").openPopup();
