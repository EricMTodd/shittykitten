const galleryControllers = (() => {
	let main = document.querySelector('main');
	let sourceList = [];
	let galleryIndex = 0;

	const previousImage = () => {
		galleryIndex--;
		console.log(sourceList[galleryIndex]);
	};

	const loopOverGallery = (() => {
		for (let i = 0; i < 35; i++) {
			let source = `../dist/images/gallery/markham-maes-art-${i + 1}.png`;
			sourceList.push(source);
		}
		console.log(sourceList[galleryIndex]);
	})();

	const nextImage = () => {
		galleryIndex++;
		console.log(sourceList[galleryIndex]);
	};
	return {
		nextImage,
		previousImage,
	};
})();

export { galleryControllers };
