jQuery(document).ready(function($) {

// Code that uses jQuery's $ can follow here.
//console.log ('jkstudio.js loaded !');

// String manipulation For Artwork with special titles that may cause trouble in URL segments
 $("a[href='/artwork/luxury-degradation']").attr('href', '/artwork/luxury-degradation').text('LUXURY & DEGRADATION');
 $('.jeffkoons-artwork-thumbnails span.image-field-caption').hide();
 $("a[href='/artwork/pre-new']").text('PRE-NEW');
 $("a[href='/artwork/split-rocker']").text('SPLIT-ROCKER');
 $("a[href='/artwork/titi-stainless']").text('TITI (STAINLESS)');
 $("a[href='/artwork/popeye-stainless']").text('POPEYE (STAINLESS)');
 $("a[href='/artwork/popeye-granite']").text('POPEYE (GRANITE)');
 $("a[href='/artwork/gazing-ball-bottlerack']").text('GAZING BALL (BOTTLERACK)');
 $("a[href='/artwork/gazing-ball-stool']").text('GAZING BALL (STOOL)');

 var str = $('.sidetypebig').text();
 //console.log(str);
 //console.log ('sidetypebig is: '+str);
 var safeTitle = new Array("pre-new","split-rocker");
 
 if (str == "luxury-degradation") {
 var fix = str.replace('luxury-degradation', 'luxury & degradation');
 } else if ( safeTitle.indexOf(str) > -1) {
 var fix = str;
 } else {
 var fix = str.replace(/-/g,' ');
 }
 if (str == "titi-stainless") {
 var fix = str.replace('titi-stainless', 'titi (stainless)');
 }
 if (str == "popeye-stainless") {
 var fix = str.replace('popeye-stainless', 'popeye (stainless)');
 }
 if (str == "popeye-granite") {
 var fix = str.replace('popeye-granite', 'popeye (granite)');
 }
 if (str == "gazing-ball-bottlerack") {
 var fix = str.replace('gazing-ball-bottlerack', 'gazing ball (bottlerack)');
 }
 if (str == "gazing-ball-stool") {
 var fix = str.replace('gazing-ball-stool', 'gazing ball (stool)');
 }
 
 //console.log ('sidetypebig change to: '+fix);
 $('.sidetypebig').html(fix);
 
 var title = $('.jeffkoons-artwork-title');
 //console.log ('title is : '+ title);
 $('.jeffkoons-artwork-title').hide();
 $('.image-field-caption').prepend(title);
 $('.jeffkoons-studio-artwork-title').show();
 
 var currentURL = window.location.pathname;
// console.log ('currentURL is: ' +currentURL);
 var pathArray = window.location.pathname.split( '/' );
// console.log ('pathArray lenght is: '+pathArray.length);
// console.log('path is: ' +pathArray[1] +' and '+ pathArray[2]);
 
 //now drill down
 $('a[href="/'+pathArray[1]+'"]').addClass('jeffkoons-active-link active');
 $('a[href="/'+pathArray[1]+'/'+pathArray[2]+'"]').addClass('jeffkoons-active-link active');
 $('a[href="/'+pathArray[1]+'/'+pathArray[2]+'/'+pathArray[3]+'"]').addClass('jeffkoons-active-link active');

//for artwork landing pages
if (pathArray[1] == 'artwork' && pathArray[2] && !pathArray[3]){
	//console.log('we have artwork with only 2 url segments');
	$('.artwork-right-menu-items-link > a').first().addClass('jeffkoons-active-link active');
}

 //certain pages
 if (currentURL == "/artwork/inflatables/five-double-sided-floor-mirrors-inflatable-flowers" || currentURL == "/artwork/inflatables"){
 //console.log("we got 5 sided url and attaching to a: " +currentURL);
 $('artwork-right-menu-items-link a').first().addClass('active jeffkoons-active-link');
 $('a[href="/artwork/inflatables/five-double-sided-floor-mirrors-inflatable-flowers"]').addClass('active jeffkoons-active-link');
 } 

 //biography
 if (currentURL.indexOf('biography-') >-1){
 //console.log ('we have biography-');
 //var hyperlinkText = document.getElementById('BIOGRAPHY').innerHTML;
 //console.log ('found: '+hyperlinkText);
 $('.menu-605 a').addClass('jeffkoons-active-link active');
 }

//exhibitions
if (currentURL.indexOf('exhibitions/solo/') >-1){
//console.log ('we have current solo exhibitions so go even deeper');
 $('a[href="/current-and-upcoming-solo-exhibitions"]').addClass('jeffkoons-active-link active');
 }
 
 //  current-and-upcoming-group-exhibitions
 if (currentURL.indexOf('exhibitions/group/') >-1){
console.log ('we have current group exhibitions so go even deeper');
 $('a[href="/current-and-upcoming-group-exhibitions"]').addClass('jeffkoons-active-link active');
 }
 
 if (currentURL.indexOf('current-and-upcoming-group-exhibitions') >-1){
//console.log ('we have current exhibitions');
 $('.menu-606 a').addClass('jeffkoons-active-link active');
 }
 
//bibliography-
 if (currentURL.indexOf('bibliography-') >-1){
 //console.log ('we have bibliography-');
 $('.menu-670 a').addClass('jeffkoons-active-link active');
 }
  
//UI section

$( '.jeffkoons-artwork-accordion ').accordion({
        	header: "h3",
        	active: true,
        	alwaysOpen: false,
        	collapsible: true,
        	icons: false,
        	autoHeight: false,
        	heightStyle: "content"
        });
        
        

//$(".image-style-380x-height").tooltip();

}); //end doc ready
