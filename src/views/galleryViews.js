import { galleryControllers } from '../controllers/galleryControllers';

const galleryViews = (() => {
	let main = document.querySelector('main');

	const renderPreviousImage = (() => {
		let image = document.createElement('img');
		image.id = 'previous-image';
		image.src = galleryControllers.sourceList[galleryControllers.previousIndex];
		main.appendChild(image);
	})();

	const renderPreviousButton = (() => {
		let button = document.createElement('button');
		button.className = 'gallery-controller-button';
		button.id = 'previous-button';
		button.innerText = '<';
		button.addEventListener('click', (e) => {
			galleryControllers.previousImage();
		});
		main.appendChild(button);
	})();

	const renderPortrait = (() => {
		let image = document.createElement('img');
		image.id = 'current-image';
		image.src = '../dist/images/markham-self-portrait.png';
		main.appendChild(image);
	})();

	const renderNextButton = (() => {
		let button = document.createElement('button');
		button.className = 'gallery-controller-button';
		button.id = 'next-button';
		button.innerText = '>';
		button.addEventListener('click', (e) => {
			galleryControllers.nextImage();
		});
		main.appendChild(button);
	})();

	const renderNextImage = (() => {
		let image = document.createElement('img');
		image.id = 'next-image';
		image.src = galleryControllers.sourceList[galleryControllers.nextIndex];
		main.appendChild(image);
	})();
	return {};
})();

export { galleryViews };
