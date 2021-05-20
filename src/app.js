import { galleryViews } from '../src/views/galleryViews';
import { galleryControllers } from '../src/controllers/galleryControllers';

const app = (() => {
	const advanceGallery = window.setInterval(() => {
		galleryControllers.nextImage();
	}, 6000);
})();
