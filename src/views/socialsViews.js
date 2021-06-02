const socialsViews = (() => {
	const socials = document.querySelector('#socials');

	const renderSocials = (() => {
		const renderTitle = (() => {
			let div = document.createElement('div');
			div.innerText = 'Socials';
			socials.appendChild(div);
		})();
	})();
	return {};
})();

export { socialsViews };
