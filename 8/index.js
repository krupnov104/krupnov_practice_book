let input = document.querySelector('#input')
let table = document.querySelector('#table')
let map = new Map()
let year
map.set(
    '2000',
    [
        {
            date: '20.01.2000',
            title: 'День рождения',
            description: 'Праздник'
        },
        {
            date: '31.12.2000',
            title: 'НГ',
            description: 'Новый Год'
        },
    ]
)

map.set(
    '2001',
    [
        {
            date: '1.09.2001',
            title: 'Праздник',
            description: '1 Сентября'
        },
        {
            date: '23.02.2001',
            title: 'Праздник',
            description: '23 Февраля'
        },
    ]
)

map.set(
    '2002',
    [
        {
            date: '21.01.2002',
            title: 'test',
            description: 'something'
        },
        {
            date: '22.01.2002',
            title: 'test',
            description: 'something'
        },
        {
            date: '23.01.2002',
            title: 'test',
            description: 'something'
        },
    ]
)

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        year = input.value
        if (map.has(year)) {
            display(year)
        }
    }
})

function display(year) {
    let obj = map.get(year)

    for (let data of obj) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.textContent = data.date

        let td2 = document.createElement('td')
        td2.textContent = data.title

        let td3 = document.createElement('td')
        td3.textContent = data.description

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        table.appendChild(tr)
    }
}
