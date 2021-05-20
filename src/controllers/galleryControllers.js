const galleryControllers = (() => {
	let sourceList = [];
	let previousIndex = 34;
	let currentIndex = 0;
	let nextIndex = 1;

	const createImageSourceList = (() => {
		for (let i = 0; i < 35; i++) {
			let source = `../dist/images/gallery/markham-maes-art-${i + 1}.png`;
			sourceList.push(source);
		}
	})();

	const previousImage = () => {
		if (previousIndex === 0) {
			previousIndex = 35;
		}
		if (currentIndex === 0) {
			currentIndex = 35;
		}
		if (nextIndex === 0) {
			nextIndex = 35;
		}
		previousIndex--;
		currentIndex--;
		nextIndex--;
		document.querySelector('#previous-image').src = sourceList[previousIndex];
		document.querySelector('#current-image').src = sourceList[currentIndex];
		document.querySelector('#next-image').src = sourceList[nextIndex];
	};

	const nextImage = () => {
		if (previousIndex === 34) {
			previousIndex = -1;
		}
		if (currentIndex === 34) {
			currentIndex = -1;
		}
		if (nextIndex === 34) {
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
