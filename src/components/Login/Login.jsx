import { useState } from "react";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const visibility = (
    <div className="form__navigate-block">
      <p className="form__text">Ещё не зарегистрированы?</p>
      <button
        onClick={() => {
          navigate("/signup");
        }}
        type="button"
        className="form__button-navigate"
      >
        Регистрация
      </button>
    </div>
  );
  return (
    <Form title="Рады видеть!" buttonTitle="Войти" visibility={visibility}>
      <label className="form__label">
        E-mail
        <input type="email" className="form__input" value={email} required />
      </label>
      <label className="form__label">
        Пароль
        <input
          type="password"
          className="form__input"
          value={password}
          minLength={8}
          required
        />
      </label>
    </Form>
  );
}

export default Login;
