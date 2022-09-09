import express from 'express';
import { Basket } from '../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  const { id } = req.body;
  try {
    const newProduct = await Basket.create({ user_id: req.session.userSession.id, product_id: id });
    res.status(200);
  } catch (err) {
    console.error(err);
  }
});

export default router;
