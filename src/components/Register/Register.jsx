import { useState } from "react";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const visibility = (
    <div className="form__navigate-block">
      <p className="form__text">Уже зарегистрированы?</p>
      <button onClick={() => {
        navigate("/signin")
      }} type="button" className="form__button-navigate">
        Войти
      </button>
    </div>
  );
  return (
    <Form
      title="Добро пожаловать!"
      buttonTitle="Зарегистрироваться"
      visibility={visibility}
    >
      <label className="form__label">
        Имя
        <input type="text" className="form__input" value={name} required />
      </label>
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

export default Register;
