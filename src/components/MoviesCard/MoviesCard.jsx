import "./MoviesCard.css";
import cardFoto from "../../images/card-foto-min.jpg";

function MoviesCard() {
    return (
        <article className="movies-card">
            <img src={cardFoto} alt="" className="movies-card__img" />
            <div className="movies-card__description">
                <p className="movies-card__title">33 слова о дизайне</p>
                {/* <button className="movies-card__button-like movies-card__button-like_active" type="button"></button> */}
                <button className="movies-card__button-delcard movies-card__button-delcard_active" type="button"></button>
            </div>
            <p className="movies-card__duration">1ч 42мин</p>
        </article>
    )
}

export default MoviesCard;