const aboutViews = (() => {
	const about = document.querySelector('#about');

	const createAlphaContainers = (() => {
		for (let i = 0; i < 4; i++) {
			const div = document.createElement('div');
			div.classList.add('about-alpha-container');
			div.id = `about-alpha-container-${i + 1}`;
			about.appendChild(div);
		}
	})();
	return {};
})();

export { aboutViews };
