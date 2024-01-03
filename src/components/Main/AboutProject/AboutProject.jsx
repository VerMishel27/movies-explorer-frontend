import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="aboutProject">
      <article className="aboutProject__block">
        <h2 className="aboutProject__title">О проекте</h2>
        <ul className="aboutProject__item-list">
          <li className="aboutProject__item-line">
            <h3 className="aboutProject__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="aboutProject__paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="aboutProject__item-line">
            <h3 className="aboutProject__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="aboutProject__paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className="aboutProject__bottom">
          <div className="aboutProject__bottom-left">
            <p className="aboutProject__bottom-left-name">1 неделя</p>
            <p className="aboutProject__bottom-name">Back-end</p>
          </div>
          <div className="aboutProject__bottom-right">
            <p className="aboutProject__bottom-right-name">4 недели</p>
            <p className="aboutProject__bottom-name">Front-end</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutProject;
