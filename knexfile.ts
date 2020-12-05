import path from 'path';

import { Config } from 'knex';

export const test: Config = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database: 'knex-test'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
        tableName: 'knex_migrations',
    },
    useNullAsDefault: true,
}

export const development: Config = {
    client: 'mysql2',
    connection: {
        host: 'mysql741.umbler.com',
        user: 'joaogsdc',
        password: 'a12345678',
        database: 'knex'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
        tableName: 'knex_migrations',
    },
    useNullAsDefault: true,
}

export const staging: Config = {
    client: 'postgresql',
    connection: {
        database: 'my_db',
        user: 'username',
        password: 'password',
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations',
    }
}

export const production: Config = {
    client: 'postgresql',
    connection: {
        database: 'my_db',
        user: 'username',
        password: 'password',
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations',
    }
}

export default {
    test,
    development,
    staging,
    production,
}