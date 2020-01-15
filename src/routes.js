import { Router } from 'express';

import DevController from './controllers/DevController';
import SearcheController from './controllers/SearchController';

const routes = Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.get('/search', SearcheController.index);

export default routes;
