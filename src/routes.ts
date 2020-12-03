import express from 'express';

import ProductsControllers from './controllers/ProductsControllers';
import AuthController from './controllers/AuthController';

const routes = express.Router();

const products = ProductsControllers;
const auth = AuthController;

routes.get('/products', products.index);
routes.post('/products', products.insert);
routes.put('/products', products.update);
routes.delete('/products', products.delet);

routes.post('/auth', auth.login);
routes.post('/create-user', auth.create);

export default routes;