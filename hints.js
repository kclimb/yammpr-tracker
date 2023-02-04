function handleAlternateHintInput() {
	var lines = document.getElementById("hintInput").value.split('\n');
	var str = "";
	for (var i= 0; i < hintNames.length; i++) {
		for (var j=0; j < lines.length; j++) {
			if (lines[j].startsWith(hintNames[i]+" ")) {
				for (var k = 0; k < inputs.length; k++) {
					str = inputs[k];
					if (i < 6) {
						str = capitalizeThirdLetter(str);
					}
					else {
						str = capitalizeFirstLetter(str);
					}
					
					if (k == 0) {
						if (lines[j].endsWith(" " + inputs[k]) && Check[hintIndexes[i]] == "unknown") {
							thisIsHinted = true; 
							document.getElementById("text_" + hintIndexes[i]).dispatchEvent(new Event('mousedown')); 
							thisIsHinted = false; 
						}
					}
					else {
						if (lines[j].endsWith(" " + inputs[k])) {
							if (Check[hintIndexes[i]] == "unknown") {
								hintedInput = str.toLowerCase();
								document.getElementById(hintIndexes[i]).value = str;
							}
							else
								Hinted[hintIndexes[i]] = true;
						}
					}
				}
			}
		}
	}
}
