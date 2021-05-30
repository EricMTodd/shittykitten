import { galleryViews } from '../views/galleryViews';

const galleryControllers = (() => {
	let imageSources = [];

	const createImageSourceList = (() => {
		for (let i = 0; i < 35; i++) {
			let source = `../dist/images/gallery/markham-maes-art-${i + 1}.png`;
			imageSources.push(source);
		}
	})();

	const reverseSlide = () => {
		let slider = document.querySelector('#slider');

		let inTheHole = document.querySelector('#in-the-hole');
		let previous = document.querySelector('#previous');
		let current = document.querySelector('#current');
		let next = document.querySelector('#next');
		let onDeck = document.querySelector('#on-deck');

		onDeck.remove();

		let div = galleryViews.renderSlide();
		div.dataset.id = Number(inTheHole.dataset.id) - 1;
		div.innerText = div.dataset.id;
		slider.insertBefore(div, inTheHole);

		div.id = 'in-the-hole';
		next.id = 'on-deck';
		current.id = 'next';
		previous.id = 'current';
		inTheHole.id = 'previous';
	};

	const advanceSlide = () => {
		let slider = document.querySelector('#slider');

		let inTheHole = document.querySelector('#in-the-hole');
		let previous = document.querySelector('#previous');
		let current = document.querySelector('#current');
		let next = document.querySelector('#next');
		let onDeck = document.querySelector('#on-deck');

		inTheHole.remove();

		let div = galleryViews.renderSlide();
		div.dataset.id = Number(onDeck.dataset.id) + 1;
		div.innerText = div.dataset.id;
		slider.appendChild(div);

		div.id = 'on-deck';
		previous.id = 'in-the-hole';
		current.id = 'previous';
		next.id = 'current';
		onDeck.id = 'next';
	};

	return {
		imageSources,
		reverseSlide,
		advanceSlide,
	};
})();

export { galleryControllers };
