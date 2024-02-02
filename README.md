# Cервис Movies Explorer для поиска фильмов

# Стек
- React
- JavaScript
- express
- mongoBD

# Функциональность
- Сервис позволяет искать фильмы по ключевому слову. При успешном поиске карточки с фильмами отрисовываются на главной странице. Если фильмов по ключевому слову нет, пользователь видит сообщение "Ничего не найдено".
- Реализована регистрация и авторизация пользователя.
- Зарегистрированному пользователю доступна возможность сохранять фильмы в свою подборку.
- Зарегистрированному пользователю доступна страница "Сохранённые фильмы", на которой отрисовываются карточки с сохранёнными фильмами, количество сохранённых фильмов и ключевые слова, по которым он искал фильмы.
- Пользователь может удалять сохранённый фильм из своего списка.

# Директория backend
- /models – папка со схемами и моделями пользователя и карточки
- /routes — папка с файлами роутера
- /errors – папка с модулями ошибок
- /controllers – папка с контроллерами
- /middlewares – папка с мидлварами

# Директория frontend/src
- /components — папка с компонентами React
- /contexts – папка с контекстом user
- /images – папка с изображениями
- /utils - папка с утилитами
- /vendor- папка с модулями и с шрифтами


# Pull Request: https://github.com/VerMishel27/movies-explorer-frontend/pull/2

# Frontend https://movies-web.nomoredomainsmonster.ru