import express from 'express';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from './components/Layout';

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const initState = { path: req.originalUrl };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
