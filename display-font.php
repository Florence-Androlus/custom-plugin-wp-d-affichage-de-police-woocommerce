<?php 
/* 
* @wordpress-plugin
* Plugin Name: Display Font 
* Description:       Affiche les différents types de polices dans le champ de saisi
* Version:           1.0.3
* Author:            Fan-Develop
* Author URI:        https://fan-develop.fr
* Requires at least: 5.9
* Requires PHP: 7.4.0
*/

/* Chemin vers ce fichier dans une constante
* => sera utile pour les hook d'activation et désactivation
*/
define('DISPLAY_FONT_PLUGIN_FILE', __FILE__);
define('DF_PLUGIN_PATH', rtrim(plugin_dir_url(__FILE__), "/") ) ;

/* If this file is called directly, abort.*/
if ( ! defined( 'WPINC' ) ) {
	die;
}


// ajout fichier JS
wp_enqueue_script('df-frontend-check-font', DF_PLUGIN_PATH. '/js/df-frontend-check-font.js' ,array('jquery'));	



		


