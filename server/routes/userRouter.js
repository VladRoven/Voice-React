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
    res.json({
        auth: false
    });
});

export default router;