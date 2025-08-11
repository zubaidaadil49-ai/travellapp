@ -0,0 +1,46 @@
// script.js
async function fetchRecommendations() {
  const response = await fetch('travel_recommendation_api.json');
  const data = await response.json();
  return data;
}

function searchRecommendations() {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  fetchRecommendations().then(data => {
    const results = data.places.filter(place =>
      place.type.toLowerCase().includes(keyword)
    );
    displayResults(results);
  });
}

function displayResults(places) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  places.forEach(place => {
    resultsDiv.innerHTML += `
      <div class="card">
        <img src="${place.imageUrl}" alt="${place.name}">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
      </div>
    `;
  });
}

function clearResults() {
  document.getElementById('results').innerHTML = '';
  document.getElementById('searchInput').value = '';
}
function showCountryTime(timeZone) {
  const options = {
    timeZone: timeZone,
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const localTime = new Date().toLocaleTimeString('en-US', options);
  console.log(`Current time in ${timeZone}: ${localTime}`);
}
