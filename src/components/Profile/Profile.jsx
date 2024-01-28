import { useContext, useEffect } from "react";
import "./Profile.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
  handleUpdateUser,
  onSignOut,
  errorProfile,
  dataProfileSaved,
  buttonSubmitProfile,
  values,
  handleChange,
  errors,
  isValid,
  resetForm,
}) {
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({ name: values.name, email: values.email });
  }

  return (
    <main className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <label className="profile__label">
          Имя
          <div className="profile__label-input">
            <input
              type="text"
              name="name"
              className={`profile__input ${
                errors.name ? "profile__input_error" : ""
              }`}
              value={values.name || ""}
              onChange={handleChange}
              minLength={2}
              maxLength={30}
              placeholder="Misha"
              required
            />
            <span className="profile__error" id="owner-name-error">
              {errors.name || ""}
            </span>
          </div>
        </label>
        <label className="profile__label">
          E-mail
          <div className="profile__label-input">
            <input
              type="email"
              name="email"
              className={`profile__input ${
                errors.email ? "profile__input_error" : ""
              }`}
              value={values.email || ""}
              onChange={handleChange}
              placeholder="movies@yandex.ru"
              required
            />
            <span className="profile__error" id="owner-email-error">
              {errors.email || ""}
            </span>
          </div>
        </label>
        <div className="profile__submit-block">
          <span
            className={`profile__error ${
              dataProfileSaved ? "profile__error_color" : ""
            }`}
          >
            {errorProfile || ""}
          </span>
          <button
            type="submit"
            disabled={!isValid || !buttonSubmitProfile}
            className={`profile__submit-button ${
              !isValid || !buttonSubmitProfile
                ? "profile__submit-button_noValid"
                : ""
            }`}
          >
            Редактировать
          </button>
        </div>

        <button
          onClick={onSignOut}
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
