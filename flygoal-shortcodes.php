<?php
	add_action('admin_menu', 'menu_flygoalshortcode');
	function menu_flygoalshortcode(){
	    add_menu_page(
	    	'Shortcode FG',
	    	'Shortcode FG',
	    	'manage_options',
	    	'shortcode-flygoal',
	    	'fgspregist_action'
	    );
	}

	function fgspregist_form() { 
		wp_enqueue_style( 'bootstrap', plugin_dir_url( __FILE__ ) . '/assets/vendors/bootstrap/bootstrap.css' );
		wp_enqueue_script( 'bootstrap-script', plugin_dir_url( __FILE__ ) . '/assets/vendors/bootstrap/bootstrap.js', array( 'jquery' ) );
		?>
		<style type="text/css">
			.btn-primary {
				margin-top: 5px;
			}
		</style>

		<h2>Shortcode Flygoal</h2>
		<hr><br>

		<div class="form-group">
			<div class="row">
				<div class="col-lg-6">
					<h4>Shortcode Standings</h4>
				</div>
			</div>
			<form action="<?php echo esc_url( $_SERVER['REQUEST_URI'] ) ?>" method="post" aria-required="false" aria-invalid="false">
			    <label for="League">Select League</label>
			    <select name="league_standings" id="league_standings">
			    	<option> -- Select League -- </option>
			    	<option value='1639'> English Premier League </option>
			    	<option value='188'> Bundesliga </option>
			    	<option value='1134'> La Liga </option>
			    	<option value='1112'> Ligue 1 </option>
			    	<option value='1437'> Serie A </option>
			    	<option value='122116'> Liga 1 Indonesia </option>
			    </select>
			    <?php submit_button( __( 'Submit Standings' ), 'btn-primary', 'submitStandings' ); ?>
			</form>
	    </div>

	    <hr>

	    <div class="form-group">
			<div class="row">
				<div class="col-lg-6">
					<h4>Shortcode Previous Round</h4>
				</div>
			</div>
			<form action="<?php echo esc_url( $_SERVER['REQUEST_URI'] ) ?>" method="post" aria-required="true" aria-invalid="false">
			    <label for="League">Select League</label>
			    <select name="prev_round" id="prev_round">
			    	<option> -- Select League -- </option>
			    	<option value='1639'> English Premier League </option>
			    	<option value='188'> Bundesliga </option>
			    	<option value='1134'> La Liga </option>
			    	<option value='1112'> Ligue 1 </option>
			    	<option value='1437'> Serie A </option>
			    	<option value='122116'> Liga 1 Indonesia </option>
			    </select>
			    <?php submit_button( __( 'Submit Previous' ), 'btn-primary', 'submitPrev' ); ?>
			</form>
	    </div>

	    <hr>

		<div class="form-group">
			<div class="row">
				<div class="col-lg-6">
					<h4>Shortcode Next Round</h4>
				</div>
			</div>
			<form action="<?php echo esc_url( $_SERVER['REQUEST_URI'] ) ?>" method="post" aria-required="true" aria-invalid="false">
			    <label for="League">Select League</label>
			    <select name="next_round" id="next_round">
			    	<option> -- Select League -- </option>
			    	<option value='1639'> English Premier League </option>
			    	<option value='188'> Bundesliga </option>
			    	<option value='1134'> La Liga </option>
			    	<option value='1112'> Ligue 1 </option>
			    	<option value='1437'> Serie A </option>
			    	<option value='122116'> Liga 1 Indonesia </option>
			    </select>
			    <?php submit_button( __( 'Submit Next' ), 'btn-primary', 'submitNext' ); ?>
			</form>
	    </div>
	<?php }

	function fgspregist_action() {
	    if (isset($_POST['submitStandings'])) {
	    	$league_standings = sanitize_text_field($_POST['league_standings']);
	    } else {
	    	$league_standings = NULL;
	    }

	    if(isset($_POST['submitPrev'])) {
	    	$prev_round = sanitize_text_field($_POST['prev_round']);
	    } else {
	    	$prev_round = NULL;
	    }

	    if(isset($_POST['submitNext'])) {
	    	$next_round = sanitize_text_field($_POST['next_round']);
	    } else {
	    	$next_round = NULL;
	    }

	    fgspregist_validation( $league_standings, $prev_round, $next_round );
	    fgspregist_form( $league_standings, $prev_round, $next_round );
	}

	function fgspregist_validation( $league_standings, $prev_round, $next_round )  {
		if(!empty($league_standings)) {
			if($league_standings == '1639') {
				$name_standings = 'EPL';
			} else if($league_standings == '188') {
				$name_standings = 'Bundesliga';
			} else if($league_standings == '1134') {
				$name_standings = 'La liga';
			} else if($league_standings == '1112') {
				$name_standings = 'Ligue 1';
			} else if($league_standings == '1437') {
				$name_standings = 'Serie A';
			} else if($league_standings == '122116') {
				$name_standings = 'Indo';
			}

			$html .= '<div class="notice notice-success is-dismissible"><p>[standings type="' . esc_html ( $name_standings ) . '"]</p></div><br>';
		} else if(!empty($prev_round)) {
			if($prev_round == '1639') {
				$name_prevRound = 'EPL';
			} else if($prev_round == '188') {
				$name_prevRound = 'Bundesliga';
			} else if($prev_round == '1134') {
				$name_prevRound = 'La liga';
			} else if($prev_round == '1112') {
				$name_prevRound = 'Ligue 1';
			} else if($prev_round == '1437') {
				$name_prevRound = 'Serie A';
			} else if($prev_round == '122116') {
				$name_prevRound = 'Indo';
			}
			
			$html .= '<div class="notice notice-success is-dismissible"><p>[prevRound type="' . esc_html ( $name_prevRound ) . '"]</p></div><br>';
		} else if(!empty($next_round)) {
			if($next_round == '1639') {
				$name_nextRound = 'EPL';
			} else if($next_round == '188') {
				$name_nextRound = 'Bundesliga';
			} else if($next_round == '1134') {
				$name_nextRound = 'La liga';
			} else if($next_round == '1112') {
				$name_nextRound = 'Ligue 1';
			} else if($next_round == '1437') {
				$name_nextRound = 'Serie A';
			} else if($next_round == '122116') {
				$name_nextRound = 'Indo';
			}

			$html .= '<div class="notice notice-success is-dismissible"><p>[nextRound type="' . esc_html ( $name_nextRound ) . '"]</p></div><br>';
		}

		echo $html;
	}

	function fgspstandingsLeague( $atts = [] ) {
	    extract( shortcode_atts( array(
	        'type' => 'myvalue'
	    ), $atts));

	    if($type == 'Bundesliga') {
	    	$id = 188;
	    } elseif($type == 'EPL') {
	    	$id = 1639;
	    } else if($type == 'La liga') {
	    	$id = 1134;
	    } else if($type == 'Ligue 1') {
	    	$id = 1112;
	    } else if($type == 'Serie A') {
	    	$id = 1437;
	    } else if($type == 'Indo' || $type == 'Liga Indonesia' || $type == 'Liga 1') {
	    	$id = 122116;
	    }

	    $some_variable = new flygoal_Standings();
		$res = $some_variable->standing_html($id);
	    return $res;
	}
	add_shortcode('standings', 'fgspstandingsLeague');

	function fgspnextRound( $atts = [] ) {
		extract( shortcode_atts( array(
	        'type' => 'myvalue'
	    ), $atts ) );

	    if($type == 'Bundesliga') {
	    	$id = 188;
	    } elseif($type == 'EPL') {
	    	$id = 1639;
	    } else if($type == 'La liga') {
	    	$id = 1134;
	    } else if($type == 'Ligue 1') {
	    	$id = 1112;
	    } else if($type == 'Serie A') {
	    	$id = 1437;
	    } else if($type == 'Indo' || $type == 'Liga Indonesia' || $type == 'Liga 1') {
	    	$id = 122116;
	    }

	    $some_variable = new flygoal_Next_Round();
		$res = $some_variable->upcoming_round_html($id);

		return $res;
	}
	add_shortcode('nextRound', 'fgspnextRound');

	function fgspprevRound( $atts = [] ) {
		extract( shortcode_atts( array(
	        'type' => 'myvalue'
	    ), $atts ) );

	    if($type == 'EPL' || $type == 'Liga Inggris') {
	    	$id = 1639;
	    } else if($type == 'Bundesliga' || $type == 'Liga Jerman') {
	    	$id = 188;
	    } else if($type == 'La liga' || $type == 'Liga Spanyol') {
	    	$id = 1134;
	    } else if($type == 'Ligue 1' || $type == 'Liga Prancis') {
	    	$id = 1112;
	    } else if($type == 'Serie A' || $type == 'Liga Itali' || $type == 'Liga Italy') {
	    	$id = 1437;
	    } else if($type == 'Indo' || $type == 'Liga Indonesia' || $type == 'Liga 1') {
	    	$id = 122116;
	    }

	    $some_variable = new flygoal_Prev_Round();
		$res = $some_variable->previous_round_html($id);

		return $res;
	}
	add_shortcode('prevRound', 'fgspprevRound');
?>