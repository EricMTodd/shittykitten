import { galleryControllers } from '../controllers/galleryControllers';

const galleryViews = (() => {
	let main = document.querySelector('main');
	let galleryContainer = document.createElement('div');
	galleryContainer.id = 'gallery-container';
	main.appendChild(galleryContainer);

	const renderImageContainers = (() => {
		const renderPreviousImageContainer = (() => {
			let div = document.createElement('div');
			div.className = 'image-container';
			div.id = 'previous-image-container';

			const renderPreviousImage = (() => {
				let image = document.createElement('img');
				image.id = 'previous-image';
				image.src =
					galleryControllers.sourceList[galleryControllers.previousIndex];
				div.appendChild(image);
			})();
			galleryContainer.appendChild(div);
		})();
	})();

	const renderPreviousButton = (() => {
		let button = document.createElement('button');
		button.className = 'gallery-controller-button';
		button.id = 'previous-button';
		button.innerText = '<';
		button.addEventListener('click', (e) => {
			galleryControllers.previousImage();
		});
		galleryContainer.appendChild(button);
	})();

	const renderCurrentImageContainer = (() => {
		let div = document.createElement('div');
		div.className = 'image-container';
		div.id = 'current-image-container';

		const renderPortrait = (() => {
			let image = document.createElement('img');
			image.id = 'current-image';
			image.src = '../dist/images/markham-self-portrait.png';
			div.appendChild(image);
		})();
		galleryContainer.appendChild(div);
	})();

	const renderNextButton = (() => {
		let button = document.createElement('button');
		button.className = 'gallery-controller-button';
		button.id = 'next-button';
		button.innerText = '>';
		button.addEventListener('click', (e) => {
			galleryControllers.nextImage();
		});
		galleryContainer.appendChild(button);
	})();

	const renderNextImageContainer = (() => {
		let div = document.createElement('div');
		div.className = 'image-container';
		div.id = 'next-image-container';

		const renderNextImage = (() => {
			let image = document.createElement('img');
			image.id = 'next-image';
			image.src = galleryControllers.sourceList[galleryControllers.nextIndex];
			div.appendChild(image);
		})();
		galleryContainer.appendChild(div);
	})();

	return {};
})();

export { galleryViews };
