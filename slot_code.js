//creates an array for the pokemon types. Each pokemon imports a group of numbers which is used later to call the correct data from this array.  In my code, 0 in an array always blanks out data.
const pokemon_type_names = ["", "Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"];
const pokemon_type_colors = ["rgba(0, 0, 0, 0)", "rgba(168,168,120,255)", "rgba(192,48,40,255)", "rgba(168,144,240,255)", "rgba(160,64,160,255)", "rgba(224,192,104,255)", "rgba(184,160,56,255)", "rgba(168,184,32,255)", "rgba(112,88,152,255)", "rgba(184,184,208,255)", "rgba(240,128,48,255)", "rgba(104,144,240,255)", "rgba(120,200,80,255)", "rgba(248,208,48,255)", "rgba(248,88,136,255)", "rgba(152,216,216,255)", "rgba(112,56,248,255)", "rgba(112,88,72,255)", "rgba(238,153,172,255)"];
const pokemon_gender_symbols = ["", "&#9792", "&#9794"];
const pokemon_gender_colors = ["rgba(0, 0, 0, 0)", "rgba(217, 127, 255, 255)", "rgba(78, 117, 255, 255)"];



//load_pokemon() will take the information of the selected pokemon and load it into the currently selected slot.

function load_pokemon(input_species, input_type_1, input_type_2, input_hdex){
document.getElementById('pkmn_'.concat(document.querySelector('input[name=slot_number]:checked').value, '_species')).value=input_species;
document.getElementById('pkmn_'.concat(document.querySelector('input[name=slot_number]:checked').value, '_type_1')).value=input_type_1;
document.getElementById('pkmn_'.concat(document.querySelector('input[name=slot_number]:checked').value, '_type_2')).value=input_type_2;
document.getElementById('pkmn_'.concat(document.querySelector('input[name=slot_number]:checked').value, '_hdex')).value=input_hdex;
}

//clear_slot() will clear out all the values in the slot it's next to, and reset both type values to, which will hide the types on that pokemon.
function clear_slot(slot_number_){
  document.getElementById('pkmn_'.concat(slot_number_, '_species')).value="";
  document.getElementById('pkmn_'.concat(slot_number_, '_type_1')).value="0";
  document.getElementById('pkmn_'.concat(slot_number_, '_type_2')).value="0";
  document.getElementById('pkmn_'.concat(slot_number_, '_hdex')).value="";
  document.getElementById('pkmn_'.concat(slot_number_, '_nickname')).value="";
  document.getElementById('pkmn_'.concat(slot_number_, '_level')).value="";
}

//inherit_slot() takes the information from the current slot and copies it into the selected slot. It does not delete the information in the selected slot.
function inherit_slot(slot_number_){
  document.getElementById('pkmn_'.concat(document.querySelector('input[name=slot_number]:checked').value, '_species')).value=document.getElementById('pkmn_'.concat(slot_number_, '_species')).value;
  document.getElementById('pkmn_'.concat(document.querySelector('input[name=slot_number]:checked').value, '_type_1')).value=document.getElementById('pkmn_'.concat(slot_number_, '_type_1')).value;
  document.getElementById('pkmn_'.concat(document.querySelector('input[name=slot_number]:checked').value, '_type_2')).value=document.getElementById('pkmn_'.concat(slot_number_, '_type_2')).value;
  document.getElementById('pkmn_'.concat(document.querySelector('input[name=slot_number]:checked').value, '_hdex')).value=document.getElementById('pkmn_'.concat(slot_number_, '_hdex')).value;
  document.getElementById('pkmn_'.concat(document.querySelector('input[name=slot_number]:checked').value, '_nickname')).value=document.getElementById('pkmn_'.concat(slot_number_, '_nickname')).value;
  document.getElementById('pkmn_'.concat(document.querySelector('input[name=slot_number]:checked').value, '_level')).value=document.getElementById('pkmn_'.concat(slot_number_, '_level')).value;
}


//update_roster() is where the fun stuff happens. This will take the data in the input fields and render it in the foreward facing GUI.
function update_roster(){

var roster_loop;
roster_loop = 1;

while (roster_loop < 7) {

if(document.getElementById("pkmn_".concat(roster_loop, "_species")).value != "")
{
//checks if the shiny tag is checked. if it is, pulls the shiny sprite. if not, pulls the normal sprite
  if( document.querySelector("#pkmn_".concat(roster_loop, "_shiny")).checked == false)
  {document.getElementById("roster_".concat(roster_loop, "_sprite")).style.backgroundImage = "url('https://projectpokemon.org/images/normal-sprite/".concat(document.getElementById("pkmn_".concat(roster_loop, "_species")).value.toLowerCase(), ".gif\')");}
  else{document.getElementById("roster_".concat(roster_loop, "_sprite")).style.backgroundImage = "url('https://projectpokemon.org/images/shiny-sprite/".concat(document.getElementById("pkmn_".concat(roster_loop, "_species")).value.toLowerCase(), ".gif\')")}

//updates the species and nickname fields
  document.getElementById("roster_".concat(roster_loop, "_species")).innerHTML = document.getElementById("pkmn_".concat(roster_loop, "_species")).value;
  document.getElementById("roster_".concat(roster_loop, "_nickname")).innerHTML = document.getElementById("pkmn_".concat(roster_loop, "_nickname")).value;

//verifies a level is entered and updates the level. if no level is entered, simply blanks the level out.
  if(document.getElementById("pkmn_".concat(roster_loop, "_level")).value != ""){document.getElementById("roster_".concat(roster_loop, "_level")).innerHTML = "Lv. ".concat(document.getElementById("pkmn_".concat(roster_loop, "_level")).value);}
  else{document.getElementById("roster_".concat(roster_loop, "_level")).innerHTML = "";}

//updates the pokemon types. If no type 2 exists, blanks out the type 2 div so only one type appears.
  document.getElementById("roster_".concat(roster_loop, "_type_1")).style.backgroundColor = pokemon_type_colors[document.getElementById("pkmn_".concat(roster_loop, "_type_1")).value];
  document.getElementById("roster_".concat(roster_loop, "_type_1")).innerHTML = pokemon_type_names[document.getElementById("pkmn_".concat(roster_loop, "_type_1")).value];
  document.getElementById("roster_".concat(roster_loop, "_type_2")).style.backgroundColor = pokemon_type_colors[document.getElementById("pkmn_".concat(roster_loop, "_type_2")).value];
  document.getElementById("roster_".concat(roster_loop, "_type_2")).innerHTML = pokemon_type_names[document.getElementById("pkmn_".concat(roster_loop, "_type_2")).value];
  if(document.getElementById("pkmn_".concat(roster_loop, "_type_2")).value == "0"){document.getElementById("roster_".concat(roster_loop, "_type_2")).style.borderLeftWidth="0px";} else{document.getElementById("roster_".concat(roster_loop, "_type_2")).style.borderLeftWidth="2px";}

//assigns the pokemon gender tag
document.getElementById("roster_".concat(roster_loop, "_gender")).style.backgroundColor = pokemon_gender_colors[document.querySelector('input[name=pkmn_'.concat(roster_loop, '_gender]:checked')).value];
document.getElementById("roster_".concat(roster_loop, "_gender")).innerHTML = pokemon_gender_symbols[document.querySelector('input[name=pkmn_'.concat(roster_loop, '_gender]:checked')).value];
}

  roster_loop++;
}

}
