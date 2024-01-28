import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";

function Movies({
  searchMovies,
  onSubmit,
  movies,
  shortFilm,
  onButtonShortFilm,
  searchError,
  preloader,
  searchNoFound,
  onMovieLike,
  likeActive,
  savedMovies,
  lengthMovies,
  addMoreMovies,
  numberMovies,
  handleChange,
  errors,
  isValid,
}) {
  const addMoreMovie = () => {
    addMoreMovies();
  };

  return (
    <main className="movies">
      <SearchForm
        onSubmit={onSubmit}
        values={searchMovies}
        onChange={handleChange}
        shortFilm={shortFilm}
        onButtonShortFilm={onButtonShortFilm}
        errors={errors}
        isValid={isValid}
      />
      <MoviesCardList
        movies={movies}
        searchMovies={movies}
        savedMovies={savedMovies}
        likeActive={likeActive}
        onMovieLike={onMovieLike}
        numberMovies={numberMovies}
      />
      <Preloader preloader={preloader} />
      <p
        className={`movies__error ${
          searchNoFound ? "movies__error_active" : ""
        }`}
      >
        Ничего не найдено
      </p>
      <p
        className={`movies__error ${searchError ? "movies__error_active" : ""}`}
      >
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </p>
      <button
        type="button"
        onClick={addMoreMovie}
        className={`movies__button-more-cards ${
          lengthMovies ? "movies__button-more-cards_active" : ""
        }`}
      >
        Ещё
      </button>
    </main>
  );
}

export default Movies;
