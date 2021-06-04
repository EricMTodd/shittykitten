const socialsViews = (() => {
	const socials = document.querySelector('#socials');

	const renderSocialsContainer = (() => {
		const renderLinks = (() => {
			let div = document.createElement('div');
			div.classList.add('container');
			div.id = 'socials-links-container';
			socials.appendChild(div);

			const renderInstagramLink = (() => {
				let img = document.createElement('img');
				img.id = 'instagram-link';
				img.alt = 'insta';
				img.src =
					'https://thedreadnoughts.com/wp-content/uploads/2018/06/instagram-logo-white-on-black.png';
				img.addEventListener('click', (e) => {
					window.open('https://www.instagram.com/shittykitten1/');
				});
				div.appendChild(img);
			})();
		})();
	})();
	return {};
})();

export { socialsViews };
