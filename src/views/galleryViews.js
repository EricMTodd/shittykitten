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

	const renderSlides = (() => {
		let slider = document.querySelector('#slider');
		for (let i = 0; i < 5; i++) {
			let id = i + 1;
			let div = document.createElement('div');
			div.classList.add('slide');
			div.id = `slide-${id}`;
			div.dataset.id = `${id}`;
			div.innerText = id;
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
			button.addEventListener('click', (e) => {
				galleryControllers.advanceSlide();
			});
			sliderControllersContainer.appendChild(button);
		})();
	})();

	return {};
})();

export { galleryViews };
