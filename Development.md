# [Udemy, Oleksandr Kocherhin] React Hooks - Пишем Реальный Проект с Нуля [RUS, 2019]

<br/>

# Разработка по шагам

<br/>

### 004 Создание проекта

    $ npx create-react-app .

<br/>

### 005 Устанавливаем роутер

    $ npm install --save react-router-dom

<br/>

### 006 Добавляем верхнее меню


<br/>

![Application](/img/pic-01.png?raw=true)


<br/>

### 007 Отрисовываем страницу логина

<br/>

![Application](/img/pic-02.png?raw=true)

<br/>

### 008 Use state хук


<br/>

### 009 Use state хук для страницы логина


<br/>

### 010 Use ref

<br/>

### 011 Use effect

<br/>

### 012 Реализуем fetch внутри effect хука

    $ npm install --save axios

<br/>

### 013 Use fetch хук

<br/>

### 014 Создаем use fetch хук

<br/>

### 015 Страница регистрации

**Check service:**

```
$ curl \
  -d '{"user": { "username": "marley1",
        "email":"marley@pochta.ru", 
        "password": "password1"
    }}' \
  -H "Content-Type: application/json" \
  -X POST https://conduit.productionready.io/api/users  \
  | python -m json.tool
```

<br/>

**response**

```
{
    "user": {
        "bio": null,
        "createdAt": "2020-01-03T21:06:41.865Z",
        "email": "marley@pochta.ru",
        "id": 79645,
        "image": null,
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Nzk2NDUsInVzZXJuYW1lIjoibWFybGV5MSIsImV4cCI6MTU4MzI2OTYwMX0.kN3eqBmQQYcgeoqvjJFkrSekBtRO232LFe8KQIiuEsA",
        "updatedAt": "2020-01-03T21:06:41.870Z",
        "username": "marley1"
    }
}
```

<br/>

### 016 Сохраняем токен юзера

<br/>

### 017 Создаем localstorage хук

<br/>

### 018 Exhaustive deps

<br/>

### 019 Контекст текущего юзера

<br/>

### 020 Ошибки валидации

<br/>

![Application](/img/pic-03.png?raw=true)


<br/>

### 021 Получаем текущего юзера

<br/>

### 022 Use callback хук

<br/>

### 023 Улучшаем верхнее меню

<br/>

![Application](/img/pic-04.png?raw=true)

<br/>

### 024 Создаем фид

<br/>

![Application](/img/pic-05.png?raw=true)

<br/>

### 025 Реализуем пагинацию

    $ npm install --save classnames
    $ npm install --save query-string

<br/>

![Application](/img/pic-06.png?raw=true)


<br/>

### 026 Добавляем популярные теги

<br/>

![Application](/img/pic-07.png?raw=true)

<br/>

### 027 Переключение между фидами

<br/>

![Application](/img/pic-08.png?raw=true)


<br/>

### 028 Реализуем фид по тегу

<br/>

![Application](/img/pic-09.png?raw=true)

<br/>

### 029 Реализуем твой фид

<br/>

![Application](/img/pic-10.png?raw=true)

<br/>

### 030 Страница поста

<br/>

![Application](/img/pic-11.png?raw=true)


<br/>

### 031 Use reducer

<br/>

### 032 Форма поста

<br/>

![Application](/img/pic-12.png?raw=true)

<br/>

### 033 Создание поста

<br/>

![Application](/img/pic-13.png?raw=true)

<br/>

### 034 Редактирование поста

<br/>

### 035 Удаление поста

<br/>

### 036 Страница настроек

<br/>

![Application](/img/pic-14.png?raw=true)


<br/>

### 037 Добавляем в избранное

<br/>

![Application](/img/pic-15.png?raw=true)


<br/>

### 038 Профиль пользователя

<br/>

![Application](/img/pic-16.png?raw=true)


<br/>

### 039 Реализуем статьи пользователя

<br/>

![Application](/img/pic-17.png?raw=true)

<br/>

![Application](/img/pic-18.png?raw=true)

<br/>

### 040 Use effect callback

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
