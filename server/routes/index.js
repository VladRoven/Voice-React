import { Router } from 'express';
import User from './userRouter.js';
import * as Crypto from 'crypto';

const router = new Router();
const secretKey = 'qwertyuiopasdfghjklzxcvbnmqwerty';
const dataUser = {
    'name': 'Tarass',
    'exp': 1662858697
};
const alg = 'sha512';

router.use('/user', User);
router.get('/token', (req, res) => {
    const data = JSON.stringify(dataUser);
    const hash = Crypto.createHash(alg).update(data + secretKey).digest('hex');
    const headers = JSON.stringify({
        alg
    });
    res.send({
        token: `${ Buffer.from(headers).toString('base64') }.${ Buffer.from(data).toString('base64') }.${ hash }`
    });
});
router.get('/validate', (req, res) => {
    let isValid;
    const { authorization } = req.headers;
    const [, data, sign] = authorization.split('.');
    const decodedDate = Buffer.from(data, 'base64').toString('utf-8');
    const hash = Crypto.createHash(alg).update(decodedDate + secretKey).digest('hex');
    
    isValid = hash === sign;
    
    if (isValid) {
        const { exp } = JSON.parse(decodedDate);
        const currentDate = Math.floor(Date.now() / 1000);
        console.log(currentDate);
        isValid = exp > currentDate;
    }
    res.send({
        data,
        sign,
        isValid
    });
});

export default router;