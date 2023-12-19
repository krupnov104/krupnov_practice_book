let text = document.querySelector('#text')
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let timer_text = document.querySelector('#timer')

let timerId
const predictions = [
    "Если Вы проявите инициативу, успех не заставит себя ждать.",
    "Ваши надежды и планы сбудутся сверх всяких ожиданий.",
    "Готовьтесь к романтическим приключениям.",
    "В этом месяце ночная жизнь для вас.",
    "Вам пора отдохнуть.",
    "Вам предлагается мечта всей жизни. Скажите да!",
    "Вас ждет приятный сюрприз.",
    "Ваши надежды и планы сбудутся сверх всяких ожиданий.",
    "Время – ваш союзник, лучше отложить принятие важного решения хотя бы на день.",
    "Время и терпение,  вас ждут много сюрпризов!"
]

start.addEventListener('click', e => {
    start.classList.remove('active')
    stop.classList.add('active')

    startTimer()
})

stop.addEventListener('click', e => {
    clearInterval(timerId)
    stop.classList.remove('active')

    text.textContent = predictions[timer_text.textContent - 1]
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startTimer() {
    timerId = setInterval(function() {
        let randomInt = getRandomInt(1, 10)

        timer_text.textContent = randomInt
    }, 100)

}