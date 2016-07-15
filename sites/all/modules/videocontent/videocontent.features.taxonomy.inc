<?php
/**
 * @file
 * videocontent.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function videocontent_taxonomy_default_vocabularies() {
  return array(
    'video' => array(
      'name' => 'Video',
      'machine_name' => 'video',
      'description' => 'use this taxonomy vocabulary and terms to classify and organize videos',
      'hierarchy' => '0',
      'module' => 'taxonomy',
      'weight' => '0',
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
  );
}
