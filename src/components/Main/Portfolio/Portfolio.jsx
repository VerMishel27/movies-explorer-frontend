import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <nav className="portfolio__link-group">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links">
          <li className="portfolio__link">
            <a
              target="_blank"
              className="portfolio__link-name"
              href="https://github.com/VerMishel27/how-to-learn.git"
            >
              Статичный сайт
              <span className="portfolio__arrow">↗</span>
            </a>
          </li>
          <li className="portfolio__link">
            <a
              target="_blank"
              className="portfolio__link-name"
              href="https://github.com/VerMishel27/russian-travel.git"
            >
              Адаптивный сайт
              <span className="portfolio__arrow">↗</span>
            </a>
          </li>
          <li className="portfolio__link">
            <a
              target="_blank"
              className="portfolio__link-name"
              href="https://github.com/VerMishel27/react-mesto-api-full-gha.git"
            >
              Одностраничное приложение
              <span className="portfolio__arrow">↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
