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
    <>
      {/* <h1>Регистрация</h1> */}
      <div
        className="reg-container"
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              <h1>Имя</h1>
              <input name="login" onChange={changeHandler} value={inputs.login} type="name" className="form-control" id="exampleInputName1" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <h1>Почта</h1>
              <input name="email" onChange={changeHandler} value={inputs.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              <h1>Пароль</h1>
              <input name="password" onChange={changeHandler} value={inputs.password} type="password" className="form-control" id="exampleInputPassword1" />
            </label>
          </div>

          <button type="submit" className="btn btn-success btn-lg">Submit</button>
        </form>
      </div>
    </>
  );
}
