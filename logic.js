function update_item_logic() {
	// Assumes you start with Kokiri Sword, Hero's Shield, Ocarina of Time, Song of Time, Song of Soaring
	
	// Progressive Swords
	if(Known.sword1 == true) {Logic.sword1 = Location_Logic[ItemLocation.sword1];} 
	if(Known.sword2 == true) {Logic.sword2 = Location_Logic[ItemLocation.sword2];}
	Logic.razor_sword = Logic.sword1 || Logic.sword2;
	Logic.gilded_sword = Logic.sword1 && Logic.sword2;
	
	// Progressive Magic Upgrades
	if(Known.magic1 == true) {Logic.magic1 = Location_Logic[ItemLocation.magic1];} 
	if(Known.magic2 == true) {Logic.magic2 = Location_Logic[ItemLocation.magic2];}
	Logic.magic = Logic.magic1 || Logic.magic2;
	Logic.double_magic = Logic.magic1 && Logic.magic2;
	
	// Progressive Wallets
	if(Known.wallet1 == true) {Logic.wallet1 = Location_Logic[ItemLocation.wallet1];} 
	if(Known.wallet2 == true) {Logic.wallet2 = Location_Logic[ItemLocation.wallet2];}
	Logic.adults_wallet = Logic.wallet1 || Logic.wallet2;
	Logic.giants_wallet = Logic.wallet1 && Logic.wallet2;
	
	// Progressive Bows
	if(Known.bow1 == true) {Logic.bow1 = Location_Logic[ItemLocation.bow1];} 
	if(Known.bow2 == true) {Logic.bow2 = Location_Logic[ItemLocation.bow2];}
	if(Known.bow3 == true) {Logic.bow3 = Location_Logic[ItemLocation.bow3];}
	Logic.bow = Logic.bow1 || Logic.bow2 || Logic.bow3;
	
	// Progressive Bomb Bags
	if(Known.bomb1 == true) {Logic.bomb1 = Location_Logic[ItemLocation.bomb1];} 
	if(Known.bomb2 == true) {Logic.bomb2 = Location_Logic[ItemLocation.bomb2];}
	if(Known.bomb3 == true) {Logic.bomb3 = Location_Logic[ItemLocation.bomb3];}
	Logic.bomb = Logic.bomb1 || Logic.bomb2 || Logic.bomb3;
	
	// Bottles
	if(Known.bottle1 == true) {Logic.bottle1 = Location_Logic[ItemLocation.bottle1];}
	if(Known.bottle2 == true) {Logic.bottle2 = Location_Logic[ItemLocation.bottle2];}
	if(Known.bottle3 == true) {Logic.bottle3 = Location_Logic[ItemLocation.bottle3];}
	if(Known.bottle4 == true) {Logic.bottle4 = Location_Logic[ItemLocation.bottle4];}
	if(Known.bottle5 == true) {Logic.bottle5 = Location_Logic[ItemLocation.bottle5];}
	if(Known.bottle_gold_dust == true) {Logic.bottle_gold_dust = Location_Logic[ItemLocation.bottle_gold_dust];} else{Logic.bottle_gold_dust = false;}
	
	Logic.any_bottle = Logic.bottle1 || Logic.bottle2 || Logic.bottle3 || Logic.bottle4 || Logic.bottle5 || Logic.bottle_gold_dust;
	
	// Magic beans
	if(Known.magic_bean1 == true) {Logic.magic_bean1 = Location_Logic[ItemLocation.magic_bean1];}
	if(Known.magic_bean2 == true) {Logic.magic_bean2 = Location_Logic[ItemLocation.magic_bean2];}
	Logic.magic_bean = Logic.magic_bean1 || Logic.magic_bean2;
	
	// Singleton Items
	if(Known.fire_arrow == true) {Logic.fire_arrow = Location_Logic[ItemLocation.fire_arrow];} else{Logic.fire_arrow = false;}
	if(Known.ice_arrow == true) {Logic.ice_arrow = Location_Logic[ItemLocation.ice_arrow];} else{Logic.ice_arrow = false;}
	if(Known.light_arrow == true) {Logic.light_arrow = Location_Logic[ItemLocation.light_arrow];} else{Logic.light_arrow = false;}
	if(Known.powder_keg == true) {Logic.powder_keg = Location_Logic[ItemLocation.powder_keg];} else{Logic.powder_keg = false;}
	if(Known.pictobox == true) {Logic.pictobox = Location_Logic[ItemLocation.pictobox];} else{Logic.pictobox = false;}
	if(Known.lens == true) {Logic.lens = Location_Logic[ItemLocation.lens];} else{Logic.lens = false;}
	if(Known.hookshot == true) {Logic.hookshot = Location_Logic[ItemLocation.hookshot];} else{Logic.hookshot = false;}
	if(Known.great_fairy_sword == true) {Logic.great_fairy_sword = Location_Logic[ItemLocation.great_fairy_sword];} else{Logic.great_fairy_sword = false;}
	
	if(Known.postmans_hat == true) {Logic.postmans_hat = Location_Logic[ItemLocation.postmans_hat];} else{Logic.postmans_hat = false;}
	if(Known.allnight_mask == true) {Logic.allnight_mask = Location_Logic[ItemLocation.allnight_mask];} else{Logic.allnight_mask = false;}
	if(Known.blast_mask == true) {Logic.blast_mask = Location_Logic[ItemLocation.blast_mask];} else{Logic.blast_mask = false;}
	if(Known.stone_mask == true) {Logic.stone_mask = Location_Logic[ItemLocation.stone_mask];} else{Logic.stone_mask = false;} // logically useless
	if(Known.greatfairy_mask == true) {Logic.greatfairy_mask = Location_Logic[ItemLocation.greatfairy_mask];} else{Logic.greatfairy_mask = false;} // logically useless
	if(Known.deku_mask == true) {Logic.deku_mask = Location_Logic[ItemLocation.deku_mask];} else{Logic.deku_mask = false;}
	if(Known.keaton_mask == true) {Logic.keaton_mask = Location_Logic[ItemLocation.keaton_mask];} else{Logic.keaton_mask = false;}
	if(Known.bremen_mask == true) {Logic.bremen_mask = Location_Logic[ItemLocation.bremen_mask];} else{Logic.bremen_mask = false;}
	if(Known.bunny_hood == true) {Logic.bunny_hood = Location_Logic[ItemLocation.bunny_hood];} else{Logic.bunny_hood = false;}
	if(Known.dongero_mask == true) {Logic.dongero_mask = Location_Logic[ItemLocation.dongero_mask];} else{Logic.dongero_mask = false;}
	if(Known.mask_of_scents == true) {Logic.mask_of_scents = Location_Logic[ItemLocation.mask_of_scents];} else{Logic.mask_of_scents = false;} // logically useless
	if(Known.goron_mask == true) {Logic.goron_mask = Location_Logic[ItemLocation.goron_mask];} else{Logic.goron_mask = false;}
	if(Known.romani_mask == true) {Logic.romani_mask = Location_Logic[ItemLocation.romani_mask];} else{Logic.romani_mask = false;}
	if(Known.circusleaders_mask == true) {Logic.circusleaders_mask = Location_Logic[ItemLocation.circusleaders_mask];} else{Logic.circusleaders_mask = false;} // logically useless
	if(Known.kafei_mask == true) {Logic.kafei_mask = Location_Logic[ItemLocation.kafei_mask];} else{Logic.kafei_mask = false;}
	if(Known.couples_mask == true) {Logic.couples_mask = Location_Logic[ItemLocation.couples_mask];} else{Logic.couples_mask = false;}
	if(Known.mask_of_truth == true) {Logic.mask_of_truth = Location_Logic[ItemLocation.mask_of_truth];} else{Logic.mask_of_truth = false;}
	if(Known.zora_mask == true) {Logic.zora_mask = Location_Logic[ItemLocation.zora_mask];} else{Logic.zora_mask = false;}
	if(Known.kamaro_mask == true) {Logic.kamaro_mask = Location_Logic[ItemLocation.kamaro_mask];} else{Logic.kamaro_mask = false;}
	if(Known.gibdo_mask == true) {Logic.gibdo_mask = Location_Logic[ItemLocation.gibdo_mask];} else{Logic.gibdo_mask = false;}
	if(Known.garo_mask == true) {Logic.garo_mask = Location_Logic[ItemLocation.garo_mask];} else{Logic.garo_mask = false;}
	if(Known.captains_hat == true) {Logic.captains_hat = Location_Logic[ItemLocation.captains_hat];} else{Logic.captains_hat = false;}
	if(Known.giants_mask == true) {Logic.giants_mask = Location_Logic[ItemLocation.giants_mask];} else{Logic.giants_mask = false;}
	if(Known.fiercedeity_mask == true) {Logic.fiercedeity_mask = Location_Logic[ItemLocation.fiercedeity_mask];} else{Logic.fiercedeity_mask = false;} // logically useless
	
	if(Known.moons_tear == true) {Logic.moons_tear = Location_Logic[ItemLocation.moons_tear];} else{Logic.moons_tear = false;}
	if(Known.land_title_deed == true) {Logic.land_title_deed = Location_Logic[ItemLocation.land_title_deed];} else{Logic.land_title_deed = false;}
	if(Known.swamp_title_deed == true) {Logic.swamp_title_deed = Location_Logic[ItemLocation.swamp_title_deed];} else{Logic.swamp_title_deed = false;}
	if(Known.mountain_title_deed == true) {Logic.mountain_title_deed = Location_Logic[ItemLocation.mountain_title_deed];} else{Logic.mountain_title_deed = false;}
	if(Known.ocean_title_deed == true) {Logic.ocean_title_deed = Location_Logic[ItemLocation.ocean_title_deed];} else{Logic.ocean_title_deed = false;}
	
	if(Known.room_key == true) {Logic.room_key = Location_Logic[ItemLocation.room_key];} else{Logic.room_key = false;}
	if(Known.special_delivery == true) {Logic.special_delivery = Location_Logic[ItemLocation.special_delivery];} else{Logic.special_delivery = false;}
	if(Known.letter_to_kafei == true) {Logic.letter_to_kafei = Location_Logic[ItemLocation.letter_to_kafei];} else{Logic.letter_to_kafei = false;}
	if(Known.pendant_of_memories == true) {Logic.pendant_of_memories = Location_Logic[ItemLocation.pendant_of_memories];} else{Logic.pendant_of_memories = false;}
	
	if(Known.eponas_song == true) {Logic.eponas_song = Location_Logic[ItemLocation.eponas_song];} else{Logic.eponas_song = false;}
	if(Known.song_of_storms == true) {Logic.song_of_storms = Location_Logic[ItemLocation.song_of_storms];} else{Logic.song_of_storms = false;}
	if(Known.song_of_healing == true) {Logic.song_of_healing = Location_Logic[ItemLocation.song_of_healing];} else{Logic.song_of_healing = false;}
	if(Known.sonata == true) {Logic.sonata = Location_Logic[ItemLocation.sonata];} else{Logic.sonata = false;}
	if(Known.lullaby == true) {Logic.lullaby = Location_Logic[ItemLocation.lullaby];} else{Logic.lullaby = false;}
	if(Known.nwbn == true) {Logic.nwbn = Location_Logic[ItemLocation.nwbn];} else{Logic.nwbn = false;}
	if(Known.elegy == true) {Logic.elegy = Location_Logic[ItemLocation.elegy];} else{Logic.elegy = false;}
	if(Known.oath == true) {Logic.oath = Location_Logic[ItemLocation.oath];} else{Logic.oath = false;}
	
	if(Known.mirror_shield == true) {Logic.mirror_shield = Location_Logic[ItemLocation.mirror_shield];} else{Logic.mirror_shield = false;}
	
	Game.razor_sword = Game.sword1 || Game.sword2;
	Game.gilded_sword = Game.sword1 && Game.sword2;
	
	Game.adults_wallet = Game.wallet1 || Game.wallet2;
	Game.giants_wallet = Game.wallet1 && Game.wallet2;
	
	Game.magic = Game.magic1 || Game.magic2;
	Game.double_magic = Game.magic1 && Game.magic2;
	
	Game.bow = Game.bow1 || Game.bow2 || Game.bow3;
	Game.bomb = Game.bomb1 || Game.bomb2 || Game.bomb3;
	Game.magic_bean = Game.magic_bean1 || Game.magic_bean2;
	Game.any_bottle = Game.bottle1 || Game.bottle2 || Game.bottle3 || Game.bottle4 || Game.bottle5 || Game.bottle_gold_dust;
	
	
	// Misc Shortcuts
	Logic.explosive = Logic.bomb || Logic.blast_mask;
	Logic.night_inn_access = Logic.deku_mask || Logic.room_key;
	Logic.epona_access = Logic.goron_mask && Logic.powder_keg;
	Logic.water_for_magic_bean = Logic.any_bottle || Logic.song_of_storms;
	
	// Swamp area shortcuts
	Logic.cross_poisoned_water = Logic.deku_mask || Logic.zora_mask;
	Logic.poison_swamp_access = Logic.cross_poisoned_water && (Logic.hookshot || Logic.bow || Logic.pictobox || Logic.zora_mask || Logic.any_bottle);
	Logic.limitless_magic_beans = Logic.poison_swamp_access && Logic.deku_mask;
	Logic.woodfall_temple_access = Logic.deku_mask && Logic.sonata && Logic.poison_swamp_access;
	Logic.woodfall_clear = Logic.woodfall_temple_access && Logic.bow; 
	
	// Swamp Spider House
	Logic.swamp_skulltula_main_room_near_ceiling = Logic.poison_swamp_access && (Logic.hookshot || Logic.zora_mask || (Logic.deku_mask && (Logic.bow || Logic.magic || Logic.bomb)));
	Logic.swamp_skulltula_gold_room_near_ceiling = Logic.poison_swamp_access && (Logic.hookshot || Logic.zora_mask || (Logic.deku_mask && Logic.water_for_magic_bean));
	Logic.swamp_skulltula_monument_room_torch = Logic.poison_swamp_access;
	Logic.swamp_skulltula_gold_room_pillar = Logic.poison_swamp_access;
	Logic.swamp_skulltula_pot_room_jar = Logic.poison_swamp_access;
	Logic.swamp_skulltula_tree_room_grass_1 = Logic.poison_swamp_access;
	Logic.swamp_skulltula_tree_room_grass_2 = Logic.poison_swamp_access;
	Logic.swamp_skulltula_main_room_water = Logic.poison_swamp_access;
	Logic.swamp_skulltula_main_room_lower_left_soft_soil = Logic.poison_swamp_access && Logic.any_bottle;
	Logic.swamp_skulltula_monument_room_crate_1 = Logic.poison_swamp_access;
	Logic.swamp_skulltula_main_room_upper_soft_soil = Logic.poison_swamp_access && Logic.any_bottle;
	Logic.swamp_skulltula_main_room_lower_right_soft_soil = Logic.poison_swamp_access && Logic.any_bottle;
	Logic.swamp_skulltula_monument_room_lower_wall = Logic.poison_swamp_access && (Logic.hookshot || Logic.zora_mask || (Logic.water_for_magic_bean && Logic.any_magic_bean && (Logic.goron_mask || Logic.explosive)));
	Logic.swamp_skulltula_monument_room_on_monument = Logic.poison_swamp_access;
	Logic.swamp_skulltula_main_room_pillar = Logic.poison_swamp_access;
	Logic.swamp_skulltula_pot_room_pot_1 = Logic.poison_swamp_access;
	Logic.swamp_skulltula_pot_room_pot_2 = Logic.poison_swamp_access;
	Logic.swamp_skulltula_gold_room_hive = Logic.poison_swamp_access && (Logic.hookshot || Logic.zora_mask || Logic.bow || (Logic.deku_mask && Logic.magic));
	Logic.swamp_skulltula_main_room_upper_pillar = Logic.poison_swamp_access;
	Logic.swamp_skulltula_pot_room_behind_vines = Logic.poison_swamp_access;
	Logic.swamp_skulltula_tree_room_tree_1 = Logic.poison_swamp_access;
	Logic.swamp_skulltula_pot_room_wall = Logic.poison_swamp_access;
	Logic.swamp_skulltula_pot_room_hive_1 = Logic.poison_swamp_access && (Logic.hookshot || Logic.zora_mask || Logic.bow || (Logic.deku_mask && Logic.magic));
	Logic.swamp_skulltula_tree_room_tree_2 = Logic.poison_swamp_access;
	Logic.swamp_skulltula_gold_room_wall = Logic.poison_swamp_access;
	Logic.swamp_skulltula_tree_room_hive = Logic.poison_swamp_access && (Logic.hookshot || Logic.zora_mask || Logic.bow || (Logic.deku_mask && Logic.magic));
	Logic.swamp_skulltula_monument_room_crate_2 = Logic.poison_swamp_access;
	Logic.swamp_skulltula_pot_room_hive_2 = Logic.poison_swamp_access && (Logic.hookshot || Logic.zora_mask || Logic.bow || (Logic.deku_mask && Logic.magic));
	Logic.swamp_skulltula_tree_room_tree_3 = Logic.poison_swamp_access;
	Logic.swamp_skulltula_main_room_jar = Logic.poison_swamp_access;
	
	// Mountain area shortcuts
	Logic.north_access = (Logic.hot_spring_water && (Logic.goron_mask || Logic.explosive)) || (Logic.bow && (Logic.explosive || (Logic.fire_arrow && Logic.magic) || Logic.goron_mask));
	Logic.hot_spring_water = Logic.north_access && Logic.any_bottle && ((Logic.lens && Logic.goron_mask && Logic.magic) || (Logic.bow && Logic.fire_arrow && Logic.magic) || Logic.snowhead_clear);
	
	Logic.snowhead_temple_access = Logic.north_access && Logic.goron_mask && Logic.lullaby && Logic.magic;
	Logic.enter_snowhead_temple = Logic.zora_mask || Logic.goron_mask;
	
	Logic.snowhead_key_1_block_room = Logic.snowhead_temple_access && Logic.enter_snowhead_temple && ((Logic.goron_mask && Logic.magic) || (Logic.fire_arrow && Logic.bow && Logic.magic));
	
	Logic.snowhead_key_2_icicle_room = Logic.snowhead_temple_access && Logic.enter_snowhead_temple && ((Logic.hookshot && Logic.explosive && Logic.magic) || (Logic.magic && Logic.hookshot && Logic.goron_mask && Logic.one_snowhead_key) || (Logic.explosive && Logic.one_snowhead_key) || (Logic.fire_arrow && Logic.bow && Logic.magic && Logic.one_snowhead_key) || (Logic.explosive && Logic.bow && Logic.fire_arrow && Logic.zora_mask && Logic.magic));
	
	Logic.snowhead_key_3_bridge_room = Logic.snowhead_temple_access && Logic.enter_snowhead_temple && ((Logic.fire_arrow && Logic.bow && Logic.magic) || (Logic.hookshot && Logic.goron_mask));
	
	Logic.one_snowhead_key = Logic.snowhead_key_1_block_room || Logic.snowhead_key_2_icicle_room || Logic.snowhead_key_3_bridge_room;
	
	Logic.two_snowhead_keys = (Logic.snowhead_key_1_block_room && Logic.snowhead_key_2_icicle_room) || (Logic.snowhead_key_1_block_room && Logic.snowhead_key_3_bridge_room) || (Logic.snowhead_key_2_icicle_room && Logic.snowhead_key_3_bridge_room);
	
	Logic.snowhead_boss_key = Logic.snowhead_temple_access && Logic.magic && Logic.fire_arrow && Logic.bow && Logic.goron_mask;
	
	Logic.snowhead_clear = Logic.snowhead_temple_access && Logic.magic && Logic.fire_arrow && Logic.bow && Logic.goron_mask && Logic.snowhead_boss_key;
	
	// Great Bay area shortcuts
	Logic.west_access = Logic.eponas_song;
	Logic.ocean_skulltulas = Logic.explosive && Logic.west_access && Logic.hookshot;
	Logic.pirates_fortress_access = Logic.west_access && Logic.zora_mask;
	Logic.pinnacle_rock_access = Logic.zora_mask;
	Logic.seahorse = Logic.pictobox && Logic.west_access && Logic.pirates_fortress_access;
	Logic.great_bay_temple_access = Logic.pirates_fortress_access && Logic.nwbn && Logic.hookshot;
	Logic.great_bay_key_1 = Logic.great_bay_temple_access && Logic.zora_mask && Logic.hookshot;
	Logic.great_bay_boss_key = Logic.great_bay_temple_access && Logic.zora_mask && Logic.hookshot && Logic.fire_arrow && Logic.ice_arrow && Logic.bow && Logic.magic;
	Logic.great_bay_clear = Logic.great_bay_temple_access && Logic.zora_mask && Logic.hookshot && Logic.bow && Logic.magic && Logic.great_bay_boss_key && Logic.ice_arrow; 

	// Ikana area shortcuts
	Logic.ikana_graveyard_access = Logic.eponas_song;
	Logic.east_access = Logic.hookshot && Logic.ikana_graveyard_access && (Logic.garo_mask || Logic.gibdo_mask);
	Logic.ikana_canyon_access = Logic.east_access && Logic.ice_arrow && Logic.bow && Logic.magic;
	
	Logic.stone_tower_temple_access = Logic.ikana_canyon_access && Logic.hookshot && Logic.elegy && Logic.goron_mask && Logic.zora_mask;
	
	Logic.inverted_stone_tower_temple_access = Logic.stone_tower_temple_access && Logic.bow && Logic.light_arrow && Logic.magic;
	
	Logic.stone_tower_key_1_armos = Logic.stone_tower_temple_access && ((Logic.mirror_shield && Logic.explosive && Logic.goron_mask) || (Logic.explosive && Logic.bow && Logic.light_arrow && Logic.magic && Logic.goron_mask) || (Logic.light_arrow && Logic.bow && Logic.magic && Logic.one_stone_tower_key && Logic.zora_mask));
	
	Logic.stone_tower_key_2_eyegore = Logic.stone_tower_temple_access && ((Logic.light_arrow && Logic.bow && Logic.magic && Logic.zora_mask) || (Logic.one_stone_tower_key && Logic.explosive && Logic.goron_mask));
	
	Logic.stone_tower_key_3_updaft = Logic.inverted_stone_tower_temple_access && Logic.bow && Logic.light_arrow && Logic.magic && Logic.deku_mask;
	
	Logic.stone_tower_key_4_death_armos = Logic.inverted_stone_tower_temple_access && Logic.bow && Logic.light_arrow && Logic.magic && Logic.deku_mask && Logic.one_stone_tower_key && Logic.hookshot;
	
	Logic.one_stone_tower_key = Logic.stone_tower_key_1_armos || Logic.stone_tower_key_2_eyegore || Logic.stone_tower_key_3_updaft || Logic.stone_tower_key_4_death_armos;
	
	Logic.two_stone_tower_keys = (Logic.stone_tower_key_1_armos && Logic.stone_tower_key_2_eyegore) || (Logic.stone_tower_key_1_armos && Logic.stone_tower_key_3_updaft) || (Logic.stone_tower_key_1_armos && Logic.stone_tower_key_4_death_armos) || (Logic.stone_tower_key_2_eyegore && Logic.stone_tower_key_3_updaft) || (Logic.stone_tower_key_2_eyegore && Logic.stone_tower_key_4_death_armos) || (Logic.stone_tower_key_3_updaft && Logic.stone_tower_key_4_death_armos);
	
	Logic.istt_eyegore_access = Logic.deku_mask && Logic.two_stone_tower_keys;
	Logic.stone_tower_boss_key = Logic.inverted_stone_tower_temple_access && Logic.light_arrow && Logic.bow && Logic.magic && Logic.deku_mask && Logic.one_stone_tower_key && Logic.hookshot;
	
	Logic.ikana_clear = Logic.inverted_stone_tower_temple_access && Logic.hookshot && Logic.bow && Logic.light_arrow && Logic.stone_tower_boss_key && Logic.magic && Logic.istt_eyegore_access && Logic.giants_mask;
	
	Logic.any_blue_potion = Logic.any_bottle;
	Logic.any_milk = Logic.any_bottle; // gorman bros purchase requires nothing but bottle
	Logic.zora_egg = Logic.any_bottle && Logic.pirates_fortress_access && Logic.hookshot && Logic.pinnacle_rock_access && ((Logic.deku_mask && Logic.magic) || Logic.bow);
	Logic.big_poe = Logic.any_bottle && Logic.ikana_canyon_access && Logic.gibdo_mask && Logic.bomb && ((Logic.light_arrow && Logic.magic && Logic.bow) || (Logic.limitless_magic_beans && (Logic.bow || Logic.zora_mask)));
	
	Logic.any_magic_bean = Logic.deku_mask || (Logic.moons_tear && Logic.land_title_deed) || Logic.magic_bean; 
	
	
	// Misc Shortcuts
	Game.explosive = Game.bomb || Game.blast_mask;
	Game.night_inn_access = Game.deku_mask || Game.room_key || Game.explosive || Game.bow || Game.hookshot || Game.zora_mask;
	Game.epona_access = Game.goron_mask && Game.powder_keg;
	Game.water_for_magic_bean = Game.any_bottle || Game.song_of_storms;
	
	// Swamp area shortcuts
	Game.cross_poisoned_water = Game.deku_mask || Game.zora_mask;
	Game.poison_swamp_access = Game.cross_poisoned_water && (Game.hookshot || Game.bow || Game.pictobox || Game.zora_mask || Game.any_bottle);
	Game.limitless_magic_beans = Game.poison_swamp_access && Game.deku_mask;
	Game.woodfall_temple_access = Game.deku_mask && Game.sonata && Game.poison_swamp_access;
	Game.woodfall_clear = Game.woodfall_temple_access && Game.bow; 
	
	// Swamp Spider House
	Game.swamp_skulltula_main_room_near_ceiling = Game.poison_swamp_access && (Game.hookshot || Game.zora_mask || (Game.deku_mask && (Game.bow || Game.magic || Game.bomb)));
	Game.swamp_skulltula_gold_room_near_ceiling = Game.poison_swamp_access && (Game.hookshot || Game.zora_mask || (Game.deku_mask && Game.water_for_magic_bean));
	Game.swamp_skulltula_monument_room_torch = Game.poison_swamp_access;
	Game.swamp_skulltula_gold_room_pillar = Game.poison_swamp_access;
	Game.swamp_skulltula_pot_room_jar = Game.poison_swamp_access;
	Game.swamp_skulltula_tree_room_grass_1 = Game.poison_swamp_access;
	Game.swamp_skulltula_tree_room_grass_2 = Game.poison_swamp_access;
	Game.swamp_skulltula_main_room_water = Game.poison_swamp_access;
	Game.swamp_skulltula_main_room_lower_left_soft_soil = Game.poison_swamp_access && Game.any_bottle;
	Game.swamp_skulltula_monument_room_crate_1 = Game.poison_swamp_access;
	Game.swamp_skulltula_main_room_upper_soft_soil = Game.poison_swamp_access && Game.any_bottle;
	Game.swamp_skulltula_main_room_lower_right_soft_soil = Game.poison_swamp_access && Game.any_bottle;
	Game.swamp_skulltula_monument_room_lower_wall = Game.poison_swamp_access && (Game.hookshot || Game.zora_mask || (Game.water_for_magic_bean && Game.any_magic_bean && (Game.goron_mask || Game.explosive)));
	Game.swamp_skulltula_monument_room_on_monument = Game.poison_swamp_access;
	Game.swamp_skulltula_main_room_pillar = Game.poison_swamp_access;
	Game.swamp_skulltula_pot_room_pot_1 = Game.poison_swamp_access;
	Game.swamp_skulltula_pot_room_pot_2 = Game.poison_swamp_access;
	Game.swamp_skulltula_gold_room_hive = Game.poison_swamp_access && (Game.hookshot || Game.zora_mask || Game.bow || (Game.deku_mask && Game.magic));
	Game.swamp_skulltula_main_room_upper_pillar = Game.poison_swamp_access;
	Game.swamp_skulltula_pot_room_behind_vines = Game.poison_swamp_access;
	Game.swamp_skulltula_tree_room_tree_1 = Game.poison_swamp_access;
	Game.swamp_skulltula_pot_room_wall = Game.poison_swamp_access;
	Game.swamp_skulltula_pot_room_hive_1 = Game.poison_swamp_access && (Game.hookshot || Game.zora_mask || Game.bow || (Game.deku_mask && Game.magic));
	Game.swamp_skulltula_tree_room_tree_2 = Game.poison_swamp_access;
	Game.swamp_skulltula_gold_room_wall = Game.poison_swamp_access;
	Game.swamp_skulltula_tree_room_hive = Game.poison_swamp_access && (Game.hookshot || Game.zora_mask || Game.bow || (Game.deku_mask && Game.magic));
	Game.swamp_skulltula_monument_room_crate_2 = Game.poison_swamp_access;
	Game.swamp_skulltula_pot_room_hive_2 = Game.poison_swamp_access && (Game.hookshot || Game.zora_mask || Game.bow || (Game.deku_mask && Game.magic));
	Game.swamp_skulltula_tree_room_tree_3 = Game.poison_swamp_access;
	Game.swamp_skulltula_main_room_jar = Game.poison_swamp_access;
	
	// Mountain area shortcuts
	Game.north_access = (Game.hot_spring_water && (Game.goron_mask || Game.explosive)) || (Game.bow && (Game.explosive || (Game.fire_arrow && Game.magic) || Game.goron_mask));
	Game.hot_spring_water = Game.north_access && Game.any_bottle && ((Game.lens && Game.goron_mask && Game.magic) || (Game.bow && Game.fire_arrow && Game.magic) || Game.snowhead_clear);
	
	Game.snowhead_temple_access = Game.north_access && Game.goron_mask && Game.lullaby && Game.magic;
	Game.enter_snowhead_temple = Game.zora_mask || Game.goron_mask;
	
	Game.snowhead_key_1_block_room = Game.snowhead_temple_access && Game.enter_snowhead_temple && ((Game.goron_mask && Game.magic) || (Game.fire_arrow && Game.bow && Game.magic));
	
	Game.snowhead_key_2_icicle_room = Game.snowhead_temple_access && Game.enter_snowhead_temple && ((Game.hookshot && Game.explosive && Game.magic) || (Game.magic && Game.hookshot && Game.goron_mask && Game.one_snowhead_key) || (Game.explosive && Game.one_snowhead_key) || (Game.fire_arrow && Game.bow && Game.magic && Game.one_snowhead_key) || (Game.explosive && Game.bow && Game.fire_arrow && Game.zora_mask && Game.magic));
	
	Game.snowhead_key_3_bridge_room = Game.snowhead_temple_access && Game.enter_snowhead_temple && ((Game.fire_arrow && Game.bow && Game.magic) || (Game.hookshot && Game.goron_mask));
	
	Game.one_snowhead_key = Game.snowhead_key_1_block_room || Game.snowhead_key_2_icicle_room || Game.snowhead_key_3_bridge_room;
	
	Game.two_snowhead_keys = (Game.snowhead_key_1_block_room && Game.snowhead_key_2_icicle_room) || (Game.snowhead_key_1_block_room && Game.snowhead_key_3_bridge_room) || (Game.snowhead_key_2_icicle_room && Game.snowhead_key_3_bridge_room);
	
	Game.snowhead_boss_key = Game.snowhead_temple_access && Game.magic && Game.fire_arrow && Game.bow && Game.goron_mask;
	
	Game.snowhead_clear = Game.snowhead_temple_access && Game.magic && Game.fire_arrow && Game.bow && Game.goron_mask && Game.snowhead_boss_key;
	
	// Great Bay area shortcuts
	Game.west_access = Game.eponas_song;
	Game.ocean_skulltulas = Game.explosive && Game.west_access && Game.hookshot;
	Game.pirates_fortress_access = Game.west_access && Game.zora_mask;
	Game.pinnacle_rock_access = Game.zora_mask;
	Game.seahorse = Game.pictobox && Game.west_access && Game.pirates_fortress_access;
	Game.great_bay_temple_access = Game.pirates_fortress_access && Game.nwbn && Game.hookshot;
	Game.great_bay_key_1 = Game.great_bay_temple_access && Game.zora_mask && Game.hookshot;
	Game.great_bay_boss_key = Game.great_bay_temple_access && Game.zora_mask && Game.hookshot;
	Game.great_bay_clear = Game.great_bay_temple_access && Game.zora_mask && Game.hookshot && Game.bow && Game.magic && Game.great_bay_boss_key && Game.ice_arrow; 

	// Ikana area shortcuts
	Game.ikana_graveyard_access = Game.eponas_song;
	Game.east_access = Game.hookshot && Game.ikana_graveyard_access && (Game.garo_mask || Game.gibdo_mask);
	Game.ikana_canyon_access = Game.east_access;
	
	Game.stone_tower_temple_access = Game.ikana_canyon_access && Game.hookshot && Game.elegy && (Game.goron_mask || Game.zora_mask);
	
	Game.inverted_stone_tower_temple_access = Game.stone_tower_temple_access && Game.bow && Game.light_arrow && Game.magic;
	
	Game.stone_tower_key_1_armos = Game.stone_tower_temple_access && ((Game.mirror_shield && Game.explosive && Game.goron_mask) || (Game.explosive && Game.bow && Game.light_arrow && Game.magic && Game.goron_mask) || (Game.light_arrow && Game.bow && Game.magic && Game.one_stone_tower_key && Game.zora_mask));
	
	Game.stone_tower_key_2_eyegore = Game.stone_tower_temple_access && ((Game.light_arrow && Game.bow && Game.magic && Game.zora_mask) || (Game.one_stone_tower_key && Game.explosive && Game.goron_mask));
	
	Game.stone_tower_key_3_updaft = Game.inverted_stone_tower_temple_access && Game.bow && Game.light_arrow && Game.magic && Game.deku_mask;
	
	Game.stone_tower_key_4_death_armos = Game.inverted_stone_tower_temple_access && Game.bow && Game.light_arrow && Game.magic && Game.deku_mask && Game.one_stone_tower_key && Game.hookshot;
	
	Game.one_stone_tower_key = Game.stone_tower_key_1_armos || Game.stone_tower_key_2_eyegore || Game.stone_tower_key_3_updaft || Game.stone_tower_key_4_death_armos;
	
	Game.two_stone_tower_keys = (Game.stone_tower_key_1_armos && Game.stone_tower_key_2_eyegore) || (Game.stone_tower_key_1_armos && Game.stone_tower_key_3_updaft) || (Game.stone_tower_key_1_armos && Game.stone_tower_key_4_death_armos) || (Game.stone_tower_key_2_eyegore && Game.stone_tower_key_3_updaft) || (Game.stone_tower_key_2_eyegore && Game.stone_tower_key_4_death_armos) || (Game.stone_tower_key_3_updaft && Game.stone_tower_key_4_death_armos);
	
	Game.istt_eyegore_access = Game.deku_mask && Game.two_stone_tower_keys;
	Game.stone_tower_boss_key = Game.inverted_stone_tower_temple_access && Game.light_arrow && Game.bow && Game.magic && Game.deku_mask && Game.one_stone_tower_key && Game.hookshot;
	
	Game.ikana_clear = Game.inverted_stone_tower_temple_access && Game.hookshot && Game.bow && Game.light_arrow && Game.stone_tower_boss_key && Game.magic && Game.istt_eyegore_access && Game.giants_mask;
	
	Game.any_blue_potion = Game.any_bottle;
	Game.any_milk = Game.any_bottle; // gorman bros purchase requires nothing but bottle
	Game.zora_egg = Game.any_bottle && Game.pirates_fortress_access && Game.hookshot && Game.pinnacle_rock_access && ((Game.deku_mask && Game.magic) || Game.bow);
	Game.big_poe = Game.any_bottle && Game.ikana_canyon_access && Game.gibdo_mask && Game.bomb && ((Game.light_arrow && Game.magic && Game.bow) || (Game.limitless_magic_beans && (Game.bow || Game.zora_mask)));
	
	Game.any_magic_bean = Game.deku_mask || (Game.moons_tear && Game.land_title_deed) || Game.magic_bean; 
	
	if(document.getElementById("small_keys_option").value == "KEYSY") {
		Logic.one_snowhead_key = true;
		Logic.two_snowhead_keys = true;
		Logic.one_stone_tower_key = true;
		Logic.two_stone_tower_keys = true;
		Logic.three_stone_tower_keys = true;
		Game.one_snowhead_key = true;
		Game.two_snowhead_keys = true;
		Game.one_stone_tower_key = true;
		Game.two_stone_tower_keys = true;
		Game.three_stone_tower_keys = true;
	}
}

function update_location_logic() {
	
	// South Clock Town
	Location_Logic["Clock Tower Entrance"] = true;
	Location_Logic["South Clock Town Straw Roof Chest"] = Logic.hookshot || (Logic.deku_mask && Logic.moons_tear);
	Location_Logic["South Clock Town Final Day Chest"] = Logic.hookshot || (Logic.deku_mask && Logic.moons_tear);
	Location_Logic["Clock Town Scrub Trade"] = Logic.moons_tear;
	Location_Logic["Postbox"] = Logic.postmans_hat;
		
	// North Clock Town
	Location_Logic["Bombers' Hide and Seek"] = (Logic.deku_mask && Logic.magic) || Logic.zora_mask || Logic.bow || Logic.hookshot;
	Location_Logic["Clock Town Map Purchase"] = (Logic.deku_mask && Logic.magic) || Logic.zora_mask || Logic.bow || Logic.hookshot;
	Location_Logic["Deku Playground Any Day"] = Logic.deku_mask;
	Location_Logic["Keaton Quiz"] = Logic.keaton_mask;
	Location_Logic["North Clock Town Tree"] = true;
	Location_Logic["Old Lady"] = true;
	Location_Logic["Town Great Fairy"] = true;
	Location_Logic["Town Great Fairy Non-Human"] = Logic.deku_mask || Logic.goron_mask || Logic.zora_mask;
		
	// West Clock Town
	Location_Logic["Bomb Bag Purchase"] = true;
	Location_Logic["Big Bomb Bag Purchase"] = true;
	Location_Logic["Bank Reward #1 (Adult's Wallet)"] = true;
	Location_Logic["Postman's Game"] = Logic.bunny_hood;
	Location_Logic["Rosa Sisters"] = Logic.kamaro_mask;
	Location_Logic["Swordsman's School"] = true;
	Location_Logic["All Night Mask Purchase"] = Logic.giants_wallet;
	Location_Logic["Bank Reward #3 (Piece of Heart)"] = Logic.giants_wallet;
	Location_Logic["Bank Reward #2 (Blue Rupee)"] = Logic.adults_wallet;
		
	// Laundry Pool
	Location_Logic["Guru Guru"] = true;
	Location_Logic["Kafei"] = Logic.letter_to_kafei;
	Location_Logic["Curiosity Shop Man #1"] = Logic.letter_to_kafei;
	Location_Logic["Curiosity Shop Man #2"] = Logic.letter_to_kafei;
		
	// East Clock Town
	Location_Logic["Bombers' Hideout Chest"] = Logic.explosive && ((Logic.deku_mask && Logic.magic) || Logic.zora_mask || Logic.bow || Logic.hookshot);
	Location_Logic["East Clock Town Chest"] = true;
	Location_Logic["Gorman"] = Logic.deku_mask && Logic.goron_mask && Logic.zora_mask && Logic.romani_mask;
	Location_Logic["Honey and Darling Any Day"] = Logic.bow || Logic.bomb || (Logic.deku_mask && Logic.magic);
	Location_Logic["Madame Aroma in Bar"] = Logic.special_delivery && Logic.kafei_mask;
	Location_Logic["Madame Aroma in Office"] = true;
	Location_Logic["Mayor"] = Logic.couples_mask;
	Location_Logic["Postman's Freedom Reward"] = Logic.special_delivery;
	Location_Logic["Town Archery #1"] = Logic.bow;
	Location_Logic["Treasure Chest Game Goron"] = Logic.goron_mask;
		
	// Stock Pot Inn
	Location_Logic["Inn Reservation"] = true;
	Location_Logic["Midnight Meeting"] = Logic.kafei_mask && Logic.night_inn_access;
	Location_Logic["Toilet Hand"] = Logic.night_inn_access && (Logic.land_title_deed || Logic.swamp_title_deed || Logic.mountain_title_deed || Logic.ocean_title_deed || Logic.letter_to_kafei || Logic.special_delivery);
	Location_Logic["Grandma Short Story"] = Logic.allnight_mask;
	Location_Logic["Grandma Long Story"] = Logic.allnight_mask;
	Location_Logic["Inn Staff Room Chest"] = true;
	Location_Logic["Inn Guest Room Chest"] = Logic.room_key;
		
	// Termina Field
	Location_Logic["Astronomy Telescope"] = Logic.deku_mask || Logic.hookshot || Logic.zora_mask || Logic.bow;
	Location_Logic["Gossip Stones"] = (Logic.goron_mask && Logic.lullaby) || (Logic.deku_mask && Logic.sonata && (Logic.explosive || Logic.goron_mask)) || (Logic.zora_mask && Logic.nwbn && (Logic.explosive || Logic.goron_mask));
	Location_Logic["Business Scrub Purchase"] = Logic.adults_wallet && (Logic.deku_mask || Logic.hookshot || Logic.zora_mask || Logic.bow);
	Location_Logic["Peahat Grotto"] = true;
	Location_Logic["Dodongo Grotto"] = true;
	Location_Logic["Kamaro"] = Logic.song_of_healing;
	Location_Logic["Termina Field Pillar Grotto"] = true;
	Location_Logic["Termina Field Grass Grotto"] = true;
	Location_Logic["Termina Field Underwater Chest"] = Logic.zora_mask;
	Location_Logic["Termina Field Grass Chest"] = true;
	Location_Logic["Termina Field Stump Chest"] = Logic.hookshot || (Logic.any_magic_bean && Logic.water_for_magic_bean); 
	Location_Logic["Bio Baba Grotto"] = Logic.zora_mask && (Logic.explosive || Logic.goron_mask);
		
	// Road to Southern Swamp
	Location_Logic["Swamp Archery #1"] = Logic.bow;
	Location_Logic["Path to Swamp Grotto"] = true;
	Location_Logic["Path to Swamp Tree"] = (Logic.deku_mask && Logic.magic) || Logic.bow || Logic.hookshot || Logic.zora_mask;
	Location_Logic["Woodfall Map Purchase"] = (Logic.deku_mask && Logic.magic) || Logic.zora_mask || Logic.bow || Logic.hookshot;
	Location_Logic["Snowhead Map Purchase"] = (Logic.deku_mask && Logic.magic) || Logic.zora_mask || Logic.bow || Logic.hookshot;
		
	// Southern Swamp
	Location_Logic["Koume Pictobox"] = Logic.any_bottle;
	Location_Logic["Kotake Red Potion"] = true;
	Location_Logic["Swamp Scrub Trade"] = Logic.land_title_deed;
	Location_Logic["Pictograph Contest Winner"] = Logic.pictobox;
	Location_Logic["Boat Archery"] = Logic.woodfall_clear && Logic.any_bottle; 
	
	Location_Logic["Swamp Spider House Reward"] = Logic.poison_swamp_access && Logic.swamp_skulltula_main_room_near_ceiling && Logic.swamp_skulltula_gold_room_near_ceiling && Logic.swamp_skulltula_monument_room_torch && Logic.swamp_skulltula_gold_room_pillar && Logic.swamp_skulltula_pot_room_jar && Logic.swamp_skulltula_tree_room_grass_1 && Logic.swamp_skulltula_tree_room_grass_2 && Logic.swamp_skulltula_main_room_water && Logic.swamp_skulltula_main_room_lower_left_soft_soil && Logic.swamp_skulltula_monument_room_crate_1 && Logic.swamp_skulltula_main_room_upper_soft_soil && Logic.swamp_skulltula_main_room_lower_right_soft_soil && Logic.swamp_skulltula_monument_room_lower_wall && Logic.swamp_skulltula_monument_room_on_monument && Logic.swamp_skulltula_main_room_pillar && Logic.swamp_skulltula_pot_room_pot_1 && Logic.swamp_skulltula_pot_room_pot_2 && Logic.swamp_skulltula_gold_room_hive && Logic.swamp_skulltula_main_room_upper_pillar && Logic.swamp_skulltula_pot_room_behind_vines && Logic.swamp_skulltula_tree_room_tree_1 && Logic.swamp_skulltula_pot_room_wall && Logic.swamp_skulltula_pot_room_hive_1 && Logic.swamp_skulltula_tree_room_tree_2 && Logic.swamp_skulltula_gold_room_wall && Logic.swamp_skulltula_tree_room_hive && Logic.swamp_skulltula_monument_room_crate_2 && Logic.swamp_skulltula_pot_room_hive_2 && Logic.swamp_skulltula_tree_room_tree_3 && Logic.swamp_skulltula_main_room_jar;
	
	Location_Logic["Near Swamp Spider House Grotto"] = Logic.poison_swamp_access && (Logic.deku_mask || Logic.zora_mask);
	Location_Logic["Mystery Woods Grotto"] = true;
	Location_Logic["Swamp Tourist Center Roof"] = Logic.deku_mask && Logic.land_title_deed;
		
	// Deku Palace
	Location_Logic["Bean Man"] = Logic.poison_swamp_access && Logic.deku_mask;
	Location_Logic["Butler"] = Logic.woodfall_clear && Logic.poison_swamp_access && Logic.deku_mask && Logic.any_bottle; 
	Location_Logic["Bean Grotto"] = Logic.poison_swamp_access && (((Logic.hookshot || Logic.water_for_magic_bean) && Logic.deku_mask)); 
	Location_Logic["Deku Palace West Garden"] = Logic.poison_swamp_access && Logic.deku_mask;
		
	// Woodfall
	Location_Logic["Woodfall Bridge Chest"] = Logic.poison_swamp_access && Logic.deku_mask;
	Location_Logic["Behind Woodfall Owl Chest"] = Logic.poison_swamp_access && Logic.deku_mask;
	Location_Logic["Entrance to Woodfall Chest"] = Logic.poison_swamp_access && Logic.deku_mask;
		
	// Milk Road
	Location_Logic["Gorman Bros Race"] = Logic.eponas_song;
	Location_Logic["Romani Ranch Map Purchase"] = (Logic.deku_mask && Logic.magic) || Logic.zora_mask || Logic.bow || Logic.hookshot;
	Location_Logic["Great Bay Map Purchase"] = (Logic.deku_mask && Logic.magic) || Logic.zora_mask || Logic.bow || Logic.hookshot;
		
	// Romani Ranch
	Location_Logic["Aliens Defense"] = Logic.epona_access && Logic.bow;
	Location_Logic["Dog Race"] = Logic.mask_of_truth;
	Location_Logic["Grog"] = Logic.bremen_mask;
	Location_Logic["Cremia"] = Logic.epona_access && Logic.bow;
	Location_Logic["Doggy Racetrack Roof Chest"] = Logic.zora_mask || Logic.hookshot || (Logic.any_magic_bean && Logic.water_for_magic_bean);
		
	// Mountain Village
	Location_Logic["Mountain Smithy Day 1"] = Logic.north_access && Logic.adults_wallet && ((Logic.magic && Logic.fire_arrow && Logic.bow) || Logic.hot_spring_water || Logic.snowhead_clear);
	Location_Logic["Mountain Smithy Day 2"] = Logic.north_access && Logic.bottle_gold_dust && ((Logic.magic && Logic.fire_arrow && Logic.bow) || Logic.hot_spring_water || Logic.snowhead_clear);
	Location_Logic["Frog Choir"] = Logic.dongero_mask && Logic.snowhead_clear && Logic.woodfall_temple_access && Logic.great_bay_temple_access && Logic.hookshot && Logic.deku_mask && Logic.zora_mask && Logic.ice_arrow && Logic.bow && Logic.magic && Logic.fire_arrow;
	Location_Logic["Hungry Goron"] = Logic.north_access && Logic.goron_mask && Logic.magic;
	Location_Logic["Darmani"] = Logic.song_of_healing && Logic.north_access && Logic.lens && Logic.magic;
	Location_Logic["Mountain Waterfall Chest"] = Logic.snowhead_clear;
	Location_Logic["Mountain Spring Grotto"] = Logic.snowhead_clear;
		
	// Twin Islands
	Location_Logic["Goron Race"] = Logic.snowhead_clear && Logic.goron_mask && Logic.magic;
	Location_Logic["Twin Islands Underwater Ramp Chest"] = Logic.snowhead_clear && Logic.zora_mask;
	Location_Logic["Hot Spring Water Grotto"] = Logic.north_access && Logic.explosive && ((Logic.magic && Logic.fire_arrow && Logic.bow) || Logic.hot_spring_water || Logic.snowhead_clear);
	Location_Logic["Twin Islands Cave Chest"] = Logic.snowhead_clear && Logic.zora_mask;
	Location_Logic["Goron Racetrack Grotto"] = Logic.north_access && Logic.explosive && (Logic.goron_mask || Logic.hookshot); 
		
	// Goron Village
	Location_Logic["Powder Keg Challenge"] = Logic.north_access && Logic.goron_mask && ((Logic.magic && Logic.fire_arrow && Logic.bow) || Logic.snowhead_clear);
	Location_Logic["Lens of Truth Chest"] = Logic.north_access;
	Location_Logic["Biggest Bomb Bag Purchase"] = Logic.north_access && Logic.adults_wallet && (Logic.goron_mask || (Logic.deku_mask && Logic.moons_tear && Logic.land_title_deed && Logic.swamp_title_deed));
	Location_Logic["Mountain Scrub Trade"] = Logic.north_access && Logic.deku_mask && Logic.swamp_title_deed;
	Location_Logic["Lens Cave Invisible Chest"] = Logic.north_access;
	Location_Logic["Lens Cave Rock Chest"] = Logic.north_access && Logic.explosive;
	Location_Logic["Goron Village Ledge"] = Logic.north_access && Logic.deku_mask && Logic.swamp_title_deed;
		
	// Path to Snowhead
	Location_Logic["Path to Snowhead Grotto"] = Logic.north_access && Logic.explosive && Logic.goron_mask && Logic.magic;
	Location_Logic["Path to Snowhead Pillar"] = Logic.north_access && Logic.hookshot && Logic.goron_mask && Logic.magic && Logic.lens;
		
	// Great Bay Coast
	Location_Logic["Ocean Spider House Day 1 Reward"] = Logic.ocean_skulltulas && Logic.bow && Logic.fire_arrow && Logic.magic;
	Location_Logic["Fisherman Game"] = Logic.great_bay_clear && Logic.hookshot;
	Location_Logic["Ocean Spider House Chest"] = Logic.bow && Logic.ocean_skulltulas && Logic.captains_hat;
	Location_Logic["Mikau"] = Logic.west_access && Logic.song_of_healing;
	Location_Logic["Great Bay Coast Grotto"] = Logic.west_access;
	Location_Logic["Lab Fish"] = Logic.west_access && Logic.any_bottle;
	Location_Logic["Great Bay Coast Ledge"] = Logic.west_access && Logic.hookshot && Logic.any_magic_bean && Logic.water_for_magic_bean;
	Location_Logic["Stone Tower Map Purchase"] = Logic.west_access && (Logic.hookshot || Logic.bow);
	Location_Logic["Fisherman Pictograph"] = Logic.pictobox && Logic.west_access && Logic.pirates_fortress_access;
		
	// Zora Cape
	Location_Logic["Beaver Race #1"] = Logic.hookshot && Logic.zora_mask && Logic.west_access;
	Location_Logic["Beaver Race #2"] = Logic.hookshot && Logic.zora_mask && Logic.west_access;
	Location_Logic["Zora Cape Ledge Without Tree Chest"] = Logic.hookshot && Logic.west_access;
	Location_Logic["Zora Cape Ledge With Tree Chest"] = Logic.hookshot && Logic.west_access;
	Location_Logic["Zora Cape Grotto"] = Logic.west_access && (Logic.goron_mask || Logic.explosive);
	Location_Logic["Zora Cape Underwater Chest"] = Logic.zora_mask && Logic.west_access;
	Location_Logic["Zora Cape Like-Like"] = Logic.pirates_fortress_access;
		
	// Zora Hall
	Location_Logic["Ocean Scrub Trade"] = Logic.goron_mask && Logic.mountain_title_deed && Logic.zora_mask && Logic.west_access;
	Location_Logic["Evan"] = Logic.zora_mask && Logic.west_access;
	Location_Logic["Lulu's Room Ledge"] = Logic.pirates_fortress_access && Logic.goron_mask && Logic.deku_mask && Logic.mountain_title_deed;
	Location_Logic["Zora Hall Stage Lights"] = Logic.fire_arrow && Logic.bow && Logic.magic && Logic.west_access && Logic.zora_mask;
		
	// Pirates' Fortress Exterior
	Location_Logic["Pirates' Fortress Exterior Log Chest"] = Logic.pirates_fortress_access;
	Location_Logic["Pirates' Fortress Exterior Sand Chest"] = Logic.pirates_fortress_access;
	Location_Logic["Pirates' Fortress Exterior Corner Chest"] = Logic.pirates_fortress_access;
		
	// Pirates' Fortress Sewer
	Location_Logic["Pirates' Fortress Cage Room Shallow Chest"] = Logic.pirates_fortress_access && Logic.goron_mask;
	Location_Logic["Pirates' Fortress Cage Room Deep Chest"] = Logic.pirates_fortress_access && Logic.goron_mask;
	Location_Logic["Pirates' Fortress Maze Chest"] = Logic.pirates_fortress_access && Logic.goron_mask;
	Location_Logic["Pirates' Fortress Cage"] = Logic.pirates_fortress_access && Logic.goron_mask;
		
	// Pirates' Fortress Interior
	Location_Logic["Hookshot Chest"] = Logic.pirates_fortress_access && ((Logic.bow || (Logic.deku_mask && Logic.magic)) && (Logic.goron_mask || Logic.hookshot));
	Location_Logic["Pirates' Fortress Interior Lower Chest"] = Logic.pirates_fortress_access && (Logic.goron_mask || Logic.hookshot);
	Location_Logic["Pirates' Fortress Interior Upper Chest"] = Logic.pirates_fortress_access && Logic.hookshot;
	Location_Logic["Pirates' Fortress Interior Tank Chest"] = Logic.pirates_fortress_access && Logic.hookshot;
	Location_Logic["Pirates' Fortress Interior Guard Room Chest"] = Logic.pirates_fortress_access && Logic.hookshot;
		
	// Pinnacle Rock
	Location_Logic["Seahorses"] = Logic.west_access && Logic.zora_mask && Logic.any_bottle && Logic.seahorse;
	Location_Logic["Pinnacle Rock Lower Chest"] = Logic.pinnacle_rock_access && Logic.west_access;
	Location_Logic["Pinnacle Rock Upper Chest"] = Logic.pinnacle_rock_access && Logic.west_access;
		
	// Path to Ikana Canyon
	Location_Logic["Invisible Soldier"] = Logic.lens && Logic.magic && Logic.any_bottle && Logic.eponas_song;
	Location_Logic["Path to Ikana Pillar Chest"] = Logic.hookshot;
	Location_Logic["Path to Ikana Grotto"] = Logic.goron_mask;
		
	// Ikana Graveyard
	Location_Logic["Dampe Digging"] = Logic.captains_hat && Logic.ikana_graveyard_access && (Logic.zora_mask || Logic.bow);
	Location_Logic["Iron Knuckle Chest"] = Logic.captains_hat && Logic.ikana_graveyard_access && Logic.explosive;
	Location_Logic["Captain Keeta's Chest"] = Logic.sonata && Logic.ikana_graveyard_access && Logic.bow;
	Location_Logic["Day 1 Grave Bats"] = Logic.captains_hat && Logic.ikana_graveyard_access;
	Location_Logic["Ikana Graveyard Grotto"] = Logic.ikana_graveyard_access && Logic.explosive;
		
	// Ikana Canyon
	Location_Logic["Poe Hut"] = Logic.ikana_canyon_access && Logic.bow;
	Location_Logic["Pamela's Father"] = Logic.song_of_healing && Logic.ikana_canyon_access && Logic.song_of_storms;
	Location_Logic["Secret Shrine Grotto"] = Logic.east_access;
	Location_Logic["Ikana Canyon Ledge"] = Logic.zora_mask && Logic.ocean_title_deed && Logic.deku_mask && Logic.east_access;
	Location_Logic["Canyon Scrub Trade"] = Logic.zora_mask && Logic.ocean_title_deed && Logic.east_access;
		
	// Secret Shrine
	Location_Logic["Secret Shrine Final Chest"] = Logic.bow && Logic.light_arrow && Logic.east_access && Logic.magic;
	Location_Logic["Secret Shrine Dinolfos Chest"] = Logic.bow && Logic.light_arrow && Logic.east_access && Logic.magic;
	Location_Logic["Secret Shrine Wizzrobe Chest"] = Logic.bow && Logic.light_arrow && Logic.east_access && Logic.magic;
	Location_Logic["Secret Shrine Wart Chest"] = Logic.bow && Logic.light_arrow && Logic.east_access && Logic.magic;
	Location_Logic["Secret Shrine Garo Master Chest"] = Logic.bow && Logic.light_arrow && Logic.east_access && Logic.magic;
		
	// Beneath the Well 
	Location_Logic["Mirror Shield Chest"] = Logic.ikana_canyon_access && ((Logic.fire_arrow && Logic.light_arrow && Logic.bow && Logic.magic) || (Logic.light_arrow && Logic.gibdo_mask && Logic.bow && Logic.magic && Logic.any_milk && Logic.big_poe) || (Logic.gibdo_mask && Logic.big_poe && Logic.any_milk && Logic.limitless_magic_beans));
	Location_Logic["Well Right Path Chest"] =  Logic.ikana_canyon_access && Logic.gibdo_mask && Logic.any_bottle && ((Logic.light_arrow && Logic.bow && Logic.magic) || Logic.limitless_magic_beans);
	Location_Logic["Well Left Path Chest"] = Logic.ikana_canyon_access && Logic.gibdo_mask && Logic.any_blue_potion;
		
	// Ikana Castle
	Location_Logic["Ikana Castle Pillar"] = Logic.ikana_canyon_access && Logic.bow && Logic.deku_mask && Logic.fire_arrow && Logic.magic && Logic.lens && (Logic.light_arrow || Logic.mirror_shield);
		
	// Stone Tower
	Location_Logic["Inverted Stone Tower Left Chest"] = Logic.stone_tower_temple_access && Logic.bow && Logic.light_arrow && Logic.magic && Logic.any_magic_bean && Logic.water_for_magic_bean;
	Location_Logic["Inverted Stone Tower Middle Chest"] = Logic.stone_tower_temple_access && Logic.bow && Logic.light_arrow && Logic.magic && Logic.any_magic_bean && Logic.water_for_magic_bean;
	Location_Logic["Inverted Stone Tower Right Chest"] = Logic.stone_tower_temple_access && Logic.bow && Logic.light_arrow && Logic.magic && Logic.any_magic_bean && Logic.water_for_magic_bean;
		
	// Woodfall Temple
	Location_Logic["WFT_Bow"] = Logic.woodfall_temple_access;
	Location_Logic["WFT_Map"] = Logic.woodfall_temple_access && (Logic.deku_mask || (Logic.hookshot && (Logic.explosive || Logic.goron_mask)));
	Location_Logic["key_WFT"] = Logic.woodfall_temple_access;
	Location_Logic["WFT_Compass"] = Logic.woodfall_temple_access;
	Location_Logic["WFT_Odolwa_Heart"] = Logic.woodfall_temple_access && Logic.bow && Logic.deku_mask;
		
	// Snowhead Temple
	Location_Logic["SHT_Fire_Arrow"] = Logic.snowhead_temple_access && Logic.enter_snowhead_temple && ((Logic.fire_arrow && Logic.bow && Logic.magic) || Logic.hookshot || (Logic.goron_mask && Logic.explosive && Logic.magic && Logic.two_snowhead_keys) || (Logic.goron_mask && Logic.explosive && Logic.magic && Logic.one_snowhead_key && Logic.zora_mask));
	Location_Logic["key_SHT1"] = Logic.snowhead_key_1_block_room;
	Location_Logic["key_SHT2"] = Logic.snowhead_key_2_icicle_room;
	Location_Logic["key_SHT3"] = Logic.snowhead_key_3_bridge_room;
	Location_Logic["SHT_Map"] = Logic.snowhead_temple_access && Logic.enter_snowhead_temple && ((Logic.goron_mask && Logic.magic) || Logic.hookshot || (Logic.explosive && Logic.two_snowhead_keys));
	Location_Logic["SHT_Compass"] = Logic.snowhead_temple_access && Logic.enter_snowhead_temple && (Logic.hookshot || Logic.one_snowhead_key);
	Location_Logic["SHT_Goht_Heart"] = Logic.snowhead_temple_access && Logic.enter_snowhead_temple && Logic.bow && Logic.fire_arrow && Logic.goron_mask && Logic.magic && Logic.snowhead_boss_key;
		
	// Great Bay Temple
	Location_Logic["GBT_Ice_Arrow"] = Logic.great_bay_temple_access && Logic.zora_mask && Logic.hookshot && Logic.great_bay_key_1;
	Location_Logic["GBT_Map"] = Logic.great_bay_temple_access && Logic.zora_mask && Logic.hookshot;
	Location_Logic["GBT_Compass"] = Logic.great_bay_temple_access && Logic.zora_mask && Logic.hookshot;
	Location_Logic["key_GBT"] = Logic.great_bay_key_1;
	Location_Logic["GBT_Gyorg_Heart"] = Logic.great_bay_temple_access && Logic.zora_mask && Logic.hookshot && Logic.great_bay_boss_key && Logic.bow && Logic.magic && Logic.ice_arrow && Logic.fire_arrow;
		
	// Stone Tower Temple
	Location_Logic["STT_Light_Arrow"] = Logic.stone_tower_temple_access && ((Logic.light_arrow && Logic.bow && Logic.magic && Logic.one_stone_tower_key) || (Logic.deku_mask && Logic.mirror_shield && Logic.goron_mask && Logic.zora_mask && Logic.explosive && Logic.two_stone_tower_keys));
	Location_Logic["key_STT1"] = Logic.stone_tower_key_1_armos;
	Location_Logic["key_STT2"] = Logic.stone_tower_key_2_eyegore;
	Location_Logic["key_STT3"] = Logic.stone_tower_key_3_updaft;
	Location_Logic["key_STT4"] = Logic.stone_tower_key_4_death_armos;
	Location_Logic["STT_Giants"] = Logic.inverted_stone_tower_temple_access && Logic.hookshot && Logic.light_arrow && Logic.bow && Logic.magic && Logic.istt_eyegore_access;
	Location_Logic["STT_Map"] = Logic.stone_tower_temple_access && ((Logic.mirror_shield && Logic.explosive && Logic.goron_mask) || (Logic.explosive && Logic.bow && Logic.light_arrow && Logic.magic && Logic.goron_mask) || (Logic.light_arrow && Logic.bow && Logic.magic && Logic.one_stone_tower_key && Logic.zora_mask));
	Location_Logic["STT_Compass"] = Logic.stone_tower_temple_access && ((Logic.light_arrow && Logic.bow && Logic.magic) || (Logic.mirror_shield && Logic.goron_mask && Logic.zora_mask && Logic.one_stone_tower_key));;
	Location_Logic["STT_Twinmold_Heart"] = Logic.inverted_stone_tower_temple_access && Logic.hookshot && Logic.bow && Logic.light_arrow && Logic.stone_tower_boss_key && Logic.magic && Logic.istt_eyegore_access && Logic.giants_mask;
		
	// Songs
	Location_Logic["Song_Starting"] = true;
	Location_Logic["Song_BlueWarp"] = Logic.woodfall_clear || Logic.snowhead_clear || Logic.great_bay_clear || Logic.ikana_clear;
	Location_Logic["Song_Ranch"] = Logic.epona_access;
	Location_Logic["Song_Graveyard"] = Logic.captains_hat && Logic.ikana_graveyard_access;
	Location_Logic["Song_Swamp"] = Logic.poison_swamp_access && Logic.deku_mask && Logic.water_for_magic_bean;
	Location_Logic["Song_Goron"] = Logic.north_access && Logic.goron_mask;
	Location_Logic["Song_Eggs"] = Logic.zora_egg && Logic.zora_mask && Logic.west_access;
	Location_Logic["Song_Castle"] = Logic.ikana_canyon_access && Logic.bow && Logic.fire_arrow && Logic.mirror_shield && Logic.magic && (Logic.light_arrow || (Logic.deku_mask && Logic.powder_keg && Logic.goron_mask && Logic.lens));
	
	
	
	// South Clock Town
	Location_Access["Clock Tower Entrance"] = true;
	Location_Access["South Clock Town Straw Roof Chest"] = true;
	Location_Access["South Clock Town Final Day Chest"] = Game.hookshot || (Game.deku_mask && Game.moons_tear);
	Location_Access["Clock Town Scrub Trade"] = Game.moons_tear;
	Location_Access["Postbox"] = Game.postmans_hat;
		
	// North Clock Town
	Location_Access["Bombers' Hide and Seek"] = (Game.deku_mask && Game.magic) || Game.zora_mask || Game.bow || Game.hookshot;
	Location_Access["Clock Town Map Purchase"] = true;
	Location_Access["Deku Playground Any Day"] = Game.deku_mask;
	Location_Access["Keaton Quiz"] = Game.keaton_mask;
	Location_Access["North Clock Town Tree"] = true;
	Location_Access["Old Lady"] = true;
	Location_Access["Town Great Fairy"] = true;
	Location_Access["Town Great Fairy Non-Human"] = Game.deku_mask || Game.goron_mask || Game.zora_mask;
		
	// West Clock Town
	Location_Access["Bomb Bag Purchase"] = true;
	Location_Access["Big Bomb Bag Purchase"] = true;
	Location_Access["Bank Reward #1 (Adult's Wallet)"] = true;
	Location_Access["Postman's Game"] = true;
	Location_Access["Rosa Sisters"] = Game.kamaro_mask;
	Location_Access["Swordsman's School"] = true;
	Location_Access["All Night Mask Purchase"] = true;
	Location_Access["Bank Reward #3 (Piece of Heart)"] = true;
	Location_Access["Bank Reward #2 (Blue Rupee)"] = true;
		
	// Laundry Pool
	Location_Access["Guru Guru"] = true;
	Location_Access["Kafei"] = Game.letter_to_kafei;
	Location_Access["Curiosity Shop Man #1"] = Game.letter_to_kafei;
	Location_Access["Curiosity Shop Man #2"] = Game.letter_to_kafei;
		
	// East Clock Town
	Location_Access["Bombers' Hideout Chest"] = Game.explosive;
	Location_Access["East Clock Town Chest"] = true;
	Location_Access["Gorman"] = Game.deku_mask && Game.goron_mask && Game.zora_mask && Game.romani_mask;
	Location_Access["Honey and Darling Any Day"] = Game.bow || Game.bomb || (Game.deku_mask && Game.magic);
	Location_Access["Madame Aroma in Bar"] = Game.special_delivery && Game.kafei_mask;
	Location_Access["Madame Aroma in Office"] = true;
	Location_Access["Mayor"] = Game.couples_mask;
	Location_Access["Postman's Freedom Reward"] = Game.special_delivery;
	Location_Access["Town Archery #1"] = Game.bow;
	Location_Access["Treasure Chest Game Goron"] = Game.goron_mask;
		
	// Stock Pot Inn
	Location_Access["Inn Reservation"] = true;
	Location_Access["Midnight Meeting"] = Game.kafei_mask && Game.night_inn_access;
	Location_Access["Toilet Hand"] = true && (Game.land_title_deed || Game.swamp_title_deed || Game.mountain_title_deed || Game.ocean_title_deed || Game.letter_to_kafei || Game.special_delivery);
	Location_Access["Grandma Short Story"] = Game.allnight_mask;
	Location_Access["Grandma Long Story"] = Game.allnight_mask;
	Location_Access["Inn Staff Room Chest"] = true;
	Location_Access["Inn Guest Room Chest"] = Game.room_key;
		
	// Termina Field
	Location_Access["Astronomy Telescope"] = true;
	Location_Access["Gossip Stones"] = (Game.goron_mask && Game.lullaby) || (Game.deku_mask && Game.sonata && (Game.explosive || Game.goron_mask)) || (Game.zora_mask && Game.nwbn && (Game.explosive || Game.goron_mask));
	Location_Access["Business Scrub Purchase"] = true;
	Location_Access["Peahat Grotto"] = true;
	Location_Access["Dodongo Grotto"] = true;
	Location_Access["Kamaro"] = Game.song_of_healing;
	Location_Access["Termina Field Pillar Grotto"] = true;
	Location_Access["Termina Field Grass Grotto"] = true;
	Location_Access["Termina Field Underwater Chest"] = Game.zora_mask;
	Location_Access["Termina Field Grass Chest"] = true;
	Location_Access["Termina Field Stump Chest"] = Game.hookshot || Game.any_magic_bean; 
	Location_Access["Bio Baba Grotto"] = (Game.zora_mask || Game.hookshot || Game.bow || (Game.deku_mask && Game.magic)) && (Game.explosive || Game.goron_mask);
		
	// Road to Southern Swamp
	Location_Access["Swamp Archery #1"] = Game.bow;
	Location_Access["Path to Swamp Grotto"] = true;
	Location_Access["Path to Swamp Tree"] = true;
	Location_Access["Woodfall Map Purchase"] = true;
	Location_Access["Snowhead Map Purchase"] = (Game.deku_mask && Game.magic) || Game.zora_mask || Game.bow || Game.hookshot;
		
	// Southern Swamp
	Location_Access["Koume Pictobox"] = Game.any_bottle;
	Location_Access["Kotake Red Potion"] = true;
	Location_Access["Swamp Scrub Trade"] = Game.land_title_deed;
	Location_Access["Pictograph Contest Winner"] = Game.pictobox;
	Location_Access["Boat Archery"] = Game.woodfall_clear && Game.any_bottle; 
	
	Location_Access["Swamp Spider House Reward"] = Game.poison_swamp_access && Game.swamp_skulltula_main_room_near_ceiling && Game.swamp_skulltula_gold_room_near_ceiling && Game.swamp_skulltula_monument_room_torch && Game.swamp_skulltula_gold_room_pillar && Game.swamp_skulltula_pot_room_jar && Game.swamp_skulltula_tree_room_grass_1 && Game.swamp_skulltula_tree_room_grass_2 && Game.swamp_skulltula_main_room_water && Game.swamp_skulltula_main_room_lower_left_soft_soil && Game.swamp_skulltula_monument_room_crate_1 && Game.swamp_skulltula_main_room_upper_soft_soil && Game.swamp_skulltula_main_room_lower_right_soft_soil && Game.swamp_skulltula_monument_room_lower_wall && Game.swamp_skulltula_monument_room_on_monument && Game.swamp_skulltula_main_room_pillar && Game.swamp_skulltula_pot_room_pot_1 && Game.swamp_skulltula_pot_room_pot_2 && Game.swamp_skulltula_gold_room_hive && Game.swamp_skulltula_main_room_upper_pillar && Game.swamp_skulltula_pot_room_behind_vines && Game.swamp_skulltula_tree_room_tree_1 && Game.swamp_skulltula_pot_room_wall && Game.swamp_skulltula_pot_room_hive_1 && Game.swamp_skulltula_tree_room_tree_2 && Game.swamp_skulltula_gold_room_wall && Game.swamp_skulltula_tree_room_hive && Game.swamp_skulltula_monument_room_crate_2 && Game.swamp_skulltula_pot_room_hive_2 && Game.swamp_skulltula_tree_room_tree_3 && Game.swamp_skulltula_main_room_jar;
	
	Location_Access["Near Swamp Spider House Grotto"] = Game.poison_swamp_access && (Game.deku_mask || Game.zora_mask);
	Location_Access["Mystery Woods Grotto"] = true;
	Location_Access["Swamp Tourist Center Roof"] = true;
		
	// Deku Palace
	Location_Access["Bean Man"] = Game.poison_swamp_access && Game.deku_mask;
	Location_Access["Butler"] = Game.woodfall_clear && Game.poison_swamp_access && Game.deku_mask && Game.any_bottle; 
	Location_Access["Bean Grotto"] = Game.poison_swamp_access && (((Game.hookshot || Game.water_for_magic_bean) && Game.deku_mask)); 
	Location_Access["Deku Palace West Garden"] = Game.poison_swamp_access && Game.deku_mask;
		
	// Woodfall
	Location_Access["Woodfall Bridge Chest"] = Game.poison_swamp_access && Game.deku_mask;
	Location_Access["Behind Woodfall Owl Chest"] = Game.poison_swamp_access && Game.deku_mask;
	Location_Access["Entrance to Woodfall Chest"] = Game.poison_swamp_access && Game.deku_mask;
		
	// Milk Road
	Location_Access["Gorman Bros Race"] = Game.eponas_song;
	Location_Access["Romani Ranch Map Purchase"] = (Game.deku_mask && Game.magic) || Game.zora_mask || Game.bow || Game.hookshot;
	Location_Access["Great Bay Map Purchase"] = (Game.deku_mask && Game.magic) || Game.zora_mask || Game.bow || Game.hookshot;
		
	// Romani Ranch
	Location_Access["Aliens Defense"] = Game.epona_access && Game.bow;
	Location_Access["Dog Race"] = true;
	Location_Access["Grog"] = Game.bremen_mask;
	Location_Access["Cremia"] = Game.epona_access && Game.bow;
	Location_Access["Doggy Racetrack Roof Chest"] = true;
		
	// Mountain Village
	Location_Access["Mountain Smithy Day 1"] = Game.north_access && Game.adults_wallet && ((Game.magic && Game.fire_arrow && Game.bow) || Game.hot_spring_water || Game.snowhead_clear);
	Location_Access["Mountain Smithy Day 2"] = Game.north_access && Game.bottle_gold_dust && ((Game.magic && Game.fire_arrow && Game.bow) || Game.hot_spring_water || Game.snowhead_clear);
	Location_Access["Frog Choir"] = Game.dongero_mask && Game.snowhead_clear && Game.woodfall_temple_access && Game.great_bay_temple_access && Game.hookshot && Game.deku_mask && Game.zora_mask && Game.ice_arrow && Game.bow && Game.magic && Game.fire_arrow;
	Location_Access["Hungry Goron"] = Game.north_access && Game.goron_mask && Game.magic;
	Location_Access["Darmani"] = Game.song_of_healing && Game.north_access && Game.lens && Game.magic;
	Location_Access["Mountain Waterfall Chest"] = Game.snowhead_clear;
	Location_Access["Mountain Spring Grotto"] = Game.snowhead_clear;
		
	// Twin Islands
	Location_Access["Goron Race"] = Game.snowhead_clear && Game.goron_mask && Game.magic;
	Location_Access["Twin Islands Underwater Ramp Chest"] = Game.snowhead_clear && Game.zora_mask;
	Location_Access["Hot Spring Water Grotto"] = Game.north_access && Game.explosive && ((Game.magic && Game.fire_arrow && Game.bow) || Game.hot_spring_water || Game.snowhead_clear);
	Location_Access["Twin Islands Cave Chest"] = Game.snowhead_clear && Game.zora_mask;
	Location_Access["Goron Racetrack Grotto"] = Game.north_access && Game.explosive && (Game.goron_mask || Game.hookshot); 
		
	// Goron Village
	Location_Access["Powder Keg Challenge"] = Game.north_access && Game.goron_mask && ((Game.magic && Game.fire_arrow && Game.bow) || Game.snowhead_clear);
	Location_Access["Lens of Truth Chest"] = Game.north_access;
	Location_Access["Biggest Bomb Bag Purchase"] = Game.north_access && Game.goron_mask;
	Location_Access["Mountain Scrub Trade"] = Game.north_access && Game.deku_mask && Game.swamp_title_deed;
	Location_Access["Lens Cave Invisible Chest"] = Game.north_access;
	Location_Access["Lens Cave Rock Chest"] = Game.north_access && Game.explosive;
	Location_Access["Goron Village Ledge"] = Game.north_access;
		
	// Path to Snowhead
	Location_Access["Path to Snowhead Grotto"] = Game.north_access && Game.explosive && Game.goron_mask && Game.magic;
	Location_Access["Path to Snowhead Pillar"] = Game.north_access && Game.goron_mask && Game.magic;
		
	// Great Bay Coast
	Location_Access["Ocean Spider House Day 1 Reward"] = Game.ocean_skulltulas && Game.bow && Game.fire_arrow && Game.magic;;
	Location_Access["Fisherman Game"] = Game.great_bay_clear && Game.hookshot;
	Location_Access["Ocean Spider House Chest"] = Game.bow && Game.ocean_skulltulas;
	Location_Access["Mikau"] = Game.west_access && Game.song_of_healing;
	Location_Access["Great Bay Coast Grotto"] = Game.west_access;
	Location_Access["Lab Fish"] = Game.west_access && Game.any_bottle;
	Location_Access["Great Bay Coast Ledge"] = Game.west_access; 
	Location_Access["Stone Tower Map Purchase"] = Game.west_access && (Game.hookshot || Game.bow);
	Location_Access["Fisherman Pictograph"] = Game.pictobox && Game.west_access && Game.pirates_fortress_access;
		
	// Zora Cape
	Location_Access["Beaver Race #1"] = Game.hookshot && Game.zora_mask && Game.west_access;
	Location_Access["Beaver Race #2"] = Game.hookshot && Game.zora_mask && Game.west_access;
	Location_Access["Zora Cape Ledge Without Tree Chest"] = Game.hookshot && Game.west_access;
	Location_Access["Zora Cape Ledge With Tree Chest"] = Game.hookshot && Game.west_access;
	Location_Access["Zora Cape Grotto"] = Game.west_access && (Game.goron_mask || Game.explosive);
	Location_Access["Zora Cape Underwater Chest"] = Game.zora_mask && Game.west_access;
	Location_Access["Zora Cape Like-Like"] = Game.pirates_fortress_access;
		
	// Zora Hall
	Location_Access["Ocean Scrub Trade"] = Game.goron_mask && Game.mountain_title_deed && Game.zora_mask && Game.west_access;
	Location_Access["Evan"] = Game.zora_mask && Game.west_access;
	Location_Access["Lulu's Room Ledge"] = Game.pirates_fortress_access;
	Location_Access["Zora Hall Stage Lights"] = Game.fire_arrow && Game.bow && Game.magic && Game.west_access && Game.zora_mask;
		
	// Pirates' Fortress Exterior
	Location_Access["Pirates' Fortress Exterior Log Chest"] = Game.pirates_fortress_access;
	Location_Access["Pirates' Fortress Exterior Sand Chest"] = Game.pirates_fortress_access;
	Location_Access["Pirates' Fortress Exterior Corner Chest"] = Game.pirates_fortress_access;
		
	// Pirates' Fortress Sewer
	Location_Access["Pirates' Fortress Cage Room Shallow Chest"] = Game.pirates_fortress_access && Game.goron_mask;
	Location_Access["Pirates' Fortress Cage Room Deep Chest"] = Game.pirates_fortress_access && Game.goron_mask;
	Location_Access["Pirates' Fortress Maze Chest"] = Game.pirates_fortress_access && Game.goron_mask;
	Location_Access["Pirates' Fortress Cage"] = Game.pirates_fortress_access && Game.goron_mask;
		
	// Pirates' Fortress Interior
	Location_Access["Hookshot Chest"] = Game.pirates_fortress_access && ((Game.bow || (Game.deku_mask && Game.magic)) && (Game.goron_mask || Game.hookshot));
	Location_Access["Pirates' Fortress Interior Lower Chest"] = Game.pirates_fortress_access && (Game.goron_mask || Game.hookshot);
	Location_Access["Pirates' Fortress Interior Upper Chest"] = Game.pirates_fortress_access && Game.hookshot;
	Location_Access["Pirates' Fortress Interior Tank Chest"] = Game.pirates_fortress_access && Game.hookshot;
	Location_Access["Pirates' Fortress Interior Guard Room Chest"] = Game.pirates_fortress_access && Game.hookshot;
		
	// Pinnacle Rock
	Location_Access["Seahorses"] = Game.west_access && Game.zora_mask && Game.any_bottle && Game.seahorse;
	Location_Access["Pinnacle Rock Lower Chest"] = Game.pinnacle_rock_access && Game.west_access;
	Location_Access["Pinnacle Rock Upper Chest"] = Game.pinnacle_rock_access && Game.west_access;
		
	// Path to Ikana Canyon
	Location_Access["Invisible Soldier"] = Game.lens && Game.magic && Game.any_bottle && Game.eponas_song;
	Location_Access["Path to Ikana Pillar Chest"] = Game.hookshot;
	Location_Access["Path to Ikana Grotto"] = Game.goron_mask;
		
	// Ikana Graveyard
	Location_Access["Dampe Digging"] = Game.captains_hat && Game.ikana_graveyard_access && (Game.zora_mask || Game.bow);
	Location_Access["Iron Knuckle Chest"] = Game.captains_hat && Game.ikana_graveyard_access && Game.explosive;
	Location_Access["Captain Keeta's Chest"] = Game.sonata && Game.ikana_graveyard_access && Game.bow;
	Location_Access["Day 1 Grave Bats"] = Game.captains_hat && Game.ikana_graveyard_access;
	Location_Access["Ikana Graveyard Grotto"] = Game.ikana_graveyard_access && Game.explosive;
		
	// Ikana Canyon
	Location_Access["Poe Hut"] = Game.ikana_canyon_access && Game.bow;
	Location_Access["Pamela's Father"] = Game.song_of_healing && Game.ikana_canyon_access && Game.song_of_storms;
	Location_Access["Secret Shrine Grotto"] = Game.east_access;
	Location_Access["Ikana Canyon Ledge"] = Game.east_access;
	Location_Access["Canyon Scrub Trade"] = Game.zora_mask && Game.ocean_title_deed && Game.east_access;
		
	// Secret Shrine
	Location_Access["Secret Shrine Final Chest"] = Game.bow && Game.light_arrow && Game.east_access && Game.magic;
	Location_Access["Secret Shrine Dinolfos Chest"] = Game.bow && Game.light_arrow && Game.east_access && Game.magic;
	Location_Access["Secret Shrine Wizzrobe Chest"] = Game.bow && Game.light_arrow && Game.east_access && Game.magic;
	Location_Access["Secret Shrine Wart Chest"] = Game.bow && Game.light_arrow && Game.east_access && Game.magic;
	Location_Access["Secret Shrine Garo Master Chest"] = Game.bow && Game.light_arrow && Game.east_access && Game.magic;
		
	// Beneath the Well 
	Location_Access["Mirror Shield Chest"] = Game.ikana_canyon_access && ((Game.fire_arrow && Game.light_arrow && Game.bow && Game.magic) || (Game.light_arrow && Game.gibdo_mask && Game.bow && Game.magic && Game.any_milk && Game.big_poe) || (Game.gibdo_mask && Game.big_poe && Game.any_milk && Game.limitless_magic_beans));
	Location_Access["Well Right Path Chest"] =  Game.ikana_canyon_access && Game.gibdo_mask && Game.any_bottle && ((Game.light_arrow && Game.bow && Game.magic) || Game.limitless_magic_beans);
	Location_Access["Well Left Path Chest"] = Game.ikana_canyon_access && Game.gibdo_mask && Game.any_blue_potion;
		
	// Ikana Castle
	Location_Access["Ikana Castle Pillar"] = Game.ikana_canyon_access && Game.bow && Game.deku_mask && Game.fire_arrow && Game.magic && Game.lens && (Game.light_arrow || Game.mirror_shield);
		
	// Stone Tower
	Location_Access["Inverted Stone Tower Left Chest"] = Game.stone_tower_temple_access && Game.bow && Game.light_arrow && Game.magic && Game.any_magic_bean && Game.water_for_magic_bean;
	Location_Access["Inverted Stone Tower Middle Chest"] = Game.stone_tower_temple_access && Game.bow && Game.light_arrow && Game.magic && Game.any_magic_bean && Game.water_for_magic_bean;
	Location_Access["Inverted Stone Tower Right Chest"] = Game.stone_tower_temple_access && Game.bow && Game.light_arrow && Game.magic && Game.any_magic_bean && Game.water_for_magic_bean;
		
	// Woodfall Temple
	Location_Access["WFT_Bow"] = Game.woodfall_temple_access;
	Location_Access["WFT_Map"] = Game.woodfall_temple_access && (Game.deku_mask || (Game.hookshot && (Game.explosive || Game.goron_mask)));
	Location_Access["key_WFT"] = Game.woodfall_temple_access;
	Location_Access["WFT_Compass"] = Game.woodfall_temple_access;
	Location_Access["WFT_Odolwa_Heart"] = Game.woodfall_temple_access && Game.bow && Game.deku_mask;
		
	// Snowhead Temple
	Location_Access["SHT_Fire_Arrow"] = Game.snowhead_temple_access && Game.enter_snowhead_temple && ((Game.fire_arrow && Game.bow && Game.magic) || Game.hookshot || (Game.goron_mask && Game.explosive && Game.magic && Game.two_snowhead_keys) || (Game.goron_mask && Game.explosive && Game.magic && Game.one_snowhead_key && Game.zora_mask));
	Location_Access["SHT_Map"] = Game.snowhead_temple_access && Game.enter_snowhead_temple && ((Game.goron_mask && Game.magic) || Game.hookshot || (Game.explosive && Game.two_snowhead_keys));
	Location_Access["SHT_Compass"] = Game.snowhead_temple_access && Game.enter_snowhead_temple && (Game.hookshot || Game.one_snowhead_key);
	Location_Access["key_SHT1"] = Game.snowhead_key_1_block_room;
	Location_Access["key_SHT2"] = Game.snowhead_key_2_icicle_room;
	Location_Access["key_SHT3"] = Game.snowhead_key_3_bridge_room;
	Location_Access["SHT_Goht_Heart"] = Game.snowhead_temple_access && Game.enter_snowhead_temple && Game.bow && Game.fire_arrow && Game.goron_mask && Game.magic && Game.snowhead_boss_key;
		
	// Great Bay Temple
	Location_Access["GBT_Ice_Arrow"] = Game.great_bay_temple_access && Game.zora_mask && Game.hookshot && Game.great_bay_key_1;
	Location_Access["key_GBT"] = Game.great_bay_key_1;
	Location_Access["GBT_Map"] = Game.great_bay_temple_access && Game.zora_mask && Game.hookshot;
	Location_Access["GBT_Compass"] = Game.great_bay_temple_access && Game.zora_mask && Game.hookshot;
	Location_Access["GBT_Gyorg_Heart"] = Game.great_bay_temple_access && Game.zora_mask && Game.hookshot && Game.great_bay_boss_key && Game.bow && Game.magic && Game.ice_arrow;
		
	// Stone Tower Temple
	Location_Access["STT_Light_Arrow"] = Game.stone_tower_temple_access && ((Game.light_arrow && Game.bow && Game.magic && Game.one_stone_tower_key) || (Game.deku_mask && Game.mirror_shield && Game.goron_mask && Game.zora_mask && Game.explosive && Game.two_stone_tower_keys));
	Location_Access["key_STT1"] = Game.stone_tower_key_1_armos;
	Location_Access["key_STT2"] = Game.stone_tower_key_2_eyegore;
	Location_Access["key_STT3"] = Game.stone_tower_key_3_updaft;
	Location_Access["key_STT4"] = Game.stone_tower_key_4_death_armos;
	Location_Access["STT_Giants"] = Game.inverted_stone_tower_temple_access && Game.hookshot && Game.light_arrow && Game.bow && Game.magic && Game.istt_eyegore_access;
	Location_Access["STT_Map"] = Game.stone_tower_temple_access && ((Game.mirror_shield && Game.explosive && Game.goron_mask) || (Game.explosive && Game.bow && Game.light_arrow && Game.magic && Game.goron_mask) || (Game.light_arrow && Game.bow && Game.magic && Game.one_stone_tower_key && Game.zora_mask));
	Location_Access["STT_Compass"] = Game.stone_tower_temple_access && ((Game.light_arrow && Game.bow && Game.magic) || (Game.mirror_shield && Game.goron_mask && Game.zora_mask && Game.one_stone_tower_key));;
	Location_Access["STT_Twinmold_Heart"] = Game.inverted_stone_tower_temple_access && Game.hookshot && Game.bow && Game.light_arrow && Game.stone_tower_boss_key && Game.magic && Game.istt_eyegore_access;
		
	// Songs
	Location_Access["Song_Starting"] = true;
	Location_Access["Song_BlueWarp"] = Game.woodfall_clear || Game.snowhead_clear || Game.great_bay_clear || Game.ikana_clear;
	Location_Access["Song_Ranch"] = Game.epona_access;
	Location_Access["Song_Graveyard"] = Game.captains_hat && Game.ikana_graveyard_access;
	Location_Access["Song_Swamp"] = Game.poison_swamp_access && Game.deku_mask && Game.water_for_magic_bean;
	Location_Access["Song_Goron"] = Game.north_access && Game.goron_mask;
	Location_Access["Song_Eggs"] = Game.zora_egg && Game.zora_mask && Game.west_access;
	Location_Access["Song_Castle"] = Game.ikana_canyon_access && Game.bow && Game.fire_arrow && Game.mirror_shield && Game.magic && (Game.light_arrow || (Game.deku_mask && Game.powder_keg && Game.goron_mask && Game.lens));
	
}
