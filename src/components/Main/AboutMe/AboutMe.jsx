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
            alt="Михаил Бубнов, 23 года"
          />
          <div className="aboutMe__info-student">
            <div className="aboutMe__text">
              <h3 className="aboutMe__name-student">Михаил</h3>
              <p className="aboutMe__paragraph">
                Фронтенд-разработчик, 23 года
              </p>
              <p className="aboutMe__paragraph">
                Я родом с Вологды, живу в Ярославле, закончил вологодский
                техникум железнодорожного транспорта. Я люблю слушать музыку, а
                ещё занимаюсь хоккеем. Недавно начал кодить. С 2022 года работю
                в компании ОАО «РЖД». После того, как прошёл курс по
                веб-разработке, начал активно искать вакансии в этой области.
              </p>
            </div>
            <a
              target="_blank"
              href="https://github.com/VerMishel27"
              className="aboutMe__link"
            >
              Github
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
