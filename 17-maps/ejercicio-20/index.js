// Initialize and add the map
function initMap() {
  // The location of Mestalla Stadium
  const mestalla = { lat: 39.47481011312579, lng: -0.35850644685810623 };

  // The location of Emirates Stadium
  const emirates = { lat: 51.555081932741075, lng: -0.10761188150600234 };

  // The location of Olympique Stadium
  const olympique = { lat: 45.76538479216648, lng: 4.981996811556151 };

  // The map, centered at Mestalla Stadium
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: olympique,
  });

  // The marker, positioned at Mestalla Stadium
  const markerMestalla = new google.maps.Marker({
    position: mestalla,
    map: map,
  });

  // The marker, positioned at Emirates Stadium
  const markerEmirates = new google.maps.Marker({
    position: emirates,
    map: map,
  });

  // The marker, positioned at Olympique Stadium
  const markerOlympique = new google.maps.Marker({
    position: olympique,
    map: map,
  });
}

window.initMap = initMap;
