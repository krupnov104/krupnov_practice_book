let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let info = calendar.querySelector('.info')
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');

init(body, year, month, info)

prev.addEventListener('click', function() {
    month--

    clearTable(body)
	init(body, year, month, info);
});

next.addEventListener('click', function() {
    month++

    clearTable(body)
	init(body, year, month, info);
});

function init(body, year, month, info) {
    let arr = range(getLastDay(year, month));

    let firstWeekDay = getFirstWeekDay(year, month);
    let lastWeekDay = getLastWeekDay(year, month);

    let nums = chunk(format(arr, firstWeekDay, 6 - lastWeekDay), 7);
    createTable(body, nums)

    editTitle(info, year, month)
}

function range(count) {
    let arr = []
    for (let i = 1; i <= count; i++) {
        arr.push(i)
    }
    return arr
}

function getLastDay(year, month) {
    return new Date(year, month + 1, 0).getDate()
}

function getFirstWeekDay(year, month) {

    let indexOfFirstDay = 0
    let firstDay = new Date(year, month, 1).getDay()

    if (firstDay === 0) {
        indexOfFirstDay = 6;
    } else {
        indexOfFirstDay = firstDay - 1
    }

    return indexOfFirstDay
}

function getLastWeekDay(year, month) {

    let indexOfLastDay = 0
    let lastDay = new Date(year, month + 1, 0).getDay()

    if (lastDay === 0) {
        indexOfLastDay = 6;
    } else {
        indexOfLastDay = lastDay - 1
    }

    return indexOfLastDay
}

function format(arr, left, right) {

    let new_arr = arr.slice()

    for (let i = 0; i < left; i++) {
        new_arr.unshift('')
    }

    for (let j = 0; j < right; j++) {
        new_arr.push('')
    }

    return new_arr
}

function chunk(arr, n) {

    let arrLen = arr.length

    for (let i = 0; i < arrLen / n; i++) {
        arr.push(arr.splice(0, n))
    }
    return arr
}

function createTable(parent, arr) {

    for (const row of arr) {
        let tr = document.createElement('tr')
        for (const element of row) {
            let td = document.createElement('td')
            td.textContent = element
            tr.appendChild(td)
        }
        parent.appendChild(tr)
    }
}

function editTitle(info, year, month) {

    let monthsArray = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];
    let relevantDate = new Date(year, month, 1)
    let relevantYear = relevantDate.getFullYear()
    let relevantMonth = relevantDate.getMonth()

    info.textContent = `${monthsArray[relevantMonth]} ${relevantYear}`
}

function clearTable(body) {

    let Trs = body.querySelectorAll('tr')

    for (const tr of Trs) {
        tr.remove()
    }
}