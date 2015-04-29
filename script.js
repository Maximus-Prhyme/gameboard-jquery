var main = function() {
$('.more-btn').click(function() {
	// console.log('this'));
	$(this).next().toggle();
	// $('.more-menu').toggle();
})
$('.share').click(function(){
	$(this).next().toggle();
})	
$('.notification').click(function(){
	$(this).toggleClass('active');
})
};

$(document).ready(main);