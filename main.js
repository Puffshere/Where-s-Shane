var planets = [
  { name: 'on the Car Bed', gravity: 5 },
  { name: 'in Mommy\'s Rooom', gravity: 9 },
  { name: 'in Daddy\s Room', gravity: 3 },
  { name: 'behind the Couch', gravity: 6 },
  { name: 'under the Table', gravity: 12 },
  { name: 'Outside', gravity: 4 },
  { name: 'in the Bathroom', gravity: 2 },
  { name: 'in the Garage', gravity: 1 },
  { name: 'under the Bed', gravity: 7 },
  { name: 'in the Corner', gravity: 10 },
  { name: 'in the Office', gravity: 15 },
];

for (var i = 0; i < planets.length; i++) {
  var opt = document.createElement("option");
  opt.textContent = planets[i].name;
  opt.value = planets[i].name;
  document.getElementById("planets").appendChild(opt);

};


function calculate() {
  var weight = document.getElementById("user-weight").value;
  var planet = document.getElementById("planets");
  var planetName = planet.options[planet.selectedIndex].innerHTML;
  var gravityConversion;
  for (i = 0; i < planets.length; i++)
    if (planet.value === planets[i].name) {
      gravityConversion = planets[i].gravity
    }
  var total = (weight * gravityConversion);
  document.getElementById("output").innerText = "If you were hiding " + planetName + ', you would get caught ' + total.toString() + ' times!';
}



document.getElementById('calculate-button').addEventListener('click', calculate);


