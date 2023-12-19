let rows = 3;
let cols = 3;
let table = document.querySelector('#field')
let colors = ['red', 'green', 'blue'];
let steps = 0

createStepsCounter(steps, table)
createTableRows(table, rows, cols)

function createTableRows(table, rows, cols) {
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')

        for (let j = 0; j < cols; j++) {

            let td = document.createElement('td')

            randomColor(td, colors)

            td.addEventListener('click', e => {
                steps++

                updateStepsCounter(steps)
                changeColor(table, td, colors)
                isVictory(table, td)
            })

            tr.appendChild(td)
        }

        table.appendChild(tr)
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor(td, colors) {

    let randomColor = colors[getRandomInt(0, 2)]

    td.classList.add(randomColor)
}

function changeColor(table, td, colors) {

    let indexOfColor = colors.indexOf(td.classList[0])
    td.classList.remove(td.classList[0])

    let newColor = colors[(indexOfColor + 1) % colors.length]
    td.classList.add(newColor)
}

function isVictory(table, curTd) {

    let Tds = table.querySelectorAll('td')
    let counter = 0

    for (const td of Tds) {
        if (curTd.classList[0] === td.classList[0]) {
            counter++
        }
    }
    
    if (counter === 9) {
        alert('Вы выиграли!')
    }
}

function createStepsCounter(steps) {

    let wrapper = document.querySelector('.wrapper')
    let table_wrapper = document.querySelector('.table__wrapper')
    let p = document.createElement('p')

    p.textContent = `Количество шагов: ${steps}`
    wrapper.insertBefore(p, table_wrapper)
}

function updateStepsCounter(steps){

    let p = document.querySelector('p')

    p.textContent = `Количество шагов: ${steps}`
}