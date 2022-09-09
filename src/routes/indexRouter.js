import { Router } from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Product } from '../db/models';
import Layout from '../components/Layout';

const router = Router();

router.get('/', async (req, res) => {
  const allProducts = await Product.findAll();
  const initState = { path: req.originalUrl, allProducts };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/api/products', async (req, res) => {
  const allProducts = await Product.findAll();
  // console.log(allProducts);
  res.json({ allProducts });
});

router.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const ProductById = await Product.findByPk(id);
  res.json({ prod: ProductById });
});
export default router;
