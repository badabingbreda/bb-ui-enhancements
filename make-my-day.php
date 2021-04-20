<?php
/**
 * Make My Day
 *
 * @package     makemyday
 * @author      Matt Eastwood
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Make My Day
 * Plugin URI:  https://www.badabing.nl
 * Description: Improve Beaver Builder UI by distinguishing nested columns on hover
 * Version:     1.0.0
 * Author:      Badabingbreda
 * Author URI:  https://www.badabing.nl
 * Text Domain: textdomain
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */
namespace MakeMyDay;
use MakeMyDay\BeaverBuilder;

define( 'MAKEMYDAY_VERSION', '1.0.0' );
define( 'MAKEMYDAY_DIR', plugin_dir_path( __FILE__ ) );
define( 'MAKEMYDAY_FILE', __FILE__ );
define( 'MAKEMYDAY_URL', plugins_url( '/', __FILE__ ) );


require_once( 'inc/BeaverBuilder.php' );

new BeaverBuilder();
