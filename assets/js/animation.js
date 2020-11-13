var debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


var $left = $('.data-anime-left, .data-anime-right, .data-anime-up, .data-anime-down'),
    animationClass = 'animate',
	offset = $(window).height() * 3/4;

function animeScroll(){
	var documentTop = $(document).scrollTop();
	
	$left.each(function(){
		var itemTop = $(this).offset().top;
		if(documentTop > itemTop - offset){
			$(this).addClass(animationClass);
		}else{
			$(this).removeClass(animationClass);
		}
	});	
}

animeScroll();

$(document).scroll(debounce(function(){
	animeScroll();
},50));