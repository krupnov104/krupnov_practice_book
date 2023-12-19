let menus = document.querySelectorAll('.menu a')
let tabs = document.querySelectorAll('.tabs .tab')

for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', (e) => {
        e.preventDefault()

        for (let j = 0; j < menus.length; j++) {
            if (menus[j].classList.contains('active')) {
                menus[j].classList.remove('active')
                tabs[j].classList.remove('active')
            }

        }

        tabs[i].classList.add('active')
        menus[i].classList.add('active')
    })
}