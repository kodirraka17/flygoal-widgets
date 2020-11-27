<?php
	/**
	 * Plugin Name:       Flygoal Soccer WP Widget
	 * Plugin URI:        https://corporate.flygoal.com
	 * Description:       Football Livescore and Soccer Live Results
	 * Version:           1.0
	 * Requires at least: 5.2
	 * Requires PHP:      5.3
	 * Author:            flygoal.com
	 * Author URI:        https://flygoal.com
	 * Text Domain:       flygoal_widgets
	 * Domain Path:       /languages
	*/

 	if(!defined('ABSPATH')) {
 		exit;
 	}

	//  Load CSS + Scripts
 	require_once(plugin_dir_path(__FILE__).'/flygoal-scripts.php');
 	//  Load Class
	require_once(plugin_dir_path(__FILE__).'/flygoal-class.php');
	// Load Short Code Menu
	require_once(plugin_dir_path(__FILE__).'/flygoal-shortcodes.php');

	function flygoal_regist(){
	  register_widget('flygoal_Standings');
	  register_widget('flygoal_Next_Round');
	  register_widget('flygoal_Prev_Round');
	  register_widget('flygoal_Upcoming_Fixtures');
	  register_widget('flygoal_Result_Fixtures');
	}

	add_action('widgets_init', 'flygoal_regist');
?>