<?php

function flygoal_add(){
  // Add CSS
  wp_enqueue_style('flygoal-standings-css', plugin_dir_url( __FILE__ ).'assets/css/standings.css');
  wp_enqueue_style('flygoal-next-fixture-css', plugin_dir_url( __FILE__ ).'assets/css/next_fixture.css');
  wp_enqueue_style('flygoal-fixtures-css', plugin_dir_url( __FILE__ ).'assets/css/fixtures.css');
  wp_enqueue_style('flygoal-upcoming-round-css', plugin_dir_url( __FILE__ ).'assets/css/upcoming_round.css');
}

function flygoal_loader(){
  wp_enqueue_script('jquery');
  wp_register_script('flygoal_script', plugin_dir_url( __FILE__ ) . 'assets/js/admin.js', array( 'jquery' ));
  wp_enqueue_script( 'flygoal_script' );
}
add_action('admin_enqueue_scripts', 'flygoal_loader');
add_action('wp_enqueue_scripts', 'flygoal_add');
?>