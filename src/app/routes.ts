import { Router, Request, Response } from 'express';
import CollectController from './controller/CollectController';

const routes = Router();

const collectController = new CollectController();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello World to Micro Service 3!' })
});

routes.get('/collects', collectController.index);
routes.get('/collects/:id', collectController.show);
routes.post('/collects', collectController.store);
//routes.get('/collects/recycled-products/all', collectController.indexRecycledProducts);

export default routes;
