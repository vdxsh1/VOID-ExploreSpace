const model = [
  {
    name: "SUN",
    description:
      "The Sun is a nearly perfect sphere of hot plasma and the central star of our Solar System. Its immense gravity holds the planets, moons, and other celestial bodies in orbit. The Sun produces energy through nuclear fusion, converting hydrogen into helium.",
    year: "N/A (Star, not a planet)",
    type: "YELLOW DWARF STAR",
    radius: "696,340 km",
    planet: "./images/sun.png",
    galaxy: "./images/galaxy1.jpg",
  },
  {
    name: "MERCURY",
     description:
      "Mercury is the smallest planet and closest to the Sun. It has a rocky, heavily cratered surface and a thin atmosphere, leading to extreme temperature swings. Its iron-rich core makes up most of its mass. Mercury orbits the Sun in just 88 Earth days and has no moons or rings.",
    year:"87.97 Earth days",
    type: "Rocky Terrestrial Planet",
    radius:" 2,440 km",
    planet: "./images/mercury.png",
    galaxy:"./images/galaxy2.jpg"
  },
  {
    name:"VENUS",
    description:"Venus is the second planet from the Sun and is similar in size to Earth but has a thick, toxic atmosphere composed mostly of carbon dioxide. It has a runaway greenhouse effect, leading to extreme surface temperatures.",
    year:"225 Earth days",
    type:"Rocky Terrestrial Planet",
    radius:"6,051.8 km",
    planet:"./images/venus.png",
    galaxy:"./images/galaxy1.jpg"
  },
  {
    name: "EARTH",
    description:
      "Earth is the third planet from the Sun and the only known place in the universe with life. Its diverse ecosystems are sustained by liquid water, an oxygen-rich atmosphere, and a stable climate. Earth has a magnetic field and a single natural satellite, the Moon.",
    year: "365.25 Earth days",
    type: "terrestrial",
    radius: "6,371 km",
    planet: "./images/earth.png",
    galaxy: "./images/galaxy3.jpg",
  },
  {
    name: "MARS",
    description: "Mars is the fourth planet and known as the Red Planet due to iron oxide on its surface. It has the largest volcano (Olympus Mons) and the deepest canyon (Valles Marineris) in the Solar System. Mars has a thin atmosphere and evidence suggests it once had liquid water.",
    year: "687 Earth days",
    type: "terrestrial",
    radius: "6,371 km",
    planet: "./images/mars.png",
    galaxy: "./images/galaxy4.jpg",
  },
  {
    name: "JUPITER",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with no solid surface and has a mass greater than all the other planets combined. Known for its Great Red Spot, a giant storm, and over 90 moons, including Ganymede, the largest moon in the Solar System.",
    year: "12 Earth years",
    type: " gas giant",
    radius: "69,911 km",
    planet: "./images/jupiter.png",
    galaxy: "./images/galaxy2.jpg",
  },
  {
    name:"SATURN",
    description:"Saturn is the sixth planet from the Sun and is renowned for its iconic and beautiful ring system, which is the most extensive in the Solar System. It is a gas giant with no solid surface, and its atmosphere is primarily composed of hydrogen and helium. Saturn has at least 82 known moons, with Titan being its largest and one of the most intriguing moons in the Solar System due to its dense atmosphere and organic compounds.",
    year: "29.5 Earth years",
    type:"Gas Giant",
    radius:"69,911 km",
    planet: "./images/saturn.png",
    galaxy: "./images/galaxy4.jpg"
  },
  {
    name:"URANUS",
    description:"Uranus is the seventh planet from the Sun and is unique due to its extreme axial tilt of about 98 degrees, causing it to rotate on its side. It has a pale blue-green color due to the methane in its atmosphere, which absorbs red light. Uranus is classified as an ice giant because its interior contains more ices like water, ammonia, and methane compared to the gas giants. It has faint rings and 27 known moons, with Titania and Oberon being the largest.",
    year:"84 Earth years",
    type:"Ice Giant",
    radius:"25,362 km",
    planet:"./images/uranus.png",
    galaxy:"./images/galaxy2.jpg"
  },
  {
    name:"NEPTUNE",
    description:"Neptune is the eighth and farthest planet from the Sun in the Solar System. It has a deep blue color due to the presence of methane in its atmosphere. Known for its strong winds and storms, including the famous Great Dark Spot, Neptune is the windiest planet. It is classified as an ice giant and has a rocky core surrounded by water, ammonia, and methane ices. Neptune has 14 known moons, with Triton being the largest, which orbits the planet in a retrograde motion.",
    year:"165 Earth years",
    type:"Ice Giant",
    radius:"24,622 km",
    planet:"./images/neptune.png",
    galaxy:"./images/galaxy4.jpg"
  },
  {
    name:"PLUTO",
    description:"Pluto is a dwarf planet located in the Kuiper Belt, a region of icy bodies beyond Neptune. Once classified as the ninth planet, it was redefined as a dwarf planet in 2006. Pluto has a rocky core surrounded by ice and a thin atmosphere of nitrogen, methane, and carbon monoxide. Its surface features include vast plains, mountains of water ice, and regions covered by frozen methane and nitrogen. It has five known moons, with Charon being the largest, almost half the size of Pluto itself.",
    year:"248 Earth years",
    type:"Dwarf Planet",
    radius:"1,188.3 km",
    planet:"./images/pluto.png",
    galaxy:"./images/galaxy3.jpg"
  }
];

const right = document.querySelector(".right");
const left = document.querySelector(".left");
const name = document.querySelector(".name");
const description = document.querySelector(".description");
const year = document.querySelector(".year");
const type = document.querySelector(".type");
const radius = document.querySelector(".radius");
const planet = document.querySelector(".planet");
const galaxy = document.querySelector(".galaxy");
let index = 0;
let degrees = 0;

right.addEventListener("click", () => {
  if (index < model.length - 1) {
    index++;
    degrees += 60;
    updateDIsplay();
  }
});
left.addEventListener("click", () => {
  if (index > 0) {
    index--;
    degrees -= 60;
    updateDIsplay();
  }
});
function updateDIsplay() {
   name.innerHTML = model[index].name;
  description.innerHTML = model[index].description;
  year.innerHTML = model[index].year;
  type.innerHTML = model[index].type;
  radius.innerHTML = model[index].radius;

  planet.style.transform = `rotate(${degrees}deg)`;
  galaxy.style.transform = `rotate(-${degrees}deg)`;
  galaxy.style.transform += `scale(2)`;

  setTimeout(() => {
    planet.src = model[index].planet;
    galaxy.src = model[index].galaxy;
  }, 500);
}