class MoviesApi {
  constructor(config) {
    this._url = config.url;
  }

  #onResponce(res) {
    return res.ok
      ? res.json()
      : res.json().then((errData) => Promise.reject(errData));
  }

  getInitialMovies() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(this.#onResponce);
  }

  searchMovies() {
    // const token = localStorage.getItem("jwt");
    return fetch(`${this._url}`, {
      headers: {
        // authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(this.#onResponce);
  }
}

const configApi = {
  url: 'https://api.nomoreparties.co/beatfilm-movies/',
};

const moviesApi = new MoviesApi(configApi);
export default moviesApi;

// ?query=${searchMovies}&per_page=16
