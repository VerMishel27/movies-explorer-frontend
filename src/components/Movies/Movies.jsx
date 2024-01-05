import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
    return (
        <main className="movies">
            <SearchForm/>
            <MoviesCardList/>
            <button type="button" className="movies__button-more-cards">Ещё</button>
        </main>
    )
}

export default Movies;
