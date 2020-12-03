import { Request, Response } from 'express';
import knex from '../database/connection';

export const index = async (req: Request, res: Response) => {
    const products = await knex('products').select('*');

    return res.json(products);
}

export const insert = async (req: Request, res: Response) => {
    const { product } = req.body;

    await knex('products').insert({ product });

    const products = await knex('products').select('*');

    return res.json(products);
}

export const update = async (req: Request, res: Response) => {
    const { id, product } = req.body;

    await knex('products').where('id', '=', id).update({ product: product });

    const products = await knex('products').select('*');

    return res.json(products);
}

export const delet = async (req: Request, res: Response) => {
    const { id } = req.headers;

    await knex('products').where('id', id).delete();

    const products = await knex('products').select('*');

    return res.json(products);
}

export default { index, insert, update, delet }