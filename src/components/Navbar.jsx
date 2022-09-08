import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navCont navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">АптЭка</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Регистрация</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Авторизация</NavLink>
            </li>
          </ul>
        </div>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Категории
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="#">Антибактериальные препараты</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Гормоны</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Для психики</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Противовирусные препараты</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Обезболивающие</NavLink></li>
          </ul>
        </li>
      </div>
    </nav>

  );
}
