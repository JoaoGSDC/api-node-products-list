import Knex from 'knex';

export const up = async (knex: Knex) => {
    return knex.schema.createTable('Products', (table: any) => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.integer('price').notNullable();
        table.integer('id_category').unsigned();
        table.foreign('id_category').references('Categories.id');
    });
}

export const down = async (knex: Knex) => {
    return knex.schema.dropTable('Products');
}