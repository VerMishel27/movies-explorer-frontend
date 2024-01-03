import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__block">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      
      <button type="button" className="not-found__exit-button">
        Назад
      </button>
      </div>
    </section>
  );
}

export default NotFound;
