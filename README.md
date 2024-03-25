<h1 align="center">Дипломный проект: "Movies Explorer" (backend)</h1>

<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ul>
      <li><a href="#description">Описание проекта</a></li>
      <li><a href="#tech">Стек технологий</a></li>
      <li><a href="#test">Установка и запуск приложения для тестирования</a></li>
      <li><a href="#function">Функционал</a></li>
      <li><a href="#tasks">Задачи</a></li>
    </ul>
  </details>
</a>

<a name="description"><h2>1. Описание проекта</h2></a>
Проект "Movies Explorer" – это приложение, разработанное для удобного поиска и просмотра фильмов, представленных на международном фестивале документального кино <a href="https://beatfilmfestival.ru/">"Beat Film Festival"</a>. Создан в рамках образовательной программы от <a href="https://practicum.yandex.ru/">Яндекс Практикума</a>, этот дипломный проект представляет собой отзывчивое и адаптивное веб-приложение (SPA). Фронтенд, основанный на "React", обеспечивает плавный и интерактивный пользовательский опыт, а бекенд, построенный на "Express", гарантирует надежность и эффективность обработки запросов.

<h3>Ссылки на проект:</h3>
<b>IP:</b> 84.201.131.226
<br>
<b>Frontend:</b> https://movie.dekolpakov.nomoredomainsmonster.ru
<br>
<b>Backend:</b> https://api.movie.dekolpakov.nomoredomainsmonster.ru
<br>
<b>Макет:</b> https://www.figma.com/file/Roao64fwj74ELrakz3g0YV/Movies-explorer?type=design&node-id=1%3A3&mode=dev

<a name="tech"><h2>2. Стек технологий</h2></a>

<div align="center">
<img width="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/>

<img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>

<img width="50" src="https://user-images.githubusercontent.com/25181517/183345125-9a7cd2e6-6ad6-436f-8490-44c903bef84c.png" alt="Nginx" title="Nginx"/>

<img width="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB"/>

<img width="50" src="https://user-images.githubusercontent.com/25181517/192158606-7c2ef6bd-6e04-47cf-b5bc-da2797cb5bda.png" alt="bash" title="bash"/>

<img width="50" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" alt="Postman" title="Postman"/>
</div>

<a name="test"><h2>3. Установка и запуск приложения для тестирования</h2></a>

1. `git clone git@github.com:DeKolpakov/movies-explorer-api.git` - клонировать репозиторий backend
2. `npm ci` - установить необходимые зависимости
3. `npm run dev` - запустить backend часть приложения (по умолчанию порт 3000)
4. `./utils/movie-api.postman_collection.json` - файл с коллекцией Postman для тестирования запросов
5. Для полноценной работы на сервере, нужно вручную создать файл .env в корневой директории 

<a name="function"><h2>4. Функционал</h2></a>

- Регистрация и авторизация пользователей
- Редактированием личных данных пользователя
- Валидация данных на стороне сервера
- Получение данных стороннего API
- Сохранение/Удаление данных в mongoDB

<a name="tasks"><h2>5. Задачи</h2></a>

Задачи проекта были разделены на 3 этапа:

1. Создание backend части приложения Node.js
2. Валидация ошибок
3. Ручное тестирование запросов с помощью Postman
