function dwarfRollCall(dwarves) {
var dwarfname = "";
dwarves.forEach(function(name,number){
  dwarfname += number+1 + ". " + name + " "
});
return dwarfname;
}

function summonCaptainPlanet(planeteerCalls){
var elements = [];
  planeteerCalls.forEach(function(elementname) {
  	elementname = elementname.toUpperCase() + "!";
  	elements.push(elementname);
  });
  return elements;
}

function longPlaneteerCalls(words) {
for(var i=0; i<words.length;i++){
    if (words[i].length>4){
      return true
    }
  }
 return false
}
function findTheCheese (foods) {
  for (var i=0; i<foods.length; i++)
    if (foods[i]=="cheddar"
  ||foods[i]=="gouda"
  ||foods[i]=="camembert"){
    return foods[i]
  }
  return "no cheese!"
}
