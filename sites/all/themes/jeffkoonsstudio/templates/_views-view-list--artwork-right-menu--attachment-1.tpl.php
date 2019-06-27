<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 *
 * @ingroup views_templates
 */

$inc1 = "child-weight-null";
$inc2 = "child-weight-0";
$inc3 =  "child-weight-1";

$regex = "/[a-zA-Z]\-[1-99]/";
$regex2 = "/[a-zA-Z]\-[0]/";
$regex3 ="/[a-zA-Z]\-null";
$i = 0;
$p = 0;
$children = array();
// if (preg_match($regex3, $inc1)) {
//     // matches the string
//     echo "Found a match!" . $inc2;
// } else {
//     // If preg_match() returns false, then the regex does not
//     // match the string
//     echo "The regex pattern does not match. :(";
// }
?>
<!-- regex we're are testing for are: child-weight-null child-weight-0, child-weight-1-99 -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
   <script>
    $(".accordion").on("click", ".accordion-header", function() {
    $(this).toggleClass("active").next().slideToggle();
    });
  </script>
  <style>
 
  .accordion-header {
  border-bottom: 1px solid #DDE0E7;
  color: #2a313a;
  cursor: pointer;
  font-weight: 700;
  padding: 1.5rem;
}

.accordion-header:hover {
  background: #F6F7F9;
}

.accordion-content {
  /*display: none;*/
  border-bottom: 1px solid #DDE0E7;
  background: #F6F7F9;
  padding: 1.5rem;
  color: #4a5666;
}

.active.accordion-header::before {
  background-color: #FC6468;
}
</style>
<?php print $wrapper_prefix; ?>
  <?php if (!empty($title)) : ?>
    <h3><?php print $title; ?></h3>
  <?php endif; ?>
  <?php print $list_type_prefix; ?>
    
<div class="accordion accordion-container">
    <?php foreach ($rows as $id => $row): ?>
    
    <?php if (preg_match($regex2, $row)){ ?>
     <!-- no accordion class do nothing here-->
       <div class ="editions-no-accordion artwork-right-menu-items">
        <li class="<?php print $classes_array[$id]; ?>"><?php print $row; ?></li>
      </div><!-- no accordion class we're done here-->
              
      <?php } if ( preg_match($regex, $row) xor strpos($row, "artwork-nav-accordion") ) { ?>

 <?php

preg_match_all($regex, $row, $matches);

//print_r($matches);

?>

                        <?php if (strpos($row, "artwork-nav-accordion")) { ?>
                        <!-- parent -->
                        <li id="edition-accordion-header-<?php echo $p; ?>" class="accordion-header edition-accordion-header artwork-right-menu-items <?php print $classes_array[$id]; ?>">
                        <?php print $row; ?>
                        <p>child <?php  //print $i. $matches[1] ;?></p>
                        </li>
                        <?php $i++; }  ?>
                 
          <?php } ?>
    <?php endforeach; ?>
</div>
  <?php print $list_type_suffix; ?>
<?php print $wrapper_suffix; ?>
