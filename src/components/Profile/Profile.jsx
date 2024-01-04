import { useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile({ nameUser }) {
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <main className="profile">
      <form className="profile__form">
        <h1 className="profile__title">Привет, {nameUser}!</h1>
        <label className="profile__label">
          Имя
          <input
            type="text"
            className="profile__input"
            value={name}
            minLength={2}
            maxLength={30}
            placeholder="Misha"
            required
          />
        </label>
        <label className="profile__label">
          E-mail
          <input
            type="email"
            className="profile__input"
            value={email}
            placeholder="movies@yandex.ru"
            required
          />
        </label>
        <button type="submit" className="profile__submit-button">
          Редактировать
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          type="button"
          className="profile__exit-button"
        >
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}

export default Profile;
