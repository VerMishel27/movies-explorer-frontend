import "./Form.css";

import { useNavigate } from "react-router-dom";

function Form({
  children,
  onSubmit,
  title,
  buttonTitle,
  visibility,
  isValid,
  errorSubmit,
}) {
  const navigate = useNavigate("");

  return (
    <main className="form">
      <form className="form__block" onSubmit={onSubmit}>
        <button
          onClick={() => {
            navigate("/");
          }}
          type="button"
          className="form__logo"
        />
        <h1 className="form__title">{title}</h1>
        <div className="form__children">{children}</div>
        <div className="form__submit-block">
          <span className="form__error form__error_margin-bottom">
            {errorSubmit}
          </span>
          <button
            disabled={!isValid}
            className={`form__submit-button ${
              !isValid ? "form__submit-button_noValid" : ""
            }`}
            type="submit"
          >
            {buttonTitle}
          </button>
        </div>

        {visibility}
      </form>
    </main>
  );
}

export default Form;
