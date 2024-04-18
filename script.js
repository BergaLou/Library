/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const adventures = [
  {
    adventures: 'Skydiving',
    country: 'New Zeeland, Australia',
    temperature: '32',
    weather: '☀️',
    weeks: '8',
    alignment: 'Skydiving',
    difficulty: '5',
    Emoji: '🌶️🌶️🌶️🌶️🌶️',
    fact:
      "Skydiving is an adrenaline-pumping activity that involves jumping out of an aircraft and freefalling through the sky before deploying a parachute to slow down the descent. It offers an unparalleled rush of excitement and a breathtaking perspective of the world from thousands of feet above the ground.",
    image: 'Images/skydiving.svg'
  },
  {
    adventures: 'Dive',
    country: 'Koh Tao',
    temperature: '27',
    weather: '☀️',
    weeks: '2.5',
    alignment: 'Dive',
    difficulty: '1',
    Emoji: '🌶️',
    fact:
      "Diving is a captivating underwater adventure that allows you to explore the mesmerizing beauty of the ocean's depths. Whether you're scuba diving or snorkeling, you'll encounter an array of marine life, vibrant coral reefs, and fascinating underwater landscapes that will leave you in awe of the ocean's wonders.",
    image: 'Images/dive.svg'
  },
  {
    adventures: 'Surfing',
    country: 'Fuerteventura',
    temperature: '25',
    weather: '☀️',
    weeks: '6',
    alignment: 'surfing',
    difficulty: '3',
    Emoji: '🌶️🌶️🌶️',
    fact:
      "Surfing is a thrilling water sport that involves riding ocean waves on a surfboard. It requires skill, balance, and a deep connection with the ocean as you harness the power of the waves to glide across the water's surface. Whether you're a beginner catching your first wave or an experienced surfer mastering advanced maneuvers, surfing offers endless opportunities for excitement and adventure.",
    image: 'Images/surfing.svg'
  },
  {
    adventures: "Windsurfing",
    country: 'California',
    temperature: '35',
    weather: '☀️',
    weeks: '3',
    alignment: 'Windsurfing',
    difficulty: '2',
    Emoji: '🌶️🌶️',
    fact:
      "Windsurfing combines elements of sailing and surfing to create an exhilarating water sport that harnesses the power of the wind. With a board and a sail, windsurfers navigate across the water, using the wind to propel them forward and perform thrilling maneuvers. It offers a unique blend of skill, speed, and freedom as you glide across the waves, feeling the wind in your sails and the spray of the sea on your face.",
    image: 'Images/windsurfing.svg'
  },
  {
    adventures: 'kitesurf',
    country: 'Portugal',
    temperature: '30',
    weather: '☀️',
    weeks: '7',
    alignment: 'kitesurfing',
    difficulty: '4',
    Emoji: '🌶️🌶️🌶️🌶️',
    fact:
      'Kitesurfing, also known as kiteboarding, is an exhilarating water sport that combines elements of surfing, wakeboarding, and paragliding. It involves riding a small surfboard or wakeboard while being propelled by a large kite. The kite is controlled using a bar with lines attached to the kite, allowing the rider to steer and control their speed.',
    image: 'Images/kitesurf.svg'
  }
]

const alladventuresBtn = document.getElementById('alladventuresBtn');
const shortestBtn = document.getElementById('shortestobtn');
const longestBtn = document.getElementById('longestobtn');
const difficultyBtn = document.getElementById('difficultyobtn');
const tempoBtnSunny = document.getElementById('tempobtn-sunny');
const supriseBtn = document.getElementById('supriseobtn');
const searchInput = document.getElementById("searchIP");
const container = document.getElementById('container');
const filterBtn = document.getElementsByClassName("filter-btn")

let createTrips = (adventure) => {
  return `
  <div class="boxes">
    <img class="Images" src="${adventure.image}">
    <div class="fact-info">
    <h2 class="box-item" id="fact-title">${adventure.country}</h2>
    <h3 class="box-item" id="fact">${adventure.difficulty} weeks &nbsp; &nbsp; &nbsp; &nbsp;${adventure.Emoji}</h3>
    <p class="box-item">${adventure.fact}</p>
    </div>
  </div>
  `;
};

let showTrips = (adventuresToScroll) => {
  container.innerHTML = "";
  adventuresToScroll.forEach((adventure) => {
    container.innerHTML += createTrips(adventure);
  });
};

for (let button of filterBtn) {
  button.addEventListener("click", (event) => {
    let filteredAdventures = adventures.filter((object) => object.alignment === event.target.value);
    showTrips(filteredAdventures);
  });
}

alladventuresBtn.addEventListener("click", () => {
  showTrips(adventures);
});

shortestBtn.addEventListener("click", () => {
  const shortestobtn = adventures.sort((a, b) => parseInt(a.weeks) - parseInt(b.weeks));
  showTrips(shortestobtn);
});

longestBtn.addEventListener("click", () => {
  const longestobtn = adventures.sort((a, b) => parseInt(b.weeks) - parseInt(a.weeks));
  showTrips(longestobtn);
});

difficultyBtn.addEventListener("click", () => {
  const difficultyobtn = adventures.sort((a, b) => a.difficulty - b.difficulty);
  showTrips(difficultyobtn);
});

tempoBtnSunny.addEventListener("click", () => {
  const tempoBtnSunny = adventures.sort((a, b) => b.temperature - a.temperature);
  showTrips(tempoBtnSunny);
});

supriseBtn.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * 5);
  showTrips([adventures[randomNum]]);
});

let searchResult = () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const matchingAdventures = adventures.filter((adventure) => {
    return (
      adventure.alignment.toLowerCase().includes(searchTerm) ||
      adventure.country.toLowerCase().includes(searchTerm) ||
      adventure.adventures.toLowerCase().includes(searchTerm) ||
      adventure.fact.toLowerCase().includes(searchTerm)
    );
  });
  showTrips(matchingAdventures);
};

showTrips(adventures)

