import { useState } from "react";
import "./Profile.css";

function Profile({ nameUser }) {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <section className="profile">
      <form className="profile__form">
        <h2 className="profile__title">Привет, {nameUser}!</h2>
        <label className="profile__label">
            Имя
            <input type="text" className="profile__input" value={name} required/>
        </label>
        <label className="profile__label">
            E-mail
            <input type="email" className="profile__input" value={email} required/>
        </label>
        <button type="submit" className="profile__submit-button">Редактировать</button>
        <button type="button" className="profile__exit-button">Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;
