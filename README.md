# [React] [Udemy, Oleksandr Kocherhin] React Hooks - Пишем Реальный Проект с Нуля [2019, RUS]

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

Check service:

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

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: <a href="https://jsdev.org/chat/">Telegram or Slack</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Telegram or Slack</a>