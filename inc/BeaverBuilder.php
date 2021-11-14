<?php
/**
 * Beaver Builder extension
 *
 * @package BBUIENhancements
 * @since 1.0.0
 * @author BadabingBreda
 * @link http://www.badabing.nl
 * @license GNU General Public License 2.0+
 */
namespace BBUIEnhancements;

class BeaverBuilder {


    public function __construct() {

        add_filter( 'fl_builder_keyboard_shortcuts' , __CLASS__ . '::add_shortcuts' );

        add_action( 'wp_enqueue_scripts' , __CLASS__ . '::enhancement_scripts' );

    }
    
    /**
     * add_shortcuts
     *
     * @param  mixed $shortcuts
     * @return void
     */
    public static function add_shortcuts( $shortcuts ) {

        $shortcuts['BBUIEnhancements'] = array(
            'label' => __( 'UI Enhancements'),
            'keyCode' => 'mod+e' //shortcut is Ctrl+e or Cmd+e - Change this to anything that works best for you
            );
    
        return $shortcuts;

    }
    
    /**
     * enhancement_scripts
     *
     * @return void
     */
    public static function enhancement_scripts() {
        // Check if Beaver Builder is active 
        if ( class_exists('FLBuilderModel') && \FLBuilderModel::is_builder_active() ) {
    
           wp_enqueue_script('bb-ui-enhancements', BBUIENHANCEMENTS_URL . 'js/bb-ui-enhancements.js', array( 'jquery' , 'fl-builder' ), BBUIENHANCEMENTS_VERSION );

           $enhancement_settings = apply_filters( 'bb-ui-enhancements-settings' , array( 'pluginFolder' => BBUIENHANCEMENTS_URL , 'enhanceButton' => true  , 'xray' => false ) );

           \wp_localize_script( 'bb-ui-enhancements' , 'bbuie' , $enhancement_settings );

           wp_enqueue_style('bb-ui-enhancements', BBUIENHANCEMENTS_URL . 'css/bb-ui-enhancements.css', null, BBUIENHANCEMENTS_VERSION, 'all' );
        }
    }

}

