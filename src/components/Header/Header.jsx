import "./Header.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header({
  buttonReg,
  buttonLogin,
  myProfile,
  saveMovies,
  movies,
  loggedIn
}) {
  const navigate = useNavigate("");
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  function isOpenMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  const burgerMenu = (
    <div className={`header__menu-block ${isOpen ? "header__menu_opened" : ""}`}>
      <div className="header__menu">
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
    </div>
  );

  return (
    <header className={`header ${location.pathname !== '/' ? "header_loggedIn" : ""}`}>
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
        <nav className="header__right-block">
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
        </nav>
      </div>
      {burgerMenu}
    </header>
  );
}

export default Header;
