// JavaScript Document

var navButton = document.querySelector('.toggle');
var bgMenu = document.querySelector('.bg-menu');
var navMenu = document.querySelector('.nav-menu');

	navButton.addEventListener("click", function(){
		if(navButton.classList.contains('active')){
			bgMenu.classList.remove('active');
			navButton.classList.remove('active');
			navMenu.classList.remove('active');
		}else{
			bgMenu.classList.add('active');
			navButton.classList.add('active');
			navMenu.classList.add('active');
	    }
		
		
	});
