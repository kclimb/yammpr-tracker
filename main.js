function Update() {	
	process_inputs();
	update_item_logic();
	update_location_logic();
	update_checks();
	handleAlternateHintInput();
	handle_item_highlights();
	update_summary_text();
	update_settings();
}
