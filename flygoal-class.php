<?php 
  /**
   * Adds Standing widget.
   */
  class flygoal_Standings extends WP_Widget {

    /**
     * Register widget with WordPress.
     */
    function __construct() {
      parent::__construct(
        'flygoalsp_standings_widget', // Base ID
        esc_html__( 'Flygoal : Standings League', 'flygoal_content' ), // Name
        array( 'description' => esc_html__( 'League Standing Table', 'flygoal_content' ), ) // Args
      );
    }
    
    public function standing_html($id = [], $links=0){
      if($id == 1639) {
        $url = plugin_dir_url( __FILE__ ).'assets/js/main.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $content = "<div id='flygoalsp-standings'></div>
        <script>
            (function (w,d,s,o,f,js,fjs) {
                w['flygoalsp_StandingsEmbed']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'mw', '{$url}'));
            mw('params', { leagueID: 1639, showLinks: false});
        </script>";
        return $content;
      } else if($id == 188) {
        $url = plugin_dir_url( __FILE__ ).'assets/js/mainBundesliga.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentBundesliga = "<div id='flygoalsp-standings-bundesliga'></div>
        <script>
            (function (w,d,s,o,f,js,fjs) {
                w['flygoalsp_StandingsEmbedBundesliga']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'mw', '{$url}'));
            mw('params', { leagueID: 188, showLinks: false});
        </script>";
        return $contentBundesliga;
      } else if($id == 1134) {
        $url = plugin_dir_url( __FILE__ ).'assets/js/mainLaliga.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentLaliga = "<div id='flygoalsp-standings-laliga'></div>
        <script>
            (function (w,d,s,o,f,js,fjs) {
                w['flygoalsp_StandingsEmbedLaliga']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'mw', '{$url}'));
            mw('params', { leagueID: 1134, showLinks: false});
        </script>";
        return $contentLaliga;
      } else if ($id == 1112) {
        $url = plugin_dir_url( __FILE__ ).'assets/js/mainLigue1.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentLigue1 = "<div id='flygoalsp-standings-ligue1'></div>
        <script>
            (function (w,d,s,o,f,js,fjs) {
                w['flygoalsp_StandingsEmbedLigue1']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'mw', '{$url}'));
            mw('params', { leagueID: 1112, showLinks: false});
        </script>";
        return $contentLigue1;
      } else if($id == 1437) {
        $url = plugin_dir_url( __FILE__ ).'assets/js/mainSerieA.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $content = "<div id='flygoalsp-standings-seriea'></div>
        <script>
            (function (w,d,s,o,f,js,fjs) {
                w['flygoalsp_StandingsEmbedSerieA']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'mw', '{$url}'));
            mw('params', { leagueID: 1437, showLinks: false});
        </script>";
        return $content;
      } else if($id == 122116) {
        $url = plugin_dir_url( __FILE__ ).'assets/js/mainIndo.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $content = "<div id='flygoalsp-standings-indo'></div>
        <script>
            (function (w,d,s,o,f,js,fjs) {
                w['flygoalsp_StandingsEmbedIndo']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'mw', '{$url}'));
            mw('params', { leagueID: 122116, showLinks: false});
        </script>";
        return $content;
      }
    }

    /**
     * Front-end display of widget.
     *
     * @see WP_Widget::widget()
     *
     * @param array $args     Widget arguments.
     * @param array $instance Saved values from database.
     */
    public function widget( $args, $instance ) {
      echo $args['before_widget'];
      if ( ! empty( $instance['selected_league_id'] ) ) {
        echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
        echo $this->standing_html($instance['selected_league_id'], $instance['show_links']);
      }
      echo $args['after_widget'];
    }

    /**
     * Back-end widget form.
     *
     * @see WP_Widget::form()
     *
     * @param array $instance Previously saved values from database.
     */
    public function form( $instance ) {
      $options = "";
      $country = "";
      // foreach($leagues as $l){
      //   if($country != $l['country'] || $country == ""){
      //     $options .= "<option disabled>{$l['country']}</option>";
      //     $country = $l['country'];
      //   }
      //   $options .= "<option value='{$l['id']}'>&nbsp;&nbsp;&nbsp;{$l['name']}</option>";
      // }

      $options .= "<option> -- Select League -- </option><option value='1639'>&nbsp;&nbsp;&nbsp;English Premier League</option><option value='188'>&nbsp;&nbsp;&nbsp;Bundesliga</option><option value='1134'>&nbsp;&nbsp;&nbsp;La Liga</option><option value='1112'>&nbsp;&nbsp;&nbsp;Ligue 1</option><option value='1437'>&nbsp;&nbsp;&nbsp;Serie A</option>";

      $last_edited = !empty($instance['last_edited']) ? $instance['last_edited'] : "update";

      $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'Widget Title', 'flygoal_content' );

      $league_id = ! empty( $instance['selected_league_id'] ) ? $instance['selected_league_id'] : esc_html__( '2012', 'flygoal_content' );

      if($last_edited == null || $last_edited == "" || $last_edited == "update"){
        $instance['show_links'] = 1;
      }

      if($league_id == '1639') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'English Premier League', 'flygoal_content' );
      } elseif($league_id == '188') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Bundesliga', 'flygoal_content' );
      } elseif($league_id == '1134') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'La Liga', 'flygoal_content' );
      } elseif($league_id == '1112') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Ligue 1', 'flygoal_content' );
      } elseif($league_id == '1437') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Serie A', 'flygoal_content' );
      } elseif($league_id == '122116') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Liga 1 Indonesia', 'flygoal_content' );
      } elseif($league_id == 'all') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'All Leagues', 'flygoal_content' );
      } else {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( '-- Select League --', 'flygoal_content' );
      }

      // if(!isset($instance['selected_league_name'])){$instance['selected_league_name'] = "";}
      // $league_name = htmlentities($instance['selected_league_name'], null, 'utf-8');
      // $league_name = str_replace("&nbsp;", "", $league_name);
      // $league_name = html_entity_decode($league_name);

      ?>
      <div class='flygoalsp_form_wrapper'>
        <p>

          <!-- Widget Title -->
          <label style="display:block;" for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_attr_e( 'Title:', 'flygoal_content' ); ?></label> 
          <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">

          <!-- Widget Table -->
          <label style="display:block;" for="country">Find League ID</label> 
          <select class="widefat" name="<?php echo esc_attr( $this->get_field_name( 'selected_league_id' ) ); ?>" id="<?php echo esc_attr( $this->get_field_id( 'selected_league_id' ) ); ?>" data-uid='flygoalsp_league_standings'>
          <?php if(! empty ($instance['selected_league_id'])): ?>
            <!-- <option disabled>Selected</option> -->
            <option selected value="<?php echo $instance['selected_league_id']; ?>"><?php echo $league_name ?></option>
          <?php endif;?>
          <?= $options ?>
          </select>

          <input type="hidden" value='<?php echo esc_attr( $this->get_field_id( 'selected_league_id' ) ); ?>' id='get_selected_league_id'>
          <!-- Show links? -->
          <p>
            <label for="<?php echo $this->get_field_id( 'show_links' ); ?>">Include Links to Flygoal?</label>
            <input class="checkbox" type="checkbox" <?php checked( $instance[ 'show_links' ], 1); ?> id="<?php echo $this->get_field_id( 'show_links' ); ?>" name="<?php echo $this->get_field_name( 'show_links' ); ?>" /> 
          </p>
        </p>
      </div>
    <?php }

    /**
     * Sanitize widget form values as they are saved.
     *
     * @see WP_Widget::update()
     *
     * @param array $new_instance Values just sent to be saved.
     * @param array $old_instance Previously saved values from database.
     *
     * @return array Updated safe values to be saved.
     */
    public function update( $new_instance, $old_instance ) {
      $instance = array();

      $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? sanitize_text_field( $new_instance['title'] ) : '';
      
      $instance['selected_league_id'] = ( ! empty( $new_instance['selected_league_id'] ) ) ? sanitize_text_field( $new_instance['selected_league_id'] ) : '';

      $instance['show_links'] = isset($new_instance['show_links']) ? 1 : 0;
      $instance['last_edited'] = ( ! empty( $new_instance['last_edited'] ) ) ? time() : time();

      return $instance;
    }
  } // Standing Widget Class

  class flygoal_Next_Round extends WP_Widget {

    /**
     * Register widget with WordPress.
     */
    function __construct() {
      parent::__construct(
        'flygoalsp_upcoming_round_widget', // Base ID
        esc_html__( 'Flygoal : Next Schedule', 'flygoal_content' ), // Name
        array( 'description' => esc_html__( 'Upcoming Schedule Match', 'flygoal_content' ), ) // Args
      );
    }
    
    public function upcoming_round_html($id, $links=0){
      if($id == '1639') {
        $tz = get_option('timezone_string');
        $url = plugin_dir_url( __FILE__ ).'assets/js/nextRound.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $content = "<div id='flygoalsp-upcoming-round'></div>
        <script>
            (function (w,d,s,o,f,js,fjs) {
                w['flygoalsp_UpcomingRound']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'ur', '{$url}'));
            ur('params', { leagueID: 1639, showLinks: {$links}, tz:'{$tz}'});
        </script>";
        return $content;
      } else if($id == '1437') {
        $tz = get_option('timezone_string');
        $url = plugin_dir_url( __FILE__ ).'assets/js/nextRoundSerieA.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentSerieA = "<div id='flygoalsp-upcoming-round-seriea'></div>
        <script>
            (function (w,d,s,o,f,js,fjs) {
                w['flygoalsp_UpcomingRoundSerieA']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'ur', '{$url}'));
            ur('params', { leagueID: 1437, showLinks: {$links}, tz:'{$tz}'});
        </script>";
        return $contentSerieA;
      } else if($id == '1134') {
        $tz = get_option('timezone_string');
        $url = plugin_dir_url( __FILE__ ).'assets/js/nextRoundLaliga.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentLaliga = "<div id='flygoalsp-upcoming-round-laliga'></div>
        <script>
            (function (w,d,s,o,f,js,fjs) {
                w['flygoalsp_UpcomingRoundLaliga']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'ur', '{$url}'));
            ur('params', { leagueID: 1134, showLinks: {$links}, tz:'{$tz}'});
        </script>";
        return $contentLaliga;
      } else if($id == '188') {
        $tz = get_option('timezone_string');
        $url = plugin_dir_url( __FILE__ ).'assets/js/nextRoundBundesliga.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentBundesliga = "<div id='flygoalsp-upcoming-round-bundesliga'></div>
        <script>
            (function (w,d,s,o,f,js,fjs) {
                w['flygoalsp_UpcomingRoundBundesliga']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'ur', '{$url}'));
            ur('params', { leagueID: 188, showLinks: {$links}, tz:'{$tz}'});
        </script>";
        return $contentBundesliga;
      } else if($id == '1112') {
        $tz = get_option('timezone_string');
        $url = plugin_dir_url( __FILE__ ).'assets/js/nextRoundLigue1.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentLigue1 = "<div id='flygoalsp-upcoming-round-ligue1'></div>
        <script>
            (function (w,d,s,o,f,js,fjs) {
                w['flygoalsp_UpcomingRoundLigue1']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'ur', '{$url}'));
            ur('params', { leagueID: 1112, showLinks: {$links}, tz:'{$tz}'});
        </script>";
        return $contentLigue1;
      } else if($id == '122116') {
        $tz = get_option('timezone_string');
        $url = plugin_dir_url( __FILE__ ).'assets/js/nextRoundIndo.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentIndo = "<div id='flygoalsp-upcoming-round-indo'></div>
        <script>
            (function (w,d,s,o,f,js,fjs) {
                w['flygoalsp_UpcomingRoundIndo']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'ur', '{$url}'));
            ur('params', { leagueID: 1639, showLinks: {$links}, tz:'{$tz}'});
        </script>";
        return $contentIndo;
      }
    }

    /**
     * Front-end display of widget.
     *
     * @see WP_Widget::widget()
     *
     * @param array $args     Widget arguments.
     * @param array $instance Saved values from database.
     */
    public function widget( $args, $instance ) {
      echo $args['before_widget'];
      if ( ! empty( $instance['selected_league_id'] ) ) {
        echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
        echo $this->upcoming_round_html($instance['selected_league_id'], $instance['show_links']);
      }
      echo $args['after_widget'];
    }

    /**
     * Back-end widget form.
     *
     * @see WP_Widget::form()
     *
     * @param array $instance Previously saved values from database.
     */
    public function form( $instance ) {
      $options = "";
      $country = "";
      // foreach($leagues as $l){
      //   if($country != $l['country'] || $country == ""){
      //     $options .= "<option disabled>{$l['country']}</option>";
      //     $country = $l['country'];
      //   }
      //   $options .= "<option value='{$l['id']}'>&nbsp;&nbsp;&nbsp;{$l['name']}</option>";
      // }

      $options .= "<option> -- Select League -- </option><option value='1639'>&nbsp;&nbsp;&nbsp;English Premier League</option><option value='188'>&nbsp;&nbsp;&nbsp;Bundesliga</option><option value='1134'>&nbsp;&nbsp;&nbsp;La Liga</option><option value='1112'>&nbsp;&nbsp;&nbsp;Ligue 1</option><option value='1437'>&nbsp;&nbsp;&nbsp;Serie A</option><option value='122116'>&nbsp;&nbsp;&nbsp;Liga 1 Indonesia</option>";
    
      $last_edited = !empty($instance['last_edited']) ? $instance['last_edited'] : "update";

      $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'Widget Title', 'flygoal_content' );

      $league_id = ! empty( $instance['selected_league_id'] ) ? $instance['selected_league_id'] : esc_html__( '2012', 'flygoal_content' );

      if($last_edited == null || $last_edited == "" || $last_edited == "update"){
        $instance['show_links'] = 1;
      }
      
      if($league_id == '1639') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'English Premier League', 'flygoal_content' );
      } elseif($league_id == '188') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Bundesliga', 'flygoal_content' );
      } elseif($league_id == '1134') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'La Liga', 'flygoal_content' );
      } elseif($league_id == '1112') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Ligue 1', 'flygoal_content' );
      } elseif($league_id == '1437') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Serie A', 'flygoal_content' );
      } elseif($league_id == '122116') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Liga 1 Indonesia', 'flygoal_content' );
      } else {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( '-- Select League --', 'flygoal_content' );
      }

      // if(!isset($instance['selected_league_name'])){$instance['selected_league_name'] = "";}
      // $league_name = htmlentities($instance['selected_league_name'], null, 'utf-8');
      // $league_name = str_replace("&nbsp;", "", $league_name);
      // $league_name = html_entity_decode($league_name);

      ?>
      <div class='flygoalsp_form_wrapper'>
        <p>
          <!-- Widget Title -->
          <label style="display:block;" for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_attr_e( 'Title:', 'flygoal_content' ); ?></label> 
          <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">

          <!-- Widget Table -->
          <label style="display:block;" for="country">Find League ID</label> 
          <select class="widefat" name="<?php echo esc_attr( $this->get_field_name( 'selected_league_id' ) ); ?>" id="<?php echo esc_attr( $this->get_field_id( 'selected_league_id' ) ); ?>" data-uid='flygoalsp_league_standings'>
          <?php if(! empty ($instance['selected_league_id'])): ?>
            <option disabled>Selected</option>
            <option selected value="<?php echo $instance['selected_league_id']; ?>"><?php echo $league_name ?></option>
          <?php endif;?>
          <?= $options ?>
          </select>

          <input type="hidden" value='<?php echo esc_attr( $this->get_field_id( 'selected_league_id' ) ); ?>' id='get_selected_league_id'>

          <!-- Show links? -->
          <p>
            <label for="<?php echo $this->get_field_id( 'show_links' ); ?>">Include Links to Flygoal?</label>
            <input class="checkbox" type="checkbox" <?php checked( $instance[ 'show_links' ], 1); ?> id="<?php echo $this->get_field_id( 'show_links' ); ?>" name="<?php echo $this->get_field_name( 'show_links' ); ?>" /> 
          </p>
        </p>
      </div>

      <?php 
    }

    /**
     * Sanitize widget form values as they are saved.
     *
     * @see WP_Widget::update()
     *
     * @param array $new_instance Values just sent to be saved.
     * @param array $old_instance Previously saved values from database.
     *
     * @return array Updated safe values to be saved.
     */
    public function update( $new_instance, $old_instance ) {
      $instance = array();

      $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? sanitize_text_field( $new_instance['title'] ) : '';
      
      $instance['selected_league_id'] = ( ! empty( $new_instance['selected_league_id'] ) ) ? sanitize_text_field( $new_instance['selected_league_id'] ) : '';

      $instance['show_links'] = isset($new_instance['show_links']) ? 1 : 0;
      $instance['last_edited'] = ( ! empty( $new_instance['last_edited'] ) ) ? time() : time();

      return $instance;
    }
  } // Next Round Widget Class

  class flygoal_Prev_Round extends WP_Widget {

    /**
     * Register widget with WordPress.
     */
    function __construct() {
      parent::__construct(
        'flygoalsp_previous_round_widget', // Base ID
        esc_html__( 'Flygoal : Last Result', 'flygoal_content' ), // Name
        array( 'description' => esc_html__( 'Latest Match Result', 'flygoal_content' ), ) // Args
      );
    }
    
    public function previous_round_html($id, $links=0){
      if($id == 1639) {
        $url = plugin_dir_url( __FILE__ ).'assets/js/previousRound.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $content = "<div id='flygoalsp-previous-round'></div>
        <script>
          (function (w,d,s,o,f,js,fjs) {
            w['flygoalsp_PreviousRound']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
          }(window, document, 'script', 'pr', '{$url}'));
          pr('params', { leagueID: 1639, showLinks: {$links}});
        </script>";
        return $content;
      } else if($id == 188) {
        $url = plugin_dir_url( __FILE__ ).'assets/js/previousRoundBundesliga.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentBundesliga = "<div id='flygoalsp-previous-round-bundesliga'></div>
        <script>
          (function (w,d,s,o,f,js,fjs) {
            w['flygoalsp_PreviousRoundBundesliga']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
          }(window, document, 'script', 'pr', '{$url}'));
          pr('params', { leagueID: 188, showLinks: {$links}});
        </script>";
        return $contentBundesliga;
      } else if($id == 1112) {
        $url = plugin_dir_url( __FILE__ ).'assets/js/previousRoundLigue1.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentLigue1 = "<div id='flygoalsp-previous-round-ligue1'></div>
        <script>
          (function (w,d,s,o,f,js,fjs) {
            w['flygoalsp_PreviousRoundLigue1']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
          }(window, document, 'script', 'pr', '{$url}'));
          pr('params', { leagueID: 1112, showLinks: {$links}});
        </script>";
        return $contentLigue1;
      } else if($id == 1134) {
        $url = plugin_dir_url( __FILE__ ).'assets/js/previousRoundLaliga.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentLaliga = "<div id='flygoalsp-previous-round-laliga'></div>
        <script>
          (function (w,d,s,o,f,js,fjs) {
            w['flygoalsp_PreviousRoundLaliga']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
          }(window, document, 'script', 'pr', '{$url}'));
          pr('params', { leagueID: 1134, showLinks: {$links}});
        </script>";
        return $contentLaliga;
      } else if($id == 1437) {
        $url = plugin_dir_url( __FILE__ ).'assets/js/previousRoundSerieA.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentSerieA = "<div id='flygoalsp-previous-round-seriea'></div>
        <script>
          (function (w,d,s,o,f,js,fjs) {
            w['flygoalsp_PreviousRoundSerieA']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
          }(window, document, 'script', 'pr', '{$url}'));
          pr('params', { leagueID: 1437, showLinks: {$links}});
        </script>";
        return $contentSerieA;
      } else if($id == 122116) {
        $url = plugin_dir_url( __FILE__ ).'assets/js/previousRoundIndo.js';
        if($links == 1){$links = 'true';}else{$links = 'false';}
        $contentIndo = "<div id='flygoalsp-previous-round-indo'></div>
        <script>
          (function (w,d,s,o,f,js,fjs) {
            w['flygoalsp_PreviousRoundIndo']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
          }(window, document, 'script', 'pr', '{$url}'));
          pr('params', { leagueID: 122116, showLinks: {$links}});
        </script>";
        return $contentIndo;
      }
    }

    /**
     * Front-end display of widget.
     *
     * @see WP_Widget::widget()
     *
     * @param array $args     Widget arguments.
     * @param array $instance Saved values from database.
     */
    public function widget( $args, $instance ) {
      echo $args['before_widget'];
      if ( ! empty( $instance['selected_league_id'] ) ) {
        echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
        echo $this->previous_round_html($instance['selected_league_id'], $instance['show_links']);
      }
      echo $args['after_widget'];
    }

    /**
     * Back-end widget form.
     *
     * @see WP_Widget::form()
     *
     * @param array $instance Previously saved values from database.
     */
    public function form( $instance ) {
      $options = "";
      $country = "";
      // foreach($leagues as $l){
      //   if($country != $l['country'] || $country == ""){
      //     $options .= "<option disabled>{$l['country']}</option>";
      //     $country = $l['country'];
      //   }
      //   $options .= "<option value='{$l['id']}'>&nbsp;&nbsp;&nbsp;{$l['name']}</option>";
      // }

      $options .= "<option> -- Select League -- </option><option value='1639'>&nbsp;&nbsp;&nbsp;English Premier League</option><option value='188'>&nbsp;&nbsp;&nbsp;Bundesliga</option><option value='1134'>&nbsp;&nbsp;&nbsp;La Liga</option><option value='1112'>&nbsp;&nbsp;&nbsp;Ligue 1</option><option value='1437'>&nbsp;&nbsp;&nbsp;Serie A</option><option value='122116'>&nbsp;&nbsp;&nbsp;Liga 1 Indonesia</option>";

      $last_edited = !empty($instance['last_edited']) ? $instance['last_edited'] : "update";

      $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'Widget Title', 'flygoal_content' );

      $league_id = ! empty( $instance['selected_league_id'] ) ? $instance['selected_league_id'] : esc_html__( '2012', 'flygoal_content' );

      if($last_edited == null || $last_edited == "" || $last_edited == "update"){
        $instance['show_links'] = 1;
      }

      if($league_id == '1639') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'English Premier League', 'flygoal_content' );
      } elseif($league_id == '188') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Bundesliga', 'flygoal_content' );
      } elseif($league_id == '1134') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'La Liga', 'flygoal_content' );
      } elseif($league_id == '1112') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Ligue 1', 'flygoal_content' );
      } elseif($league_id == '1437') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Serie A', 'flygoal_content' );
      } elseif($league_id == '122116') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Liga 1 Indonesia', 'flygoal_content' );
      } else {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( '-- Select League --', 'flygoal_content' );
      }

      // if(!isset($instance['selected_league_name'])){$instance['selected_league_name'] = "";}
      // $league_name = htmlentities($instance['selected_league_name'], null, 'utf-8');
      // $league_name = str_replace("&nbsp;", "", $league_name);
      // $league_name = html_entity_decode($league_name);

      ?>
      <div class='flygoalsp_form_wrapper'>
      <p>

      <!-- Widget Title -->

      <label style="display:block;" for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_attr_e( 'Title:', 'flygoal_content' ); ?></label> 
      <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">

      <!-- Widget Table -->

      <label style="display:block;" for="country">Find League ID</label> 
      <select class="widefat" name="<?php echo esc_attr( $this->get_field_name( 'selected_league_id' ) ); ?>" id="<?php echo esc_attr( $this->get_field_id( 'selected_league_id' ) ); ?>" data-uid='flygoalsp_league_standings'>
      <?php if(! empty ($instance['selected_league_id'])): ?>
        <!-- <option disabled>Selected</option> -->
        <option selected value="<?php echo $instance['selected_league_id']; ?>"><?php echo $league_name ?></option>
      <?php endif;?>
      <?= $options ?>
      </select>

      <input type="hidden" value='<?php echo esc_attr( $this->get_field_id( 'selected_league_id' ) ); ?>' id='get_selected_league_id'>

      <!-- Show links? -->
      <p>
        <label for="<?php echo $this->get_field_id( 'show_links' ); ?>">Include Links to Flygoal?</label>
        <input class="checkbox" type="checkbox" <?php checked( $instance[ 'show_links' ], 1); ?> id="<?php echo $this->get_field_id( 'show_links' ); ?>" name="<?php echo $this->get_field_name( 'show_links' ); ?>" /> 
      </p>

      </p>

      </div>

      <?php 
    }

    /**
     * Sanitize widget form values as they are saved.
     *
     * @see WP_Widget::update()
     *
     * @param array $new_instance Values just sent to be saved.
     * @param array $old_instance Previously saved values from database.
     *
     * @return array Updated safe values to be saved.
     */
    public function update( $new_instance, $old_instance ) {
      $instance = array();

      $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? sanitize_text_field( $new_instance['title'] ) : '';
      
      $instance['selected_league_id'] = ( ! empty( $new_instance['selected_league_id'] ) ) ? sanitize_text_field( $new_instance['selected_league_id'] ) : '';

      $instance['show_links'] = isset($new_instance['show_links']) ? 1 : 0;
      $instance['last_edited'] = ( ! empty( $new_instance['last_edited'] ) ) ? time() : time();

      return $instance;
    }
  } // Previous Round Widget Class

  class flygoal_Upcoming_Fixtures extends WP_Widget {

    /**
     * Register widget with WordPress.
     */
    function __construct() {
      parent::__construct(
        'flygoalsp_next_fixture_widget', // Base ID
        esc_html__( 'Flygoal : Team Next Fixtures', 'flygoal_content' ), // Name
        array( 'description' => esc_html__( 'Team Upcoming Match Schedules', 'flygoal_content' ), ) // Args
      );
    }
    
    public function next_fixture($id, $links){
      $tz = get_option('timezone_string');
      $url = plugin_dir_url( __FILE__ ).'assets/js/next_fixture.js';
      if($links == 1){$links = 'true';}else{$links = 'false';}
      $content = "<div id='flygoalsp-upcoming'></div> <script> (function (w,d,s,o,f,js,fjs) { w['flygoalsp_UpcomingEmbed']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) }; js = d.createElement(s), fjs = d.getElementsByTagName(s)[0]; js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs); }(window, document, 'script', 'flygoalsp_Upcoming', '{$url}')); flygoalsp_Upcoming('params', { teamID: {$id}, showLinks: {$links}, tz:'{$tz}' }); </script>";
      return $content;
    }

    /**
     * Front-end display of widget.
     *
     * @see WP_Widget::widget()
     *
     * @param array $args     Widget arguments.
     * @param array $instance Saved values from database.
     */
    public function widget( $args, $instance ) {
      echo $args['before_widget'];
      if ( ! empty( $instance['selected_club_id'] ) ) {
        echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
        echo $this->next_fixture($instance['selected_club_id'], $instance['show_links']);
      }
      echo $args['after_widget'];
    }

    /**
     * Back-end widget form.
     *
     * @see WP_Widget::form()
     *
     * @param array $instance Previously saved values from database.
     */
    public function form( $instance ) {
      $options = "";
      $country = "";
      // foreach($leagues as $l){
      //   if($country != $l['country'] || $country == ""){
      //     $options .= "<option disabled>{$l['country']}</option>";
      //     $country = $l['country'];
      //   }
      //   $options .= "<option value='{$l['id']}'>&nbsp;&nbsp;&nbsp;&nbsp;{$l['name']}</option>";
      // }

      $options .= "<option> -- Select League -- </option><option value='1639'>&nbsp;&nbsp;&nbsp;English Premier League</option><option value='188'>&nbsp;&nbsp;&nbsp;Bundesliga</option><option value='1134'>&nbsp;&nbsp;&nbsp;La Liga</option><option value='1112'>&nbsp;&nbsp;&nbsp;Ligue 1</option><option value='1437'>&nbsp;&nbsp;&nbsp;Serie A</option><option value='122116'>&nbsp;&nbsp;&nbsp;Liga 1 Indonesia</option>";

      $last_edited = !empty($instance['last_edited']) ? $instance['last_edited'] : "update";

      // $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Select League', 'flygoal_content' );

      $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'Widget Title', 'flygoal_content' );

      $league_id = ! empty( $instance['selected_league_id'] ) ? $instance['selected_league_id'] : esc_html__( 'N/A', 'flygoal_content' );

      if($league_id == '1639') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'English Premier League', 'flygoal_content' );
      } elseif($league_id == '188') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Bundesliga', 'flygoal_content' );
      } elseif($league_id == '1134') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'La Liga', 'flygoal_content' );
      } elseif($league_id == '1112') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Ligue 1', 'flygoal_content' );
      } elseif($league_id == '1437') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Serie A', 'flygoal_content' );
      } elseif($league_id == '122116') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Liga 1 Indonesia', 'flygoal_content' );
      } else {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( '-- Select League --', 'flygoal_content' );
      }

      if($last_edited == null || $last_edited == "" || $last_edited == "update"){
        $instance['show_links'] = 1;
      }

      $club_id = ! empty( $instance['selected_club_id'] ) ? $instance['selected_club_id'] : esc_html__( 'N/A', 'flygoal_content' );

      // $club_name = ! empty( $instance['selected_club_name'] ) ? $instance['selected_club_name'] : esc_html__( 'N/A', 'flygoal_content' );

      // $league_name = htmlentities($league_name, null, 'utf-8');
      // $league_name = str_replace("&nbsp;", "", $league_name);
      // $league_name = html_entity_decode($league_name);
    ?>
      <div class='flygoalsp_form_wrapper'>
        <p>
          <!-- Widget Title -->
          <label style="display:block;" for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_attr_e( 'Title:', 'flygoal_content' ); ?></label> 
          <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>
        <!-- Widget League -->
        <p>
          <label style="display:block;" for="country">Find League ID</label> 
          <select class="widefat" name="<?php echo esc_attr( $this->get_field_name( 'selected_league_id' ) ); ?>" id="<?php echo esc_attr( $this->get_field_id( 'selected_league_id' ) ); ?>" data-uid='flygoalsp_next_fixture_league'>
            <?php if(!empty ($instance['selected_league_id'])): ?>
              <!-- <option disabled>Selected</option> -->
              <option selected value="<?php echo $instance['selected_league_id']; ?>"><?php echo $league_name; ?></option>
            <?php endif;?>
            <?= $options ?>
          </select>
        </p>
        <!-- Widget Team -->
        <p>
          <label for="team">Find Team ID</label>
          <select data-uid='flygoalsp_next_fixture_club' class="flygoalsp_next_fixture_club widefat" name="<?php echo esc_attr( $this->get_field_name( 'selected_club_id' ) ); ?>" id="<?php echo esc_attr( $this->get_field_id( 'selected_club_id' ) ); ?>">
            <?php if(! empty ($instance['selected_club_id'])): ?>
              <option value="<?= $instance['selected_club_id'] ?>"><?= $instance['selected_club_id'] ?></option>
            <?php endif;?>
          </select>
          <input type="hidden" value='<?php echo esc_attr( $this->get_field_id( 'selected_club_id' ) ); ?>' id='get_selected_club_id'>
          <input type="hidden" value='<?php echo esc_attr( $this->get_field_id( 'selected_league_id' ) ); ?>' id='get_selected_league_id'>
          <!-- Show links? -->
          <p>
            <label for="<?php echo $this->get_field_id( 'show_links' ); ?>">Include Links to Flygoal?</label>
            <input class="checkbox" type="checkbox" <?php checked( $instance[ 'show_links' ], 1); ?> id="<?php echo $this->get_field_id( 'show_links' ); ?>" name="<?php echo $this->get_field_name( 'show_links' ); ?>" /> 
          </p>
        </p>
      </div>
    <?php }

    /**
     * Sanitize widget form values as they are saved.
     *
     * @see WP_Widget::update()
     *
     * @param array $new_instance Values just sent to be saved.
     * @param array $old_instance Previously saved values from database.
     *
     * @return array Updated safe values to be saved.
     */
    public function update( $new_instance, $old_instance ) {
      $instance = array();

      $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? sanitize_text_field( $new_instance['title'] ) : '';
      
      $instance['selected_league_id'] = ( ! empty( $new_instance['selected_league_id'] ) ) ? sanitize_text_field( $new_instance['selected_league_id'] ) : '';

      $instance['selected_league_name'] = ( ! empty( $new_instance['selected_league_name'] ) ) ? sanitize_text_field( $new_instance['selected_league_name'] ) : '';

      $instance['selected_club_id'] = ( ! empty( $new_instance['selected_club_id'] ) ) ? sanitize_text_field( $new_instance['selected_club_id'] ) : '';

      $instance['selected_club_name'] = ( ! empty( $new_instance['selected_club_name'] ) ) ? sanitize_text_field( $new_instance['selected_club_name'] ) : '';

      $instance['show_links'] = isset($new_instance['show_links']) ? 1 : 0;
      $instance['last_edited'] = ( ! empty( $new_instance['last_edited'] ) ) ? time() : time();

      return $instance;
    }
  } // Standing Upcoming Fixtures

  class flygoal_Result_Fixtures extends WP_Widget {
    /**
     * Register widget with WordPress.
     */
    function __construct() {
      parent::__construct(
        'flygoalsp_fixtures_widget', // Base ID
        esc_html__( 'Flygoal : Fixtures / Results', 'flygoal_content' ), // Name
        array( 'description' => esc_html__( 'Fixtures and Result by Team', 'flygoal_content' ), ) // Args
      );
    }
    
    public function club_fixtures($id, $links=1){
      $tz = get_option('timezone_string');
      $url = plugin_dir_url( __FILE__ ).'assets/js/fixtures.min.js';
      if($links == 1){$links = 'true';}else{$links = 'false';}
      $content = "<div id='flygoalsp-fixtures'></div> <script> (function (w,d,s,o,f,js,fjs) { w['flygoalsp_FixturesEmbed']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) }; js = d.createElement(s), fjs = d.getElementsByTagName(s)[0]; js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs); }(window, document, 'script', 'flygoalsp_Fixtures', '{$url}')); flygoalsp_Fixtures('params', { teamID: {$id}, showLinks:{$links}, tz:'{$tz}' }); </script>";
      return $content;
    }

    /**
     * Front-end display of widget.
     *
     * @see WP_Widget::widget()
     *
     * @param array $args     Widget arguments.
     * @param array $instance Saved values from database.
     */
    public function widget( $args, $instance ) {
      echo $args['before_widget'];
      if ( ! empty( $instance['selected_club_id'] ) ) {
        echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
        echo $this->club_fixtures($instance['selected_club_id'], $instance['show_links']);
      }
      echo $args['after_widget'];
    }

    /**
     * Back-end widget form.
     *
     * @see WP_Widget::form()
     *
     * @param array $instance Previously saved values from database.
     */
    public function form( $instance ) {
      $options = "";
      $country = "";
      // foreach($leagues as $l){
      //   if($country != $l['country'] || $country == ""){
      //     $options .= "<option disabled>{$l['country']}</option>";
      //     $country = $l['country'];
      //   }
      //   $options .= "<option value='{$l['id']}'>&nbsp;&nbsp;&nbsp;&nbsp;{$l['name']}</option>";
      // }

      $options .= "<option> -- Select League -- </option><option value='1639'>&nbsp;&nbsp;&nbsp;English Premier League</option><option value='188'>&nbsp;&nbsp;&nbsp;Bundesliga</option><option value='1134'>&nbsp;&nbsp;&nbsp;La Liga</option><option value='1112'>&nbsp;&nbsp;&nbsp;Ligue 1</option><option value='1437'>&nbsp;&nbsp;&nbsp;Serie A</option><option value='122116'>&nbsp;&nbsp;&nbsp;Liga 1 Indonesia</option>";

      $last_edited = !empty($instance['last_edited']) ? $instance['last_edited'] : "update";

      // $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Select League', 'flygoal_content' );

      $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'Widget Title', 'flygoal_content' );

      $league_id = ! empty( $instance['selected_league_id'] ) ? $instance['selected_league_id'] : esc_html__( 'N/A', 'flygoal_content' );

      $club_id = ! empty( $instance['selected_club_id'] ) ? $instance['selected_club_id'] : esc_html__( 'N/A', 'flygoal_content' );

      $club_name = ! empty( $instance['selected_club_name'] ) ? $instance['selected_club_name'] : esc_html__( 'N/A', 'flygoal_content' );

      if($league_id == '1639') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'English Premier League', 'flygoal_content' );
      } elseif($league_id == '188') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Bundesliga', 'flygoal_content' );
      } elseif($league_id == '1134') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'La Liga', 'flygoal_content' );
      } elseif($league_id == '1112') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Ligue 1', 'flygoal_content' );
      } elseif($league_id == '1437') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Serie A', 'flygoal_content' );
      } elseif($league_id == '122116') {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( 'Liga 1 Indonesia', 'flygoal_content' );
      } else {
        $league_name = ! empty( $instance['selected_league_name'] ) ? $instance['selected_league_name'] : esc_html__( '-- Select League --', 'flygoal_content' );
      }

      if($last_edited == null || $last_edited == "" || $last_edited == "update"){
        $instance['show_links'] = 1;
      }

      // $league_name = htmlentities($league_name, null, 'utf-8');
      // $league_name = str_replace("&nbsp;", "", $league_name);
      // $league_name = html_entity_decode($league_name);

      ?>
      <div class='flygoalsp_form_wrapper'>
      <p>

      <!-- Widget Title -->

      <label style="display:block;" for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_attr_e( 'Title:', 'flygoal_content' ); ?></label> 
      <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
      </p>

      <!-- Widget League -->

      <p>

      <label style="display:block;" for="country">Find League ID</label> 
      <select class="widefat" name="<?php echo esc_attr( $this->get_field_name( 'selected_league_id' ) ); ?>" id="<?php echo esc_attr( $this->get_field_id( 'selected_league_id' ) ); ?>" data-uid='flygoalsp_next_fixture_league'>
      <?php if(! empty ($instance['selected_league_id'])): ?>
        <!-- <option disabled>Selected</option> -->
        <option selected value="<?php echo $instance['selected_league_id']; ?>"><?php echo $league_name; ?></option>
      <?php endif;?>
      <?= $options ?>
      </select>
      
      </p>
      <!-- Widget Team -->
      <p>
      <label for="team">Find Team ID</label>

      <select data-uid='flygoalsp_next_fixture_club' class="flygoalsp_next_fixture_club widefat" name="<?php echo esc_attr( $this->get_field_name( 'selected_club_id' ) ); ?>" id="<?php echo esc_attr( $this->get_field_id( 'selected_club_id' ) ); ?>">
      <?php if(! empty($instance['selected_club_id'])): ?>
        <option value="<?= $instance['selected_club_id'] ?>"><?= $instance['selected_club_id'] ?></option>
      <?php endif;?>
      </select>
      
      <input type="hidden" value='<?php echo esc_attr( $this->get_field_id( 'selected_club_id' ) ); ?>' id='get_selected_club_id'>
      <input type="hidden" value='<?php echo esc_attr( $this->get_field_id( 'selected_league_id' ) ); ?>' id='get_selected_league_id'>

      </p>

      <!-- Show links? -->
      <p>
        <label for="<?php echo $this->get_field_id( 'show_links' ); ?>">Include Links to Flygoal?</label>
        <input class="checkbox" type="checkbox" <?php checked( $instance[ 'show_links' ], 1); ?> id="<?php echo $this->get_field_id( 'show_links' ); ?>" name="<?php echo $this->get_field_name( 'show_links' ); ?>" /> 
      </p>

      </div>
      <?php 
    }

    /**
     * Sanitize widget form values as they are saved.
     *
     * @see WP_Widget::update()
     *
     * @param array $new_instance Values just sent to be saved.
     * @param array $old_instance Previously saved values from database.
     *
     * @return array Updated safe values to be saved.
     */
    public function update( $new_instance, $old_instance ) {
      $instance = array();

      $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? sanitize_text_field( $new_instance['title'] ) : '';
      
      $instance['selected_league_id'] = ( ! empty( $new_instance['selected_league_id'] ) ) ? sanitize_text_field( $new_instance['selected_league_id'] ) : '';

      // $instance['selected_league_name'] = ( ! empty( $new_instance['selected_league_name'] ) ) ? sanitize_text_field( $new_instance['selected_league_name'] ) : '';

      $instance['selected_club_id'] = ( ! empty( $new_instance['selected_club_id'] ) ) ? sanitize_text_field( $new_instance['selected_club_id'] ) : '';

      $instance['selected_club_name'] = ( ! empty( $new_instance['selected_club_name'] ) ) ? sanitize_text_field( $new_instance['selected_club_name'] ) : '';

      $instance['show_links'] = isset($new_instance['show_links']) ? 1 : 0;
      $instance['last_edited'] = ( ! empty( $new_instance['last_edited'] ) ) ? time() : time();

      return $instance;
    }
  } // Standing Result Fixtures
?>