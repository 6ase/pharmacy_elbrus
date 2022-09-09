import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { login, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      const newUser = await User.create({ login, email, password: hashPassword });
      req.session.userSession = { id: newUser.id, email: newUser.email };
      return res.json({ email: newUser.email });
    }
    res.status(400).json({ message: 'Такой email уже занят' });
  } catch (err) {
    console.error(err);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.userSession = { id: user.id, email: user.email };
        return res.json({ email: user.email });
      }
    }
    res.status(400).json({ message: 'Email или пароль не верны' });
  } catch (err) {
    console.error(err);
  }
});

router.get('/logout', async (req, res) => {
  res.clearCookie('user_sid');
  req.session.destroy();
  res.sendStatus(200);
});

export default router;
