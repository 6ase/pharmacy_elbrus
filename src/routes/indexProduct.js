import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Product } from '../db/models';
import Layout from '../components/Layout';

const router = express.Router();

// router.get('/', async (req, res) => {
//   const allStudents = await Product.findAll();
//   const initState = { path: req.originalUrl, allStudents };
//   res.layout(initState);
// });

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const ProductById = await Product.findByPk(id);
  const initState = { path: req.originalUrl, ProductById };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


export default router;
