import { galleryViews } from '../src/views/galleryViews';
import { galleryControllers } from '../src/controllers/galleryControllers';
import { aboutViews } from '../src/views/aboutViews';
import { socialsViews } from '../src/views/socialsViews';

const app = (() => {
	const timer = setInterval(() => {
		galleryControllers.prohibitAbuse();
		galleryControllers.advanceSlide();
	}, 6000);

	return {
		timer,
	};
})();

export { app };
