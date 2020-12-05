import { Request, Response } from 'express';
import knex from '../database/connection';

export const index = async (req: Request, res: Response) => {
  const { idCategory } = req.body;

  const products = await knex('Products').innerJoin('Categories', 'Categories.id', 'Products.id_category').where('Products.id_category', '=', idCategory).select('Products.*', 'Categories.name as category');

  return res.json(products);
}

export const insert = async (req: Request, res: Response) => {
  const { image, name, price, id_category } = req.body;

  await knex('Products').insert({ image, name, price, id_category });

  const products = await knex('Products').select('*');

  return res.json(products);
}

export const update = async (req: Request, res: Response) => {
  const { id, image, name, price, id_category } = req.body;

  await knex('Products').where('id', '=', id).update({ image, name, price, id_category });

  const products = await knex('Products').select('*');

  return res.json(products);
}

export const delet = async (req: Request, res: Response) => {
  const { id } = req.headers;

  await knex('Products').where('id', id).delete();

  const products = await knex('Products').select('*');

  return res.json(products);
}

export default { index, insert, update, delet }