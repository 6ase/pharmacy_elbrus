import express from 'express';
import morgan from 'morgan';

import session from 'express-session';
import store from 'session-file-store';
import indexProduct from './routes/indexProduct';
import indexRouter from './routes/indexRouter';
import userRouter from './routes/userRouter';

require('dotenv').config();

const PORT = 3000;
const app = express();

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use('/', indexRouter);
app.use('/products', indexProduct);
app.get('/user');
app.use('/user', userRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
