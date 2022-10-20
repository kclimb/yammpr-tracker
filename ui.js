function isUpperCase(str) {
    return str === str.toUpperCase();
}

function process_inputs() {
	var peeked = false;
	
	for (var i = 0; i < Locations.length; i++) {
		var key = Locations[i];
		
		for (var j = AreaIndexes.length-1; j > 0; j--) {
			if (i < AreaIndexes[j]) {
				var AreaNamesIndex = AreaIndexes.indexOf(AreaIndexes[j]);
			};
		}
		
		if(Check[key] != "unknown") {continue;}
		if (isUpperCase(document.getElementById(key).value.charAt(2)) && document.getElementById(key).value.length == 3) {
			peeked = true;
			document.getElementById(key).value = document.getElementById(key).value.toLowerCase();
		}
		
		for (var j = 0; j < inputs.length; j++) {
			if (document.getElementById(key).value == inputs[j]) {
				if(j == 0) {
					Check[document.getElementById(key).id] = Items2[j];
				}
				
				for (var k = 0; k <= 5; k++) {
					if (k == 0) {
						var duplicate = "";
					}
					else {
						var duplicate = k + "";
					}
					if (!Known[Items2[j] + duplicate] && Items.indexOf(Items2[j] + duplicate) >= 0) {
						Check[document.getElementById(key).id] = Items2[j] + duplicate; 
						ItemLocation[Items2[j] + duplicate] = document.getElementById(key).id;
						Known[Items2[j] + duplicate] = true; 
						
						if(!peeked) {
							Game[Items2[j] + duplicate] = true;
							CouldHave[Items2[j] + duplicate] = true;
						}
						ItemLocations[Items2[j] + duplicate] = AreaNamesShort[AreaNamesIndex] + ": " + Names[i];
						lastCheck.push(key);
						if(SongItems.indexOf(key) >= 0)
							document.getElementById("text_"+key).innerHTML = document.getElementById("text_"+key).innerHTML + ": " + SongNames[Check[key]];
						break;
					}
				}
			}
		}
	}
}

function update_logic_info() {
	
	Game.logically_accessible = 0;
	Game.checks_remaining = 0;
	
	for (var i = 0; i < Locations.length; i++) {
		
		if (i < AreaIndexes[AreaIndexes.length-1] || (Locations[i] == "Baby Zoras" && document.getElementById("settings_option").value == "BLITZ") 
			|| (Locations[i] == "Swamp Music Statue" && document.getElementById("settings_option").value != "BLITZ")) {
			document.getElementById(Locations[i]).style.display = "none";
			document.getElementById("text_" + Locations[i]).style.display = "none";
			document.getElementById("br_" + Locations[i]).style.display = "none";
		}
		
		//if (document.getElementById("small_keys_option").value != "KEYSY" && Locations[i].startsWith("key_")) {continue;}
		if (Locations[i] == "Fisherman Pictograph") {continue;}
		if (Locations[i] == "Beaver Race #2") {continue;}
		if (Locations[i] == "Frog Choir") {continue;}
		if (document.getElementById("settings_option").value == "BLITZ" && blitz_skip_checks.includes(Locations[i])) {continue;}
		if (document.getElementById("settings_option").value == "S3" && s3_skip_checks.includes(Locations[i])) {continue;}
		
		
		var key = Locations[i];
		
		if(Check[key] == "unknown" || SongItems.indexOf(key) >= 0) {
		
			str = "text_" + key;
			str2 = "br_" + key;
			if (document.getElementById(key).style.display != "inline-block") {
				document.getElementById(str).style.display = "inline-block";
				document.getElementById(key).style.display = "inline-block";
				document.getElementById(str2).style.display = "inline-block";
			}
			
			if(SongItems.indexOf(key) < 0)
				Game.checks_remaining += 1;
			
			if(Location_Logic[key] == true) {
				if (Location_Access[key] == true) {
					document.getElementById(str).className= "logic_check_text"; 
					document.getElementById(str).style.fontWeight = "bold";
					document.getElementById(str).style.opacity = 1;
				}
				else {
					document.getElementById(str).className= "known_check_text";
					document.getElementById(str).style.fontWeight = "normal";
					document.getElementById(str).style.opacity = .5;
				}
				document.getElementById(str).style.color = "chartreuse";
				if(SongItems.indexOf(key) >= 0 && Check[key] != "unknown")
					;
				else {
					document.getElementById(str).innerHTML = backUp[i];
					if(document.getElementById(key).style.display != "none") {
						if(SongItems.indexOf(key) < 0)
							Game.logically_accessible += 1;
					}
				}
				
			}
			else if (Location_Access[key] == true) {
				document.getElementById(str).className= "access_check_text";
				document.getElementById(str).style.opacity = .5;
				document.getElementById(str).style.fontWeight = "normal";
				document.getElementById(str).style.color = "yellow";
			}
			else if (Location_Could_Access[key] == true || Location_Could_Peek[key] == true) {
				document.getElementById(str).className= "could_access_check_text";
				document.getElementById(str).style.opacity = .2;
				document.getElementById(str).style.fontWeight = "normal";
				document.getElementById(str).style.color = "yellow";
			}
			else {
				document.getElementById(str).className= "ool_check_text";
				document.getElementById(str).style.opacity = .5;
				document.getElementById(str).style.fontWeight = "normal";
				document.getElementById(str).style.color = "black";
			}
		}
		
		if(Check[key] != "unknown" && document.getElementById(key) != null) {
			
			if(SongItems.indexOf(key) >= 0) {
				document.getElementById(key).style.display = "none";
			}
			else {
				document.getElementById(key).style.display = "none";
				document.getElementById("text_"+key).style.display = "none";;
				document.getElementById("br_"+key).style.display = "none";
			}
		}
	}
	
	document.getElementById("checks_remaining").innerHTML="Remaining: "+Game.checks_remaining;
	document.getElementById("logically_accessible").innerHTML="In Logic: "+Game.logically_accessible;
}

function highlight(x) {

	var theItem = x.id.slice(0, -4);
	
	if(theItem == "wallet1" && Game["wallet1"] == true && Game["wallet2"] == false) {
		Game["wallet2"] = true;
		return;
	}
	else if(theItem == "wallet1" && Game["wallet1"] == true && Game["wallet2"] == true) {
		Game["wallet1"] = false;
		Game["wallet2"] = false;
		document.getElementById("wallet1_img").src = Game.wallet1_img;
		x.style.opacity =.2;
		return;
	}

	if (x.style.opacity == 1) {
		Game[theItem] = false;
		x.style.opacity =.2;
	}
	else {
		Game[theItem] = true;
		x.style.opacity =1;
	}
	
}

function junk() {
	var type = event.button;
	var str = event.target.id;
	var str = str.substring('text_'.length);
	if (Check[str] != "unknown") {return;}
	var temp = Locations.indexOf(str);
	
	if(type == 0 && !event.altKey) {
		Check[str]="junk";
	}
	
	else if(type == 1 || (type == 0 && event.altKey)) {
		return;
	}
	
	else if ((type == 2 && !event.altKey)) {
		return;
	}
	else if (type == 2 && event.altKey) {
		if (x.style.color == "orange") {x.style.color = "pink";}
		else {x.style.color = "orange";}
		return;
	}
	else {
		Check[str]="junk";
	}
	
	if (document.getElementById(str).style.display != "none") {
		document.getElementById(str).style.display = "none";
	}
	
	if (type == 0){
		if (document.getElementById("text_" + str).style.display != "none") {
			document.getElementById("text_" + str).style.display = "none";
		}
		if (document.getElementById("br_" + str).style.display != "none") {
			document.getElementById("br_" + str).style.display = "none";
		}
	}
	lastCheck.push(str);
	
	Update();Update();Update();
}	

function handle_item_highlights() {
var temp_img = document.getElementById("bomb1_img");
	if(Game.bomb)
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("bow1_img");
	if(Game.bow)
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("sword1_img");
	if(Game.gilded_sword) {
		temp_img.src = Game.sword3_img;
		temp_img.style.opacity =1;
	}
	else if(Game.razor_sword) {
		temp_img.src = Game.sword2_img;
		temp_img.style.opacity =1;
	}
	else {
		temp_img.src = Game.sword1_img;
		temp_img.style.opacity =1;
	}
	
	var temp_img = document.getElementById("mirror_shield_img");
	if(Game.mirror_shield)
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("wallet1_img");
	if (Game.giants_wallet) {
		temp_img.src = Game.wallet2_img;
		temp_img.style.opacity =1;
	} 
	else if(Game.adults_wallet) {
		temp_img.src = Game.wallet1_img;
		temp_img.style.opacity =1;
	}
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("magic1_img");
	if (Game.magic2 && Game.magic1) {
		temp_img.src = Game.magic2_img;
		temp_img.style.opacity =1;
	} 
	else if(Game.magic1 || Game.magic2) {
		temp_img.src = Game.magic1_img;
		temp_img.style.opacity =1;
	}
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("bottle1_img");
	if (Game.bottle1)
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("bottle2_img");
	if (Game.bottle2)
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("bottle3_img");
	if (Game.bottle3)
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("bottle4_img");
	if (Game.bottle4)
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("bottle5_img");
	if (Game.bottle5)
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("magic_bean1_img");
	if(Game.magic_bean)
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("ocarina_img");
	temp_img.style.opacity =1;
	
	var temp_img = document.getElementById("song_of_time_img");
	temp_img.style.opacity =1;
	
	var temp_img = document.getElementById("song_of_soaring_img");
	temp_img.style.opacity =1;
	
	// boss remains
	var temp_img = document.getElementById("odolwasremains_img");
	if(Check["Odolwa Heart Container"] != "unknown")
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("gohtsremains_img");
	if(Check["Goht Heart Container"] != "unknown")
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("gyorgsremains_img");
	if(Check["Gyorg Heart Container"] != "unknown")
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	var temp_img = document.getElementById("twinmoldsremains_img");
	if(Check["Twinmold Heart Container"] != "unknown")
		temp_img.style.opacity =1;
	else
		temp_img.style.opacity =.2;
	
	for(var i = 0; i < SingletonItems.length; i++) {
		var temp_img = document.getElementById(SingletonItems[i]+"_img");
		if(Game[SingletonItems[i]])
			temp_img.style.opacity =1;
		else
			temp_img.style.opacity =.2;
	}
}

function update_summary_text() {
	for (var i = 1; i < checkSummaryText.length; i++) {
		var summary_text_elem = document.getElementById(Items[i]+"_location");
		if(Logic[Items[i]]) {
			summary_text_elem.innerHTML = ItemNames[i]+" &#8594; "+ItemLocations[Items[i]];

			if (!Game[Items[i]])
				summary_text_elem.className = "checked_text_summary_not_have";
			else
				summary_text_elem.className = "checked_text_summary";

		}
		else if(Game[Items[i]]) {
			summary_text_elem.className = "checked_text_summary_have_ool";
			if(Known[Items[i]])
				summary_text_elem.innerHTML = ItemNames[i]+" &#8594; "+ItemLocations[Items[i]];
			else
				summary_text_elem.innerHTML = ItemNames[i]+" &#8594; ";
		}
		else if(CouldHave[Items[i]]) {
			summary_text_elem.className = "checked_text_summary_could_have";
			summary_text_elem.innerHTML = ItemNames[i]+" &#8594; "+ItemLocations[Items[i]];
		}
		else if(Known[Items[i]]) {
			summary_text_elem.className = "checked_text_summary_known";
			summary_text_elem.innerHTML = ItemNames[i]+" &#8594; "+ItemLocations[Items[i]];
		}
		else {
			summary_text_elem.className = "checked_text_summary_ool";
			summary_text_elem.innerHTML = ItemNames[i]+" &#8594; ";
		}
	}
}

function Undo() {

	if (lastCheck[lastCheck.length-1] == "start")
		return;
	
	if (Check[lastCheck[lastCheck.length-1]] != "unknown")
	{
		if (Check[lastCheck[lastCheck.length-1]] == "song_of_healing" || Check[lastCheck[lastCheck.length-1]] == "eponas_song" || Check[lastCheck[lastCheck.length-1]] == "song_of_storms" || Check[lastCheck[lastCheck.length-1]] == "sonata" || Check[lastCheck[lastCheck.length-1]] == "lullaby" || Check[lastCheck[lastCheck.length-1]] == "nwbn" || Check[lastCheck[lastCheck.length-1]] == "elegy" || Check[lastCheck[lastCheck.length-1]] == "oath") {
			document.getElementById("text_" + lastCheck[lastCheck.length-1]).innerHTML = document.getElementById("text_" + lastCheck[lastCheck.length-1]).innerHTML.split(': ')[0];
			Game.checks_remaining -= 1;
		}
		else if (Check[lastCheck[lastCheck.length-1]] != "junk") {
			document.getElementById(Check[lastCheck[lastCheck.length-1]] + "_location").innerHTML = document.getElementById(Check[lastCheck[lastCheck.length-1]] + "_location").innerHTML.split('-&gt; ')[0] + "-> ";
			document.getElementById(Check[lastCheck[lastCheck.length-1]] + "_location").className = "checkSummaryText";
		}
		document.getElementById(lastCheck[lastCheck.length-1]).value = "";
	}
	ItemLocations[Check[lastCheck[lastCheck.length-1]]] = "unknown";
	ItemLocation[Check[lastCheck[lastCheck.length-1]]] = "";
	Game[Check[lastCheck[lastCheck.length-1]]] = false;
	CouldHave[Check[lastCheck[lastCheck.length-1]]] = false;
	Known[Check[lastCheck[lastCheck.length-1]]] = false;
	Logic[Check[lastCheck[lastCheck.length-1]]] = false;
	Check[lastCheck[lastCheck.length-1]] = "unknown";
	lastCheck.pop();
	Update();Update();Update();
}

document.onkeydown = function(e) {
	if (e.ctrlKey && e.which == 90) {
		e.preventDefault();
		Undo();
	}
}

function toggleSummary(loc) {
	var item = loc.id.slice(0, -9);
	
	if(event.which == 3) { // right click, toggle if you have it or not
		Game[item] = !Game[item];
	}
}
