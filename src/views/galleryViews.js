import { galleryControllers } from '../controllers/galleryControllers';

const galleryViews = (() => {
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

	const renderButtonsContainer = (() => {
		let div = document.createElement('div');
		div.classList.add('container');
		div.id = 'buttons-container';
		gallery.appendChild(div);
	})();

	const renderButtons = (() => {
		// render buttons
	})();

	return {};
})();

export { galleryViews };
