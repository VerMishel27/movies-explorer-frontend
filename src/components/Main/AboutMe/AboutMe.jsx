import "./AboutMe.css";
import studentImg from "../../../images/student-min.jpg";

function AboutMe() {
  return (
    <section className="aboutMe">
      <article className="aboutMe__block">
        <h2 className="aboutMe__title">Студент</h2>
        <div className="aboutMe__info">
          <img
            className="aboutMe__img-student"
            src={studentImg}
            alt="Тут должно быть мое фото(:"
          />
          <div className="aboutMe__info-student">
            <div className="aboutMe__text">
              <h3 className="aboutMe__name-student">Михаил</h3>
              <p className="aboutMe__paragraph">
                Фронтенд-разработчик, 23 года
              </p>
              <p className="aboutMe__paragraph">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб-разработке, начал
                заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <a target="_blank" href="https://github.com/VerMishel27" className="aboutMe__link">
              Github
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
