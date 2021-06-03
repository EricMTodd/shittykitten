const socialsViews = (() => {
	const socials = document.querySelector('#socials');

	const renderSocialsContainer = (() => {
		const renderTitle = (() => {
			let div = document.createElement('div');
			div.id = 'socials-title-container';
			socials.appendChild(div);

			let title = document.createElement('div');
			title.id = 'socials-title';
			title.innerText = 'Socials';
			div.appendChild(title);
		})();

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
				div.appendChild(img);
			})();

			const renderFacebookLink = (() => {
				let img = document.createElement('img');
				img.id = 'facebook-link';
				img.alt = 'facebook';
				img.src = 'https://www.bastrucks.com/images/bastrucks/facebook.png';
				div.appendChild(img);
			})();

			const renderVenmoLogo = (() => {
				let imageContainer = document.createElement('div');
				imageContainer.id = 'venmo-link';
				div.appendChild(imageContainer);
				let img = document.createElement('img');
				img.alt = 'venmo';
				img.src =
					'https://i2.wp.com/voixnoire.com/wp-content/uploads/2019/01/venmo-black.png?resize=259%2C275&ssl=1';
				imageContainer.appendChild(img);
			})();
		})();
	})();
	return {};
})();

export { socialsViews };
