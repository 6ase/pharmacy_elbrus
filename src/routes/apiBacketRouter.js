import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Basket, Product } from '../db/models';
import Layout from '../components/Layout';


const router = express.Router();

router.get('/', async (req, res) => {
  const currUserId = req.session.userSession.id;
  const userBasket = await Basket.findAll({ where: { user_id: currUserId }, include: Product });
  // console.log(userBasket.Product);
  const initState = { path: req.originalUrl, userBasket };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

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
