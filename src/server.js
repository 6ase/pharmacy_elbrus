import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/indexRouter';
import indexProduct from './routes/indexProduct';

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/category', indexProduct);

app.get('/user');

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
