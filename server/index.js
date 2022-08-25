import Dotenv from 'dotenv';
import Express from 'express';
import cors from 'cors';
import Routes from './routes/index.js';

Dotenv.config();
const PORT = process.env.PORT || 5000;

const app = Express();
app.use(cors({
    origin: ['http://192.168.0.103:3000', 'http://localhost:3000']
}));
app.use(Express.json());
app.use('/api', Routes);

app.listen(PORT, () => {
    console.log(`Server started on port ${ PORT }`);
});