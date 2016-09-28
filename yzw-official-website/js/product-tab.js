$(function(){
	window.onload = function()
	{
		var $a = $('.product-tab a');
		var $ul = $('.product-context ul');
		var $hrStudents = $('.hr-students');
		var $hrTeachers = $('.hr-teachers');
		var $triangleStudents = $('.triangle-up-students');
		var $triangleTeachers = $('.triangle-up-teachers');
		var $studentsA = $('.students-a');
		var $teachersA = $('.students-a');
						
		$a.mouseover(function(){
			var $this = $(this);
			var $t = $this.index();
			$a.removeClass();
			$this.addClass('current');
			$ul.eq($t).fadeIn(1000).siblings('.product-context ul').hide();
//			$ul.hide();
//			$ul.eq($t).show();
			
			if($studentsA.hasClass('current')){
				$hrStudents.addClass('hr-active');
				$triangleStudents.addClass('triangle-up-active');
				$hrTeachers.removeClass('hr-active');
				$triangleTeachers.removeClass('triangle-up-active');
			}else{
				$hrStudents.removeClass('hr-active');
				$hrTeachers.addClass('hr-active');
				$triangleTeachers.addClass('triangle-up-active');
				$triangleStudents.removeClass('triangle-up-active');
			}
		});
	}
});