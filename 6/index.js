let ul = document.createElement('ul')
let months = ["Январь", "Февраль", "Март", "Апрель", 'Май', "Июнь", "Июль", "Август", 'Сентябрь', "Октябрь", "Ноябрь", "Декабрь"]
let div = document.createElement('div')
document.body.appendChild(div)
document.body.appendChild(ul)

main()

function main() {
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear()
    let days = new Date(year, month, 0).getDate()
    let count = month

    let today = new Date().getDate()

    d(days, today)

    let left = document.createElement('button')
    left.textContent = 'назад'

    let right = document.createElement('button')
    right.textContent = 'вперед'

    left.addEventListener('click', (e) => {
        e.preventDefault()
        month -= 1
        if (month === 0) {
            year -= 1
            month = 12
        }
        h2.textContent = months[month-1] + " " + year
        days = new Date(year, month, 0).getDate()
        d(days, today)
    })

    right.addEventListener('click', (e) => {
        e.preventDefault()
        month += 1
        if (month === 13) {
            year += 1
            month = 1
        }
        h2.textContent = months[month-1] + " " + year
        days = new Date(year, month, 0).getDate()
        d(days, today)
    })

    let h2 = document.createElement('h2')
    h2.textContent = months[month-1] + " " + year

    div.appendChild(left)
    div.appendChild(h2)
    div.appendChild(right)

}


function d(days, today) {
    let lis = document.querySelectorAll('li')
    for (let li of lis) {
        li.remove()
    }
    for (let i = 1; i <= days; i++) {
        let li = document.createElement('li')
        li.textContent = i
        if (i === today) {
            li.style.color = 'red'
        }
        ul.appendChild(li)
    }
}
