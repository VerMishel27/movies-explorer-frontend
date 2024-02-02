import "./MoviesCard.css";

function MoviesCard({
  titleRu,
  saved,
  img,
  imgSavedMovies,
  link,
  time,
  onMovieLike,
  card,
  savedMovies,
  handleDelMovies,
}) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  const handleLikeClick = () => {
    onMovieLike(card);
  };

  const delCard = () => {
    handleDelMovies(card);
  };

  // Определяем, являемся ли мы владельцем текущей карточки
  const isLiked = !saved
    ? savedMovies.some((i) => i.trailerLink === card.trailerLink)
    : false;

  const cardLikeButtonClassName = `movies-card__button-like ${
    isLiked ? "movies-card__button-like_active" : ""
  }`;

  return (
    <li className="movies-card">
      <a href={link} rel="noreferrer" target="_blank" className="movies-card__link">
        <img
          src={saved ? imgSavedMovies : img}
          alt={titleRu}
          className="movies-card__img"
        />
      </a>
      <div className="movies-card__description">
        <a className="movies-card__link" href={link}>
          <h1 className="movies-card__title">{titleRu}</h1>
        </a>
        {saved ? (
          <button
            className="movies-card__button-delcard movies-card__button-delcard_active"
            onClick={delCard}
            type="button"
          ></button>
        ) : (
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
        )}
      </div>
      <p className="movies-card__duration">{`${
        time > 60 ? `${hours}ч` : ""
      } ${minutes}мин`}</p>
    </li>
  );
}

export default MoviesCard;
