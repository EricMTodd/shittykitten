import { galleryControllers } from '../controllers/galleryControllers';

const galleryViews = (() => {
	let content = document.querySelector('#content');
	let gallery = document.querySelector('#gallery');

	const renderSlider = (() => {
		let div = document.createElement('div');
		div.classList.add('container');
		div.id = 'slider';
		gallery.appendChild(div);
	})();

	const renderSlide = () => {
		let div = document.createElement('div');
		div.classList.add('slide');
		return div;
	};

	const renderSlides = (() => {
		for (let i = 0; i < 5; i++) {
			let div = renderSlide();
			div.dataset.id = `${i + 1}`;
			div.innerText = i + 1;

			if (i === 0) {
				div.id = 'in-the-hole';
			}
			if (i === 1) {
				div.id = 'previous';
			}
			if (i === 2) {
				div.id = 'current';
			}
			if (i === 3) {
				div.id = 'next';
			}
			if (i === 4) {
				div.id = 'on-deck';
			}
			slider.appendChild(div);
		}
	})();

	const renderSliderControllersContainer = (() => {
		let div = document.createElement('div');
		div.classList.add('container');
		div.id = 'slider-controllers-container';
		content.appendChild(div);
	})();

	const renderButtons = (() => {
		let sliderControllersContainer = document.querySelector(
			'#slider-controllers-container'
		);

		const renderReverseSlideButton = (() => {
			let button = document.createElement('button');
			button.type = 'button';
			button.innerText = '<';
			button.classList.add('slider-controller');
			button.id = 'reverse-slide-button';
			button.addEventListener('click', (e) => {
				galleryControllers.reverseSlide();
			});
			sliderControllersContainer.appendChild(button);
		})();

		const advanceSlideButton = (() => {
			let button = document.createElement('button');
			button.type = 'button';
			button.innerText = '>';
			button.classList.add('slider-controller');
			button.id = 'advance-slide-button';
			button.addEventListener('click', (e) => {
				galleryControllers.advanceSlide();
			});
			sliderControllersContainer.appendChild(button);
		})();
	})();

	return {
		renderSlide,
	};
})();

export { galleryViews };
