import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__block">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__bottom">
          <nav className="footer__links">
            <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link">Яндекс.Практикум</a>
            <a href="https://github.com/VerMishel27" target="_blank" className="footer__link">Github</a>
          </nav>
          <p className="footer__year">©2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
