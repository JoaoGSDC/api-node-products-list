import request from 'supertest';
import { app } from '../../src/server';

interface IProductDTO {
    id: number;
    image: string;
    name: string;
    price: number;
}

describe('products', () => {
    test('should get all products', async () => {
        const resp = await request(app).get('/products');

        expect(resp.status).toBe(200);
    });

    test('should insert a new product', async () => {
        const product: IProductDTO = {
            id: 0,
            image: 'https://img.cybercook.com.br/imagens/receitas/620/pizza-de-frango-com-catupiry-600x600.jpg',
            name: 'Pizza de Frango',
            price: 24.00
        };

        const resp = await request(app).post('/products').send(product);

        expect(resp.status).toBe(200);
    });

    test('should update a product', async () => {
        const product: IProductDTO = {
            id: 1,
            image: 'https://img.cybercook.com.br/imagens/receitas/620/pizza-de-frango-com-catupiry-600x600.jpg',
            name: 'Pizza de Frango',
            price: 24.00
        };

        const resp = await request(app).put('/products').send(product);

        expect(resp.status).toBe(200);
    });

    test('should delete a product', async () => {
        const product: IProductDTO = {
            id: 1,
            image: 'https://img.cybercook.com.br/imagens/receitas/620/pizza-de-frango-com-catupiry-600x600.jpg',
            name: 'Pizza de Frango',
            price: 24.00
        };

        const resp = await request(app).delete('/products').set('id', String(product.id));

        expect(resp.status).toBe(200);
    });
})