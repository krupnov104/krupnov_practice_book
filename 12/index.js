let links = document.querySelectorAll('.toggle')

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        let spoiler = link.parentElement.nextElementSibling

        if (spoiler) {
            spoiler.classList.toggle('active')
        }

    })
})