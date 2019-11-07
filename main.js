var hidingSpots = [
  { name: 'on the Car Bed', time: 5 },
  { name: 'in Mommy\'s Rooom', time: 9 },
  { name: 'in Daddy\s Room', time: 3 },
  { name: 'behind the Couch', time: 6 },
  { name: 'under the Table', time: 12 },
  { name: 'Outside', time: 4 },
  { name: 'in the Bathroom', time: 2 },
  { name: 'in the Garage', time: 1 },
  { name: 'under the Bed', time: 7 },
  { name: 'in the Corner', time: 10 },
  { name: 'in the Office', time: 15 },
];

for (var i = 0; i < hidingSpots.length; i++) {
  var opt = document.createElement("option");
  opt.textContent = hidingSpots[i].name;
  opt.value = hidingSpots[i].name;
  document.getElementById("hidingSpots").appendChild(opt);
};

function calculate() {
  var weight = document.getElementById("timesHiding").value;
  var planet = document.getElementById("hidingSpots");
  var planetName = planet.options[planet.selectedIndex].innerHTML;
  var timeConversion;
  for (i = 0; i < hidingSpots.length; i++)
    if (planet.value === hidingSpots[i].name) {
      timeConversion = hidingSpots[i].time
    }
  var total = (weight * timeConversion);
  document.getElementById("output").innerText = "If you were hiding " + planetName + ', you would get caught ' + total.toString() + ' times!';
}

document.getElementById('calculate-button').addEventListener('click', calculate);
