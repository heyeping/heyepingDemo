$(function(){
	var tabs_i = 0;
	$('.learningGuid-title').click(function(){
		var _self = $(this);
		var j = $('.learningGuid-title').index(_self);
		if(tabs_i == j) return false; tabs_i = j;
		$('.learningGuid-title i').each(function(e){
			if(e == tabs_i){
				$('i',_self).removeClass('fa-angle-double-up').addClass('fa-angle-double-down')
			}else{
				$(this).removeClass('fa-angle-double-down').addClass('fa-angle-double-up')
			}
		});
		$('.lgCon').slideUp().eq(tabs_i).slideDown();
	});
})
