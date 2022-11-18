<?php
/**
 * BB UI Enhancements
 *
 * @package     BBUIEnhancements
 * @author      Matt Eastwood
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: BB UI Enhancements
 * Plugin URI:  https://www.badabing.nl
 * Description: Enhance the Beaver Builder UI by distinguishing modules/cols/cols/rows with different colors, identify nested columns and more.
 * Version:     1.2.0
 * Author:      Badabingbreda
 * Author URI:  https://www.badabing.nl
 * Text Domain: textdomain
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */
namespace BBUIEnhancements;
use BBUIEnhancements\BeaverBuilder;
use BBUIEnhancements\GithubUpdater;

define( 'BBUIENHANCEMENTS_VERSION', '1.2.0' );
define( 'BBUIENHANCEMENTS_DIR', plugin_dir_path( __FILE__ ) );
define( 'BBUIENHANCEMENTS_FILE', __FILE__ );
define( 'BBUIENHANCEMENTS_URL', plugins_url( '/', __FILE__ ) );


require_once( 'inc/BeaverBuilder.php' );
require_once( 'inc/GithubUpdater.php' );

new BeaverBuilder();

$updater = new GithubUpdater( BBUIENHANCEMENTS_FILE );
$updater->set_username( 'badabingbreda' );
$updater->set_repository( 'bb-ui-enhancements' );
$updater->set_settings( array(
			'requires'			=> '4.6',
			'tested'			=> '6.1.1',
			'rating'			=> '100.0',
			'num_ratings'		=> '10',
			'downloaded'		=> '10',
			'added'				=> '2021-04-20',
		) );
$updater->initialize();

