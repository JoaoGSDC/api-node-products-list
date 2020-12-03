import request from 'supertest';
import { app } from '../../src/server';

interface IUserDTO {
    id?: number;
    name?: string;
    email: string;
    password: string;
}

describe('auth', () => {
    test('should auth application', async () => {
        const user: IUserDTO = {
            email: 'teste@testando.com',
            password: '123456'
        };

        const resp = await request(app).post('/auth').send(user);

        expect(resp.status).toBe(200);
    });

    test('insert new user', async () => {
        const user: IUserDTO = {
            id: 0,
            name: 'Teste',
            email: 'teste@testando.com',
            password: '123456'
        };

        const resp = await request(app).post('/create-user').send(user);

        expect(resp.status).toBe(200);
    });
})