import Dotenv from 'dotenv';
import Express from 'express';
import Cors from 'cors';
import Routes from './routes/index.js';

Dotenv.config();
const PORT = process.env.PORT || 5000;

const app = Express();
app.use(Cors());
app.use(Express.json());
app.use('/api', Routes);

app.listen(PORT, () => {
    console.log(`Server started on port ${ PORT }`);
});