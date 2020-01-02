$(document).ready(function() {

	function mobileMenuManage(action) {
		if(action == 'open') {
			$('body').addClass('menu-open');
			$('.menu-mobile').addClass('open');
			$('.backdrop').addClass('show');
		}
		if(action == 'close') {
			$('body').removeClass('menu-open');
			$('.menu-mobile').removeClass('open');
			$('.backdrop').removeClass('show');
		}
	}

	$('.toggler').on('click', function() {
		if(!$('.menu-mobile').hasClass('open')) {
			mobileMenuManage('open');
		} else {
			mobileMenuManage('close');
		}
	});

	$('body').on('click', function(e) {
		var targetClick = e.target;
		if($(targetClick).hasClass('close') || $(targetClick).hasClass('close__btn') || $(targetClick).hasClass('backdrop')) {
			mobileMenuManage('close');
		}
	});

	$('.submenu li.active').on('click', function(){
		if(!$('.submenu .menu.aside').hasClass('open')) {
			$('.submenu .menu.aside li:not(.active)').fadeIn(300);
			$('.submenu .menu.aside').addClass('open');
			console.log(23333);
		} else {
			$('.submenu .menu.aside li:not(.active)').fadeOut(300);
			$('.submenu .menu.aside').removeClass('open');
		}
	});

})