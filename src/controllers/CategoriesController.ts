import { Request, Response } from 'express';
import knex from '../database/connection';

export const index = async (req: Request, res: Response) => {
    const categories = await knex('Categories').select('*');

    return res.json(categories);
}

export const insert = async (req: Request, res: Response) => {
    const { name, image } = req.body;

    await knex('Categories').insert({ name, image });

    const categories = await knex('Categories').select('*');

    return res.json(categories);
}

export const update = async (req: Request, res: Response) => {
    const { id, name, image } = req.body;

    await knex('Categories').where('id', '=', id).update({ name, image });

    const categories = await knex('Categories').select('*');

    return res.json(categories);
}

export const delet = async (req: Request, res: Response) => {
    const { id } = req.headers;

    await knex('Categories').where('id', id).delete();

    const categories = await knex('Categories').select('*');

    return res.json(categories);
}

export default { index, insert, update, delet }