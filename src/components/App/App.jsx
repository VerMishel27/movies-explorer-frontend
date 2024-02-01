import {
  useEffect,
  useState,
} from "react";
import {
  Navigate,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import moviesApi from "../../utils/MoviesApi";
import * as mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import useFormValidation from "../../hooks/useForm";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    values,
    handleChange,
    resetForm,
    errors,
    isValid,
    setValues,
    setIsValid,
  } = useFormValidation();
  const [currentUser, setCurrentUser] = useState({}); //данные пользователя

  const [movies, setMovies] = useState([]); //найденые видео
  const [filterSearchMovies, setFilterSearchMovies] = useState([]); // отфильтрованные видео по запросу
  const [likeActive, setLikeActive] = useState(false); //состояние кнопки like
  const [savedMovies, setSavedMovies] = useState([]); //сохраненнные видео пользователя
  const [saved, setSaved] = useState(false); //страница с сохраненными фильмами
  const [filterSavedMovies, setFilterSavedMovies] = useState([]); //найденные карточки в сохраненках после поика
  const [filter, setFilter] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [preloader, setPreloader] = useState(false);

  const [searchError, setSearchError] = useState(false);
  const [searchNoFound, setSearchNoFound] = useState(false);

  const [lengthMovies, setLengthMovies] = useState(false); //состояние кнопки еще
  const [numberMovies, setNumberMovies] = useState(0); //количество карточек на странице
  const [addMovies, setAddMovies] = useState(0); //количество добавляемых карточек
  const [display, setDisplay] = useState(window.innerWidth); // ширина дисплея

  const [shortFilm, setShortFilm] = useState(
    localStorage.getItem("shortFilm") === "true" || false
  ); //короткометражки
  const [shortFilmSavedMovies, setShortFilmSavedMovies] = useState(false); //короткометражки в сохраненках

  const [errorLogin, setErrorLogin] = useState(""); // ошибки при аунтетификации
  const [errorRegister, setErrorRegister] = useState("");
  const [errorProfile, setErrorProfile] = useState("");
  const [errorSavedMoviesMessage, setErrorSavedMoviesMessage] = useState("");
  const [errorSavedMovies, setErrorSavedMovies] = useState(false);
  const [dataProfileSaved, setDataProfileSaved] = useState(false);
  const [buttonSubmitProfile, setButtonSubmitProfile] = useState(false);
  const [buttonSubmitLock, setButtonSubmitLock] = useState(false);

  //видимость кнопки "Ещё"
  useEffect(() => {
    if (
      filterSearchMovies.length <= numberMovies ||
      filterSearchMovies.length === 0
    ) {
      setLengthMovies(false);
    } else {
      setLengthMovies(true);
    }
  }, [numberMovies, filterSearchMovies]);

  //добавление карточек на страницу
  const addMoreMovies = () => {
    setNumberMovies(numberMovies + addMovies);
  };

  //отрисовка карточек в зависимости от ширины дисплей
  useEffect(() => {
    if (display > 900) {
      setNumberMovies(16);
      setAddMovies(4);
    } else if (display > 750) {
      setNumberMovies(8);
      setAddMovies(2);
    } else if (display < 750) {
      setNumberMovies(5);
      setAddMovies(2);
    }
  }, [display]);

  //отслеживает изменение ширины экрана
  useEffect(() => {
    const handleResize = (event) => {
      setDisplay(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //последний запрос пользователя
  useEffect(() => {
    if (loggedIn) {
      if (JSON.parse(localStorage.getItem("movies"))) {
        setValues({ searchMovies: localStorage.getItem("searchMovies") });
        setShortFilm(localStorage.getItem("shortFilm") === "true");
        setFilterSearchMovies(JSON.parse(localStorage.getItem("filterMovies")));
        setMovies(JSON.parse(localStorage.getItem("movies")));
      }
    }
  }, [loggedIn, setValues, setShortFilm, setFilterSearchMovies, setMovies]);

  //данные пользователя
  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getContent(localStorage.getItem("jwt"))
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loggedIn]);

  //сохраненные фильмы
  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
          setErrorSavedMovies(false);
        })
        .catch((err) => {
          setErrorSavedMovies(true);
          setErrorSavedMoviesMessage(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
          console.log(err);
        });
    }
  }, [loggedIn]);

  //Добавление и удаление фильма в сохраненках
  const handleMovieLike = (card) => {
    const isLiked = savedMovies.some((i) => i.trailerLink === card.trailerLink);
    if (!isLiked) {
      mainApi
        .addLikeMovies(
          {
            country: card.country,
            director: card.director,
            duration: card.duration,
            year: card.year,
            description: card.description,
            image: `https://api.nomoreparties.co${card.image.url}`,
            nameRU: card.nameRU,
            nameEN: card.nameEN,
            thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
            movieId: card.id,
            trailerLink: card.trailerLink,
          },
          !isLiked
        )
        .then((data) => {
          setSavedMovies([data, ...savedMovies]);
          setLikeActive(true);
        })
        .then(() => setLikeActive(true))
        .catch((err) => {
          console.log(err);
        });
    } else {
      const movie = savedMovies.filter((data) => {
        return data.trailerLink === card.trailerLink;
      });

      movie.map((data) => {
        if (data.owner === currentUser._id) {
          handleDelMovies(data);
        } else {
          console.log("Можно удалять только свои карточки!");
        }
      });
    }
  };

  //функция удаления видео из сохраненнок
  const handleDelMovies = (movieId) => {
    mainApi
      .delLikeMovies(movieId._id)
      .then(() => {
        setSavedMovies((state) => {
          return state.filter((n) => {
            return n.trailerLink !== movieId.trailerLink;
          });
        });
      })
      .then(() => setLikeActive(false))
      .catch((err) => {
        console.log(err);
      });
  };

  //переключатель короткометражки
  const onButtonShortFilm = () => {
    if (!saved) {
      setShortFilm(!shortFilm);
    } else {
      setShortFilmSavedMovies(!shortFilmSavedMovies);
    }
  };

  useEffect(() => {
    if (shortFilmSavedMovies) {
      handleFormSubmitSavedMovies();
    } else {
      handleFormSubmitSavedMovies();
    }
  }, [shortFilmSavedMovies]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("movies")) && !saved) {
      filterMovies(movies);
    }
  }, [shortFilm, movies, saved]);

  //поиск в сохраненных фильмов
  useEffect(() => {
    if (values.saveMovies !== "") {
      handleFormSubmitSavedMovies();
    }
  }, [values]);

  const handleFormSubmitSavedMovies = () => {
    if (values.savedMovies) {
      setFilter(true);
      filterMovies(savedMovies);
    } else {
      setFilter(false);
    }
  };

  //поиск фильмов
  const handleFormSubmitSearchMovies = () => {
    setPreloader(true);
    setLengthMovies(false);
    localStorage.setItem("searchMovies", values.searchMovies);
    localStorage.setItem("shortFilm", shortFilm);
    setFilterSearchMovies([]);
    setSearchError(false);
    setSearchNoFound(false);
    searchApiMovies();
    setSearchError(false);
  };

  //отправка запроса на поиск фильмов
  const searchApiMovies = () => {
    if (loggedIn) {
      moviesApi
        .searchMovies()
        .then((res) => {
          localStorage.setItem("movies", JSON.stringify(res));
          setMovies(res); //movies
          filterMovies(res);
        })
        .catch((error) => {
          setSearchError(true);
          console.log(error);
        })
        .finally(() => setPreloader(false));
    }
  };

  //фильтр поиска фильмов по названию
  function filterMovies(data) {
    const movies = data.filter((item) => {
      if (!saved) {
        if (shortFilm) {
          return (
            (item.nameRU
              .toLowerCase()
              .includes(values.searchMovies.toLowerCase()) ||
              item.nameEN
                .toLowerCase()
                .includes(values.searchMovies.toLowerCase())) &&
            item.duration < 40
          );
        } else {
          return (
            item.nameRU
              .toLowerCase()
              .includes(values.searchMovies.toLowerCase()) ||
            item.nameEN
              .toLowerCase()
              .includes(values.searchMovies.toLowerCase())
          );
        }
      } else {
        if (shortFilmSavedMovies) {
          return (
            (item.nameRU
              .toLowerCase()
              .includes(values.savedMovies.toLowerCase()) ||
              item.nameEN
                .toLowerCase()
                .includes(values.savedMovies.toLowerCase())) &&
            item.duration <= 40
          );
        } else {
          return (
            item.nameRU
              .toLowerCase()
              .includes(values.savedMovies.toLowerCase()) ||
            item.nameEN.toLowerCase().includes(values.savedMovies.toLowerCase())
          );
        }
      }
    });

    if (!saved) {
      if (movies.length === 0) {
        setFilterSearchMovies([]);
        setSearchNoFound(true);
      } else {
        setSearchNoFound(false);
        setFilterSearchMovies(movies);
        localStorage.setItem("filterMovies", JSON.stringify(movies));
      }
    } else {
      setFilterSavedMovies(movies);
    }
    localStorage.setItem("shortFilm", shortFilm);
  }

  //контроль состояния submitProfile
  useEffect(() => {
    if (
      currentUser.email !== values.email ||
      currentUser.name !== values.name
    ) {
      setButtonSubmitProfile(true);
    } else {
      setButtonSubmitProfile(false);
    }
  }, [values, currentUser]);

  //таймер уведомления errorProfile
  useEffect(() => {
    if (errorProfile !== "") {
      const timerId = setTimeout(() => {
        setErrorProfile("");
      }, 3000);
      return () => clearTimeout(timerId);
    }
  }, [errorProfile]);

  // изменение данных пользователя
  const handleUpdateUser = (data) => {
    return mainApi
      .editingProfile(data)
      .then((data) => {
        setCurrentUser(data);
        setErrorProfile("Данные успешно сохранены.");
        setDataProfileSaved(true);
        setButtonSubmitProfile(false);
      })
      .catch((err) => {
        if (err.statusCode === 400) {
          setErrorProfile("Передан некорректный email.");
        }
        if (err.status === 400) {
          setErrorProfile(err.message);
        }
        if (err.status) {
          setErrorProfile("При сохранении данных произошла ошибка.");
        }
        setDataProfileSaved(false);
        setButtonSubmitProfile(false);
        setIsValid(false);
        console.log(err);
      });
  };

  const auth = (jwt) => {
    return mainApi
      .getContent(jwt)
      .then((data) => {
        if (data) {
          if (data.status) throw new Error(data.message);
          setLoggedIn(true);
          setCurrentUser(data);

          const signin = "/signin";
          const signup = "/signup";
          const savedMovies = "/saved-movies";
          if (location.pathname === signin || location.pathname === signup) {
            navigate("/movies");
          } else {
            if (location.pathname === savedMovies) {
              setSaved(true);
              navigate("/saved-movies");
            } else {
              navigate(location.pathname);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      auth(jwt);
    }
  }, []);

  //регистрация пользователя
  const onRegister = ({ name, email, password }, resetForm) => {
    setButtonSubmitLock(true);
    return mainApi
      .register(name, email, password)

      .then((res) => {
        if (res.email) {
          onLogin({ email: res.email, password: password }, resetForm);
          setErrorRegister("");
        }
      })
      .then(() => {
        resetForm;
      })
      .then(() => navigate("/signin"))
      .catch((error) => {
        if (error.status === 409) {
          setErrorRegister(error.message);
        }
        if (error.statusCode) {
          setErrorRegister(
            "Переданы некорректные данные при создании пользователя."
          );
        }
        if (error.status === 400) {
          setErrorRegister(error.message);
        }
        if (error.status) {
          setErrorRegister("При регистрации пользователя произошла ошибка.");
        }

        console.log(error.message);
      })
      .finally(() => setButtonSubmitLock(false));
  };

  //аунтетификация пользователя
  const onLogin = ({ email, password }, resetForm) => {
    setButtonSubmitLock(true);
    return mainApi
      .authorize(email, password)
      .then((res) => {
        if (!res) throw new Error("Неправильное имя пользователя или пароль");
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          auth(res.token);
          setErrorLogin("");
        }
      })
      .then(resetForm)
      .then(() => navigate("/movies"))
      .catch((error) => {
        if (error.statusCode) {
          setErrorLogin("Неправильное имя пользователя или пароль");
        }
        console.log(error.message);
      })
      .finally(() => setButtonSubmitLock(false));
  };

  //выход пользователя
  const onSignOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("shortFilm");
    localStorage.removeItem("searchMovies");
    localStorage.removeItem("filterMovies");

    setShortFilm(false);
    setLoggedIn(false);
    setSaved(false);
    setMovies([]);
    navigate("/");
  };

  const Headers = () => {
    const buttonReg = (
      <button
        onClick={() => {
          navigate("/signup");
          setErrorRegister("");
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
          setErrorLogin("");
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
            setSaved(false);
            setErrorProfile("");
          }}
          className="header__profile"
        >
          Аккаунт
        </button>
        <button
          onClick={() => {
            navigate("/profile");
            setSaved(false);
            setErrorProfile("");
          }}
          className="header__icon-profile"
        ></button>
      </div>
    );

    const saveMovies = (
      <button
        className="header__saved-movies"
        onClick={() => {
          navigate("/saved-movies");
          setSaved(true);
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
          setSaved(false);
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Headers />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/signup"
            element={
              <Register
                errorRegister={errorRegister}
                setErrorRegister={setErrorRegister}
                buttonSubmitLock={buttonSubmitLock}
                onRegister={onRegister}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                setErrorLogin={setErrorLogin}
                errorLogin={errorLogin}
                buttonSubmitLock={buttonSubmitLock}
                onLogin={onLogin}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                onSignOut={onSignOut}
                handleUpdateUser={handleUpdateUser}
                errorProfile={errorProfile}
                dataProfileSaved={dataProfileSaved}
                buttonSubmitProfile={buttonSubmitProfile}
                values={values}
                handleChange={handleChange}
                errors={errors}
                isValid={isValid}
                resetForm={resetForm}
                component={Profile}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                onSubmit={handleFormSubmitSearchMovies}
                searchMovies={values}
                handleChange={handleChange}
                errors={errors}
                isValid={isValid}
                movies={filterSearchMovies}
                shortFilm={shortFilm}
                onButtonShortFilm={onButtonShortFilm}
                searchError={searchError}
                preloader={preloader}
                searchNoFound={searchNoFound}
                onMovieLike={handleMovieLike}
                likeActive={likeActive}
                savedMovies={savedMovies}
                setLengthMovies={setLengthMovies}
                lengthMovies={lengthMovies}
                addMoreMovies={addMoreMovies}
                numberMovies={numberMovies}
                component={Movies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                movies={savedMovies}
                handleDelMovies={handleDelMovies}
                onSubmit={handleFormSubmitSavedMovies}
                onButtonShortFilm={onButtonShortFilm}
                saved={saved}
                shortFilmSavedMovies={shortFilmSavedMovies}
                searchMovies={values}
                handleChange={handleChange}
                filterSavedMovies={filterSavedMovies}
                filter={filter}
                errorSavedMovies={errorSavedMovies}
                errorSavedMoviesMessage={errorSavedMoviesMessage}
                component={SavedMovies}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              loggedIn ? <Navigate to="/movies" /> : <Navigate to="/signin" />
            }
          />
        </Routes>
        <Footers />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
