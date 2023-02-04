function onFileLoad(elementId, event) {
	//SpoilerJSON = JSON.parse(event.target.result);
	SpoilerLines = event.target.result.split('\n');
	readLog();
}
function readLog() {
	simActive = true;
	document.getElementById("simLog").style.display = "inline-block";
	document.getElementById("gossips_option").value = "ON";
	document.getElementById("Starting Song").value = "epo";
	if(document.getElementById("settings_option").value == "BLITZ")
		document.getElementById("Boss Blue Warp").value = "oat";
	
	for(i = 0; i < SpoilerLines.length; i++) {
		if(SpoilerLines[i].indexOf("->") >= 0) {
			loc = SpoilerLines[i].split("->")[0].trim();
			item = SpoilerLines[i].split("->")[1].trim().replaceAll("*", "").replaceAll("^", "");
			if(Locations.indexOf(loc) != -1) {
				SpoilerLocToItem[loc] = item;
			}
			else if(Locations.indexOf("h_"+loc) != -1) {
				SpoilerHintDict["h_"+loc] = item;
			}
		}
	}
	
	SpoilerLocToItem["Starting Song"] = "Epona's Song";
	if(document.getElementById("settings_option").value == "BLITZ")
		SpoilerLocToItem["Boss Blue Warp"] = "Oath to Order";
}
function onChooseFile(event, onLoadFileHandler) {
	if (typeof window.FileReader !== 'function')
		throw ("The file API isn't supported on this browser.");
	let input = event.target;
	if (!input)
		throw ("The browser does not properly implement the event object");
	if (!input.files)
		throw ("This browser does not support the `files` property of the file input.");
	if (!input.files[0])
		return undefined;
	let file = input.files[0];
	let fr = new FileReader();
	fr.onload = onLoadFileHandler;
	fr.readAsText(file);
}

var SpoilerItemToInput = {
	"Bow Upgrade" : "bow",
	"Fire Arrow" : "fir",
	"Ice Arrow" : "ice",
	"Light Arrow" : "lig",
	"Moon's Tear" : "moo",
	"Land Title Deed" : "lan",
	"Swamp Title Deed" : "swa",
	"Mountain Title Deed" : "mou",
	"Ocean Title Deed" : "oce",
	"Bomb Bag Upgrade" : "bom",
	"Magic Bean" : "bea",
	"Room Key" : "roo",
	"Letter to Mama" : "spe",
	"Powder Keg" : "pow",
	"Pictograph Box" : "pic",
	"Lens of Truth" : "len",
	"Hookshot" : "hoo",
	"Great Fairy's Sword" : "gfs",
	"Letter to Kafei" : "let",
	"Pendant of Memories" : "pen",
	"Empty Bottle" : "bot",
	"Bottle of Red Potion" : "bot",
	"Bottle of Chateau Romani" : "bot",
	"Milk Bottle" : "bot",
	"Bottle of Gold Dust" : "gol",
	"Postman's Hat" : "pos",
	"All-Night Mask" : "all",
	"Blast Mask" : "bla",
	"Stone Mask" : "sto",
	"Great Fairy's Mask" : "gre",
	"Deku Mask" : "dek",
	"Keaton Mask" : "kea",
	"Bremen Mask" : "bre",
	"Bunny Hood" : "bun",
	"Don Gero's Mask" : "don",
	"Mask of Scents" : "sce",
	"Goron Mask" : "gor",
	"Romani's Mask" : "rom",
	"Circus Leader's Mask" : "cir",
	"Kafei's Mask" : "kaf",
	"Couple's Mask" : "cou",
	"Mask of Truth" : "tru",
	"Zora Mask" : "zor",
	"Kamaro's Mask" : "kam",
	"Gibdo Mask" : "gib",
	"Garo's Mask" : "gar",
	"Captain's Hat" : "cap",
	"Giant's Mask" : "gia",
	"Fierce Deity's Mask" : "fie",
	"Sword Upgrade" : "swo",
	"Mirror Shield" : "mir",
	"Magic Power Upgrade" : "mag",
	"Wallet Upgrade" : "wal",
	"Song of Healing" : "soh",
	"Epona's Song" : "epo",
	"Song of Storms" : "sos",
	"Sonata of Awakening" : "son",
	"Goron Lullaby" : "lul",
	"New Wave Bossa Nova" : "nov",
	"Elegy of Emptiness" : "ele",
	"Oath to Order" : "oat"
}
