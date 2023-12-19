let button = document.querySelector('#button')

let questions = [
	{
		text:  'вопрос 1?',
		right: 'ответ 1',
	},
	{
		text:  'вопрос 2?',
		right: 'ответ 2',
	},
	{
		text:  'вопрос 3?',
		right: 'ответ 3',
	},
];

for (const object of questions) {
    let div = document.createElement('div')

    let p = document.createElement('p')
    p.textContent = object['text']

    let input = document.createElement('input')

    div.appendChild(p)
    div.appendChild(input)
    document.querySelector('#test').insertBefore(div, button)
}

let inputs = document.querySelectorAll('input')

button.addEventListener('click', e => {
    let counter = 0
    for (const object of questions) {
        if (object['right'] === inputs[counter].value) {
            inputs[counter].classList.remove('wrong')
            inputs[counter].classList.add('right')
        } else {
            inputs[counter].classList.remove('right')
            inputs[counter].classList.add('wrong')
        }

        counter++
    }
});