let arr  = ['Belarus', 'Belgium', 'Bulgaria']

let input = document.querySelector('#elem')
let ul = document.querySelector('#list')

input.addEventListener('input', () => {

    clear()
    let filterArr

    if (input.value) {
        filterArr = arr.filter(elem => {
            return elem.startsWith(input.value)
        })
    }

    if (filterArr) {
        for (const city of filterArr) {
            let li = document.createElement('li')
            li.textContent = city;

            li.addEventListener('click', e => {
                clear()
                input.value = city;
            })

            ul.appendChild(li)
        }
    }

})

function clear() {
    let li = document.querySelectorAll('li')
    li.forEach(item => {
        item.remove()
    })
}