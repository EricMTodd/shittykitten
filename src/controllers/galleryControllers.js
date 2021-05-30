const galleryControllers = (() => {
	let imageSources = [];

	const createImageSourceList = (() => {
		for (let i = 0; i < 35; i++) {
			let source = `../dist/images/gallery/markham-maes-art-${i + 1}.png`;
			imageSources.push(source);
		}
	})();

	const reverseSlide = () => {
		console.log('click');
	};

	const advanceSlide = () => {
		console.log('click');
	};

	return {
		imageSources,
		reverseSlide,
		advanceSlide,
	};
})();

export { galleryControllers };
