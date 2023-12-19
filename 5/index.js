let input = document.querySelector('input')
let tds = document.querySelectorAll('td')
let caps = document.querySelector('#caps')
let isCapsPressed = true;

for (let td of tds) {
    if (td.textContent !== 'Caps lock') {
        td.addEventListener("click", func)
    }
}

caps.addEventListener('click', () => {
    if (isCapsPressed) {
        for (let td of tds) {
            td.removeEventListener('click', func)
            if (td.textContent !== 'Caps lock') {
                td.addEventListener("click", capsFunc)
            }
        }
        isCapsPressed = false
    } else {
        for (let td of tds) {
            td.removeEventListener('click', capsFunc)
            if (td.textContent !== 'Caps lock') {
                td.addEventListener("click", func)
            }
        }
        isCapsPressed = true
    }
})

function capsFunc(){
    input.value += this.textContent.toUpperCase()
}

function func(){
    input.value += this.textContent
}