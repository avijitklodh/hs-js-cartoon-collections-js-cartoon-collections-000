function dwarfRollCall(dwarves) {
dwarfname = [];
for(i=0; i<(dwarves.length / 2) ;i++){
  dwarfname += number+1 + ". " + name + " "
};

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
  ||foods[i]=="camembert"
  ||foods[i] == "swiss"){
    return foods[i]
  }
  return "no cheese!"
}
function wordswithb(words){
  var wordsb = [];
  
  for (var i=0; i<words.length;i++)
  if (words[i].charAt(0) == "b"){
    wordsb.push(words);
  }
  
  return wordsb
  }