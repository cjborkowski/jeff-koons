<?php

/**
 * @file
 * Process theme data.
 *
 * Use this file to run your theme specific implimentations of theme functions,
 * such preprocess, process, alters, and theme function overrides.
 *
 * Preprocess and process functions are used to modify or create variables for
 * templates and theme functions. They are a common theming tool in Drupal, often
 * used as an alternative to directly editing or adding code to templates. Its
 * worth spending some time to learn more about these functions - they are a
 * powerful way to easily modify the output of any template variable.
 * 
 * Preprocess and Process Functions SEE: http://drupal.org/node/254940#variables-processor
 * 1. Rename each function and instance of "jeffkoonsstudio" to match
 *    your subthemes name, e.g. if your theme name is "footheme" then the function
 *    name will be "footheme_preprocess_hook". Tip - you can search/replace
 *    on "jeffkoonsstudio".
 * 2. Uncomment the required function to use.
 */

/**
 * Preprocess variables for the html template.
 */
/* -- Delete this line to enable.
function jeffkoonsstudio_preprocess_html(&$vars) {
  global $theme_key;

  // Two examples of adding custom classes to the body.
  
  // Add a body class for the active theme name.
  // $vars['classes_array'][] = drupal_html_class($theme_key);

  // Browser/platform sniff - adds body classes such as ipad, webkit, chrome etc.
  // $vars['classes_array'][] = css_browser_selector();

}
// */


/**
 * Process variables for the html template.
 */
/* -- Delete this line if you want to use this function
function jeffkoonsstudio_process_html(&$vars) {
}
// */


/**
 * Override or insert variables for the page templates.
 */
/* -- Delete this line if you want to use these functions */
function jeffkoonsstudio_preprocess_page(&$vars) {

 if (isset($vars['node'])) {
  // If the node type is "blog" the template suggestion will be "page--blog.tpl.php".
   $vars['theme_hook_suggestions'][] = 'page__'. str_replace('_', '--', $vars['node']->type);
  }

  //dpm($vars['theme_hook_suggestions']);

  // Various Node types and what to do
  
   $node =& $vars['node'];

if (isset($vars['node']->type)){
    switch($vars['node']->type) {
        case 'artwork':
           
		    $vars['foo'] = array('foo','bar' );
			$vars['jeffkoons_artwork_page_title'] = $node->title;
			//$node->title = "jeff-page";
		   //dpm($node);
		   break;
		   
		   
		   }
	}//end if         

}//end preprocss function


/**
function jeffkoonsstudio_process_page(&$vars) {
}
// */


/**
 * Override or insert variables into the node templates.
 */
/* -- Delete this line if you want to use these functions */
function jeffkoonsstudio_preprocess_node(&$vars) {

 $node =& $vars['node'];

    switch($vars['type']) {
        case 'artwork':
           
		   $vars['foo'] = array('foo','bar' );
		   $vars['jeffkoons_artwork_page_title'] = $node->title;
			
			// depreciated and accomplished in jkstuio.js
		    //$vars['artwork-images'] = array();
		   //$vars['artwork_detail_images'] =array();
		   //$vars['artwork_detail_images']['new_title'][] = $node->title;
		   //$vars['artwork_detail_images'] =field_view_field('node', $node, 'field_light_box_image');
		   //dpm($vars);
		   //dpm ( $vars['artwork_detail_images']); 
		   //dpm ($vars['artwork_detail_images']);
		   break;
		   
		   case 'exhibitions':
           
		   $vars['foo'] = array('foo','bar' );
		   $vars['jeffkoons_exhibitions_page_title'] = $node->title;
		   //dpm($vars);
		   break;
		
		   }//end switch

}


/*function jeffkoonsstudio_process_node(&$vars) {
}
// */


/**
 * Override or insert variables into the comment templates.
 */
/* -- Delete this line if you want to use these functions
function jeffkoonsstudio_preprocess_comment(&$vars) {
}
function jeffkoonsstudio_process_comment(&$vars) {
}
// */


/**
 * Override or insert variables into the block templates.
 */
/* -- Delete this line if you want to use these functions
function jeffkoonsstudio_preprocess_block(&$vars) {
}
function jeffkoonsstudio_process_block(&$vars) {
}
// */


/**
 * Process variables for search-result.tpl.php.
 *
 * @see search-result.tpl.php
 */
function jeffkoonsstudio_preprocess_search_result(&$vars) {
  // Add node object to result, so we can display imagefield images in results.
  $n = node_load($vars['result']['node']->nid);
  $n && ($vars['node'] = $n);
}


function jeffkoonsstudio_preprocess_views_view(&$vars) {
	$view = $vars['view'];
	//dpm($vars);

	//press view
	if ('artwork' == $view -> name) {
			
	}// end if	
	
}//end function
