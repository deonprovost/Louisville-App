
var paintAs = function(prop) {
  map.setLayoutProperty('streets', 'visibility', 'visible');
  map.setPaintProperty('streets', "line-color", ["interpolate", ['linear'], ["get", prop], 0, "#FF0000", 1, "#0000FF"]);
};

var hideRisk = function() {
map.setLayoutProperty('intersections', 'visibility', 'none');
};

var hideFeatures = function() {
map.setLayoutProperty('streets', 'visibility', 'none');
};

var trafficPaint = {
  field: "risk_score",
  colors: ["#000000", "#a2ef07", "#f6f913", "#ef8e26", "#f90021"],
  breaks: [20, 40, 60, 80],
  mode: "step"
};

var closeOverlay = function() {
    var x = document.getElementById("features");
        x.style.display = "none";
};

var openOverlay = function() {
    var x = document.getElementById("features");
        x.style.display = "block";
};

$('#ONEWAY').click(function() { paintAs('ONEWAY') });
$('#BIKEWAY').click(function() { paintAs('BIKEWAY') });
$('#TrafficSig').click(function() { paintAs('TrafficSig') });
$('#hide-risk').click(function() { hideRisk(); });
$('#hide-features').click(function() { hideFeatures(); });
