// Объект с описанием
const myProfile = {
    name: 'Name',
    age: 25,
    city: 'SPB',
    profession: 'dev',
    hobbies: ['reading', 'traveling', 'photography'],
    familyStatus: false,
    education: 'high',
    contacts: {
        email: 'example@example.com',
        phone: '+7 (777) 777-77-77'
    },
    languages: ['russian', 'english'],
    skills: {
        programming: ['JavaScript', 'Python', 'HTML', 'CSS'],
        software: ['Photoshop', 'VS Code', 'Git']
    }
};

console.log(myProfile);

// Объект с методом приветствия
const person = {
    name: "Ivan",
    greeting(name) {
        return `Hello "${name}"`;
    }
};

console.log(person.greeting("Anna"));

// Массив объектов с информацией о пользователях
const users = [
    {
        name: 'Иван',
        age: 25,
        isAdmin: true      // Пользователь является администратором
    },
    {
        name: 'Мария',
        age: 30,
        isAdmin: false     // Обычный пользователь
    },
    {
        name: 'Алексей',
        age: 28,
        isAdmin: false     // Обычный пользователь
    },
    {
        name: 'Елена',
        age: 35,
        isAdmin: true      // Пользователь является администратором
    },
    {
        name: 'Дмитрий',
        age: 22,
        isAdmin: false     // Обычный пользователь
    }
];

// Переменная для подсчета количества обычных пользователей
let regularUsers = 0;

// Цикл для перебора всех пользователей в массиве
for (let user of users) {
    // Проверяем, является ли пользователь НЕ администратором
    if (!user.isAdmin) {
        regularUsers++; // Увеличиваем счетчик на 1
    }
}

console.log(`Number of regular users: ${regularUsers}`);

