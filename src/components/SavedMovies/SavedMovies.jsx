import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({
  movies,
  handleDelMovies,
  onSubmit,
  saved,
  shortFilmSavedMovies,
  onButtonShortFilm,
  handleChange,
  searchMovies,
  filterSavedMovies,
  filter,
  errorSavedMoviesMessage,
  errorSavedMovies,
}) {
  return (
    <main className="saved-movies">
      <SearchForm
        values={searchMovies}
        onChange={handleChange}
        saved={saved}
        onSubmitSavedMovies={onSubmit}
        shortFilmSavedMovies={shortFilmSavedMovies}
        onButtonShortFilm={onButtonShortFilm}
      />
      <MoviesCardList
        movies={!filter ? movies : filterSavedMovies}
        handleDelMovies={handleDelMovies}
        saved={saved}
      />
      <span
        className={`saved-movies__error ${
          errorSavedMovies ? "saved-movies__error_active" : ""
        }`}
      >
        {errorSavedMoviesMessage}
      </span>
    </main>
  );
}

export default SavedMovies;
