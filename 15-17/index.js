let field   = document.querySelector('#field');
let message = document.querySelector('#message');
let cities = [];

field.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        let check = cities.filter(city => {
            return city === field.value
        })
        if (check.length > 0) {
            message.textContent = "already used"
        } else {
            let [firstCityLetter, lastUsedCityLetter] = checkedLastFirstLetters(field.value)
            if (firstCityLetter === lastUsedCityLetter) {
                cities.push(field.value)
                console.log(cities)
                field.value = ''
            } else {
                message.textContent = 'different letters'
            }
        }
    }
})

function checkedLastFirstLetters(city) {
    let firstCityLetter = city[0].toLowerCase()

    if (cities.length === 0) {
        return [firstCityLetter, firstCityLetter]
    }
    let lastUsedCity = cities[cities.length - 1]
    let lastUsedCityLetter = lastUsedCity[lastUsedCity.length - 1].toLowerCase()
    if (lastUsedCityLetter === 'ь' || lastUsedCityLetter === 'ы') {
        lastUsedCityLetter = lastUsedCity[lastUsedCity.length - 2].toLowerCase()
    }

    return [firstCityLetter, lastUsedCityLetter]
}
