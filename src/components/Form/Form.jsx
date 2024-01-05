import "./Form.css";
import logoHeader from "../../images/logoHeader.svg";
import { useNavigate } from "react-router-dom";

function Form({ children, onSubmit, title, buttonTitle, visibility }) {
  const navigate = useNavigate("");
  return (
    <main className="form">
      <form className="form__block" onSubmit={onSubmit}>
        <button onClick={() => {
          navigate("/")
        }} type="button" className="form__logo" />
        <h1 className="form__title">{title}</h1>

        <div className="form__children">{children}</div>
        <button className="form__submit-button" type="submit">
          {buttonTitle}
        </button>
        {visibility}
      </form>
    </main>
  );
}

export default Form;
