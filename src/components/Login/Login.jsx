import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";
import useFormValidation from "../../hooks/useForm";

function Login({ onLogin, errorLogin, setErrorLogin }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormValidation();

  const navigate = useNavigate("");

  function handleSubmit(e) {
    e.preventDefault();

    onLogin({ email: values.email, password: values.password }, resetForm);
  }

  const visibility = (
    <div className="form__navigate-block">
      <p className="form__text">Ещё не зарегистрированы?</p>
      <button
        onClick={() => {
          navigate("/signup");
          setErrorLogin("");
        }}
        type="button"
        className="form__button-navigate"
      >
        Регистрация
      </button>
    </div>
  );
  return (
    <Form
      onSubmit={handleSubmit}
      title="Рады видеть!"
      buttonTitle="Войти"
      visibility={visibility}
      isValid={isValid}
      errorSubmit={errorLogin}
    >
      <label className="form__label">
        E-mail
        <input
          type="email"
          className={`form__input ${errors.email ? "form__input_error" : ""}`}
          name="email"
          autoComplete="email"
          value={values.email || ""}
          onChange={handleChange}
          placeholder="movies@yandex.ru"
          required
        />
        <span className="form__error" id="owner-email-error">
          {errors.email || ""}
        </span>
      </label>
      <label className="form__label">
        Пароль
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          className={`form__input ${
            errors.password ? "form__input_error" : ""
          }`}
          value={values.password || ""}
          onChange={handleChange}
          minLength={8}
          maxLength={30}
          placeholder="passsword"
          required
        />
        <span className="form__error" id="owner-password-error">
          {errors.password || ""}
        </span>
      </label>
    </Form>
  );
}

export default Login;
