let form = document.querySelector('.form')
let button = document.getElementById('generate')
let p = document.getElementById('horoscope')

const horoscopes = {
    today: {
        Овен: "Гороскоп для Овна на сегодня...",
        Телец: "Гороскоп для Тельца на сегодня...",
        Близнецы: "Гороскоп для Близнецов на сегодня...",
        Рак: "Гороскоп для Рака на сегодня...",
        Лев: "Гороскоп для Льва на сегодня...",
        Дева: "Гороскоп для Девы на сегодня...",
        Весы: "Гороскоп для Весов на сегодня...",
        Скорпион: "Гороскоп для Скорпиона на сегодня...",
        Стрелец: "Гороскоп для Стрельца на сегодня...",
        Козерог: "Гороскоп для Козерога на сегодня...",
        Водолей: "Гороскоп для Водолея на сегодня...",
        Рыбы: "Гороскоп для Рыб на сегодня..."
    },
    tomorrow: {
        Овен: "Гороскоп для Овна на завтра...",
        Телец: "Гороскоп для Тельца на завтра...",
        Близнецы: "Гороскоп для Близнецов на завтра...",
        Рак: "Гороскоп для Рака на завтра...",
        Лев: "Гороскоп для Льва на завтра...",
        Дева: "Гороскоп для Девы на завтра...",
        Весы: "Гороскоп для Весов на завтра...",
        Скорпион: "Гороскоп для Скорпиона на завтра...",
        Стрелец: "Гороскоп для Стрельца на завтра...",
        Козерог: "Гороскоп для Козерога на завтра...",
        Водолей: "Гороскоп для Водолея на завтра...",
        Рыбы: "Гороскоп для Рыб на завтра..."
    },
    dayAfterTomorrow: {
        Овен: "Гороскоп для Овна на послезавтра...",
        Телец: "Гороскоп для Тельца на послезавтра...",
        Близнецы: "Гороскоп для Близнецов на послезавтра...",
        Рак: "Гороскоп для Рака на послезавтра...",
        Лев: "Гороскоп для Льва на послезавтра...",
        Дева: "Гороскоп для Девы на послезавтра...",
        Весы: "Гороскоп для Весов на послезавтра...",
        Скорпион: "Гороскоп для Скорпиона на послезавтра...",
        Стрелец: "Гороскоп для Стрельца на послезавтра...",
        Козерог: "Гороскоп для Козерога на послезавтра...",
        Водолей: "Гороскоп для Водолея на послезавтра...",
        Рыбы: "Гороскоп для Рыб на послезавтра..."
    }
}

button.addEventListener('click', e => {
    let checkedCheckbox = 'today'

    form.day.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCheckbox = checkbox.value
        }
    });

    let birthdateValue = form.birthdate.value
    let sign = null

    if (birthdateValue) {
        sign = getSign(new Date(birthdateValue))
    }

    let horoscope = horoscopes[checkedCheckbox][sign]
    if (horoscope) {
        p.textContent = horoscope
    } else {
        p.textContent = 'not found'
    }
})

function getSign(birthdate) {

    let day = birthdate.getDate();
    let month = birthdate.getMonth() + 1;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Овен";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Телец";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Близнецы";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Рак";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Лев";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Дева";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Весы";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Скорпион";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Стрелец";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Козерог";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Водолей";
    } else {
        return "Рыбы";
    }
}