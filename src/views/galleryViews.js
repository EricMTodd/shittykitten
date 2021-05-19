const galleryViews = (() => {
	let main = document.querySelector('main');

	const renderPreviousButton = (() => {
		let button = document.createElement('button');
		button.className = 'gallery-controller-button';
		button.id = 'previous-button';
		button.innerText = '<';
		button.addEventListener('click', (e) => {
			console.log('click');
		});
		main.appendChild(button);
	})();

	const renderPortrait = (() => {
		let image = document.createElement('img');
		image.src = '../dist/images/markham-self-portrait.png';
		main.appendChild(image);
	})();

	const renderNextButton = (() => {
		let button = document.createElement('button');
		button.className = 'gallery-controller-button';
		button.id = 'previous-button';
		button.innerText = '>';
		button.addEventListener('click', (e) => {
			console.log('click');
		});
		main.appendChild(button);
	})();
	return {};
})();

export { galleryViews };
