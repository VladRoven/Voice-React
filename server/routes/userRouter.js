import { Router } from 'express';

const router = new Router();

router.post('/registration');
router.post('/login');
router.get('/auth', (req, res) => {
    res.json({
        auth: false
    });
});

export default router;