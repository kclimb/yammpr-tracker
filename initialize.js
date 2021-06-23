var AreaIndexes = [
	0,5,13,22,26,36,43,55,60,69,73,76,79,84,91,96,
	103,105,114,121,125,128,132,137,140,143,148,153,158,161,162,165,
	170,177,182,191
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

var Locations = [
	// South Clock Town
	"Clock Tower Entrance", "South Clock Town Straw Roof Chest", "Clock Town Scrub Trade", "Postbox", "South Clock Town Final Day Chest", 
	
	// North Clock Town
	"North Clock Town Tree", "Clock Town Map Purchase", "Old Lady", "Town Great Fairy", 
	"Town Great Fairy Non-Human", "Bombers' Hide and Seek", 
	"Deku Playground Any Day", "Keaton Quiz", 

	// West Clock Town
	"Bomb Bag Purchase", "Postman's Game", "Swordsman's School", "Big Bomb Bag Purchase", "Bank Reward #1 (Adult's Wallet)", "Bank Reward #2 (Blue Rupee)", "Bank Reward #3 (Piece of Heart)", "All Night Mask Purchase", "Rosa Sisters", 
	
	// Laundry Pool
	"Guru Guru", "Kafei", "Curiosity Shop Man #1", "Curiosity Shop Man #2",
	
	// East Clock Town
	"Madame Aroma in Office", "East Clock Town Chest", "Bombers' Hideout Chest", "Honey and Darling Any Day", "Town Archery #1", "Treasure Chest Game Goron", "Mayor", "Madame Aroma in Bar", "Postman's Freedom Reward", "Gorman", 
	
	// Stock Pot Inn
	"Inn Reservation", "Midnight Meeting", "Toilet Hand", "Inn Staff Room Chest", "Inn Guest Room Chest", "Grandma Short Story", "Grandma Long Story", 
	
	// Termina Field
	"Astronomy Telescope", "Dodongo Grotto", "Termina Field Pillar Grotto", "Business Scrub Purchase", "Termina Field Grass Chest", "Termina Field Grass Grotto", "Termina Field Stump Chest", "Peahat Grotto", "Termina Field Underwater Chest", "Bio Baba Grotto", "Gossip Stones", "Kamaro", 
	
	// Road to Southern Swamp
	"Path to Swamp Grotto", "Path to Swamp Tree", "Woodfall Map Purchase", "Snowhead Map Purchase", "Swamp Archery #1", 
	
	// Southern Swamp 
	"Swamp Tourist Center Roof", "Mystery Woods Grotto", "Kotake Red Potion", "Koume Pictobox", "Near Swamp Spider House Grotto",  "Pictograph Contest Winner", "Swamp Scrub Trade", "Boat Archery", "Swamp Spider House Reward", 
	
	// Deku Palace
	"Bean Man", "Bean Grotto", "Deku Palace West Garden", "Butler", 
	
	// Woodfall
	"Entrance to Woodfall Chest", "Woodfall Bridge Chest", "Behind Woodfall Owl Chest", 
	
	// Milk Road
	"Romani Ranch Map Purchase", "Great Bay Map Purchase", "Gorman Bros Race", 
	
	// Romani Ranch
	"Doggy Racetrack Roof Chest", "Dog Race", "Grog", "Aliens Defense", "Cremia", 
	
	// Mountain Village
	"Darmani", "Mountain Smithy Day 1", "Mountain Smithy Day 2", "Hungry Goron",  
	"Mountain Waterfall Chest", "Mountain Spring Grotto", "Frog Choir", 
	
	// Twin Islands
	"Goron Racetrack Grotto", "Hot Spring Water Grotto", "Twin Islands Underwater Ramp Chest", "Twin Islands Cave Chest", "Goron Race", 
	
	// Goron Village
	"Goron Village Ledge", "Mountain Scrub Trade", "Biggest Bomb Bag Purchase", "Lens of Truth Chest", "Lens Cave Rock Chest", "Lens Cave Invisible Chest", "Powder Keg Challenge", 
	
	// Path to Snowhead
	"Path to Snowhead Grotto", "Path to Snowhead Pillar", 
	
	// Great Bay Coast
	"Great Bay Coast Grotto", "Ocean Spider House Chest", "Stone Tower Map Purchase", "Lab Fish", "Mikau", "Great Bay Coast Ledge", "Fisherman Pictograph", "Fisherman Game", "Ocean Spider House Day 1 Reward", 
	
	// Zora Cape
	"Zora Cape Ledge Without Tree Chest", "Zora Cape Ledge With Tree Chest", "Zora Cape Like-Like", "Zora Cape Grotto", "Zora Cape Underwater Chest", "Beaver Race #1", "Beaver Race #2", 
	
	// Zora Hall
	"Ocean Scrub Trade", "Lulu's Room Ledge", "Zora Hall Stage Lights", "Evan", 
	
	// Pirates' Fortress Exterior
	"Pirates' Fortress Exterior Log Chest", "Pirates' Fortress Exterior Sand Chest", "Pirates' Fortress Exterior Corner Chest",
	
	// Pirates' Fortress Sewer
	"Pirates' Fortress Maze Chest", "Pirates' Fortress Cage Room Shallow Chest", "Pirates' Fortress Cage", "Pirates' Fortress Cage Room Deep Chest", 
	
	// Pirates' Fortress Interior
	"Pirates' Fortress Interior Upper Chest", "Pirates' Fortress Interior Lower Chest", "Pirates' Fortress Interior Tank Chest", "Hookshot Chest", "Pirates' Fortress Interior Guard Room Chest", 
	
	// Pinnacle Rock
	"Pinnacle Rock Lower Chest", "Pinnacle Rock Upper Chest", "Seahorses", 
	
	// Path to Ikana Canyon
	"Path to Ikana Grotto", "Path to Ikana Pillar Chest", "Invisible Soldier", 
	
	// Ikana Graveyard
	"Day 1 Grave Bats", "Iron Knuckle Chest", "Ikana Graveyard Grotto", "Captain Keeta's Chest", "Dampe Digging", 
	
	// Ikana Canyon
	"Ikana Canyon Ledge", "Canyon Scrub Trade", "Secret Shrine Grotto", "Poe Hut", "Pamela's Father", 
	
	// Secret Shrine
	"Secret Shrine Dinolfos Chest", "Secret Shrine Wizzrobe Chest", "Secret Shrine Wart Chest", "Secret Shrine Garo Master Chest", "Secret Shrine Final Chest", 
	
	// Beneath the Well 
	"Well Left Path Chest", "Well Right Path Chest", "Mirror Shield Chest", 
	
	// Ikana Castle
	"Ikana Castle Pillar", 
	
	// Stone Tower
	"Inverted Stone Tower Left Chest", "Inverted Stone Tower Middle Chest", "Inverted Stone Tower Right Chest",
	
	// Woodfall Temple
	"WFT_Map", "WFT_Bow", "key_WFT", "WFT_Compass", "WFT_Odolwa_Heart",  
	
	// Snowhead Temple
	"key_SHT3", "SHT_Map", "key_SHT1", "SHT_Compass", "key_SHT2", "SHT_Fire_Arrow", "SHT_Goht_Heart", 
	
	// Great Bay Temple
	"GBT_Map", "GBT_Compass", "key_GBT", "GBT_Ice_Arrow", "GBT_Gyorg_Heart", 
	
	// Stone Tower Temple
	"STT_Compass", "key_STT2", "STT_Map", "key_STT1", "STT_Light_Arrow", "key_STT3", "key_STT4", "STT_Giants", "STT_Twinmold_Heart", 
	
	// Songs
	"Song_Starting", "Song_Swamp", "Song_BlueWarp", "Song_Ranch", "Song_Goron", "Song_Eggs", "Song_Graveyard", "Song_Castle"
];
	
var Names = [
	// South Clock Town
	"Ledge", "Straw", "Deed", "Mailbox", "Tower", 
	
	// North Clock Town
	"Tree", "Map Town", "Old Lady", "GF Human", "GF Transf", "Bombers", "Playgro", "Keaton",  
	
	// West Clock Town
	"Bomb Bag", "Postman", "Swords", "Big Bomb", "Bank 200", "Bank 500", "Bank 1000", "All-Night", "Rosa", 
	
	// Laundry Pool
	"Guru", "Kafei", "Curios1", "Curios2",
	
	// East Clock Town
	"Aroma", "Chest", "Sewer", "HoneyDar", "Archery", "ChestGor", "Mayor", "AromaBar", "Postman", "Gorman", 
	
	// Stock Pot Inn
	"Room Key", "Midnight", "Hand", "Staff", "Guest", "Granny1", "Granny2", 
	
	// Termina Field
	"Telescope", "Dodongos", "Pillar", "Scrub Gr", "Grass Ch", "Grass Gr", "Stump", "Peahat", "Water", "Bio Baba", "Gossips", "Kamaro", 
	
	// Road to Southern Swamp
	"Grotto", "Tree", "Map Wood", "Map Snow", "Archery1", 
	
	// Southern Swamp
	"Roof", "Woods Gr", "Witch Red", "PictoBox", "Grotto", "Contest", "Deed", "BoatArchery", "SwampSpid", 
	
	// Deku Palace
	"Bean", "Bean Ch", "West Gard", "Butler", 
	
	// Woodfall
	"Entrance", "Bridge", "Owl", 
	
	// Milk Road
	"Map Ranch", "Map Bay", "Race", 
	
	// Romani Ranch
	"Dog Chest", "Dog Race", "Chicks", "Aliens", "Cremia", 
	
	// Mountain 
	"Darmani", "Smithy1", "Smithy2", "Sirloin", "Waterfall", "Grotto", "Frogs", 
	
	// Twin Islands
	"Race Gr", "HSW Gr", "Spr Ramp", "Spr Cave", "GorRace", 
	
	// Goron Village
	"Ledge", "Deed", "Scrub 200r", "Lens Ch", "Lens Rock", "Lens Inv", "Keg",  
	
	// Path to Snowhead
	"Grotto", "Pillar", 
	
	// Great Bay Coast
	"Grotto", "SpidChest", "Map Ikana", "Lab Fish", "Mikau", "Ledge", "Picto", "Jumping", "OceSpid1", 
	
	// Zora Cape
	"Ledge 1", "Ledge 2", "Like Like", "Grotto", "Water", "Beaver 1", "Beaver 2", 
	
	// Zora Hall
	"Deed", "Ledge", "Torches", "Evan",  
	
	// Pirates' Fortress Exterior
	"Log", "Sand", "Corner",
	
	// Pirates' Fortress Sewer
	"Maze", "Shallow", "Cage", "Deep", 
	
	// Pirates' Fortress Interior
	"Upper", "Lower", "Tank", "Hookshot", "Guards", 
	
	// Pinnacle Rock
	"Lower", "Upper", "Seahorses", 
	
	// Path to Ikana Canyon
	"Grotto", "Pillar", "Soldier", 
	
	// Ikana Graveyard
	"Bats", "IronKnuck", "Grotto", "Keeta", "Dampe", 
	
	// Ikana Canyon
	"Ledge", "Deed", "Grotto", "Poe Hut", "PamelaDad",  
	
	// Secret Shrine
	"Dinolfos", "Wizzrobe", "Wart", "Garo Master", "Final", 
	
	// Beneath the Well 
	"Left", "Right", "Mirror", 
	
	// Ikana Castle
	"Pillar",
	
	// Stone Tower
	"Left", "Middle", "Right",
	
	// Woodfall Temple
	"Snappers", "Dino", "Near BK", "Dragonfly", "Odolwa",
	
	// Snowhead Temple
	"Freezards", "Elevator", "Block small", "Block big", "Icicles", "Wizzrobe", "Goht",
	
	// Great Bay Temple
	"First", "Near BK", "Underwater", "Wart", "Gyorg",
	
	// Stone Tower Temeple
	"Right Sun", "Water", "Left Sun", "Kill Armos", "Garo Mast", "Updraft", "DeathArm", "Eyegore", "Twinmold",
	
	// Songs
	"Start", "Palace", "Blue Warp", "Ranch", "Goron", "Eggs", "Grave", "Castle"
];

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
	"Song_Starting", "Song_BlueWarp", "Song_Ranch", "Song_Graveyard", "Song_Swamp", "Song_Goron", "Song_Eggs", "Song_Castle"
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
	
	var elem = document.createElement("input"); 
	elem.id = Locations[i]; 
	if(parent != document.getElementById("normalColumn7"))
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
document.getElementById("great_fairy_sword_location").style.display = "none";
document.getElementById("great_fairy_sword_location_br").style.display = "none";
document.getElementById("sword1_location").style.display = "none";
document.getElementById("sword1_location_br").style.display = "none";
document.getElementById("sword2_location").style.display = "none";
document.getElementById("sword2_location_br").style.display = "none";
document.getElementById("circusleaders_mask_location").style.display = "none";
document.getElementById("circusleaders_mask_location_br").style.display = "none";
document.getElementById("dongero_mask_location").style.display = "none";
document.getElementById("dongero_mask_location_br").style.display = "none";
document.getElementById("fiercedeity_mask_location").style.display = "none";
document.getElementById("fiercedeity_mask_location_br").style.display = "none";
document.getElementById("greatfairy_mask_location").style.display = "none";
document.getElementById("greatfairy_mask_location_br").style.display = "none";
document.getElementById("stone_mask_location").style.display = "none";
document.getElementById("stone_mask_location_br").style.display = "none";

var Logic = {};
var Game = {};
var Location_Logic = {};
var Location_Access = {};
var lastCheck = ["start"];

for (var i = 0; i < Items.length; i++) {
	Logic[Items[i]] = false;
	Game[Items[i]] = false;
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
btn.innerHTML = "Help/Options";
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
		Game.bottle1 = true;
	}
}
document.getElementById("itemColumn").appendChild(btn);


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
