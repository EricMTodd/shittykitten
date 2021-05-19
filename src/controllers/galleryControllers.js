const galleryControllers = (() => {
	let main = document.querySelector('main');
	let sourceList = [];

	const loopOverGallery = (() => {
		for (let i = 0; i < 35; i++) {
			let source = `../dist/images/gallery/markham-maes-art-${i + 1}.png`;
			sourceList.push(source);
		}
		console.log(sourceList);
	})();

	return {};
})();

export { galleryControllers };
