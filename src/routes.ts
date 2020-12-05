import express from 'express';

import ProductsControllers from './controllers/ProductsControllers';
import CategoriesController from './controllers/CategoriesController';
import AuthController from './controllers/AuthController';

const routes = express.Router();

const products = ProductsControllers;
const categories = CategoriesController;
const auth = AuthController;

routes.post('/products/category', products.index);
routes.post('/products', products.insert);
routes.put('/products', products.update);
routes.delete('/products', products.delet);

routes.get('/categories', categories.index);
routes.post('/categories', categories.insert);
routes.put('/categories', categories.update);
routes.delete('/categories', categories.delet);

routes.post('/auth', auth.login);
routes.post('/create-user', auth.create);

export default routes;