$('#logo').show();
$('nav').hide();
$(window).load(function(){
	$('#logo').slideUp(500);
	$('nav').slideDown();
	$('#main_img').show();
});
$(document).ready(function(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	$('#main_img').css('height',height-40);	
	$('#logo').css('height',height);
	$('#main_img').hide();
	$('nav').hide();
	var k = $('.loadanim').height();
	$('.loadanim').css('margin-top',-k/2);
});