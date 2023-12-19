let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {

        let li = document.createElement('li');
        let task = document.createElement('span');

        task.classList.add('task');
        task.textContent = this.value;

        task.addEventListener('dblclick', function() {

            let input2 = document.createElement('input')

            input2.textContent = task.textContent
            task.textContent = ''
            li.insertBefore(input2, remove)

            input2.addEventListener('keypress', e => {
                if (e.key === 'Enter') {
                    input2.remove()
                    task.textContent = input2.value
                }
            })
        });
        li.appendChild(task);

        let remove = document.createElement('span');
        remove.classList.add('remove');
        remove.textContent = 'удалить';
        remove.addEventListener('click', function () {
            li.remove()
        });
        li.appendChild(remove);

        let done = document.createElement('span');
        done.classList.add('mark');
        done.textContent = 'сделано';
        done.addEventListener('click', function() {
            task.classList.toggle('done')
        });
        li.appendChild(done);


        list.appendChild(li);
        this.value = '';
    }
});