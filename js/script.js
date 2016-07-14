(function() {
	'use strict';

	var Slider = function(sliderElement, sliderNavigation) {
		var slider = document.getElementById(sliderElement),
			sliderNavWrap = document.getElementById(sliderNavigation),
			sliderItems = document.querySelectorAll('*[data-item]'),
			sliderItems = Array.prototype.slice.call(sliderItems),
			sliderNav = document.querySelectorAll('*[data-nav]'),
			sliderNav = Array.prototype.slice.call(sliderNav),
			activeSlideData = sliderItems[0].dataset.item,
			leftMargin = 0;

		sliderNavWrap.addEventListener( "click" , function(event) {
			var elem = event.target;

			if ( elem.dataset.nav === 'next' ){
				if ( +activeSlideData === sliderItems.length ){
					return false;
				}

				leftMargin = leftMargin + sliderItems[activeSlideData-1].offsetWidth;
				activeSlideData = +activeSlideData + 1;

				slider.style.marginLeft = -leftMargin + 'px';

			}
			else if ( elem.dataset.nav === 'prev' ){
				if ( +activeSlideData === 1 ){
					return false;
				}
				
				leftMargin = leftMargin - sliderItems[activeSlideData-1].offsetWidth;
				activeSlideData = +activeSlideData - 1;

				slider.style.marginLeft = -leftMargin + 'px';

			}

		});
	};

	Slider('slider-list','slider-navigation');
})();

