let name = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');

function createCell(tr, value, name) {
    let td = document.createElement('td');
    td.textContent = value;
    td.classList.add(name);
    tr.appendChild(td);

    return td
}

function recountTotal() {
    let costs = table.querySelectorAll('.cost');

    if (costs) {
        let sum = 0;
        costs.forEach(element => {
            sum += parseInt(element.textContent);
        });

        total.textContent = sum;
    }
}

function allowEdit(td) {
    td.addEventListener('dblclick', function () {
        let inner_input = document.createElement('input')
        inner_input.textContent = td.textContent
        td.textContent = ''
        this.appendChild(inner_input)

        inner_input.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                td.textContent = inner_input.value

                if (td.classList.contains('price') || td.classList.contains('amount')) {
                    let tr = td.parentElement;
                    let price = tr.querySelector('.price');
                    let amount = tr.querySelector('.amount');
                    let cost = tr.querySelector('.cost');

                    cost.textContent = price.textContent * amount.textContent;

                    recountTotal();
                }
            }
        })
    });
}


add.addEventListener('click', function () {
    let tr = document.createElement('tr');

    name_td = allowEdit(createCell(tr, name.value, 'name'));
    price_td = allowEdit(createCell(tr, price.value, 'price'));
    amount_td = allowEdit(createCell(tr, amount.value, 'amount'));
    cost_td = createCell(tr, price.value * amount.value, 'cost');
    remove_td = createCell(tr, 'удалить', 'remove');

    table.appendChild(tr);
    recountTotal();

    remove_td.addEventListener('click', function () {
        tr.remove()
        recountTotal();
    });

});

function updateCost() {
    const price = parseFloat(price_td.textContent);
    const amount = parseFloat(amount_td.textContent);
    const cost = price * amount;
    cost_td.textContent = cost.toFixed(2);
    recountTotal();
}

price_td.addEventListener('input', updateCost);
amount_td.addEventListener('input', updateCost);