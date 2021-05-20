const galleryControllers = (() => {
	let sourceList = [];

	const createImageSourceList = (() => {
		for (let i = 0; i < 35; i++) {
			let source = `../dist/images/gallery/markham-maes-art-${i + 1}.png`;
			sourceList.push(source);
		}
	})();

	let previousIndex = sourceList.length - 1;
	let currentIndex = 0;
	let nextIndex = 1;

	const previousImage = () => {
		if (previousIndex === 0) {
			previousIndex = sourceList.length;
		}
		if (currentIndex === 0) {
			currentIndex = sourceList.length;
		}
		if (nextIndex === 0) {
			nextIndex = sourceList.length;
		}
		previousIndex--;
		currentIndex--;
		nextIndex--;
		document.querySelector('#previous-image').src = sourceList[previousIndex];
		document.querySelector('#current-image').src = sourceList[currentIndex];
		document.querySelector('#next-image').src = sourceList[nextIndex];
	};

	const nextImage = () => {
		if (previousIndex === sourceList.length - 1) {
			previousIndex = -1;
		}
		if (currentIndex === sourceList.length - 1) {
			currentIndex = -1;
		}
		if (nextIndex === sourceList.length - 1) {
			nextIndex = -1;
		}
		previousIndex++;
		currentIndex++;
		nextIndex++;
		document.querySelector('#previous-image').src = sourceList[previousIndex];
		document.querySelector('#current-image').src = sourceList[currentIndex];
		document.querySelector('#next-image').src = sourceList[nextIndex];
	};

	return {
		sourceList,
		nextImage,
		previousImage,
		previousIndex,
		currentIndex,
		nextIndex,
	};
})();

export { galleryControllers };
