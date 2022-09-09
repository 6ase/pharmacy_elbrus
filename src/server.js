import express from 'express';
import session from 'express-session';
import store from 'session-file-store';
import indexProduct from './routes/indexProduct';
import indexRouter from './routes/indexRouter';
import userRouter from './routes/userRouter';
import apiBacketRouter from './routes/apiBacketRouter';

require('dotenv').config();

const PORT = process.env.PORT || 3000;
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use('/', indexRouter);
app.use('/products', indexProduct);
app.use('/backet', apiBacketRouter);
app.use('/user', userRouter);
app.use('/api/v1/backet', apiBacketRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
