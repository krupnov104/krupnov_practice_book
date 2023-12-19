let table = document.querySelector('#table')
let button = document.querySelector('#button')

let arr = []

let count = 0
for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j < 10; j++) {
        let td = document.createElement('td')
        td.id = count
        count++
        tr.appendChild(td)
    }
    table.appendChild(tr)
}

button.addEventListener('click', () => {
    let elems = document.querySelectorAll('td')
    for (let elem of elems) {
        elem.style.backgroundColor = ''
    }

    while (arr.length < 10) {
        let x = Math.round(Math.random() * 99)
        arr.push(x)
    }

    test()

})

function test() {
    let elems = document.querySelectorAll('td')
    for (let elem of elems) {
        elem.addEventListener('click', () => {
            if (arr.includes(+elem.id)) {
                elem.style.backgroundColor = 'green'
            } else {
                elem.style.backgroundColor = 'red'
            }
        })
    }
}


