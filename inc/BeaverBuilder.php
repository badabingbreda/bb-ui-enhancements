<?php

namespace MakeMyDay;

class BeaverBuilder {


    public function __construct() {

        add_filter( 'fl_builder_keyboard_shortcuts' , __CLASS__ . '::add_shortcuts' );

        add_action( 'wp_enqueue_scripts' , __CLASS__ . '::outline_objects' );

    }

    /**
     * Create Builder Shortcut to highlight containers
     */
    public static function add_shortcuts( $shortcuts ) {

        $shortcuts['outlineObjects'] = array(
            'label' => __( 'Outline Objects'),
            'keyCode' => 'mod+q' //shortcut is Ctrl+q or Cmd+q - Change this to anything that works best for you
            );
    
        return $shortcuts;

    }

    public static function outline_objects() {
        // Check if Beaver Builder is active 
        if ( class_exists('FLBuilderModel') && \FLBuilderModel::is_builder_active() ) {
    
        /**
         * Enqueue your custom JavaScript file
         *
         *************************************
         * See "shortcut-script.js" file below
         *************************************
         *
         * Be sure to use the appropriate url path depending on if your 
         * code is contained in a custom plugin or child theme.
         *
         */
           wp_enqueue_script('outlineObjects', MAKEMYDAY_URL . 'js/make-my-day.js');

           wp_enqueue_style('outlineObjects', MAKEMYDAY_URL . 'css/make-my-day.css', null, MAKEMYDAY_VERSION, 'all' );
        }
    }

}
