// initialize the map. The a global variable stores the map object for subsequent reference
var map;

map = L.map ('map', {
		center: [47.8095, 13.0550],
		zoom: 12
    });

// adding the tile layers (basemaps) to the map 

var Dark_Streets = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	subdomains: 'abcd',
	accessToken: '2aGuIHpH6H1xqQq2ly21G8ecFhmzxpf7NydCHPRwyEKgvQCmhkrUDAtTBCo4jkxw'
});

var streets =  L.tileLayer('https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	subdomains: 'abcd',
	accessToken: '2aGuIHpH6H1xqQq2ly21G8ecFhmzxpf7NydCHPRwyEKgvQCmhkrUDAtTBCo4jkxw'
}).addTo(map);


// this variable will be used in the layer control (at the end)
var baseMaps = {
	"Streets Dark": Dark_Streets,
	"Street Light": streets
}

// adding scale bar
L.control.scale({position:'bottomleft', imperial:false}).addTo(map);

// adding north arrow
var north = L.control({position: "bottomleft"});
north.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    div.innerHTML = '<img src= "data/north-arrow.png" alt="Image" height = "30" width="30">';
    return div;
}
north.addTo(map);

// defyning the style of the GeoJSON polygon feature 
var myFedStyle = {
    "color": "#000",
    "weight": 2,
    "opacity": 0.5
}

//adding the polygon feature of the state of salzburg
//the variable federalstateSBG is created in the Federalstates.js file
var fedstate= L.geoJson(federalstateSBG, {style: myFedStyle});

fedstate.addTo(map);

var sidebar = L.control.sidebar('sidebar', 'right').addTo(map);

// adding GeoJSON point feature to the map 

var libraries = {
	"type": "FeatureCollection",
	"name": "Libraries",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
	{ "type": "Feature", "properties": { "amenity": "library", "name": "Law Faculty Library Toskanatrakt", "address": "Churfürststraße 1", "opening_ho": "Mon - Fri  09:00 - 17:00", "reading_ro": "Yes", "operator": "Universität Salzburg", "website": "https:\/\/www.uni-salzburg.at\/index.php?id=32248&L=1", "email": "info.rw(at)sbg.ac.at", "phone": "+43 (0)662 8044 3018", "city": "Salzburg", "postcode": "2020" }, "geometry": { "type": "Point", "coordinates": [ 13.044581389178589, 47.799140441337883 ] } },
	{ "type": "Feature", "properties": { "amenity": "library", "name": "Law Faculty Library Firmian-Salm-Haus\t", "address": "Kapitelgasse 5", "opening_ho": "Mon - Fri  10:00 - 16:00", "reading_ro": "Yes", "operator": "Universität Salzburg", "website": "https:\/\/www.uni-salzburg.at\/index.php?id=32248&L=1", "email": "info.fs(at)sbg.ac.at", "phone": "+43 (0)662 8044 3019", "city": "Salzburg", "postcode": "2020" }, "geometry": { "type": "Point", "coordinates": [ 13.048216763006735, 47.797549419679555 ] } },
	{ "type": "Feature", "properties": { "amenity": null, "name": null, "address": null, "opening_ho": null, "reading_ro": null, "operator": null, "website": null, "email": null, "phone": null, "city": null, "postcode": null }, "geometry": null },
	{ "type": "Feature", "properties": { "amenity": "library", "name": "Department of Classical Studies Library", "address": "Residenzplatz 1", "opening_ho": "not found", "reading_ro": "not found", "operator": "Universität Salzburg", "website": "https:\/\/www.uni-salzburg.at\/index.php?id=32294&L=1", "email": "not found", "phone": "+43 662 8044 4715", "city": "Salzburg", "postcode": "5020" }, "geometry": { "type": "Point", "coordinates": [ 13.04577315084679, 47.798501347583567 ] } },
	{ "type": "Feature", "properties": { "amenity": "library", "name": "Natural Sciences Faculty Library", "address": "Hellbrunnerstrasse 34", "opening_ho": "Mon - Fri 09:00 - 17:00", "reading_ro": "Yes", "operator": "Universität Salzburg", "website": "https:\/\/www.uni-salzburg.at\/index.php?id=32343", "email": "info.nw (at) sbg.ac.at", "phone": "+43 (0) 662 8044 5022", "city": "Salzburg", "postcode": "5020" }, "geometry": { "type": "Point", "coordinates": [ 13.06026987716827, 47.788524866561659 ] } },
	{ "type": "Feature", "properties": { "amenity": "library", "name": "Lesessaal Mozarteum", "address": "Frohnburgweg 55", "opening_ho": "Mo 09:00-17:00; Tu-Fr 09:00-12:00", "reading_ro": "Yes", "operator": "Universität Mozarteum Salzburg", "website": "https:\/\/www.moz.ac.at\/de\/bibliothek\/abteilungen.php", "email": "bibliothek.orff@moz.ac.at", "phone": "+43 662 6198-4100", "city": "Salzburg", "postcode": "5020" }, "geometry": { "type": "Point", "coordinates": [ 13.0683892, 47.781581 ] } },
	{ "type": "Feature", "properties": { "amenity": "library", "name": "Main Library (Hauptbibliothek)", "address": "Hofstallgasse 2-4", "opening_ho": "Mo-Fr 09:00-21:00; Sa 09:00-17:00", "reading_ro": "Yes", "operator": "Universität Salzburg", "website": "https:\/\/www.uni-salzburg.at\/index.php?id=32281&L=1", "email": "bibliothek@moz.ac.at", "phone": "+43 662 8044 77550", "city": "Salzburg", "postcode": "5020" }, "geometry": { "type": "Point", "coordinates": [ 13.0414228, 47.7990643 ] } },
	{ "type": "Feature", "properties": { "amenity": "library", "name": "Fachbibliothek UNIPARK", "address": "Erzabt-Klotz-Straße 1", "opening_ho": "Mon - Fri  09:00 - 17:00", "reading_ro": "Yes", "operator": "Universität Salzburg", "website": "https:\/\/www.uni-salzburg.at\/index.php?id=32303&L=1", "email": "info.unipark(at)sbg.ac.at", "phone": "+43 662 8044 4920\/4921", "city": "Salzburg", "postcode": "5020" }, "geometry": { "type": "Point", "coordinates": [ 13.0538342, 47.7946612 ] } },
	{ "type": "Feature", "properties": { "amenity": "library", "name": "Bibliothek Sankt Peter", "address": "St.-Peter-Bezirk District 1", "opening_ho": "Tu-Th 09:00-12:00, 14:00-17:00; Fr 09:00-14:00", "reading_ro": "Yes", "operator": "Benediktiner Erzabtei St. Peter in Salzburg", "website": "https:\/\/stift-stpeter.at\/de\/kultur\/index.asp?dat=Bibliothek&id=259&title=Bibliothek+St%2E+Peter", "email": "office@erzabtei.at", "phone": "+43 662 844576", "city": "Salzburg", "postcode": "5010" }, "geometry": { "type": "Point", "coordinates": [ 13.0456881, 47.7969982 ] } },
	{ "type": "Feature", "properties": { "amenity": "library", "name": "Main Library (Hauptbibliothek)", "address": "Mirabellplatz 1", "opening_ho": "Mo 09:00-16:00; Mo 16:00-19:00 open \"Offener Lesesaal\"; Tu-Th 09:00-19:00; Fr 09:00-14:00; Fr 14:00-17:00 open \"Offener Lesesaal\"; Sa 10:00-14:00 open \"Offener Lesesaal\"; SH Mo-Fr 09:00-16:00; SH Sa off", "reading_ro": "Yes", "operator": "Universität Mozarteum Salzburg", "website": "https:\/\/www.moz.ac.at\/de\/bibliothek\/", "email": "bibliothek@moz.ac.at", "phone": "+43 662 6198 4000", "city": "Salzburg", "postcode": "5020" }, "geometry": { "type": "Point", "coordinates": [ 13.0439062, 47.8036077 ] } },
	{ "type": "Feature", "properties": { "amenity": "library", "name": "Dr.-Wilfried-Haslauer-Bibliothek", "address": "Griesgasse 17", "opening_ho": "Mo-Th 09:00-13:30; Fr 09:00-11:00", "reading_ro": "Not found", "operator": "Forschungsinstitut für politisch-historische Studien", "website": "http:\/\/www.haslauer-bibliothek.at\/", "email": "haslauer.bibliothek@sbg.at", "phone": "+43 662 846666", "city": "Salzburg", "postcode": "5020" }, "geometry": { "type": "Point", "coordinates": [ 13.0425005, 47.8006298 ] } },
	{ "type": "Feature", "properties": { "amenity": "library", "name": "Itzling Library", "address": "Jakob-Haringer-Str. 2a, 1st floor, room 31", "opening_ho": "Mo-Th 08:00 - 16:00; Fr 08:00 - 12:00", "reading_ro": "Yes", "operator": "Universität Salzburg", "website": "https:\/\/www.uni-salzburg.at\/index.php?id=32343", "email": "info.nw-tz (at) sbg.ac.at", "phone": "+43 (0) 662 8044 6323", "city": "Salzburg", "postcode": "5020" }, "geometry": { "type": "Point", "coordinates": [ 13.040371283137475, 47.822021037117409 ] } },
	{ "type": "Feature", "properties": { "amenity": "library", "name": "Social Sciences Specialist Library", "address": "Rudolfskai 42", "opening_ho": "Mon - Fri 09:00 - 17:00", "reading_ro": "Yes", "operator": "Universität Salzburg", "website": "https:\/\/www.uni-salzburg.at\/index.php?id=32246&L=1", "email": "info.gw(at)sbg.ac.at", "phone": "+43 (0)662 8044 4022", "city": "Salzburg", "postcode": "2020" }, "geometry": { "type": "Point", "coordinates": [ 13.050386247589405, 47.798497665970643 ] } }
	]
	}
	
// adding mouse over effect (highlights the feature)
var libraryHighlighted;

// setting up the style of the marker for both highlight and back to normal
var symbol = L.icon({
	iconUrl: 'data/open-book_2.png',
	iconSize: [25, 25]
    }); 
	
var largesymbol = L.icon({
	iconUrl: 'data/open-book_2.png',
	iconSize: [45, 45]
	}); 
	
//access to active feature that was hovered over through e.target
function highlightFeature(e) {
	var layer = e.target; 
	
	layer.setIcon (L.icon({ //allows resetting to normal
	iconUrl: 'data/open-book_2.png',
	iconSize: [35, 35]
    })); 
	
}

//function for resetting the highlight
function resetHighlight(e) {
	//libraryHighlighted.resetStyle(e.target);
	// for the active feature (e.target) it was used setIcon to re-apply the style symbol
	e.target.setIcon(symbol);
}

//click listener that zooms to the feature
// also here we need to use a method that is defined for markers. 
//I retrieve the coords of the marker and the use flyTo for changing the map view.
function zoomToFeature(e) {
    //map.fitBounds(e.target.getBounds());
	var coords = e.target.getLatLng();
	map.flyTo(coords, 17, );

}

//to call these methods we need to add listeners to our features

function interactiveFunction(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
		click: zoomToFeature
   } );
}

//adding the geojson and the pop-up
libraryHighlighted = L.geoJson(libraries, {
	pointToLayer: function(feature, latlng) {
	return  L.marker(latlng, {icon:symbol, title:"Libraries in Salzburg"});
	},
	onEachFeature: function(feature, marker) { // enabling the pop-up
			marker.bindPopup("<b>"+ feature.properties.name + "</b><br>" + "<b> Reading room: </b>" + 
			feature.properties.reading_ro + "<br> " +"<b> Opening Hours: </b>" +
			feature.properties.opening_ho + "<br> " +"<b> Operator: </b>"  + 
			feature.properties.operator + "<br> " +"<b> Website: </b>" + "<a href= " + 
			feature.properties.website + " target ='_blank'>" + feature.properties.website + " </a>"); 
			marker.on('mouseover',highlightFeature);
			marker.on('mouseout', resetHighlight)
		}
}).addTo(map); 

// Layer control
var features = {
	" Libraries <img src='data/open-book_2.png' height=20>": libraryHighlighted,
	" State of Salzburg <img src ='data/square-outline.png' height=20>": fedstate
}

L.control.layers(baseMaps, features, {position:'topright', collapsed: false}).addTo(map);