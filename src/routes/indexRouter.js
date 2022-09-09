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

router.get('/video', (req, res) => {
  const initState = { path: req.originalUrl };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
router.get('/card', (req, res) => {
  const initState = { path: req.originalUrl };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
export default router;
