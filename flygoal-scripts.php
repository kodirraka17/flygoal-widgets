<?php

function flygoal_add(){
  // Add CSS
  wp_enqueue_style('flygoal-standings-css', plugin_dir_url( __FILE__ ).'assets/css/standingss.css');
  wp_enqueue_style('flygoal-next-fixture-css', plugin_dir_url( __FILE__ ).'assets/css/next-fixturess.css');
  wp_enqueue_style('flygoal-result-css', plugin_dir_url( __FILE__ ).'assets/css/resultss.css');
  wp_enqueue_style('flygoal-schedules-css', plugin_dir_url( __FILE__ ).'assets/css/schedules.css');
  wp_enqueue_style('flygoal-previous-round-css', plugin_dir_url( __FILE__ ).'assets/css/prev-round.css');
  wp_enqueue_style('flygoal-next-round-css', plugin_dir_url( __FILE__ ).'assets/css/next-roundss.css');
}

function flygoal_loader(){
  wp_enqueue_script('jquery');
  wp_register_script('flygoal_script', plugin_dir_url( __FILE__ ) . 'assets/js/admins.js', array( 'jquery' ), time());
  wp_enqueue_script( 'flygoal_script' );
}
add_action('admin_enqueue_scripts', 'flygoal_loader');
add_action('wp_enqueue_scripts', 'flygoal_add');
?>