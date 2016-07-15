<?php
/**
 * @file
 * videocontent.features.inc
 */

/**
 * Implements hook_node_info().
 */
function videocontent_node_info() {
  $items = array(
    'video' => array(
      'name' => t('Video'),
      'base' => 'node_content',
      'description' => t('Use this content type to embed videos in this content type as well as other content and views.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
