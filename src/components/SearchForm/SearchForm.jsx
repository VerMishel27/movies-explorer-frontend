import "./SearchForm.css";

function SearchForm({
  values,
  onChange,
  onSubmit,
  shortFilm,
  onButtonShortFilm,
  onSubmitSavedMovies,
  saved,
  shortFilmSavedMovies,
  isValid,
  errors,
}) {
  const handleFormSubmitSavedMovies = (e) => {
    e.preventDefault();
    onSubmitSavedMovies();
  };

  const handleFormSubmitSearchMovies = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      className="search-form"
      onSubmit={
        !saved ? handleFormSubmitSearchMovies : handleFormSubmitSavedMovies
      }
    >
      <div className="search-form__label">
        <div className="search-form__search-icon"></div>
        <div className="search-form__input-block">
          <input
            className="search-form__input"
            type="search"
            name={!saved ? "searchMovies" : "savedMovies"}
            value={
              !saved ? values.searchMovies || "" : values.savedMovies || ""
            }
            onChange={onChange}
            placeholder="Фильм"
            required
          />
          <span className="search-form__error">
            {!saved ? (!isValid ? errors.searchMovies : "") : ""}
          </span>
        </div>

        <button type="submit" className="search-form__submit-button">
          Найти
        </button>
        <div className="search-form__switch-block search-form__switch-block_pc">
          <button
            type="button"
            onClick={onButtonShortFilm}
            className={`search-form__switch ${
              !saved
                ? shortFilm
                  ? "search-form__switch_on"
                  : ""
                : shortFilmSavedMovies
                ? "search-form__switch_on"
                : ""
            }`}
          ></button>
          <p className="search-form__switch-text">Короткометражки</p>
        </div>
      </div>
      <div className="search-form__switch-block search-form__switch-block_mobile">
        <button
          type="button"
          onClick={onButtonShortFilm}
          className={`search-form__switch ${
            !saved
              ? shortFilm
                ? "search-form__switch_on"
                : ""
              : shortFilmSavedMovies
              ? "search-form__switch_on"
              : ""
          }`}
        ></button>
        <p className="search-form__switch-text">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
