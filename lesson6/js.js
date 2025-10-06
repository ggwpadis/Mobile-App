// Массив пользователей (6 штук для примера)
const users = [
    {
        login: "john@example.com",
        password: "pass123",
        name: "John Doe"
    },
    {
        login: "alice@example.com",
        password: "secret456",
        name: "Alice Smith"
    },
    {
        login: "bob@demo.com",
        password: "demo789",
        name: "Bob Johnson"
    },
    {
        login: "eva@test.com",
        password: "test101",
        name: "Eva Brown"
    },
    {
        login: "mike@ex.com",
        password: "mike202",
        name: "Mike Wilson"
    },
    {
        login: "sara@sample.com",
        password: "sara303",
        name: "Sara Davis"
    }
];

// Обработка формы
const form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Поиск пользователя с помощью find
    const user = users.find(u => u.login === email && u.password === password);

    if (user) {
        alert(`Добро пожаловать, ${user.name}! Авторизация успешна.`);
    } else {
        alert('Ошибка: Неверный логин или пароль. Попробуйте снова.');
    }
});