import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <label className="search-form__label">
        <div className="search-form__search-icon"></div>
        <input className="search-form__input" type="text" placeholder="Фильм" />
        <button className="search-form__submit-button">Найти</button>
        <div className="search-form__switch-block search-form__switch-block_pc">
          <div className="search-form__switch search-form__switch_on"></div>
          <p className="search-form__switch-text">Короткометражки</p>
        </div>
      </label>
      <div className="search-form__switch-block search-form__switch-block_mobile">
        <div className="search-form__switch search-form__switch_on"></div>
        <p className="search-form__switch-text">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
