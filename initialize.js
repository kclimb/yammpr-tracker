var AreaIndexes = [
	0,5,13,22,26,38,45,57,62,71,75,78,82,87,94,99,
	109,111,120,127,134,137,141,146,149,152,157,162,167,170,171,174,
	182,196,207,231
];

var AreaNames = [
	"", "SCT", "NCT", "WCT", "Laundry", "ECT", "Stock Pot", "Field",
	"Road Swamp", "Swamp", "Palace", "Woodfall",
	"Milk Road", "Ranch", 
	"Mtn Village", "Twin Islands", "Gor Village", "Path Snow",
	"Great Bay", "Zora Cape", "Zora Hall", "PF Exterior", "PF Sewers", "PF Interior", "Pinnacle",
	"Road Ikana", "Graveyard", "Canyon", "Shrine", "Well", "Castle", "Stone Tower", 
	"WFT", "SHT", "GBT", "STT",
	"Songs"
];
var AreaNamesShort = [
	"", "SCT", "NCT", "WCT", "Lau", "ECT", "StoPot", "Field",
	"RSwamp", "Swamp", "Palace", "Woodfall",
	"Milk Road", "Ranch", 
	"MtnVil", "TwinIsle", "GorVil", "PSnow",
	"GreBay", "ZorCape", "ZorHall", "PirExt", "PirSew", "PirInt", "Pin",
	"RIkana", "Grave", "Canyon", "Shrine", "Well", "Castle", "StoTower", 
	"WFT", "SHT", "GBT", "STT",
	"Songs"
];

var AreaImages = [
	"sct.png", "nct.png", "wct.png", "laun.png", "ect.png", "stockpot.png", "field3.png", 
	"roadtosouthern.png", "swamp.png", "palace.png", "woodfall.png",
	"milkroad2.png", "ranch.jpg", "mountainvillage.png", "twinislands.png", "goronvillage.png",
	"pathsnow.png", "gbc.png", "zoracape.png", "zoracape.png", "pirate2.png", "pirate2.png", "pirate2.png", "gbc.png", "ikana.png", "graveyard.jpg", "ikana.png", "shrine.png", "well.png", "castle.png", "stonetower.png"];

var Known = [];
var Check = {};
var ItemLocations = {};
var ItemLocation = {};
var Items = [
	"junk", "bow1", "bow2", "bow3", "fire_arrow", "ice_arrow", "light_arrow", "moons_tear", "land_title_deed", "swamp_title_deed", "mountain_title_deed", "ocean_title_deed", "bomb1", "bomb2", "bomb3", "magic_bean1", "magic_bean2", "room_key", "special_delivery", "powder_keg", "pictobox", "lens", "hookshot", "great_fairy_sword", "letter_to_kafei", "pendant_of_memories", "bottle1", "bottle2", "bottle3", "bottle4", "bottle5", "bottle_gold_dust", "postmans_hat", "allnight_mask", "blast_mask", "stone_mask", "greatfairy_mask", "deku_mask", "keaton_mask", "bremen_mask", "bunny_hood", "dongero_mask", "mask_of_scents", "goron_mask", "romani_mask", "circusleaders_mask", "kafei_mask", "couples_mask", "mask_of_truth", "zora_mask", "kamaro_mask", "gibdo_mask", "garo_mask", "captains_hat", "giants_mask", "fiercedeity_mask", "sword1", "sword2", "mirror_shield", "magic1", "magic2", "wallet1", "wallet2", "song_of_healing", "eponas_song", "song_of_storms", "sonata", "lullaby", "nwbn", "elegy", "oath" 
];
var ItemNames = [
	"junk", "Bow", "Bow", "Bow", "Fire Arrow", "Ice Arrow", "Light Arrow", "Moon's Tear", "Land Deed", "Swamp Deed", "Mtn Deed", "Ocean Deed", "Bomb Bag", "Bomb Bag", "Bomb Bag", "Bean", "Bean", "Room Key", "Spec Delivery", "Powder Keg", "Pictobox", "Lens", "Hookshot", "GFS", "Letter Kafei", "Pendant", "Bottle", "Bottle", "Bottle", "Bottle", "Bottle", "Bottle Gold", "Postmans", "All-Night", "Blast", "Stone", "Great Fairy", "Deku", "Keaton", "Bremen", "Bunny", "Don Gero", "Scents", "Goron", "Romani", "Circus", "Kafei", "Couples", "Truth", "Zora", "Kamaro", "Gibdo", "Garo", "Captains", "Giants", "Fierce Deity", "Sword", "Sword", "Mirror", "Magic", "Magic", "Wallet", "Wallet", "Healing", "Epona's", "Storms", "Sonata", "Lullaby", "NWBN", "Elegy", "Oath"
];

var Items2 = [
	"junk", "bow", "fire_arrow", "ice_arrow", "light_arrow", "moons_tear", "land_title_deed", "swamp_title_deed", "mountain_title_deed", "ocean_title_deed", "bomb", "magic_bean", "room_key", "special_delivery", "powder_keg", "pictobox", "lens", "hookshot", "great_fairy_sword", "letter_to_kafei", "pendant_of_memories", "bottle", "bottle_gold_dust", "postmans_hat", "allnight_mask", "blast_mask", "stone_mask", "greatfairy_mask", "deku_mask", "keaton_mask", "bremen_mask", "bunny_hood", "dongero_mask", "mask_of_scents", "goron_mask", "romani_mask", "circusleaders_mask", "kafei_mask", "couples_mask", "mask_of_truth", "zora_mask", "kamaro_mask", "gibdo_mask", "garo_mask", "captains_hat", "giants_mask", "fiercedeity_mask", "sword", "mirror_shield", "magic", "wallet", "song_of_healing", "eponas_song", "song_of_storms", "sonata", "lullaby", "nwbn", "elegy", "oath"
];
var checkSummaryText = [
	"junk", "bow1", "bow2", "bow3", "fire_arrow", "ice_arrow", "light_arrow", "moons_tear", "land_title_deed", "swamp_title_deed", "mountain_title_deed", "ocean_title_deed", "bomb1", "bomb2", "bomb3", "magic_bean1", "magic_bean2", "room_key", "special_delivery", "powder_keg", "pictobox", "lens", "hookshot", "great_fairy_sword", "letter_to_kafei", "pendant_of_memories", "bottle1", "bottle2", "bottle3", "bottle4", "bottle5", "bottle_gold_dust", "postmans_hat", "allnight_mask", "blast_mask", "stone_mask", "greatfairy_mask", "deku_mask", "keaton_mask", "bremen_mask", "bunny_hood", "dongero_mask", "mask_of_scents", "goron_mask", "romani_mask", "circusleaders_mask", "kafei_mask", "couples_mask", "mask_of_truth", "zora_mask", "kamaro_mask", "gibdo_mask", "garo_mask", "captains_hat", "giants_mask", "fiercedeity_mask", "sword1", "sword2", "mirror_shield", "magic1", "magic2", "wallet1", "wallet2"
];
var SingletonItems = [
	"fire_arrow", "ice_arrow", "light_arrow", "moons_tear", "land_title_deed", "swamp_title_deed", "mountain_title_deed", "ocean_title_deed", "room_key", "special_delivery", "powder_keg", "pictobox", "lens", "hookshot", "great_fairy_sword", "letter_to_kafei", "pendant_of_memories", "bottle_gold_dust", "postmans_hat", "allnight_mask", "blast_mask", "stone_mask", "greatfairy_mask", "deku_mask", "keaton_mask", "bremen_mask", "bunny_hood", "dongero_mask", "mask_of_scents", "goron_mask", "romani_mask", "circusleaders_mask", "kafei_mask", "couples_mask", "mask_of_truth", "zora_mask", "kamaro_mask", "gibdo_mask", "garo_mask", "captains_hat", "giants_mask", "fiercedeity_mask", "song_of_healing", "eponas_song", "song_of_storms", "sonata", "lullaby", "nwbn", "elegy", "oath"
];
var SongItems = [
	"Starting Song", "Boss Blue Warp", "Romani's Game", "Day 1 Grave Tablet", "Imprisoned Monkey", "Baby Goron", "Baby Zoras", "Ikana King", "Swamp Music Statue"
];
var SongNames = {
	"song_of_healing": "Healing", 
	"eponas_song": "Eponas", 
	"song_of_storms": "Storms", 
	"sonata": "Sonata", 
	"lullaby": "Lullaby", 
	"nwbn": "NWBN", 
	"elegy": "Elegy", 
	"oath": "Oath"
};

var inputs = [
	"x", "bow", "fir", "ice", "lig", "moo", "lan", "swa", "mou", "oce", "bom", "bea", "roo", "spe", "pow", "pic", "len", "hoo", "gfs", "let", "pen", "bot", "gol", "pos", "all", "bla", "sto", "gre", "dek", "kea", "bre", "bun", "don", "sce", "gor", "rom", "cir", "kaf", "cou", "tru", "zor", "kam", "gib", "gar", "cap", "gia", "fie", "swo", "mir", "mag", "wal", "soh", "epo", "sos", "son", "lul", "nov", "ele", "oat"
];


var parent = document.getElementById("normalColumn1");
for (var i = 0; i < Locations.length; i++) {

	if (i == AreaIndexes[4]) { parent = document.getElementById("normalColumn2"); }
	else if (i == AreaIndexes[7]) { parent = document.getElementById("normalColumn3"); }
	else if (i == AreaIndexes[13]) { parent = document.getElementById("normalColumn4"); }
	else if (i == AreaIndexes[18]) { parent = document.getElementById("normalColumn5"); }
	else if (i == AreaIndexes[24]) { parent = document.getElementById("normalColumn6"); }
	else if (i == AreaIndexes[31]) { parent = document.getElementById("normalColumn7"); }
	else if (i == AreaIndexes[34]) { parent = document.getElementById("normalColumn8"); }
	
	for(var j = 0; j < AreaIndexes.length; j++) {
		if(i == AreaIndexes[j]) {
			var elem = document.createElement("small"); 
			elem.innerHTML = AreaNames[j+1]; 
			elem.className = "area_name"; 
			if(j == 31) {
				elem.id = "title_wft";
				elem.className = "area_titles";
			}
			else if(j == 32) {
				elem.id = "title_sht";
				elem.className = "area_titles";
			}
			else if(j == 33) {
				elem.id = "title_gbt";
				elem.className = "area_titles";
			}
			else if(j == 34) {
				elem.id = "title_stt";
				elem.className = "area_titles";
			}
			else if(j == 35) {
				elem.id = "song_title";
				elem.className = "area_titles";
			}
			
			if(j < 31)
				background = "url('./images/areas/"+AreaImages[j]+"')";
			else
				background = "";
			
			parent.appendChild(elem); 
			parent.appendChild(document.createElement("br")); 
			break;
		}
	}
	
	if(i == AreaIndexes[34]+16) {
		var elem = document.createElement("small"); 
			elem.innerHTML = "ISTT"; 
			elem.className = "area_name";
			elem.id = "title_stt";
			elem.className = "area_titles";
			
			background = "";
			
			parent.appendChild(elem); 
			parent.appendChild(document.createElement("br")); 
	}
	
	var elem = document.createElement("input"); 
	elem.id = Locations[i]; 
	if(parent != document.getElementById("normalColumn7") && parent != document.getElementById("normalColumn8"))
		elem.className = "picture_input"; 
	else
		elem.className = "other_input"; 
	elem.style.backgroundImage = background;
	parent.appendChild(elem);

	var elem = document.createElement("small"); 
	elem.id = "text_" + Locations[i]; 
	elem.className = "check_text"; 
	if(SongItems.indexOf(Locations[i]) < 0)
		elem.onmousedown = junk; 
	elem.innerHTML = Names[i]; 
	parent.appendChild(elem);
	
	var elem = document.createElement("br"); 
	elem.id = "br_" + Locations[i]; 
	parent.appendChild(elem);
}

// hide logically useless items from check summary list
document.getElementById("pendant_of_memories_location").style.display = "none";
document.getElementById("pendant_of_memories_location_br").style.display = "none";
document.getElementById("circusleaders_mask_location").style.display = "none";
document.getElementById("circusleaders_mask_location_br").style.display = "none";
document.getElementById("dongero_mask_location").style.display = "none";
document.getElementById("dongero_mask_location_br").style.display = "none";
document.getElementById("greatfairy_mask_location").style.display = "none";
document.getElementById("greatfairy_mask_location_br").style.display = "none";

var Logic = {};
var Game = {};
var CouldHave={};
var Location_Logic = {};
var Location_Access = {};
var Location_Could_Access={};
var Location_Could_Peek={};
var lastCheck = ["start"];

for (var i = 0; i < Items.length; i++) {
	Logic[Items[i]] = false;
	Game[Items[i]] = false;
	CouldHave[Items[i]] = false;
	Known[Items[i]] = false;
}

var backUp = [];

for (var i = 0; i < Locations.length; i++) {
	Location_Logic[Locations[i]] = false;
	Location_Access[Locations[i]] = false;
	Check[Locations[i]] = "unknown";
	backUp.push(document.getElementById("text_" + Locations[i]).innerHTML);
}

Game.sword1_img = "./images/Kokiri Sword.png";
Game.sword2_img = "./images/Razor Sword.png";
Game.sword3_img = "./images/Gilded Sword.png";
Game.shield1_img = "./images/Hero's Shield.png";
Game.shield2_img = "./images/Mirror Shield.png";
Game.wallet1_img = "./images/Adult's Wallet.png";
Game.wallet2_img = "./images/Giant's Wallet.png";
Game.magic1_img = "./images/Magic.png";
Game.magic2_img = "./images/Magic2.png";

Game.checks_remaining = 0;
Game.logically_accessible = 0;

var modal = document.getElementById("myModal");

var btn = document.createElement("button");
btn.id = "myBtn";
btn.innerHTML = "Help";
btn.onclick = function() {
	modal.style.display = "block";
}
document.getElementById("itemColumn").appendChild(btn);

document.getElementById("itemColumn").appendChild(document.createElement("br"));

var btn = document.createElement("button");
btn.id = "resetCycleButton";
btn.innerHTML = "Reset Cycle";
btn.onclick = function() {
	Game.magic_bean1 = false;
	Game.magic_bean2 = false;
	Game.letter_to_kafei = false;
	Game.pendant_of_memories = false;
	Game.room_key = false;
	Game.special_delivery = false;
	Game.moons_tear = false;
	Game.land_title_deed = false;
	Game.swamp_title_deed = false;
	Game.mountain_title_deed = false;
	Game.ocean_title_deed = false;
	if(Game.bottle_gold_dust) {
		Game.bottle_gold_dust = false;
		Game.bottle5 = true;
	}
}
document.getElementById("itemColumn").appendChild(btn);
document.getElementById("itemColumn").appendChild(document.createElement("br"));

var settingsLabel = document.createElement("label");
settingsLabel.for = "settings_option";
settingsLabel.innerHTML = "SETTINGS"

var settingsDropdown = document.createElement("select");
settingsDropdown.id = "settings_option";
settingsDropdown.className = "settingsOptions";

var option1 = document.createElement("option");
option1.value = "S3";
option1.innerHTML = "S3";
settingsDropdown.appendChild(option1);

var option2 = document.createElement("option");
option2.value = "BLITZ";
option2.innerHTML = "BLITZ";
settingsDropdown.appendChild(option2);

document.getElementById("itemColumn").appendChild(settingsLabel);
document.getElementById("itemColumn").appendChild(settingsDropdown);

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

setInterval(Update,250); 
Update();Update();Update();
