import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate("");
  return (
    <main className="not-found">
      <div className="not-found__block">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>

        <button
          onClick={() => {
            navigate(-1);
          }}
          type="button"
          className="not-found__exit-button"
        >
          Назад
        </button>
      </div>
    </main>
  );
}

export default NotFound;
