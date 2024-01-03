import "./Form.css";
import logoHeader from "../../images/logoHeader.svg";

function Form({ children, onSubmit, title, buttonTitle, visibility }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__block">
        <img src={logoHeader} alt="Логотип" className="form__logo" />
        <h2 className="form__title">{title}</h2>

        <div className="form__children">{children}</div>
        <button className="form__submit-button" type="submit">
          {buttonTitle}
        </button>
        {visibility}
      </div>
    </form>
  );
}

export default Form;
