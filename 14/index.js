let tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        if (!tab.classList.contains('active')) {

            for (let tab of tabs) {
                if (tab.classList.contains('active')) {
                    tab.classList.remove('active')
                }
            }

            tab.classList.toggle('active')
        } else {
            tab.classList.toggle('active')
        }
    })
});