const galleryViews = (() => {
	const renderPortrait = (() => {
		let main = document.querySelector('main');
		let image = document.createElement('img');
		image.src = '../dist/images/markham-self-portrait.png';
		main.appendChild(image);
	})();
	return {};
})();

export { galleryViews };
