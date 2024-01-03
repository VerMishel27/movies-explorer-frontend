import React, { useEffect, useState } from "react";
import "./Header.css";
import iconMain from "../../images/header-icon-main.svg";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";

// const [noAuthorized, setAuthorized] = useState(false);

// const mobileAuthorized = function () {
//   setAuthorized(true);
// };

// const headerLogin = (
//   <div className="header__right-block">
//     <button className="header__register-button">Регистрация</button>
//     <button className="header__login-button">Войти</button>
//   </div>
// );

// const headerAuthorized = (
//     <img src={iconMain} alt="Меню"/>
// )

function Header({
  buttonReg,
  buttonLogin,
  myProfile,
  saveMovies,
  movies,
  loggedIn,
  main
}) {
  const navigate = useNavigate("");

  const [isOpen, setIsOpen] = useState(false);
  // const [main, setMain] = useState(false);

  // useEffect(() => {
  //   if (navigate("/")) {
  //     setMain(true);
  //   }
  // }, [navigate("/")]);

  function isOpenMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  const burgerMenu = (
    <div className={`header__menu ${isOpen ? "header__menu_opened" : ""}`}>
      <button
        onClick={closeMenu}
        className="header__close-menu"
        type="button"
      ></button>
      <div className="header__menu-links">
        <button
          onClick={() => {
            navigate("/");
          }}
          type="button"
          className="header__button-main"
        >
          Главная
        </button>
        <button
          onClick={() => {
            navigate("/movies");
          }}
          className="header__movies-menu"
        >
          Фильмы
        </button>
        <button
          className="header__saved-movies-menu"
          onClick={() => {
            navigate("/saved-movies");
          }}
        >
          Сохранённые фильмы
        </button>
      </div>
      <div className="header__my-profile header__my-profile_menu">
        <button
          onClick={() => {
            navigate("/profile");
          }}
          className="header__profile"
        >
          Аккаунт
        </button>
        <button
          onClick={() => {
            navigate("/profile");
          }}
          className="header__icon-profile"
        ></button>
      </div>
    </div>
  );

  return (
    <header className={`header ${loggedIn ? "header_loggedIn" : ""}`}>
      <div className="header__block">
        <div className="header__left-block">
          <button
            type="button"
            onClick={() => {
              navigate("/");
            }}
            className="header__logo"
          />
          {movies}
          {saveMovies}
        </div>
        <div className="header__right-block">
          <button
            onClick={isOpenMenu}
            type="button"
            className={`header__burger-menu ${
              loggedIn ? "header__burger-menu_loggedIn" : ""
            }`}
          ></button>
          {buttonReg}
          {buttonLogin}
          {myProfile}
          {/* {iconProfile} */}
        </div>
      </div>
      {burgerMenu}
    </header>
  );
}

export default Header;
