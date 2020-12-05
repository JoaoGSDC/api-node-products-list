import express from 'express';
import cors from 'cors';
import routes from './routes';

export const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Controll-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization');

    app.use(cors());
    next();
})

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('Server is Online');
});