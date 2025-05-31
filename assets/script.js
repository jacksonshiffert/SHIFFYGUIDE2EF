function createCard(artist, index) {
  const card = document.createElement('div');
  card.className = `card ${genreColorClass(artist.Genre)}`;
  card.innerHTML = `
    <h2>${artist.Name}</h2>
    <p><strong>Genre:</strong> ${artist.Genre}</p>
    <p><strong>Day:</strong> ${artist.Day}</p>
    <p><strong>Rating:</strong> ${artist["Rating (1-5)"]}</p>
  `;
  card.addEventListener('click', () => {
    localStorage.setItem('selectedArtist', JSON.stringify(artist));
    window.location.href = 'assets/artist.html';
  });
  return card;
}

function genreColorClass(genre) {
  const genreColors = {
    "Funk, World": "genre-funk-world",
    "DnB": "genre-dnb",
    "Pop": "genre-pop",
    "Chill Violin Loops": "genre-chill-violin",
    "House, Disco": "genre-house-disco",
    "Indie rock, jam": "genre-indie-jam",
    "House": "genre-house",
    "electro house": "genre-electro-house",
    "Techno": "genre-techno",
    "Dubstep": "genre-dubstep",
    "Garage": "genre-garage",
    "Prog House": "genre-prog-house",
    "Tech House": "genre-tech-house",
    "Bass": "genre-bass",
    "Ethereal": "genre-ethereal",
    "EDM, Pop": "genre-edm-pop",
    "Bass, house": "genre-bass-house",
    "Dance Pop": "genre-dance-pop",
    "Synth Trance": "genre-synth-trance",
    "edm": "genre-edm",
    "Jamband": "genre-jamband",
    "Electro Pop": "genre-electro-pop",
    "Indie Pop": "genre-indie-pop",
    "Jungle, DnB": "genre-jungle-dnb",
    "World Dance": "genre-world-dance",
    "House, Trance": "genre-house-trance",
    "Electro": "genre-electro",
    "Rap": "genre-rap",
    "Electro Jamband": "genre-electro-jamband",
    "Trance": "genre-trance",
    "House, DnB": "genre-house-dnb",
    "Glitch Remixes": "genre-glitch-remixes",
    "Electronica": "genre-electronica",
    "Dance": "genre-dance",
    "RnB, Funk": "genre-rnb-funk",
    "Indie Folk": "genre-indie-folk",
    "EDM": "genre-edm",
    "UK Garage": "genre-uk-garage",
    "Indie Dance": "genre-indie-dance",
    "Indie": "genre-indie",
    "techpop, hyperpop": "genre-techpop-hyperpop",
    "RnB, Funk, Rap": "genre-rnb-funk-rap",
    "Dubstep, Bass": "genre-dubstep-bass"
  };
  return genreColors[genre] || "genre-default";
}

function loadGrid() {
  const grid = document.getElementById('artistGrid');
    fetch('./assets/EF25LIST.json')
    .then((res) => res.json())
    .then((artistData) => {
    if (grid) {
      artistData.forEach((artist, i) => grid.appendChild(createCard(artist, i)));
    }})
}

function loadArtistDetails() {
  const artist = JSON.parse(localStorage.getItem('selectedArtist'));
  if (artist) {
    document.getElementById('name').textContent = artist.Name;
    document.getElementById('genre').textContent = artist.Genre;
    document.getElementById('rating').textContent = artist["Rating (1-5)"];
    document.getElementById('bpm').textContent = artist["Avg BPM"];
    document.getElementById('day').textContent = artist.Day;
    document.getElementById('geo').textContent = artist.Geography;
    document.getElementById('desc').textContent = artist.Description;
    document.getElementById('youtube').setAttribute("src", artist["Links to the good stuff"]);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadGrid();
  loadArtistDetails();
});