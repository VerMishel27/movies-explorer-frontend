import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
  movies,
  saved,
  numberMovies,
  onMovieLike,
  likeActive,
  savedMovies,
  handleDelMovies,
  searchMovies,
}) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {movies.slice(0, numberMovies).map((moviesData) => (
          <MoviesCard
            key={moviesData.id || moviesData._id}
            titleRu={moviesData.nameRU}
            img={`https://api.nomoreparties.co/${moviesData.image.url}`}
            imgSavedMovies={moviesData.image}
            link={moviesData.trailerLink}
            time={moviesData.duration}
            card={moviesData}
            saved={saved}
            onMovieLike={onMovieLike}
            likeActive={likeActive}
            savedMovies={savedMovies}
            handleDelMovies={handleDelMovies}
            searchMovies={searchMovies}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
