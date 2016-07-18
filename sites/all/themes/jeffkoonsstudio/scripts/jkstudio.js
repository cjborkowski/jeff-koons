jQuery(document).ready(function($) {

// Code that uses jQuery's $ can follow here.
//console.log ('jkstudio.js loaded !');

// String manipulation
 $("a[href='/artwork/luxury-degradation']").attr('href', '/artwork/luxury-degradation').text('LUXURY & DEGRADATION');
 $('.jeffkoons-artwork-thumbnails span.image-field-caption').hide();
 $("a[href='/artwork/pre-new']").text('PRE-NEW');
 $("a[href='/artwork/split-rocker']").text('SPLIT-ROCKER');

 var str = $('.sidetypebig').text();
 //console.log ('sidetypebig is: '+str);
 var safeTitle = new Array("pre-new","split-rocker");
 
 if (str == "luxury-degradation") {
 var fix = str.replace('luxury-degradation', 'luxury & degradation');
 } else if ( safeTitle.indexOf(str) > -1) {
 var fix = str;
 } else {
 var fix = str.replace(/-/g,' ');
 }
 
 //console.log ('sidetypebig change to: '+fix);
 $('.sidetypebig').html(fix);
 
 var title = $('.jeffkoons-artwork-title');
 //console.log (title);
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
