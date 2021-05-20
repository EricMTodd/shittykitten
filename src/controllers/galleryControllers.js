const galleryControllers = (() => {
	let sourceList = [];
	let previousIndex = 34;
	let currentIndex = 0;
	let nextIndex = 1;

	const loopOverGallery = (() => {
		for (let i = 0; i < 35; i++) {
			let source = `../dist/images/gallery/markham-maes-art-${i + 1}.png`;
			sourceList.push(source);
		}
	})();

	const previousImage = () => {
		if (currentIndex === 0) {
			currentIndex = 35;
		}
		currentIndex--;
		document.querySelector('#current-image').src = sourceList[currentIndex];
	};

	const nextImage = () => {
		if (currentIndex === 34) {
			currentIndex = -1;
		}
		currentIndex++;
		document.querySelector('#current-image').src = sourceList[currentIndex];
	};

	return {
		nextImage,
		previousImage,
	};
})();

export { galleryControllers };
