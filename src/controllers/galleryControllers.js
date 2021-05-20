const galleryControllers = (() => {
	let main = document.querySelector('main');
	let sourceList = [];
	let galleryIndex = 0;

	const previousImage = () => {
		if (galleryIndex === 0) {
			galleryIndex = 35;
		}
		galleryIndex--;
		document.querySelector('#current-image').src = sourceList[galleryIndex];
	};

	const loopOverGallery = (() => {
		for (let i = 0; i < 35; i++) {
			let source = `../dist/images/gallery/markham-maes-art-${i + 1}.png`;
			sourceList.push(source);
		}
	})();

	const nextImage = () => {
		if (galleryIndex === 34) {
			galleryIndex = -1;
		}
		galleryIndex++;
		document.querySelector('#current-image').src = sourceList[galleryIndex];
	};

	return {
		nextImage,
		previousImage,
	};
})();

export { galleryControllers };
