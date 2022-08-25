import { Router } from 'express';

const router = new Router();

router.post('/registration');
router.post('/login', (req, res) => {
    setTimeout(() => {
        res.json({
            login: true
        });
    }, 3000);
});
router.get('/auth', (req, res) => {
    setTimeout(() => {
        res.json({
            auth: false
        });
    }, 3000);
});

export default router;