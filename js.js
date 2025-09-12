// 1. Объект со студентом
let student = {
    firstName: "Адис",
    lastName: "Зарылбеков",
    group: "POVT-21",
    currentMonth: 12,
    isGraduate: false,
    direction: "Программное обеспечение",
    monthsCompleted: 11
};

console.log("Информация о студенте:");
console.log("Имя:", student.firstName);
console.log("Фамилия:", student.lastName);
console.log("Группа:", student.group);
console.log("Направление:", student.direction);
console.log("");

// 2. Объект банковского счёта
let bankAccount = {
    accountNumber: "KG1234567890",
    currency: "KGS",
    balance: 15000.75,
    ownerName: "Адис Зарылбеков",
    isBlocked: false
};

console.log("Информация о банковском счёте:");
console.log("Номер счёта:", bankAccount.accountNumber);
console.log("Валюта:", bankAccount.currency);
console.log("Баланс:", bankAccount.balance);
console.log("Владелец:", bankAccount.ownerName);
console.log("");

// 3. Программа приветствия
let user_name = prompt("Введите имя: ");
let user_surname = prompt("Введите фамилию: ");
if (user_name !== null && user_surname !== null) {
    alert(`Здравствуйте, ${user_name} ${user_surname}!`);
    console.log(`Здравствуйте, ${user_name} ${user_surname}!`);
} else {
    console.log("Ввод имени или фамилии отменён.");
}

// 4. Сравнение двух чисел
let number1 = Number(prompt("Введите первое число"));
let number2 = Number(prompt("Введите второе число"));

if (number1 > number2) {
    console.log("Первое число больше второго");
} else if (number1 < number2) {
    console.log("Второе число больше первого");
} else {
    console.log("Числа равны");
}

// 5. Программа "Светофор"
var color = prompt("СВЕТОФОР. Выберите цвет: красный, жёлтый или зелёный").toLowerCase();

if (color === "красный") {
    console.log("Стой!");
} else if (color === "жёлтый") {
    console.log("Жди!");
} else if (color === "зелёный") {
    console.log("Иди!");
} else {
    console.log("Неизвестный цвет");
}

// 6. Программа "Конвертер чисел" (в римские)
function toRoman(num) {
    if (!Number.isInteger(num) || num < 1 || num > 3999) {
        return "Ошибка: введите целое число от 1 до 3999!";
    }

    const romanValues = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = "";
    for (let { value, numeral } of romanValues) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}

while (true) {
    let input = prompt("Введите число от 1 до 3999 или 'exit' для выхода: ");

    if (input === null || input.toLowerCase().trim() === "exit") {
    console.log("Программа завершена.");
    break;
}

    let number = Number(input);
    if (isNaN(number) || !Number.isInteger(number)) {
        console.log("Ошибка: введите целое число!");
        continue;
    }

    console.log(toRoman(number));
}