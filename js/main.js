$(document).ready(function(){
		
		var $slNav = $('.arrow a'), slImgs = '.items li';
		$slNav.hover(slNavOver, slNavOut);
		
		$slNav.click(function(e){
			var indexToShow = $(slImgs + '.showFirst').index();
			if ( $(this).attr('id') === 'next' ) {
				if ( $(slImgs + '.visible').next().length !== 0 ) {
					$(slImgs + '.visible').removeClass('visible').hide().next().fadeIn(1000).addClass('visible');
				}
			}
			
			if ( $(this).attr('id') === 'prev' ) {
				if ( $(slImgs + '.visible').prev().length !== 0 ) {
					$(slImgs + '.visible').removeClass('visible').hide().prev().fadeIn(1000).addClass('visible');
				}
			}
		});
 })
