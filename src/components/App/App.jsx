import { useState } from "react";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CurrentMoviesContext } from "../contexts/CurrentMoviesContext";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Form from "../Form/Form";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

// const [currentUser, setCurrentUser] = useState({});
// const [currentMovies, setCurrentMovies] = useState([]);

// const [loggedIn, setLoggedIn] = useState(false);

const Headers = () => {
  const navigate = useNavigate();
  // setLoggedIn(true);
  const loggedIn = true;

  const buttonReg = (
    <button
      onClick={() => {
        navigate("/signup");
      }}
      type="button"
      className="header__register-button"
    >
      Регистрация
    </button>
  );

  const buttonLogin = (
    <button
      onClick={() => {
        navigate("/signin");
      }}
      type="button"
      className="header__login-button"
    >
      Войти
    </button>
  );

  const myProfile = (
    <div className="header__my-profile ">
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
  );

  // const iconProfile = (
  //   <button
  //     onClick={() => {
  //       navigate("/profile");
  //     }}
  //     className="header__icon-profile"
  //   ></button>
  // );

  const saveMovies = (
    <button
      className="header__saved-movies"
      onClick={() => {
        navigate("/saved-movies");
      }}
    >
      Сохранённые фильмы
    </button>
  );

  const movies = (
    <button
      className="header__movies"
      onClick={() => {
        navigate("/movies");
      }}
    >
      Фильмы
    </button>
  );

  return (
    <Routes>
      <Route path="*" />
      <Route path="/signin" />
      <Route path="/signup" />
      <Route
        path="/"
        element={
          loggedIn ? (
            <Header
              myProfile={myProfile}
              // iconProfile={iconProfile}
              saveMovies={saveMovies}
              movies={movies}
              loggedIn={loggedIn}
            />
          ) : (
            <Header buttonReg={buttonReg} buttonLogin={buttonLogin} />
          )
        }
      />
      <Route
        path="/movies"
        element={
          <Header
            myProfile={myProfile}
            // iconProfile={iconProfile}
            saveMovies={saveMovies}
            movies={movies}
            loggedIn={loggedIn}
          />
        }
      />
      <Route
        path="/saved-movies"
        element={
          <Header
            myProfile={myProfile}
            // iconProfile={iconProfile}
            saveMovies={saveMovies}
            movies={movies}
            loggedIn={loggedIn}
          />
        }
      />
      <Route
        path="/profile"
        element={
          <Header
            myProfile={myProfile}
            // iconProfile={iconProfile}
            saveMovies={saveMovies}
            movies={movies}
            loggedIn={loggedIn}
          />
        }
      />
    </Routes>
  );
};

const Footers = () => {
  return (
    <Routes>
      <Route path="*" />
      <Route path="/signin" />
      <Route path="/signup" />
      <Route path="/" element={<Footer />} />
      <Route path="/movies" element={<Footer />} />
      <Route path="/saved-movies" element={<Footer />} />
    </Routes>
  );
};

function App() {
  return (
    // <CurrentUserContext.Provider value={currentUser}>
    //   <CurrentMoviesContext.Provider value={currentMovies}>
    <div className="page">
      {/* <NotFound/> */}
      <Headers />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footers />
    </div>
    //   </CurrentMoviesContext.Provider>
    // </CurrentUserContext.Provider>
  );
}

export default App;
