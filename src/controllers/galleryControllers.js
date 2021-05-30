import { galleryViews } from '../views/galleryViews';

const galleryControllers = (() => {
	let slider = document.querySelector('#slider');
	let imageSources = [];

	const createImageSourceList = (() => {
		for (let i = 0; i < 35; i++) {
			let source = `../dist/images/gallery/markham-maes-art-${i + 1}.png`;
			imageSources.push(source);
		}
	})();

	const prohibitAbuse = () => {
		let buttons = document.querySelectorAll('.slider-controller');
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].disabled = true;
			setTimeout(() => {
				buttons[i].disabled = false;
			}, 1000);
		}
	};

	const reverseSlide = () => {
		let inTheHole = document.querySelector('#in-the-hole');
		let previous = document.querySelector('#previous');
		let current = document.querySelector('#current');
		let next = document.querySelector('#next');
		let onDeck = document.querySelector('#on-deck');
		let slider = document.querySelector('#slider');
		let squares = document.querySelectorAll('.slide');

		prohibitAbuse();

		for (let i = 0; i < squares.length; i++) {
			squares[i].classList.add('reverse');
		}

		setTimeout(() => {
			onDeck.remove();

			let div = galleryViews.renderSlide();
			div.dataset.id = Number(inTheHole.dataset.id) - 1;
			if (div.dataset.id == 0) {
				div.dataset.id = 35;
			}
			div.innerText = div.dataset.id;

			console.log(imageSources[div.dataset.id]);
			slider.insertBefore(div, slider.firstChild);
			for (let i = 0; i < squares.length; i++) {
				squares[i].classList.remove('reverse');
			}

			div.id = 'in-the-hole';
			next.id = 'on-deck';
			current.id = 'next';
			previous.id = 'current';
			inTheHole.id = 'previous';
		}, 1000);
	};

	const advanceSlide = () => {
		let inTheHole = document.querySelector('#in-the-hole');
		let previous = document.querySelector('#previous');
		let current = document.querySelector('#current');
		let next = document.querySelector('#next');
		let onDeck = document.querySelector('#on-deck');
		let slider = document.querySelector('#slider');
		let squares = document.querySelectorAll('.slide');

		prohibitAbuse();

		for (let i = 0; i < squares.length; i++) {
			squares[i].classList.add('advance');
		}

		setTimeout(() => {
			inTheHole.remove();

			let div = galleryViews.renderSlide();
			div.dataset.id = Number(onDeck.dataset.id) + 1;
			if (div.dataset.id == 36) {
				div.dataset.id = 1;
			}
			div.innerText = div.dataset.id;
			console.log(imageSources[div.dataset.id]);
			slider.appendChild(div);
			for (let i = 0; i < squares.length; i++) {
				squares[i].classList.remove('advance');
			}

			div.id = 'on-deck';
			previous.id = 'in-the-hole';
			current.id = 'previous';
			next.id = 'current';
			onDeck.id = 'next';
		}, 1000);
	};

	return {
		imageSources,
		prohibitAbuse,
		reverseSlide,
		advanceSlide,
	};
})();

export { galleryControllers };
