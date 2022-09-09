import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registration({ setAuthState }) {
  const [inputs, setInputs] = useState({ login: '', email: '', password: '' });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const response = await fetch('/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(inputs),
    });
    if (response.ok) {
      const data = await response.json();
      setAuthState(data);
      navigate('/');
    }
  };

  return (
    <div
      className="card mb-3 w-50 d-flex"
      style={{ maxWidth: '540px', boxShadow: '4px 7px 6px 1px silver' }}
    >
      <h1>Регистрация</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Имя
            <input name="login" onChange={changeHandler} value={inputs.login} type="name" className="form-control" id="exampleInputName1" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Почта
            <input name="email" onChange={changeHandler} value={inputs.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
            <input name="password" onChange={changeHandler} value={inputs.password} type="password" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
