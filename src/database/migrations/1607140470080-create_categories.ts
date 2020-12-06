import Knex from 'knex';

export const up = async (knex: Knex) => {
    return knex.schema.createTable('Categories', (table: any) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('image').notNullable();
    });
}

export const down = async (knex: Knex) => {
    return knex.schema.dropTable('Categories');
}