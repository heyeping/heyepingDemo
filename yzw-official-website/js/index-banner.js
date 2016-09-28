$('.carousel').carousel({
	interval: 3000
});

$('#carousel-example-generic').on('slid.bs.carousel', function () {
	if($('.item-banner2').hasClass('active')){
		$('.navbar').removeClass('linear-banner1').addClass('linear-banner2');
	}else if($('.item-banner3').hasClass('active')){
		$('.navbar').removeClass('linear-banner2').addClass('linear-banner3');
	}else{
		$('.navbar').removeClass('linear-banner3').addClass('linear-banner1');
	}
});

function show(){
	$('.download-code').fadeIn(1000);
}

function hide(){
	$('.download-code').fadeOut(1000);
}

