import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ authState, setAuthState }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [search, setSearch] = useState('');

  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/user/logout');
    if (response.ok) {
      setAuthState(null);
      navigate('/');
    }
  };

  return (

    <nav className="navbar-expand-lg bg-light" style={{ width: '100%', position: 'fixed', zIndex: '6' }}>
      <div className="container-fluid" style={{ display: 'flex' }}>
        <NavLink className="navbar-brand fs-1 fw-light" to="/">
          <img
            src="https://kartinkin.net/uploads/posts/2022-03/1646968151_14-kartinkin-net-p-ekologiya-kartinki-dlya-prezentatsii-15.png"
            alt=""
            width="100"
            height="60"
            style={{ marginRight: '10px' }}
            className="d-inline-block align-text-top"
          />
          АптЭко
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <form className="d-flex" role="search" style={{ padding: '20px' }}>

          <input
            name="search"
            value={search}
            
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" />

          <li style={{ listStyleType: 'none' }} className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Категории
            </Link>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" to="/">Антибактериальные препараты</a></li>
              <li><a className="dropdown-item" to="/">Гормоны</a></li>
              <li><a className="dropdown-item" to="/">Препараты, влияющие на иммунитет</a></li>
              <li><a className="dropdown-item" to="/">Препараты, влияющие на психику</a></li>
              <li><a className="dropdown-item" to="/">Противовирусные препараты</a></li>
              <li><a className="dropdown-item" to="/">Противовоспалительные и обезболивающие препараты</a></li>

            </ul>
          </li>

          {!authState
            ? (

              <>
                <NavLink to="/signup" className="btn btn-success m-2"><strong>Зарегистрироваться</strong></NavLink>
                <NavLink to="/signin" className="btn btn-outline-success m-2">Войти</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/backet" className="btn btn-outline-success m-2">Корзина</NavLink>
                <a onClick={logoutHandler} className="btn btn-logout-success m-2" href="logout">Выход</a>
              </>
            )}
        </div>
      </div>
    </nav>
  );
}
