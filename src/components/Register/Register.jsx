import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";
import useFormValidation from "../../hooks/useForm";

function Register({ onRegister, errorRegister, setErrorRegister, buttonSubmitLock }) {
  const navigate = useNavigate("");
  const { values, handleChange, resetForm, errors, isValid } =
    useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(
      { name: values.name, email: values.email, password: values.password },
      resetForm
    );
  }

  const visibility = (
    <div className="form__navigate-block">
      <p className="form__text">Уже зарегистрированы?</p>
      <button
        onClick={() => {
          navigate("/signin");
          setErrorRegister("");
        }}
        type="button"
        className="form__button-navigate"
      >
        Войти
      </button>
    </div>
  );
  return (
    <Form
      onSubmit={handleSubmit}
      title="Добро пожаловать!"
      buttonTitle="Зарегистрироваться"
      visibility={visibility}
      isValid={isValid}
      buttonSubmitLock={buttonSubmitLock}
      errorSubmit={errorRegister}
    >
      <label className="form__label">
        Имя
        <input
          type="text"
          name="name"
          autoComplete="username"
          className={`form__input ${errors.name ? "form__input_error" : ""}`}
          value={values.name || ""}
          onChange={handleChange}
          minLength={2}
          maxLength={30}
          placeholder="Misha"
          required
        />
        <span className="form__error" id="owner-name-error">
          {errors.name || ""}
        </span>
      </label>
      <label className="form__label">
        E-mail
        <input
          type="email"
          name="email"
          autoComplete="email"
          className={`form__input ${errors.email ? "form__input_error" : ""}`}
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
          autoComplete="new-password"
          className={`form__input ${
            errors.password ? "form__input_error" : ""
          }`}
          value={values.password || ""}
          onChange={handleChange}
          placeholder="password"
          minLength={8}
          maxLength={30}
          required
        />
        <span className="form__error" id="owner-password-error">
          {errors.password || ""}
        </span>
      </label>
    </Form>
  );
}

export default Register;
